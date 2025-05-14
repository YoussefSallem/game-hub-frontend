import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent implements OnInit, AfterViewInit {
  // Active section for sidebar navigation
  activeSection: 'dashboard' | 'orders' | 'games' | 'users' | 'analytics' =
    'dashboard';

  // Statistics data
  pageViews = 4442236;
  pageViewsGrowth = 59.2;

  totalUsers = 78250;
  usersGrowth = 19.2;

  totalOrders = 18800;
  ordersGrowth = -12.4;

  totalSales = 35078;
  salesGrowth = 27.8;

  weeklyIncome = 7650;

  // static array of games
  data = [
    {
      _id: '680ff575168c884acaae2693',
      rawgId: 3498,
      slug: 'grand-theft-auto-v',
      name: 'Grand Theft Auto V',
      released: '2013-09-17T00:00:00.000Z',
      backgroundImage:
        'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
      rating: 9.2,
      ratingTop: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 4246,
          percent: 59.01,
        },
        {
          id: 4,
          title: 'recommended',
          count: 2354,
          percent: 32.72,
        },
        {
          id: 3,
          title: 'meh',
          count: 457,
          percent: 6.35,
        },
        {
          id: 1,
          title: 'skip',
          count: 138,
          percent: 1.92,
        },
      ],
      ratingsCount: 7083,
      metacritic: 92,
      reviewsCount: 7195,
      platforms: [
        {
          platformId: 4,
          name: 'PC',
          slug: 'pc',
        },
        {
          platformId: 187,
          name: 'PlayStation 5',
          slug: 'playstation5',
        },
        {
          platformId: 186,
          name: 'Xbox Series S/X',
          slug: 'xbox-series-x',
        },
        {
          platformId: 18,
          name: 'PlayStation 4',
          slug: 'playstation4',
        },
        {
          platformId: 16,
          name: 'PlayStation 3',
          slug: 'playstation3',
        },
        {
          platformId: 14,
          name: 'Xbox 360',
          slug: 'xbox360',
        },
        {
          platformId: 1,
          name: 'Xbox One',
          slug: 'xbox-one',
        },
      ],
      parentPlatforms: [
        {
          platformId: 1,
          name: 'PC',
          slug: 'pc',
        },
        {
          platformId: 2,
          name: 'PlayStation',
          slug: 'playstation',
        },
        {
          platformId: 3,
          name: 'Xbox',
          slug: 'xbox',
        },
      ],
      stores: [
        {
          storeId: 1,
          name: 'Steam',
          slug: 'steam',
          domain: '',
          url: '',
        },
        {
          storeId: 3,
          name: 'PlayStation Store',
          slug: 'playstation-store',
          domain: '',
          url: '',
        },
        {
          storeId: 11,
          name: 'Epic Games',
          slug: 'epic-games',
          domain: '',
          url: '',
        },
        {
          storeId: 7,
          name: 'Xbox 360 Store',
          slug: 'xbox360',
          domain: '',
          url: '',
        },
        {
          storeId: 2,
          name: 'Xbox Store',
          slug: 'xbox-store',
          domain: '',
          url: '',
        },
      ],
      tags: [
        {
          tagId: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
        },
        {
          tagId: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
        },
        {
          tagId: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
        },
        {
          tagId: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
        },
        {
          tagId: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
        },
        {
          tagId: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
        },
        {
          tagId: 24,
          name: 'RPG',
          slug: 'rpg',
        },
        {
          tagId: 18,
          name: 'Co-op',
          slug: 'co-op',
        },
        {
          tagId: 36,
          name: 'Open World',
          slug: 'open-world',
        },
        {
          tagId: 411,
          name: 'cooperative',
          slug: 'cooperative',
        },
        {
          tagId: 8,
          name: 'First-Person',
          slug: 'first-person',
        },
        {
          tagId: 149,
          name: 'Third Person',
          slug: 'third-person',
        },
        {
          tagId: 4,
          name: 'Funny',
          slug: 'funny',
        },
        {
          tagId: 37,
          name: 'Sandbox',
          slug: 'sandbox',
        },
        {
          tagId: 123,
          name: 'Comedy',
          slug: 'comedy',
        },
        {
          tagId: 150,
          name: 'Third-Person Shooter',
          slug: 'third-person-shooter',
        },
        {
          tagId: 62,
          name: 'Moddable',
          slug: 'moddable',
        },
        {
          tagId: 144,
          name: 'Crime',
          slug: 'crime',
        },
        {
          tagId: 62349,
          name: 'vr mod',
          slug: 'vr-mod',
        },
      ],
      esrbRating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      shortScreenshots: [
        {
          image:
            'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg',
        },
      ],
      trailers: [],
      __v: 0,
      createdAt: '2025-04-28T21:39:04.756Z',
      updatedAt: '2025-05-11T08:14:35.892Z',
      price: 58,
      purchaseCount: 0,
      description:
        'Rockstar Games went bigger, since their previous installment of the series. You get the complicated and realistic world-building from Liberty City of GTA4 in the setting of lively and diverse Los Santos, from an old fan favorite GTA San Andreas. 561 different vehicles (including every transport you can operate) and the amount is rising with every update. \nSimultaneous storytelling from three unique perspectives: \nFollow Michael, ex-criminal living his life of leisure away from the past, Franklin, a kid that seeks the better future, and Trevor, the exact past Michael is trying to run away from. \nGTA Online will provide a lot of additional challenge even for the experienced players, coming fresh from the story mode. Now you will have other players around that can help you just as likely as ruin your mission. Every GTA mechanic up to date can be experienced by players through the unique customizable character, and community content paired with the leveling system tends to keep everyone busy and engaged.\nEspañol\nRockstar Games se hizo más grande desde su entrega anterior de la serie. Obtienes la construcción del mundo complicada y realista de Liberty City de GTA4 en el escenario de Los Santos, un viejo favorito de los fans, GTA San Andreas. 561 vehículos diferentes (incluidos todos los transportes que puede operar) y la cantidad aumenta con cada actualización.\nNarración simultánea desde tres perspectivas únicas:\nSigue a Michael, ex-criminal que vive su vida de ocio lejos del pasado, Franklin, un niño que busca un futuro mejor, y Trevor, el pasado exacto del que Michael está tratando de huir.\nGTA Online proporcionará muchos desafíos adicionales incluso para los jugadores experimentados, recién llegados del modo historia. Ahora tendrás otros jugadores cerca que pueden ayudarte con la misma probabilidad que arruinar tu misión. Los jugadores pueden experimentar todas las mecánicas de GTA actualizadas a través del personaje personalizable único, y el contenido de la comunidad combinado con el sistema de nivelación tiende a mantener a todos ocupados y comprometidos.',
    },
    {
      _id: '680ff575168c884acaae2694',
      rawgId: 3328,
      slug: 'the-witcher-3-wild-hunt',
      name: 'The Witcher 3: Wild Hunt',
      released: '2015-05-18T00:00:00.000Z',
      backgroundImage:
        'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
      rating: 9.2,
      ratingTop: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 5359,
          percent: 76.73,
        },
        {
          id: 4,
          title: 'recommended',
          count: 1142,
          percent: 16.35,
        },
        {
          id: 3,
          title: 'meh',
          count: 297,
          percent: 4.25,
        },
        {
          id: 1,
          title: 'skip',
          count: 186,
          percent: 2.66,
        },
      ],
      ratingsCount: 6871,
      metacritic: 92,
      reviewsCount: 6984,
      platforms: [
        {
          platformId: 186,
          name: 'Xbox Series S/X',
          slug: 'xbox-series-x',
        },
        {
          platformId: 187,
          name: 'PlayStation 5',
          slug: 'playstation5',
        },
        {
          platformId: 5,
          name: 'macOS',
          slug: 'macos',
        },
        {
          platformId: 18,
          name: 'PlayStation 4',
          slug: 'playstation4',
        },
        {
          platformId: 7,
          name: 'Nintendo Switch',
          slug: 'nintendo-switch',
        },
        {
          platformId: 4,
          name: 'PC',
          slug: 'pc',
        },
        {
          platformId: 1,
          name: 'Xbox One',
          slug: 'xbox-one',
        },
      ],
      parentPlatforms: [
        {
          platformId: 1,
          name: 'PC',
          slug: 'pc',
        },
        {
          platformId: 2,
          name: 'PlayStation',
          slug: 'playstation',
        },
        {
          platformId: 3,
          name: 'Xbox',
          slug: 'xbox',
        },
        {
          platformId: 5,
          name: 'Apple Macintosh',
          slug: 'mac',
        },
        {
          platformId: 7,
          name: 'Nintendo',
          slug: 'nintendo',
        },
      ],
      stores: [
        {
          storeId: 5,
          name: 'GOG',
          slug: 'gog',
          domain: '',
          url: '',
        },
        {
          storeId: 3,
          name: 'PlayStation Store',
          slug: 'playstation-store',
          domain: '',
          url: '',
        },
        {
          storeId: 1,
          name: 'Steam',
          slug: 'steam',
          domain: '',
          url: '',
        },
        {
          storeId: 2,
          name: 'Xbox Store',
          slug: 'xbox-store',
          domain: '',
          url: '',
        },
        {
          storeId: 6,
          name: 'Nintendo Store',
          slug: 'nintendo',
          domain: '',
          url: '',
        },
      ],
      tags: [
        {
          tagId: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
        },
        {
          tagId: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
        },
        {
          tagId: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
        },
        {
          tagId: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
        },
        {
          tagId: 24,
          name: 'RPG',
          slug: 'rpg',
        },
        {
          tagId: 118,
          name: 'Story Rich',
          slug: 'story-rich',
        },
        {
          tagId: 36,
          name: 'Open World',
          slug: 'open-world',
        },
        {
          tagId: 149,
          name: 'Third Person',
          slug: 'third-person',
        },
        {
          tagId: 64,
          name: 'Fantasy',
          slug: 'fantasy',
        },
        {
          tagId: 37,
          name: 'Sandbox',
          slug: 'sandbox',
        },
        {
          tagId: 97,
          name: 'Action RPG',
          slug: 'action-rpg',
        },
        {
          tagId: 41,
          name: 'Dark',
          slug: 'dark',
        },
        {
          tagId: 44,
          name: 'Nudity',
          slug: 'nudity',
        },
        {
          tagId: 336,
          name: 'controller support',
          slug: 'controller-support',
        },
        {
          tagId: 145,
          name: 'Choices Matter',
          slug: 'choices-matter',
        },
        {
          tagId: 40,
          name: 'Dark Fantasy',
          slug: 'dark-fantasy',
        },
        {
          tagId: 192,
          name: 'Mature',
          slug: 'mature',
        },
        {
          tagId: 66,
          name: 'Medieval',
          slug: 'medieval',
        },
        {
          tagId: 82,
          name: 'Magic',
          slug: 'magic',
        },
        {
          tagId: 218,
          name: 'Multiple Endings',
          slug: 'multiple-endings',
        },
      ],
      esrbRating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      shortScreenshots: [
        {
          image:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/862/862397b153221a625922d3bb66337834.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/166/166787c442a45f52f4f230c33fd7d605.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/f63/f6373ee614046d81503d63f167181803.jpg',
        },
      ],
      trailers: [],
      __v: 0,
      createdAt: '2025-04-28T21:39:04.758Z',
      updatedAt: '2025-05-11T08:14:36.399Z',
      price: 42,
      purchaseCount: 0,
      description:
        'The third game in a series, it holds nothing back from the player. Open world adventures of the renowned monster slayer Geralt of Rivia are now even on a larger scale. Following the source material more accurately, this time Geralt is trying to find the child of the prophecy, Ciri while making a quick coin from various contracts on the side. Great attention to the world building above all creates an immersive story, where your decisions will shape the world around you.\nCD Project Red are infamous for the amount of work they put into their games, and it shows, because aside from classic third-person action RPG base game they provided 2 massive DLCs with unique questlines and 16 smaller DLCs, containing extra quests and items.\nPlayers praise the game for its atmosphere and a wide open world that finds the balance between fantasy elements and realistic and believable mechanics, and the game deserved numerous awards for every aspect of the game, from music to direction.',
    },
    {
      _id: '680ff575168c884acaae2695',
      rawgId: 4200,
      slug: 'portal-2',
      name: 'Portal 2',
      released: '2011-04-18T00:00:00.000Z',
      backgroundImage:
        'https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg',
      rating: 9.5,
      ratingTop: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 4115,
          percent: 69.36,
        },
        {
          id: 4,
          title: 'recommended',
          count: 1494,
          percent: 25.18,
        },
        {
          id: 3,
          title: 'meh',
          count: 177,
          percent: 2.98,
        },
        {
          id: 1,
          title: 'skip',
          count: 147,
          percent: 2.48,
        },
      ],
      ratingsCount: 5878,
      metacritic: 95,
      reviewsCount: 5933,
      platforms: [
        {
          platformId: 16,
          name: 'PlayStation 3',
          slug: 'playstation3',
        },
        {
          platformId: 4,
          name: 'PC',
          slug: 'pc',
        },
        {
          platformId: 14,
          name: 'Xbox 360',
          slug: 'xbox360',
        },
        {
          platformId: 6,
          name: 'Linux',
          slug: 'linux',
        },
        {
          platformId: 5,
          name: 'macOS',
          slug: 'macos',
        },
        {
          platformId: 1,
          name: 'Xbox One',
          slug: 'xbox-one',
        },
      ],
      parentPlatforms: [
        {
          platformId: 1,
          name: 'PC',
          slug: 'pc',
        },
        {
          platformId: 2,
          name: 'PlayStation',
          slug: 'playstation',
        },
        {
          platformId: 3,
          name: 'Xbox',
          slug: 'xbox',
        },
        {
          platformId: 5,
          name: 'Apple Macintosh',
          slug: 'mac',
        },
        {
          platformId: 6,
          name: 'Linux',
          slug: 'linux',
        },
      ],
      stores: [
        {
          storeId: 2,
          name: 'Xbox Store',
          slug: 'xbox-store',
          domain: '',
          url: '',
        },
        {
          storeId: 1,
          name: 'Steam',
          slug: 'steam',
          domain: '',
          url: '',
        },
        {
          storeId: 3,
          name: 'PlayStation Store',
          slug: 'playstation-store',
          domain: '',
          url: '',
        },
        {
          storeId: 7,
          name: 'Xbox 360 Store',
          slug: 'xbox360',
          domain: '',
          url: '',
        },
      ],
      tags: [
        {
          tagId: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
        },
        {
          tagId: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
        },
        {
          tagId: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
        },
        {
          tagId: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
        },
        {
          tagId: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
        },
        {
          tagId: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
        },
        {
          tagId: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
        },
        {
          tagId: 18,
          name: 'Co-op',
          slug: 'co-op',
        },
        {
          tagId: 118,
          name: 'Story Rich',
          slug: 'story-rich',
        },
        {
          tagId: 411,
          name: 'cooperative',
          slug: 'cooperative',
        },
        {
          tagId: 8,
          name: 'First-Person',
          slug: 'first-person',
        },
        {
          tagId: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
        },
        {
          tagId: 30,
          name: 'FPS',
          slug: 'fps',
        },
        {
          tagId: 9,
          name: 'Online Co-Op',
          slug: 'online-co-op',
        },
        {
          tagId: 4,
          name: 'Funny',
          slug: 'funny',
        },
        {
          tagId: 189,
          name: 'Female Protagonist',
          slug: 'female-protagonist',
        },
        {
          tagId: 123,
          name: 'Comedy',
          slug: 'comedy',
        },
        {
          tagId: 75,
          name: 'Local Co-Op',
          slug: 'local-co-op',
        },
        {
          tagId: 11669,
          name: 'stats',
          slug: 'stats',
        },
        {
          tagId: 40852,
          name: 'Steam Workshop',
          slug: 'steam-workshop',
        },
        {
          tagId: 25,
          name: 'Space',
          slug: 'space',
        },
        {
          tagId: 40838,
          name: 'Includes level editor',
          slug: 'includes-level-editor',
        },
        {
          tagId: 40833,
          name: 'Captions available',
          slug: 'captions-available',
        },
        {
          tagId: 40834,
          name: 'Commentary available',
          slug: 'commentary-available',
        },
        {
          tagId: 87,
          name: 'Science',
          slug: 'science',
        },
      ],
      esrbRating: {
        id: 2,
        name: 'Everyone 10+',
        slug: 'everyone-10-plus',
      },
      shortScreenshots: [
        {
          image:
            'https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/173/1737ff43c14f40294011a209b1012875.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/9b1/9b107a790909b31918ebe2f40547cc85.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/d05/d058fc7f7fa6128916c311eb14267fed.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/415/41543dcc12dffc8e97d85a56ad42cda8.jpg',
        },
      ],
      trailers: [],
      __v: 0,
      createdAt: '2025-04-28T21:39:04.758Z',
      updatedAt: '2025-05-11T08:14:36.759Z',
      price: 56,
      purchaseCount: 0,
      description:
        'Portal 2 is a first-person puzzle game developed by Valve Corporation and released on April 19, 2011 on Steam, PS3 and Xbox 360. It was published by Valve Corporation in digital form and by Electronic Arts in physical form. \nIts plot directly follows the first game&#39;s, taking place in the Half-Life universe. You play as Chell, a test subject in a research facility formerly ran by the company Aperture Science, but taken over by an evil AI that turned upon its creators, GladOS. After defeating GladOS at the end of the first game but failing to escape the facility, Chell is woken up from a stasis chamber by an AI personality core, Wheatley, as the unkempt complex is falling apart. As the two attempt to navigate through the ruins and escape, they stumble upon GladOS, and accidentally re-activate her...\nPortal 2&#39;s core mechanics are very similar to the first game&#39;s ; the player must make their way through several test chambers which involve puzzles. For this purpose, they possess a Portal Gun, a weapon capable of creating teleportation portals on white surfaces. This seemingly simple mechanic and its subtleties coupled with the many different puzzle elements that can appear in puzzles allows the game to be easy to start playing, yet still feature profound gameplay. The sequel adds several new puzzle elements, such as gel that can render surfaces bouncy or allow you to accelerate when running on them.\nThe game is often praised for its gameplay, its memorable dialogue and writing and its aesthetic. Both games in the series are responsible for inspiring most puzzle games succeeding them, particularly first-person puzzle games. The series, its characters and even its items such as the portal gun and the companion cube have become a cultural icon within gaming communities.\nPortal 2 also features a co-op mode where two players take on the roles of robots being led through tests by GladOS, as well as an in-depth level editor.',
    },
    {
      _id: '680ff575168c884acaae2696',
      rawgId: 4291,
      slug: 'counter-strike-global-offensive',
      name: 'Counter-Strike: Global Offensive',
      released: '2012-08-21T00:00:00.000Z',
      backgroundImage:
        'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
      rating: 8.1,
      ratingTop: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 1676,
          percent: 46.53,
        },
        {
          id: 3,
          title: 'meh',
          count: 935,
          percent: 25.96,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 585,
          percent: 16.24,
        },
        {
          id: 1,
          title: 'skip',
          count: 406,
          percent: 11.27,
        },
      ],
      ratingsCount: 3565,
      metacritic: 81,
      reviewsCount: 3602,
      platforms: [
        {
          platformId: 4,
          name: 'PC',
          slug: 'pc',
        },
        {
          platformId: 6,
          name: 'Linux',
          slug: 'linux',
        },
        {
          platformId: 14,
          name: 'Xbox 360',
          slug: 'xbox360',
        },
        {
          platformId: 16,
          name: 'PlayStation 3',
          slug: 'playstation3',
        },
      ],
      parentPlatforms: [
        {
          platformId: 1,
          name: 'PC',
          slug: 'pc',
        },
        {
          platformId: 2,
          name: 'PlayStation',
          slug: 'playstation',
        },
        {
          platformId: 3,
          name: 'Xbox',
          slug: 'xbox',
        },
        {
          platformId: 6,
          name: 'Linux',
          slug: 'linux',
        },
      ],
      stores: [
        {
          storeId: 3,
          name: 'PlayStation Store',
          slug: 'playstation-store',
          domain: '',
          url: '',
        },
        {
          storeId: 1,
          name: 'Steam',
          slug: 'steam',
          domain: '',
          url: '',
        },
        {
          storeId: 7,
          name: 'Xbox 360 Store',
          slug: 'xbox360',
          domain: '',
          url: '',
        },
      ],
      tags: [
        {
          tagId: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
        },
        {
          tagId: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
        },
        {
          tagId: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
        },
        {
          tagId: 7808,
          name: 'steam-trading-cards',
          slug: 'steam-trading-cards',
        },
        {
          tagId: 18,
          name: 'Co-op',
          slug: 'co-op',
        },
        {
          tagId: 411,
          name: 'cooperative',
          slug: 'cooperative',
        },
        {
          tagId: 8,
          name: 'First-Person',
          slug: 'first-person',
        },
        {
          tagId: 30,
          name: 'FPS',
          slug: 'fps',
        },
        {
          tagId: 9,
          name: 'Online Co-Op',
          slug: 'online-co-op',
        },
        {
          tagId: 80,
          name: 'Tactical',
          slug: 'tactical',
        },
        {
          tagId: 11669,
          name: 'stats',
          slug: 'stats',
        },
        {
          tagId: 40852,
          name: 'Steam Workshop',
          slug: 'steam-workshop',
        },
        {
          tagId: 157,
          name: 'PvP',
          slug: 'pvp',
        },
        {
          tagId: 62,
          name: 'Moddable',
          slug: 'moddable',
        },
        {
          tagId: 70,
          name: 'War',
          slug: 'war',
        },
        {
          tagId: 40837,
          name: 'In-App Purchases',
          slug: 'in-app-purchases',
        },
        {
          tagId: 77,
          name: 'Realistic',
          slug: 'realistic',
        },
        {
          tagId: 11,
          name: 'Team-Based',
          slug: 'team-based',
        },
        {
          tagId: 131,
          name: 'Fast-Paced',
          slug: 'fast-paced',
        },
        {
          tagId: 81,
          name: 'Military',
          slug: 'military',
        },
        {
          tagId: 170,
          name: 'Competitive',
          slug: 'competitive',
        },
        {
          tagId: 40856,
          name: 'Valve Anti-Cheat enabled',
          slug: 'valve-anti-cheat-enabled',
        },
        {
          tagId: 73,
          name: 'e-sports',
          slug: 'e-sports',
        },
        {
          tagId: 245,
          name: 'Trading',
          slug: 'trading',
        },
      ],
      esrbRating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      shortScreenshots: [
        {
          image:
            'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/ff1/ff16661bb15f7969b44f6c4118870e44.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/41b/41bb769d247412eac3336dec934aed72.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/754/754545acdbf71f56e8902a07c7d20696.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/fd8/fd873cab4c66db0b8e85d8a66e940074.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/7db/7db2954f7908b6749c36a5f3c9052f65.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/337/337a3e98b5933f456a2b37b59fab5f39.jpg',
        },
      ],
      trailers: [],
      __v: 0,
      createdAt: '2025-04-28T21:39:04.758Z',
      updatedAt: '2025-05-11T08:14:37.739Z',
      price: 40,
      purchaseCount: 0,
      description:
        'Counter-Strike is a multiplayer phenomenon in its simplicity. No complicated narratives to explain the source of the conflict, no futuristic and alien threats, but counter-terrorists against terrorists. Arena shooter at its core, CS:GO provides you with various methods of disposing enemies and reliant on cooperation within the team. During the round of the classical clash mode, you will gradually receive currency to purchase different equipment. Each player can carry a primary weapon, secondary pistol, knife and a set of grenades, which all can change the battle if wielded by the skilled player. \nObjectives are clear and vary from map to map, from game mode to game mode. Stop the terrorists from planting explosives, stop the counter-terrorist from retrieving the hostages, kill everyone who isn’t you and just perform the best with.\nCS:GO is one of the major cybersport discipline, which makes playing it more exciting to some players. Aside from purchasing the game, CS:GO is infamous for its loot case system, that requires players to purchase keys, in order to open said cases. Customization items consist of weapon skins, weapon stickers, and sprays that do not affect gameplay and have purely visual value to the player.',
    },
    {
      _id: '680ff575168c884acaae2697',
      rawgId: 5286,
      slug: 'tomb-raider',
      name: 'Tomb Raider (2013)',
      released: '2013-03-05T00:00:00.000Z',
      backgroundImage:
        'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
      rating: 8.6,
      ratingTop: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 2431,
          percent: 60.37,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 1040,
          percent: 25.83,
        },
        {
          id: 3,
          title: 'meh',
          count: 436,
          percent: 10.83,
        },
        {
          id: 1,
          title: 'skip',
          count: 120,
          percent: 2.98,
        },
      ],
      ratingsCount: 3995,
      metacritic: 86,
      reviewsCount: 4027,
      platforms: [
        {
          platformId: 16,
          name: 'PlayStation 3',
          slug: 'playstation3',
        },
        {
          platformId: 14,
          name: 'Xbox 360',
          slug: 'xbox360',
        },
        {
          platformId: 5,
          name: 'macOS',
          slug: 'macos',
        },
        {
          platformId: 4,
          name: 'PC',
          slug: 'pc',
        },
        {
          platformId: 1,
          name: 'Xbox One',
          slug: 'xbox-one',
        },
        {
          platformId: 18,
          name: 'PlayStation 4',
          slug: 'playstation4',
        },
      ],
      parentPlatforms: [
        {
          platformId: 1,
          name: 'PC',
          slug: 'pc',
        },
        {
          platformId: 2,
          name: 'PlayStation',
          slug: 'playstation',
        },
        {
          platformId: 3,
          name: 'Xbox',
          slug: 'xbox',
        },
        {
          platformId: 5,
          name: 'Apple Macintosh',
          slug: 'mac',
        },
      ],
      stores: [
        {
          storeId: 7,
          name: 'Xbox 360 Store',
          slug: 'xbox360',
          domain: '',
          url: '',
        },
        {
          storeId: 1,
          name: 'Steam',
          slug: 'steam',
          domain: '',
          url: '',
        },
        {
          storeId: 3,
          name: 'PlayStation Store',
          slug: 'playstation-store',
          domain: '',
          url: '',
        },
        {
          storeId: 8,
          name: 'Google Play',
          slug: 'google-play',
          domain: '',
          url: '',
        },
        {
          storeId: 4,
          name: 'App Store',
          slug: 'apple-appstore',
          domain: '',
          url: '',
        },
        {
          storeId: 11,
          name: 'Epic Games',
          slug: 'epic-games',
          domain: '',
          url: '',
        },
      ],
      tags: [
        {
          tagId: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
        },
        {
          tagId: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
        },
        {
          tagId: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
        },
        {
          tagId: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
        },
        {
          tagId: 24,
          name: 'RPG',
          slug: 'rpg',
        },
        {
          tagId: 149,
          name: 'Third Person',
          slug: 'third-person',
        },
        {
          tagId: 6,
          name: 'Exploration',
          slug: 'exploration',
        },
        {
          tagId: 193,
          name: 'Classic',
          slug: 'classic',
        },
        {
          tagId: 189,
          name: 'Female Protagonist',
          slug: 'female-protagonist',
        },
        {
          tagId: 15,
          name: 'Stealth',
          slug: 'stealth',
        },
        {
          tagId: 69,
          name: 'Action-Adventure',
          slug: 'action-adventure',
        },
        {
          tagId: 150,
          name: 'Third-Person Shooter',
          slug: 'third-person-shooter',
        },
        {
          tagId: 74,
          name: 'Retro',
          slug: 'retro',
        },
        {
          tagId: 110,
          name: 'Cinematic',
          slug: 'cinematic',
        },
        {
          tagId: 269,
          name: 'Quick-Time Events',
          slug: 'quick-time-events',
        },
        {
          tagId: 126,
          name: 'Dinosaurs',
          slug: 'dinosaurs',
        },
        {
          tagId: 306,
          name: 'Lara Croft',
          slug: 'lara-croft',
        },
      ],
      esrbRating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      shortScreenshots: [
        {
          image:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/4f9/4f9d5efdecfb63cb99f1baa4c0ceb3bf.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/80f/80f373082b2a74da3f9c3fe2b877dcd0.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/a87/a8733e877f8fbe45e4a727c22a06aa2e.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/3f9/3f91678c6805a76419fa4ea3a045a909.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/417/4170bf07be43a8d8249193883f87f1c1.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/2a4/2a4250f83ad9e959d8b4ca9376ae34ea.jpg',
        },
      ],
      trailers: [],
      __v: 0,
      createdAt: '2025-04-28T21:39:04.758Z',
      updatedAt: '2025-05-11T08:14:38.132Z',
      price: 28,
      purchaseCount: 0,
      description:
        'A cinematic revival of the series in its action third person form, Tomb Rider follows Lara in her least experience period of life – her youth. Heavily influenced by Naughty Dog’s “Uncharted”, the game is a mix of everything, from stealth and survival to combat and QTE action scenes.\nYoung Lara Croft arrives on the Yamatai, lost island near Japan, as the leader of the expedition in search of the Yamatai Kingdom, with a diverse team of specialists. But shipwreck postponed the successful arrival and seemingly forgotten island is heavily populated with hostile inhabitants, cultists of Solarii Brotherhood.\nThe game will be graphic at times, especially after failed QTE’s during some of the survival scenes, but overall players will enjoy classic action adventure, reminiscent of the beginning of the series. This game is not a direct sequel or continuation of existing sub-series within the franchise, but a reboot, setting up Tomb Raider to represent modern gaming experience.\nThe game has RPG elements and has a world, which you can explore during the story campaign and after the completion. As well as multiplayer mode, where 2 teams (4 scavengers and 4 survivors) are clashing in 3 game modes while using weapons and environments from the single-player campaign.',
    },
    {
      _id: '680ff575168c884acaae2698',
      rawgId: 13536,
      slug: 'portal',
      name: 'Portal',
      released: '2007-10-09T00:00:00.000Z',
      backgroundImage:
        'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
      rating: 9,
      ratingTop: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 2931,
          percent: 59.95,
        },
        {
          id: 4,
          title: 'recommended',
          count: 1654,
          percent: 33.83,
        },
        {
          id: 3,
          title: 'meh',
          count: 196,
          percent: 4.01,
        },
        {
          id: 1,
          title: 'skip',
          count: 108,
          percent: 2.21,
        },
      ],
      ratingsCount: 4846,
      metacritic: 90,
      reviewsCount: 4889,
      platforms: [
        {
          platformId: 5,
          name: 'macOS',
          slug: 'macos',
        },
        {
          platformId: 4,
          name: 'PC',
          slug: 'pc',
        },
        {
          platformId: 21,
          name: 'Android',
          slug: 'android',
        },
        {
          platformId: 16,
          name: 'PlayStation 3',
          slug: 'playstation3',
        },
        {
          platformId: 14,
          name: 'Xbox 360',
          slug: 'xbox360',
        },
        {
          platformId: 6,
          name: 'Linux',
          slug: 'linux',
        },
        {
          platformId: 7,
          name: 'Nintendo Switch',
          slug: 'nintendo-switch',
        },
      ],
      parentPlatforms: [
        {
          platformId: 1,
          name: 'PC',
          slug: 'pc',
        },
        {
          platformId: 2,
          name: 'PlayStation',
          slug: 'playstation',
        },
        {
          platformId: 3,
          name: 'Xbox',
          slug: 'xbox',
        },
        {
          platformId: 8,
          name: 'Android',
          slug: 'android',
        },
        {
          platformId: 5,
          name: 'Apple Macintosh',
          slug: 'mac',
        },
        {
          platformId: 6,
          name: 'Linux',
          slug: 'linux',
        },
        {
          platformId: 7,
          name: 'Nintendo',
          slug: 'nintendo',
        },
      ],
      stores: [
        {
          storeId: 1,
          name: 'Steam',
          slug: 'steam',
          domain: '',
          url: '',
        },
        {
          storeId: 8,
          name: 'Google Play',
          slug: 'google-play',
          domain: '',
          url: '',
        },
      ],
      tags: [
        {
          tagId: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
        },
        {
          tagId: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
        },
        {
          tagId: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
        },
        {
          tagId: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
        },
        {
          tagId: 118,
          name: 'Story Rich',
          slug: 'story-rich',
        },
        {
          tagId: 8,
          name: 'First-Person',
          slug: 'first-person',
        },
        {
          tagId: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
        },
        {
          tagId: 40845,
          name: 'Partial Controller Support',
          slug: 'partial-controller-support',
        },
        {
          tagId: 30,
          name: 'FPS',
          slug: 'fps',
        },
        {
          tagId: 4,
          name: 'Funny',
          slug: 'funny',
        },
        {
          tagId: 193,
          name: 'Classic',
          slug: 'classic',
        },
        {
          tagId: 189,
          name: 'Female Protagonist',
          slug: 'female-protagonist',
        },
        {
          tagId: 123,
          name: 'Comedy',
          slug: 'comedy',
        },
        {
          tagId: 40838,
          name: 'Includes level editor',
          slug: 'includes-level-editor',
        },
        {
          tagId: 40833,
          name: 'Captions available',
          slug: 'captions-available',
        },
        {
          tagId: 111,
          name: 'Short',
          slug: 'short',
        },
        {
          tagId: 114,
          name: 'Physics',
          slug: 'physics',
        },
        {
          tagId: 148,
          name: 'Dark Humor',
          slug: 'dark-humor',
        },
        {
          tagId: 40834,
          name: 'Commentary available',
          slug: 'commentary-available',
        },
        {
          tagId: 40839,
          name: 'Includes Source SDK',
          slug: 'includes-source-sdk',
        },
        {
          tagId: 87,
          name: 'Science',
          slug: 'science',
        },
      ],
      esrbRating: {
        id: 3,
        name: 'Teen',
        slug: 'teen',
      },
      shortScreenshots: [
        {
          image:
            'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/99e/99e94bd55eb75fa6e75c3dcbb1a570b2.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/2f0/2f0297a46934d9fa914c626902b1ce20.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/3b3/3b3713fbca6194dfc4d6e8a8d006d354.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/c6f/c6f9afc3e4dd51068b22f04acbc6ca99.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/748/74841207eec76ebc7fc03210168bfb7e.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/e72/e7256b4caedf099bcb8ebd332f892334.jpg',
        },
      ],
      trailers: [],
      __v: 0,
      createdAt: '2025-04-28T21:39:04.758Z',
      updatedAt: '2025-05-11T08:14:41.361Z',
      price: 39,
      purchaseCount: 0,
      description:
        'Every single time you click your mouse while holding a gun, you expect bullets to fly and enemies to fall. But here you will try out the FPS game filled with environmental puzzles and engaging story. \nSilent template for your adventures, Chell, wakes up in a testing facility. She’s a subject of experiments on instant travel device, supervised by snarky and hostile GLaDOS.\nPlayers will have to complete the tests, room by room, expecting either reward, freedom or more tests. By using the gun, that shoots portals (Portal-Gun™), players will move blocks, travel great distance quickly and learn about your current situation, which is unraveled through environmental storytelling. What you will be told might be different from what you will see.\nWhite environments will guide the player’s portal placement, forcing them to pay attention to the surroundings.  Portal creates tension, allowing either solving puzzles at your own leisure or moving quickly, due to the time limit or threats.',
    },
  ];

  // static array of users
  users = [
    {
      _id: {
        $oid: '681634c4b4eb313f5602817d',
      },
      first_name: 'Youssef',
      last_name: 'Yasser',
      email: 'test@gmail.com',
      phone: '0123456789',
      isAdmin: true,
      resetToken: null,
      resetTokenExpiry: null,
      __v: 6,
      wishlist: [],
    },
    {
      _id: {
        $oid: '680f7abbbf4b173a099e2916',
      },
      first_name: 'Ahmed',
      last_name: 'Shebl',
      email: 'bokashalaboka@gmail.com',
      phone: '0123456789',
      address: {
        city: 'Giza',
        street: '123 street',
        zipCode: '12214',
        apartmentNumber: '12',
        buildingNumber: '2',
        _id: {
          $oid: '680f7abbbf4b173a099e2917',
        },
      },
      __v: 8,
      isAdmin: false,
      wishlist: ['422', '41', '5679'],
    },
    {
      _id: {
        $oid: '681131168f428762e17c7a4b',
      },
      first_name: 'Kareem',
      last_name: 'Ehab',
      email: 'kareem@gmail.com',
      phone: '01111119999',
      isAdmin: true,
      __v: 0,
    },
    {
      _id: {
        $oid: '681548e5bd61457e4ebbc1c1',
      },
      first_name: 'Mahmoud',
      last_name: 'Mandour',
      email: 'mahmoudmandour200015@gmail.com',
      phone: '01112041975',
      isAdmin: true,
      __v: 131,
      wishlist: [],
      authMethod: 'google',
      googleId: '118442509182108541040',
      isVerified: false,
      updatedAt: {
        $date: '2025-05-12T01:31:33.359Z',
      },
      resetToken:
        'ee1ec4e9280b2dfe98c1f415750970ea19fa43351c25ad497a2a1ff93788898c',
      resetTokenExpiry: {
        $date: '2025-05-13T14:36:48.684Z',
      },
    },
  ];

  // Orders data
  recentOrders = [
    {
      id: '12345678',
      product: 'Keyboard',
      orders: 125,
      status: 'Rejected',
      amount: 270.99,
    },
    {
      id: '12360564',
      product: 'Computer Accessories',
      orders: 100,
      status: 'Approved',
      amount: 583.46,
    },
    {
      id: '94564503',
      product: 'Camera Lens',
      orders: 40,
      status: 'Rejected',
      amount: 542.5,
    },
    {
      id: '86728656',
      product: 'TV',
      orders: 99,
      status: 'Pending',
      amount: 810.8,
    },
    {
      id: '98652366',
      product: 'Headset',
      orders: 50,
      status: 'Approved',
      amount: 90.29,
    },
    {
      id: '98732623',
      product: 'Mouse',
      orders: 69,
      status: 'Rejected',
      amount: 29.5,
    },
  ];

  // Analytics data
  analytics = [
    { metric: 'Company Finance Growth', value: '+45.14%' },
    { metric: 'Company Expenses Ratio', value: '0.58%' },
    { metric: 'Business Risk Cases', value: 'Low' },
  ];

  // Chart instances
  visitorChart: any;
  incomeChart: any;
  analyticsVisitorChart: any;
  analyticsSalesChart: any;

  constructor() {}

  ngOnInit() {
    // Initial setup without charts
  }

  ngAfterViewInit() {
    // Use AfterViewInit to ensure DOM elements are ready
    setTimeout(() => {
      this.initVisitorChart();
      this.initIncomeChart();

      // Initialize analytics charts when needed
      if (this.activeSection === 'analytics') {
        this.initAnalyticsCharts();
      }
    }, 500); // Increased timeout to ensure DOM is fully rendered
  }

  // Set active section for sidebar navigation
  setActiveSection(
    section: 'dashboard' | 'orders' | 'games' | 'users' | 'analytics'
  ) {
    this.activeSection = section;

    // Initialize analytics charts when switching to analytics section
    if (section === 'analytics') {
      setTimeout(() => {
        this.initAnalyticsCharts();
      }, 300);
    }
  }

  initVisitorChart() {
    const ctx = document.getElementById('visitorChart') as HTMLCanvasElement;
    if (!ctx) return; // Guard clause to prevent errors

    // Destroy existing chart if it exists to prevent duplicates
    if (this.visitorChart) {
      this.visitorChart.destroy();
    }

    this.visitorChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'Page Views',
            data: [85, 72, 86, 81, 84, 86, 94, 60, 62, 65, 41, 42],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            tension: 0.4,
            fill: true,
          },
          {
            label: 'Sessions',
            data: [25, 32, 40, 25, 28, 32, 34, 20, 25, 22, 21, 15],
            borderColor: '#0ea5e9',
            tension: 0.4,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  initIncomeChart() {
    const ctx = document.getElementById('incomeChart') as HTMLCanvasElement;
    if (!ctx) return; // Guard clause to prevent errors

    // Destroy existing chart if it exists
    if (this.incomeChart) {
      this.incomeChart.destroy();
    }

    this.incomeChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        datasets: [
          {
            label: 'Income',
            data: [1200, 1400, 1100, 800, 1150, 1000, 1300],
            backgroundColor: '#4ade80',
            borderRadius: 5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  // Separate method for analytics charts
  initAnalyticsCharts() {
    const visitorCtx = document.getElementById(
      'analyticsVisitorChart'
    ) as HTMLCanvasElement;
    const salesCtx = document.getElementById(
      'analyticsSalesChart'
    ) as HTMLCanvasElement;

    if (visitorCtx) {
      // Destroy existing chart if it exists
      if (this.analyticsVisitorChart) {
        this.analyticsVisitorChart.destroy();
      }

      this.analyticsVisitorChart = new Chart(visitorCtx, {
        type: 'line',
        data: {
          labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          datasets: [
            {
              label: 'Unique Visitors',
              data: [
                12000, 19000, 15000, 25000, 22000, 30000, 28000, 25000, 30000,
                29000, 32000, 35000,
              ],
              borderColor: '#3b82f6',
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              tension: 0.4,
              fill: true,
            },
            {
              label: 'Page Views',
              data: [
                24000, 38000, 30000, 50000, 44000, 60000, 56000, 50000, 60000,
                58000, 64000, 70000,
              ],
              borderColor: '#0ea5e9',
              tension: 0.4,
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    if (salesCtx) {
      // Destroy existing chart if it exists
      if (this.analyticsSalesChart) {
        this.analyticsSalesChart.destroy();
      }

      this.analyticsSalesChart = new Chart(salesCtx, {
        type: 'bar',
        data: {
          labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          datasets: [
            {
              label: 'Sales',
              data: [
                5000, 7500, 6000, 9000, 8500, 11000, 10500, 9500, 12000, 11500,
                13000, 14000,
              ],
              backgroundColor: '#4ade80',
              borderRadius: 5,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }
}
