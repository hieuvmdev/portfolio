'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, my name is Hieu Vu,  a Senior Unity Developer with 7+ year of
            experience designing and building innovative,
            immersive applications and games.  I bring a
            strong combination of technical expertise and
            creative problem-solving skills to deliver
            high-quality projects.
            .<br /> I can word on both front-end and back-end development and blockchain intergration. I can fast learning new technology and new programming language.
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at {' '}
            <Link
              href="https://pipeflare.io/"
              target="_blank"
              className="text-accent"
            >
              Pipeflare
            </Link>
            .
          </p>
          <p>
            I have experience mentoring developers,
            project management, code reviews
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
