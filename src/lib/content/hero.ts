import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Hieu vu.',
  tagline: 'I\'m a Senior Game Developer specializing in Unity, backend development, and blockchain integration.',
  description:
    "I'm a Senior Game Developer with over 7 years of experience. I bring a strong combination of technical expertise and creative problem-solving skills to deliver high-quality projects. I have experience mentoring developers, project management, code reviews",
  specialText: 'Open to remote opportunities and ready to contribute!',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
