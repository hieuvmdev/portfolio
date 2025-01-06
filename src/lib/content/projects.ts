import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Color Island: Pixel Art',
      url: 'https://play.google.com/store/apps/details?id=athena.studio.colorisland.pixel.art.puzzle',
      android: 'https://play.google.com/store/apps/details?id=athena.studio.colorisland.pixel.art.puzzle',
      ios: 'https://apps.apple.com/us/app/color-island-pixel-art-puzzle/id1457297026',
      video: '2-Eu5X5ZGZs',
      year: 2020,
      tags: ['Unity', 'Firebase'],
    },
    {
      id: getId(),
      name: 'Telegram Mini App',
      url: 'https://t.me/pipeflarebot',
      telegram: 'https://t.me/pipeflarebot',
      img: '/projects/telegram-mini-app.png',
      year: 2023,
      tags: ['Unity', 'Firebase', 'Laravel', 'Metamask', 'Blockchain', 'Telegram', 'Telegram Bot'],
    },
    {
      id: getId(),
      name: 'Rock Paper Scissors',
      url: 'https://youtube.com/watch?v=1XPJl54dB1o',
      video: '1XPJl54dB1o',
      year: 2023,
      tags: ['Unity', 'Firebase', 'Solidity', 'Laravel', 'Metamask', 'Blockchain'],
    },
    {
      id: getId(),
      name: 'Tank Battle Royale PVP',
      url: 'https://pipeflare.io/game/battle-royal-tank-edition',
      desktop: 'https://pipeflare.io/game/battle-royal-tank-edition',
      img: '/projects/tank-battle-royale.jpg',
      year: 2022,
      tags: ['Unity', 'Firebase', 'Laravel', 'Photon'],
    },
    {
      id: getId(),
      name: 'Space Shooter',
      url: 'https://pipeflare.io/game/guest/space-shooter',
      desktop: 'https://pipeflare.io/game/guest/space-shooter',
      android: 'https://play.google.com/store/apps/details?id=com.pipeflare.spaceshooter',
      ios: 'https://apps.apple.com/us/app/space-shooter-pipeflare/id1593840676',
      video: 'VkMnmuDvqPw',
      year: 2021,
      tags: ['Unity', 'Firebase', 'Laravel', 'Photon'],
    },
    {
      id: getId(),
      name: 'Beatbox',
      url: 'https://pipeflare.io/game/guest/beat-box',
      desktop: 'https://pipeflare.io/game/guest/beat-box',
      android: 'https://play.google.com/store/apps/details?id=com.pipeflare.beatbox',
      ios: 'https://apps.apple.com/us/app/beatbox-pipeflare/id1593620125',
      video: 'ragS6QMOpAg',
      year: 2021,
      tags: ['Unity', 'Firebase', 'Laravel', 'Photon'],
    },
    {
      id: getId(),
      name: 'Flare Hit',
      url: 'https://pipeflare.io/game/guest/flare-hit',
      desktop: 'https://pipeflare.io/game/guest/flare-hit',
      android: 'https://play.google.com/store/apps/details?id=com.pipeflare.flarehit',
      ios: 'https://apps.apple.com/us/app/flare-hit/id1591596088',
      video: 'RNy0drF2MDs',
      year: 201,
      tags: ['Unity', 'Firebase', 'Laravel', 'Photon'],
    },
    {
      id: getId(),
      name: 'Flare Jump',
      url: 'https://pipeflare.io/game/guest/flare-jump-2',
      desktop: 'https://pipeflare.io/game/guest/flare-jump-2',
      android: 'https://play.google.com/store/apps/details?id=com.pipeflre.flarejump',
      video: 'ILVet1bE_Wk',
      year: 2021,
      tags: ['Unity', 'Firebase', 'Laravel', 'Photon'],
    },
    // {
    //   id: getId(),
    //   name: 'Subway Run',
    //   url: 'https://pipeflare.io/game/guest/subway-run',
    //   desktop: 'https://pipeflare.io/game/guest/subway-run',
    //   android: 'https://play.google.com/store/apps/details?id=com.pipeflare.subwaysurfer',
    //   img: 'https://static1.pipeflare.io/assets/games/subwayrun.gif',
    //   year: 2022,
    //   tags: ['Unity', 'Firebase', 'Laravel', 'Photon'],
    // },
    {
      id: getId(),
      name: 'Beatbox',
      url: 'https://drive.google.com/file/d/1nVH3bkVVnzRngUUexW6ni-8Ay5jQkOf_/view?usp=drive_link',
      img: '/projects/beatbox.png',
      year: 2019,
      tags: ['Unity'],
    },
    {
      id: getId(),
      name: 'Bunny Brothers',
      url: 'https://drive.google.com/file/d/1R57KmTn3CaKv8q0Po9m3n5kREsm_OSPC/view?usp=sharing',
      img: '/projects/bunny.png',
      year: 2019,
      tags: ['Unity'],
    },
    {
      id: getId(),
      name: 'Buzzy Bee',
      url: 'https://drive.google.com/file/d/1Aj9A13v7W2X_gNakh4Rdfq2NYPm2l2yE/view?usp=sharing',
      img: '/projects/buzzybee.png',
      year: 2019,
      tags: ['Unity'],
    },
    {
      id: getId(),
      name: 'Sketchup',
      url: 'https://drive.google.com/file/d/1pRKCm3VbXozcFwNhjrx0UjZwj59KPoDg/view?usp=sharing',
      img: '/projects/sketchup.png',
      year: 2020,
      tags: ['Unity'],
    },
    {
      id: getId(),
      name: 'Stcky Linky Next Generation',
      url: 'https://drive.google.com/file/d/15NXfeNUbn5dzspvnjXk0jqO55RbGIOHc/view?usp=sharing',
      img: '/projects/stickylinky.png',
      year: 2018,
      tags: ['Unity'],
    },
    // {
    //   id: getId(),
    //   name: 'Fast Feet',
    //   url: 'https://drive.google.com/file/d/1CY5iWg9-JJ5IAbwXIEmiWxturAK2gvai/view?usp=sharing',
    //   img: 'https://user-images.githubusercontent.com/68834718/162578706-b9e57735-6fbc-4c7b-8243-2a6ba447404e.jpg',
    //   year: 2019,
    //   tags: ['Unity'],
    // },

  ],
};
