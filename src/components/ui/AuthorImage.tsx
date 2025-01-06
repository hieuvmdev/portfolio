import Image from 'next/image';

type Props = { src: string; alt: string };

const AuthorImage = ({ src, alt }: Props) => {
  return (
    <div className="relative w-64 h-64 group sm:w-auto sm:h-auto">
      <Image
        src={src}
        alt={alt}
        width={200}
        height={200}
        className="rounded shadow-xl"
      />
      <div className="absolute inset-0 border-[3px] z-[-1] rounded-full border-accent group-hover:translate-x-4 group-hover:translate-y-4 duration-150 hidden sm:block"></div>
    </div>
  );
};

export default AuthorImage;
