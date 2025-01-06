import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'Pipeflare Games',
      description: 'PipeFlare Games is a platform that provides free-to-play blockchain games, leveraging cryptocurrency and NFTs for gaming rewards',
      tasks:
        "As a Game Developer Leader, I led a team of 4 developers, planned project milestones, worked on both back-end (BE) and front-end (FE) development to define and implement the game architecture",
      url: 'https://pipeflare.io/all-games',
      img: '/portfolio/projects/pipeflare-games.png',
      video: '404',
      tags: [
        'Unity',
        'Solidity',
        'Laravel',
        'Metamask',
        'Playfab',
        'Telegram',
        'Blockchain',
        'App Manager'
      ],
    },
    {
      id: getId(),
      name: 'Pyro Mining Rush',
      description:
        'Pyro Mining Rush is one of the blockchain-based games. It is a ultimate platformer game that blends treasure hunting, enemy battles, and NFT collection',
      tasks:
        'As a Game Development Leader, I managed a team of four developers, overseeing the planning and execution of projects. I was responsible for writing detailed reports to the CEO, providing updates on project progress and key milestones. My role encompassed both back-end (BE) and front-end (FE) development, as well as integrating Web3 and Playfab into the project, ensuring seamless connectivity, user engagement, and data management.',
      url: 'https://pipeflare.io/game/pyro-mining',
      img: '/portfolio/projects/pmr.jpg',
      video: 'K1qShIjoMzE',
      tags: [
        'Unity',
        'Solidity',
        'Laravel',
        'Metamask',
        'Playfab',
        'Telegram',
        'Blockchain',
        'App Manager',
        'Mobile SDK',
        'Google Play',
        'App Store',
      ],
    },
    {
      id: getId(),
      name: 'Art Story: Jigsaw Art Puzzle',
      description: 'A puzzle game where players can solve jigsaw puzzles using beautiful works of art.',
      tasks:
        'As a freelance developer, I was responsible for developing the game from scratch, including the game mechanics, UI/UX design, and integration of Firebase for data storage and retrieval. I also implemented in-app purchases and ads to monetize the game.',
      url: 'https://play.google.com/store/apps/details?id=yomi.studio.art.story.picture.novels.puzzle.free.art.games&hl=en',
      img: '/portfolio/projects/artstory.webp',
      video: 'LaVPRBg6M4w',
      tags: ['Unity', "C#", 'Firebase'],
    },
    {
      id: getId(),
      name: 'Eyeclick Games',
      description: 'Game designed for children, focusing on interactive play and learning',
      tasks:
        'Rapidly develop prototypes of game logic and mechanics based on the game design document, implement core gameplay functionality in Unity using C#, and integrate both 2D and 3D assets. Optimize the game for performance on Tinkerboard and implement motion tracking using Astra and Kinect to enhance interactive gameplay.',
      url: 'https://drive.google.com/drive/folders/1ej8hZPgq6V_Pw9-0MNlqXdM-VG-HwV5r?usp=drive_link',
      img: '/portfolio/projects/eyeclick.webp',
      video: 'vkoPTyPNjcw',
      tags: ['Unity', 'Android', 'C#', 'Spine', 'Astra', 'Kinect'],
    },
  ],
};

export default featuredProjectsSection;
