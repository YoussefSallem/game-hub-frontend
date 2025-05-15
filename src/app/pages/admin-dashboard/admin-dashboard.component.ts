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
      "_id": {
        "$oid": "680ff576168c884acaae2fa1"
      },
      "rawgId": 23598,
      "slug": "league-of-legends",
      "name": "League of Legends",
      "released": {
        "$date": "2009-10-27T00:00:00.000Z"
      },
      "backgroundImage": "https://media.rawg.io/media/games/78b/78bc81e247fc7e77af700cbd632a9297.jpg",
      "rating": 3.65,
      "ratingTop": 4,
      "ratings": [
        {
          "id": 4,
          "title": "recommended",
          "count": 263,
          "percent": 41.61
        },
        {
          "id": 3,
          "title": "meh",
          "count": 151,
          "percent": 23.89
        },
        {
          "id": 5,
          "title": "exceptional",
          "count": 146,
          "percent": 23.1
        },
        {
          "id": 1,
          "title": "skip",
          "count": 72,
          "percent": 11.39
        }
      ],
      "ratingsCount": 619,
      "metacritic": 78,
      "reviewsCount": 632,
      "platforms": [
        {
          "platformId": 5,
          "name": "macOS",
          "slug": "macos"
        },
        {
          "platformId": 4,
          "name": "PC",
          "slug": "pc"
        }
      ],
      "parentPlatforms": [
        {
          "platformId": 1,
          "name": "PC",
          "slug": "pc"
        },
        {
          "platformId": 5,
          "name": "Apple Macintosh",
          "slug": "mac"
        }
      ],
      "stores": [
        {
          "storeId": 1,
          "name": "Steam",
          "slug": "steam",
          "domain": "",
          "url": ""
        },
        {
          "storeId": 11,
          "name": "Epic Games",
          "slug": "epic-games",
          "domain": "",
          "url": ""
        }
      ],
      "tags": [
        {
          "tagId": 7,
          "name": "Multiplayer",
          "slug": "multiplayer"
        },
        {
          "tagId": 397,
          "name": "Online multiplayer",
          "slug": "online-multiplayer"
        },
        {
          "tagId": 169,
          "name": "MOBA",
          "slug": "moba"
        }
      ],
      "esrbRating": {
        "id": 3,
        "name": "Teen",
        "slug": "teen"
      },
      "shortScreenshots": [
        {
          "image": "https://media.rawg.io/media/games/78b/78bc81e247fc7e77af700cbd632a9297.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/3f2/3f2e6056b40accc27214f50f9630a6a8.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/b5e/b5e11cb883f89d29b1c637b630cecb29.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/343/34353d64a0d5b72293fd9f8b24721565.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/16d/16d65c2168d82046b2de98ee91fee393.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/8ee/8ee50c6e32ecd48d4b3358bcbfa4a7f7.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/cc4/cc445ee4f57a8eff340b402e3f1a527a.jpg"
        }
      ],
      "trailers": [],
      "__v": 0,
      "createdAt": {
        "$date": "2025-04-28T21:39:04.888Z"
      },
      "updatedAt": {
        "$date": "2025-05-11T08:32:21.515Z"
      },
      "price": 40,
      "description": "League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements. Two teams of powerful champions, each with a unique design and playstyle, battle head-to-head across multiple battlefields and game modes. With an ever-expanding roster of champions, frequent updates and a thriving tournament scene, League of Legends offers endless replayability for players of every skill level.",
      "purchaseCount": 0
    },
    {
      "_id": {
        "$oid": "680ff576168c884acaae3258"
      },
      "rawgId": 415171,
      "slug": "valorant",
      "name": "Valorant",
      "released": {
        "$date": "2020-06-02T00:00:00.000Z"
      },
      "backgroundImage": "https://media.rawg.io/media/games/b11/b11127b9ee3c3701bd15b9af3286d20e.jpg",
      "rating": 3.52,
      "ratingTop": 4,
      "ratings": [
        {
          "id": 4,
          "title": "recommended",
          "count": 223,
          "percent": 47.45
        },
        {
          "id": 3,
          "title": "meh",
          "count": 135,
          "percent": 28.72
        },
        {
          "id": 5,
          "title": "exceptional",
          "count": 61,
          "percent": 12.98
        },
        {
          "id": 1,
          "title": "skip",
          "count": 51,
          "percent": 10.85
        }
      ],
      "ratingsCount": 464,
      "metacritic": 80,
      "reviewsCount": 470,
      "platforms": [
        {
          "platformId": 4,
          "name": "PC",
          "slug": "pc"
        },
        {
          "platformId": 186,
          "name": "Xbox Series S/X",
          "slug": "xbox-series-x"
        },
        {
          "platformId": 187,
          "name": "PlayStation 5",
          "slug": "playstation5"
        }
      ],
      "parentPlatforms": [
        {
          "platformId": 1,
          "name": "PC",
          "slug": "pc"
        },
        {
          "platformId": 2,
          "name": "PlayStation",
          "slug": "playstation"
        },
        {
          "platformId": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      ],
      "stores": [
        {
          "storeId": 3,
          "name": "PlayStation Store",
          "slug": "playstation-store",
          "domain": "",
          "url": ""
        },
        {
          "storeId": 11,
          "name": "Epic Games",
          "slug": "epic-games",
          "domain": "",
          "url": ""
        }
      ],
      "tags": [
        {
          "tagId": 30,
          "name": "FPS",
          "slug": "fps"
        },
        {
          "tagId": 170,
          "name": "Competitive",
          "slug": "competitive"
        },
        {
          "tagId": 808,
          "name": "character",
          "slug": "character"
        },
        {
          "tagId": 73,
          "name": "e-sports",
          "slug": "e-sports"
        },
        {
          "tagId": 14272,
          "name": "strategy-action",
          "slug": "strategy-action"
        },
        {
          "tagId": 30940,
          "name": "shooter-game",
          "slug": "shooter-game"
        }
      ],
      "esrbRating": {
        "id": 3,
        "name": "Teen",
        "slug": "teen"
      },
      "shortScreenshots": [
        {
          "image": "https://media.rawg.io/media/games/b11/b11127b9ee3c3701bd15b9af3286d20e.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/44e/44ee071065eaf9b8ff12a6f605a21b9e.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/4a3/4a387032daa1c9c38d8998183b583de6.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/834/834b26b819343ceff1ab7ae187b79492.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/28b/28b4a9a7aa79803c1831ef2f3fff4566.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/535/535edb2ee1fa8453e51adfc24d0ac392.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/cb6/cb6a27d36bc5716ffbdec90cba9f1eaf_fEUPxPV.jpg"
        }
      ],
      "trailers": [],
      "__v": 0,
      "createdAt": {
        "$date": "2025-04-28T21:39:04.920Z"
      },
      "updatedAt": {
        "$date": "2025-05-11T08:37:19.801Z"
      },
      "price": 51,
      "description": "VALORANT is your global competitive stage. It’s a 5v5 tac-shooter matchup to plant or defuse the Spike in a one-life-per-round, first to 13 series. More than guns and bullets, you’ll choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine.\nCreativity is your greatest weapon.\nThe Agents\nAgents and their signature abilities are how you win with skill and style. Adapt and outplay in the role of either a Duelist, Initiator, Controller, or Sentinel.\nThe Maps\nHaven. Bind. Split. Ascent. Each a stage for a multitude of savvy plays, agent clutches, and team strategies.\nUnique with their own strategic environment",
      "purchaseCount": 0
    },
    {
      "_id": {
        "$oid": "680ff575168c884acaae27fe"
      },
      "rawgId": 455597,
      "slug": "it-takes-two-2",
      "name": "It Takes Two",
      "released": {
        "$date": "2021-03-26T00:00:00.000Z"
      },
      "backgroundImage": "https://media.rawg.io/media/games/d47/d479582ed0a46496ad34f65c7099d7e5.jpg",
      "rating": 8.8,
      "ratingTop": 5,
      "ratings": [
        {
          "id": 5,
          "title": "exceptional",
          "count": 1058,
          "percent": 66.08
        },
        {
          "id": 4,
          "title": "recommended",
          "count": 386,
          "percent": 24.11
        },
        {
          "id": 1,
          "title": "skip",
          "count": 79,
          "percent": 4.93
        },
        {
          "id": 3,
          "title": "meh",
          "count": 78,
          "percent": 4.87
        }
      ],
      "ratingsCount": 1565,
      "metacritic": 88,
      "reviewsCount": 1601,
      "platforms": [
        {
          "platformId": 187,
          "name": "PlayStation 5",
          "slug": "playstation5"
        },
        {
          "platformId": 186,
          "name": "Xbox Series S/X",
          "slug": "xbox-series-x"
        },
        {
          "platformId": 18,
          "name": "PlayStation 4",
          "slug": "playstation4"
        },
        {
          "platformId": 4,
          "name": "PC",
          "slug": "pc"
        },
        {
          "platformId": 7,
          "name": "Nintendo Switch",
          "slug": "nintendo-switch"
        },
        {
          "platformId": 1,
          "name": "Xbox One",
          "slug": "xbox-one"
        }
      ],
      "parentPlatforms": [
        {
          "platformId": 1,
          "name": "PC",
          "slug": "pc"
        },
        {
          "platformId": 2,
          "name": "PlayStation",
          "slug": "playstation"
        },
        {
          "platformId": 3,
          "name": "Xbox",
          "slug": "xbox"
        },
        {
          "platformId": 7,
          "name": "Nintendo",
          "slug": "nintendo"
        }
      ],
      "stores": [
        {
          "storeId": 6,
          "name": "Nintendo Store",
          "slug": "nintendo",
          "domain": "",
          "url": ""
        },
        {
          "storeId": 1,
          "name": "Steam",
          "slug": "steam",
          "domain": "",
          "url": ""
        },
        {
          "storeId": 2,
          "name": "Xbox Store",
          "slug": "xbox-store",
          "domain": "",
          "url": ""
        },
        {
          "storeId": 3,
          "name": "PlayStation Store",
          "slug": "playstation-store",
          "domain": "",
          "url": ""
        }
      ],
      "tags": [
        {
          "tagId": 40847,
          "name": "Steam Achievements",
          "slug": "steam-achievements"
        },
        {
          "tagId": 7,
          "name": "Multiplayer",
          "slug": "multiplayer"
        },
        {
          "tagId": 40836,
          "name": "Full controller support",
          "slug": "full-controller-support"
        },
        {
          "tagId": 18,
          "name": "Co-op",
          "slug": "co-op"
        },
        {
          "tagId": 118,
          "name": "Story Rich",
          "slug": "story-rich"
        },
        {
          "tagId": 411,
          "name": "cooperative",
          "slug": "cooperative"
        },
        {
          "tagId": 9,
          "name": "Online Co-Op",
          "slug": "online-co-op"
        },
        {
          "tagId": 6,
          "name": "Exploration",
          "slug": "exploration"
        },
        {
          "tagId": 189,
          "name": "Female Protagonist",
          "slug": "female-protagonist"
        },
        {
          "tagId": 198,
          "name": "Split Screen",
          "slug": "split-screen"
        },
        {
          "tagId": 75,
          "name": "Local Co-Op",
          "slug": "local-co-op"
        },
        {
          "tagId": 69,
          "name": "Action-Adventure",
          "slug": "action-adventure"
        },
        {
          "tagId": 97,
          "name": "Action RPG",
          "slug": "action-rpg"
        },
        {
          "tagId": 82,
          "name": "Magic",
          "slug": "magic"
        },
        {
          "tagId": 406,
          "name": "Story",
          "slug": "story"
        },
        {
          "tagId": 40937,
          "name": "Steam Trading Cards",
          "slug": "steam-trading-cards-2"
        },
        {
          "tagId": 413,
          "name": "online",
          "slug": "online"
        },
        {
          "tagId": 229,
          "name": "3D Platformer",
          "slug": "3d-platformer"
        },
        {
          "tagId": 808,
          "name": "character",
          "slug": "character"
        },
        {
          "tagId": 572,
          "name": "Emotional",
          "slug": "emotional"
        },
        {
          "tagId": 5816,
          "name": "console",
          "slug": "console"
        },
        {
          "tagId": 59643,
          "name": "Протагонистка",
          "slug": "protagonistka"
        },
        {
          "tagId": 45201,
          "name": "Remote Play Together",
          "slug": "remote-play-together"
        },
        {
          "tagId": 4565,
          "name": "offline",
          "slug": "offline"
        },
        {
          "tagId": 46112,
          "name": "Shared/Split Screen Co-op",
          "slug": "sharedsplit-screen-co-op"
        },
        {
          "tagId": 163,
          "name": "Co-op Campaign",
          "slug": "co-op-campaign"
        },
        {
          "tagId": 1709,
          "name": "work",
          "slug": "work"
        },
        {
          "tagId": 1652,
          "name": "night",
          "slug": "night"
        },
        {
          "tagId": 2232,
          "name": "journey",
          "slug": "journey"
        },
        {
          "tagId": 569,
          "name": "Minigames",
          "slug": "minigames"
        },
        {
          "tagId": 892,
          "name": "love",
          "slug": "love"
        },
        {
          "tagId": 316,
          "name": "Mining",
          "slug": "mining"
        },
        {
          "tagId": 3397,
          "name": "light",
          "slug": "light"
        },
        {
          "tagId": 3626,
          "name": "treasure",
          "slug": "treasure"
        },
        {
          "tagId": 688,
          "name": "relationship",
          "slug": "relationship"
        },
        {
          "tagId": 2774,
          "name": "learn",
          "slug": "learn"
        },
        {
          "tagId": 4451,
          "name": "obstacles",
          "slug": "obstacles"
        },
        {
          "tagId": 2353,
          "name": "delivery",
          "slug": "delivery"
        }
      ],
      "esrbRating": {
        "id": 2,
        "name": "Everyone 10+",
        "slug": "everyone-10-plus"
      },
      "shortScreenshots": [
        {
          "image": "https://media.rawg.io/media/games/d47/d479582ed0a46496ad34f65c7099d7e5.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/252/252844a85405a3147440806709a47f79.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/88a/88a0a4d7a1f4dbe78c2c34810afcaffa.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/bef/bef5d6085129fda4d26a2293b9edb30e.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/0f1/0f157efb373e3c5da268f2ecdb03701e.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/5f4/5f429ee02d86be1822963fd0a77a71ab.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/c01/c01d8a0c413b3a065ea52b80f1ad6212.jpg"
        }
      ],
      "trailers": [],
      "__v": 0,
      "createdAt": {
        "$date": "2025-04-28T21:39:04.786Z"
      },
      "updatedAt": {
        "$date": "2025-05-11T08:17:50.339Z"
      },
      "price": 22,
      "description": "Bring your favorite co-op partner and together step into the shoes of May and Cody. As the couple is going through a divorce, through unknown means their minds are transported into two dolls which their daughter, Rose, made to represent them. Now they must reluctantly find a way to get back into their bodies, a quest which takes them through the most wild, unexpected and fantastical journey imaginable.\nIt Takes Two further builds on Hazelight’s proven track record of making rich and engaging co-op experiences. While developing It Takes Two it has been the team’s number one priority to truly merge story and gameplay. Allowing both to influence each other guarantees a game that is as engaging to play as it is compelling to experience.",
      "purchaseCount": 0
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
      "_id": {
        "$oid": "680ff575168c884acaae2693"
      },
      "rawgId": 3498,
      "slug": "grand-theft-auto-v",
      "name": "Grand Theft Auto V",
      "released": {
        "$date": "2013-09-17T00:00:00.000Z"
      },
      "backgroundImage": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
      "rating": 9.2,
      "ratingTop": 5,
      "ratings": [
        {
          "id": 5,
          "title": "exceptional",
          "count": 4246,
          "percent": 59.01
        },
        {
          "id": 4,
          "title": "recommended",
          "count": 2354,
          "percent": 32.72
        },
        {
          "id": 3,
          "title": "meh",
          "count": 457,
          "percent": 6.35
        },
        {
          "id": 1,
          "title": "skip",
          "count": 138,
          "percent": 1.92
        }
      ],
      "ratingsCount": 7083,
      "metacritic": 92,
      "reviewsCount": 7195,
      "platforms": [
        {
          "platformId": 4,
          "name": "PC",
          "slug": "pc"
        },
        {
          "platformId": 187,
          "name": "PlayStation 5",
          "slug": "playstation5"
        },
        {
          "platformId": 186,
          "name": "Xbox Series S/X",
          "slug": "xbox-series-x"
        },
        {
          "platformId": 18,
          "name": "PlayStation 4",
          "slug": "playstation4"
        },
        {
          "platformId": 16,
          "name": "PlayStation 3",
          "slug": "playstation3"
        },
        {
          "platformId": 14,
          "name": "Xbox 360",
          "slug": "xbox360"
        },
        {
          "platformId": 1,
          "name": "Xbox One",
          "slug": "xbox-one"
        }
      ],
      "parentPlatforms": [
        {
          "platformId": 1,
          "name": "PC",
          "slug": "pc"
        },
        {
          "platformId": 2,
          "name": "PlayStation",
          "slug": "playstation"
        },
        {
          "platformId": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      ],
      "stores": [
        {
          "storeId": 1,
          "name": "Steam",
          "slug": "steam",
          "domain": "",
          "url": ""
        },
        {
          "storeId": 3,
          "name": "PlayStation Store",
          "slug": "playstation-store",
          "domain": "",
          "url": ""
        },
        {
          "storeId": 11,
          "name": "Epic Games",
          "slug": "epic-games",
          "domain": "",
          "url": ""
        },
        {
          "storeId": 7,
          "name": "Xbox 360 Store",
          "slug": "xbox360",
          "domain": "",
          "url": ""
        },
        {
          "storeId": 2,
          "name": "Xbox Store",
          "slug": "xbox-store",
          "domain": "",
          "url": ""
        }
      ],
      "tags": [
        {
          "tagId": 31,
          "name": "Singleplayer",
          "slug": "singleplayer"
        },
        {
          "tagId": 40847,
          "name": "Steam Achievements",
          "slug": "steam-achievements"
        },
        {
          "tagId": 7,
          "name": "Multiplayer",
          "slug": "multiplayer"
        },
        {
          "tagId": 40836,
          "name": "Full controller support",
          "slug": "full-controller-support"
        },
        {
          "tagId": 13,
          "name": "Atmospheric",
          "slug": "atmospheric"
        },
        {
          "tagId": 42,
          "name": "Great Soundtrack",
          "slug": "great-soundtrack"
        },
        {
          "tagId": 24,
          "name": "RPG",
          "slug": "rpg"
        },
        {
          "tagId": 18,
          "name": "Co-op",
          "slug": "co-op"
        },
        {
          "tagId": 36,
          "name": "Open World",
          "slug": "open-world"
        },
        {
          "tagId": 411,
          "name": "cooperative",
          "slug": "cooperative"
        },
        {
          "tagId": 8,
          "name": "First-Person",
          "slug": "first-person"
        },
        {
          "tagId": 149,
          "name": "Third Person",
          "slug": "third-person"
        },
        {
          "tagId": 4,
          "name": "Funny",
          "slug": "funny"
        },
        {
          "tagId": 37,
          "name": "Sandbox",
          "slug": "sandbox"
        },
        {
          "tagId": 123,
          "name": "Comedy",
          "slug": "comedy"
        },
        {
          "tagId": 150,
          "name": "Third-Person Shooter",
          "slug": "third-person-shooter"
        },
        {
          "tagId": 62,
          "name": "Moddable",
          "slug": "moddable"
        },
        {
          "tagId": 144,
          "name": "Crime",
          "slug": "crime"
        },
        {
          "tagId": 62349,
          "name": "vr mod",
          "slug": "vr-mod"
        }
      ],
      "esrbRating": {
        "id": 4,
        "name": "Mature",
        "slug": "mature"
      },
      "shortScreenshots": [
        {
          "image": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg"
        }
      ],
      "trailers": [],
      "__v": 0,
      "createdAt": {
        "$date": "2025-04-28T21:39:04.756Z"
      },
      "updatedAt": {
        "$date": "2025-05-11T08:14:35.892Z"
      },
      "price": 58,
      "purchaseCount": 0,
      "description": "Rockstar Games went bigger, since their previous installment of the series. You get the complicated and realistic world-building from Liberty City of GTA4 in the setting of lively and diverse Los Santos, from an old fan favorite GTA San Andreas. 561 different vehicles (including every transport you can operate) and the amount is rising with every update. \nSimultaneous storytelling from three unique perspectives: \nFollow Michael, ex-criminal living his life of leisure away from the past, Franklin, a kid that seeks the better future, and Trevor, the exact past Michael is trying to run away from. \nGTA Online will provide a lot of additional challenge even for the experienced players, coming fresh from the story mode. Now you will have other players around that can help you just as likely as ruin your mission. Every GTA mechanic up to date can be experienced by players through the unique customizable character, and community content paired with the leveling system tends to keep everyone busy and engaged.\nEspañol\nRockstar Games se hizo más grande desde su entrega anterior de la serie. Obtienes la construcción del mundo complicada y realista de Liberty City de GTA4 en el escenario de Los Santos, un viejo favorito de los fans, GTA San Andreas. 561 vehículos diferentes (incluidos todos los transportes que puede operar) y la cantidad aumenta con cada actualización.\nNarración simultánea desde tres perspectivas únicas:\nSigue a Michael, ex-criminal que vive su vida de ocio lejos del pasado, Franklin, un niño que busca un futuro mejor, y Trevor, el pasado exacto del que Michael está tratando de huir.\nGTA Online proporcionará muchos desafíos adicionales incluso para los jugadores experimentados, recién llegados del modo historia. Ahora tendrás otros jugadores cerca que pueden ayudarte con la misma probabilidad que arruinar tu misión. Los jugadores pueden experimentar todas las mecánicas de GTA actualizadas a través del personaje personalizable único, y el contenido de la comunidad combinado con el sistema de nivelación tiende a mantener a todos ocupados y comprometidos."
    },
    {
      "_id": {
        "$oid": "680ff575168c884acaae26aa"
      },
      "rawgId": 10213,
      "slug": "dota-2",
      "name": "Dota 2",
      "released": {
        "$date": "2013-07-09T00:00:00.000Z"
      },
      "backgroundImage": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",
      "rating": 9,
      "ratingTop": 3,
      "ratings": [
        {
          "id": 3,
          "title": "meh",
          "count": 915,
          "percent": 32.15
        },
        {
          "id": 4,
          "title": "recommended",
          "count": 769,
          "percent": 27.02
        },
        {
          "id": 1,
          "title": "skip",
          "count": 727,
          "percent": 25.54
        },
        {
          "id": 5,
          "title": "exceptional",
          "count": 435,
          "percent": 15.28
        }
      ],
      "ratingsCount": 2808,
      "metacritic": 90,
      "reviewsCount": 2846,
      "platforms": [
        {
          "platformId": 6,
          "name": "Linux",
          "slug": "linux"
        },
        {
          "platformId": 5,
          "name": "macOS",
          "slug": "macos"
        },
        {
          "platformId": 4,
          "name": "PC",
          "slug": "pc"
        }
      ],
      "parentPlatforms": [
        {
          "platformId": 1,
          "name": "PC",
          "slug": "pc"
        },
        {
          "platformId": 5,
          "name": "Apple Macintosh",
          "slug": "mac"
        },
        {
          "platformId": 6,
          "name": "Linux",
          "slug": "linux"
        }
      ],
      "stores": [
        {
          "storeId": 1,
          "name": "Steam",
          "slug": "steam",
          "domain": "",
          "url": ""
        }
      ],
      "tags": [
        {
          "tagId": 7,
          "name": "Multiplayer",
          "slug": "multiplayer"
        },
        {
          "tagId": 7808,
          "name": "steam-trading-cards",
          "slug": "steam-trading-cards"
        },
        {
          "tagId": 24,
          "name": "RPG",
          "slug": "rpg"
        },
        {
          "tagId": 18,
          "name": "Co-op",
          "slug": "co-op"
        },
        {
          "tagId": 411,
          "name": "cooperative",
          "slug": "cooperative"
        },
        {
          "tagId": 9,
          "name": "Online Co-Op",
          "slug": "online-co-op"
        },
        {
          "tagId": 64,
          "name": "Fantasy",
          "slug": "fantasy"
        },
        {
          "tagId": 49,
          "name": "Difficult",
          "slug": "difficult"
        },
        {
          "tagId": 79,
          "name": "Free to Play",
          "slug": "free-to-play"
        },
        {
          "tagId": 97,
          "name": "Action RPG",
          "slug": "action-rpg"
        },
        {
          "tagId": 40852,
          "name": "Steam Workshop",
          "slug": "steam-workshop"
        },
        {
          "tagId": 157,
          "name": "PvP",
          "slug": "pvp"
        },
        {
          "tagId": 40837,
          "name": "In-App Purchases",
          "slug": "in-app-purchases"
        },
        {
          "tagId": 121,
          "name": "Character Customization",
          "slug": "character-customization"
        },
        {
          "tagId": 5,
          "name": "Replay Value",
          "slug": "replay-value"
        },
        {
          "tagId": 11,
          "name": "Team-Based",
          "slug": "team-based"
        },
        {
          "tagId": 168,
          "name": "RTS",
          "slug": "rts"
        },
        {
          "tagId": 170,
          "name": "Competitive",
          "slug": "competitive"
        },
        {
          "tagId": 40856,
          "name": "Valve Anti-Cheat enabled",
          "slug": "valve-anti-cheat-enabled"
        },
        {
          "tagId": 65,
          "name": "Tower Defense",
          "slug": "tower-defense"
        },
        {
          "tagId": 169,
          "name": "MOBA",
          "slug": "moba"
        },
        {
          "tagId": 73,
          "name": "e-sports",
          "slug": "e-sports"
        },
        {
          "tagId": 40909,
          "name": "SteamVR Collectibles",
          "slug": "steamvr-collectibles"
        }
      ],
      "shortScreenshots": [
        {
          "image": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/cef/cefd0f45c88be2d6e2ff7eed94c16cf3.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/e2a/e2a1a6c8b07bcdb91d7c6050b16854c5.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/55e/55e2c2ff16229eef87cfd8728ca537ac.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/601/601ceb08d04da42f4de5d8b9016f31a6.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/f02/f02a389dafd748b801cb4ff971a868af.jpg"
        },
        {
          "image": "https://media.rawg.io/media/screenshots/da6/da6e4cba4e5787674d0e6877d1fc426a.jpg"
        }
      ],
      "trailers": [],
      "__v": 0,
      "createdAt": {
        "$date": "2025-04-28T21:39:04.760Z"
      },
      "updatedAt": {
        "$date": "2025-05-11T08:15:24.753Z"
      },
      "price": 49,
      "purchaseCount": 0,
      "description": "What used to be an unofficial modded map for the Warcraft 3, ended up being the most budgeted cybersport discipline, gathering millions of people to watch annual international championships.\nMOBA genre started with the DOTA, Defense of the Ancients, which can be efficiently described as 5 vs 5 top-down action strategy game, during which players are tasked to destroy the enemy core while protecting their own.\nPlayers can pick out of the roster of 112 heroes and battle on the single map while taking advantage of field vision, resources and item build that can either make heroes stronger or disable the enemy. DOTA 2 is still active, and receives updates weekly, reshaping metas and refreshing game balance, if by any chance some heroes became unreasonably strong. Each hero has not only a unique set of abilities but is fully customizable, through getting items for heroes after matches of through the trade. Not only heroes but terrain, couriers, that deliver items for you and even match announcers, that can be voiced by heroes, professional casters of just memorable characters from other forms of media."
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
      id: '98652366',
      product: 'League of Legends',
      orders: 50,
      status: 'Approved',
      amount: 90.29,
    },
    {
      id: '94564503',
      product: 'Valorant',
      orders: 40,
      status: 'Rejected',
      amount: 542.5,
    },
    {
      id: '98732623',
      product: 'It Takes Two',
      orders: 69,
      status: 'Rejected',
      amount: 29.5,
    },
    {
      id: '12345678',
      product: 'Grand Theft Auto V',
      orders: 125,
      status: 'Rejected',
      amount: 270.99,
    },
    {
      id: '12360564',
      product: 'The Witcher 3: Wild Hunt',
      orders: 100,
      status: 'Approved',
      amount: 583.46,
    },
    {
      id: '86728656',
      product: 'Counter-Strike: Global Offensive',
      orders: 99,
      status: 'Pending',
      amount: 810.8,
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
