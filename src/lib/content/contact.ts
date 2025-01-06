import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "Can't wait to hear from you!",
  paragraphs: [
    'I’m actively seeking remote job opportunities or exciting new challenges.',
    'Feel free to reach out—whether you have a project to discuss or simply want to connect, my inbox is always open!"',
  ],
  link: `mailto:${author.email}`,
};
