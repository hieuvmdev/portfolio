import { NavbarSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/portfolio/#about' },
    { name: 'skills', url: '/portfolio/#skills' },
    { name: 'experience', url: '/portfolio/#experience' },
    { name: 'projects', url: '/portfolio/#projects' },
    { name: 'contact', url: '/portfolio/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};
