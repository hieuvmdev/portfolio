import { socialLinks } from '@/lib/content/portfolio';
import { SocialSectionType } from '@/lib/types/sections';

// facebook: 'https://www.facebook.com/vuminh.hieu.10/',
// // instagram: '',
// // twitter: '',
// // github: '',
// linkedin: 'https://www.linkedin.com/in/hieuvm/',
// skype: 'https://join.skype.com/invite/YIF9v4R82Jip',
// telegram: 'https://t.me/hieuvmdev',
// discord: 'https://discord.com/users/hieuvu3657',

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'ri:discord-line',
      url: socialLinks.discord,
    },
    {
      icon: 'iconoir:telegram',
      url: socialLinks.telegram,
    },
    {
      icon: 'teenyicons:skype-outline',
      url: socialLinks.skype,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
    {
      icon: 'lucide:facebook',
      url: socialLinks.facebook,
    },
  ],
};
