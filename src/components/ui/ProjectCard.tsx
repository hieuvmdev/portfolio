'use client';
import { ProjectType } from '@/lib/types';
import { blurImageURL } from '@/lib/utils/config';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

const ProjectCard = ({
  name,
  url,
  year,
  img,
  desktop,
  telegram,
  ios,
  video,
  android,
  tags,
  ...rest
}: ProjectType & MotionProps) => {
  // To avoid hydration failed error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <motion.div {...rest} className="w-full max-w-[350px]">
      <button
        onClick={(e) => {
          // Don't run this if the clicked target is an anchor element
          if ((e.target as HTMLElement).closest('a')) return;
          if (url == undefined || url == '') return;
          window.open(url);
        }}
        className="block w-full overflow-hidden transition-all duration-200 rounded-md shadow-xl group bg-bg-secondary dark:shadow-2xl"
      >
        <div className="overflow-hidden h-[200px]">
          {
            video != undefined ? (
              <YouTube
                videoId={video}
                opts={{
                  width: '100%',
                  height: '200',
                  playerVars: {
                    autoplay: 0,
                    modestbranding: 1,
                  },
                }}
                className="w-full h-full"
              />
            ) :
              <Image
                src={img || '/default-image.jpg'}
                alt={name}
                width={300}
                height={300}
                placeholder="blur"
                blurDataURL={blurImageURL}
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110 group-focus:scale-110"
              />
          }

        </div>
        <div className="p-4 py-3 space-y-1">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs capitalize">{tags.join(' | ')}</p>
            <div className="flex items-center space-x-1.5">
              {desktop == undefined ? null :
                <a
                  href={desktop}
                  className="block duration-200 hover:text-accent"
                  target="_blank"
                >
                  <Icon icon="file-icons:webgl" width={20} height={20} />
                </a>
              }
              {
                ios == undefined ? null : <a
                  href={ios}
                  className="block duration-200 hover:text-accent"
                  target="_blank"
                >
                  <Icon icon="material-symbols:ios-rounded" width={20} height={20} />
                </a>
              }
              {
                android == undefined ? null : <a
                  href={android}
                  className="block duration-200 hover:text-accent"
                  target="_blank"
                >
                  <Icon icon="material-symbols:android" width={20} height={20} />
                </a>
              }
              {
                telegram == undefined ? null : <a
                  href={telegram}
                  className="block duration-200 hover:text-accent"
                  target="_blank"
                >
                  <Icon icon="ri:telegram-line" width={20} height={20} />
                </a>
              }
              {
                url == undefined ? null : <a
                  href={url}
                  className="block duration-200 hover:text-accent"
                  target="_blank"
                >
                  <Icon icon="ci:external-link" width={22} height={22} />
                </a>
              }
            </div>
          </div>
          <h4 className="flex justify-between font-medium capitalize duration-200 group-hover:text-accent">
            <span>{name}</span>
            <span className="mr-1">{year}</span>
          </h4>
        </div>
      </button>
    </motion.div>
  ) : (
    <></>
  );
};

export default ProjectCard;
