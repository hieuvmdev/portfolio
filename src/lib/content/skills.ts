import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'Professional Skills',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/portfolio/lotties/frontend.json',
        dark: '/portfolio/lotties/frontend-dark.json',
      },
      points: [
        'Developing games with Unity and C#, Integrating blockchain, and maintaining services',
        'Developing Blockchain games with Unity and Solidity',
        'Developing backend services with Laravel and Node.js',
        'Developing multiplayer games with Photon and Playfab',
        'Developing chatbot with Telegram',
        'App deployment on Google Play and App Store',
        'App Manager for managing games',
        'Code reviews, mentoring, and project management',
        'Solid experience in developing and maintaining services',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'unity', icon: 'skill-icons:unity-light' },
        { name: 'laravel', icon: 'skill-icons:laravel-light' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'photon', icon: 'devicon:photonengine' },
        { name: 'firebase', icon: 'logos:firebase' },
        { name: 'telegram', icon: 'logos:telegram' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'solidity', icon: 'skill-icons:solidity' },
        { name: 'lua', icon: 'skill-icons:lua-dark' },
        { name: 'reactjs', icon: 'logos:react' },
        // { name: 'angularjs', icon: 'logos:angular-icon' },
        { name: 'github', icon: 'skill-icons:github-light' },
        { name: 'bitbucket', icon: 'skill-icons:bitbucket-light' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' }
      ],
    },
    {
      id: getId(),
      title: 'Soft Skills',
      lottie: {
        light: '/portfolio/lotties/designing.json',
        dark: '/portfolio/lotties/designing-dark.json',
      },
      points: [
        'Fast learning new technology and new programming language',
        'Creative problem-solving skills',
        'Leadership and mentoring',
        'Teamwork and collaboration',
        'Effective communication',
        'Adaptability',
        'Time management',
        'Critical thinking',
        'Attention to detail',
      ],
      softwareSkills: [
        { name: 'learning', icon: 'iconoir:learning' },
        { name: 'leadership', icon: 'fluent-mdl2:party-leader' },
        { name: 'problem solving', icon: 'icon-park-solid:thinking-problem' },
      ],
    },
  ],
};
