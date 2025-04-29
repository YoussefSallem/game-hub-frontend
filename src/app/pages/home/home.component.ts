import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiGamesService } from '../../services/api-games.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  // list = [
  //   {
  //     _id: {
  //       $oid: '680ff575168c884acaae2b0b',
  //     },
  //     rawgId: 303576,
  //     slug: 'vampire-the-masquerade-bloodlines-2',
  //     name: 'Vampire: The Masquerade - Bloodlines 2',
  //     released: {
  //       $date: '2025-10-31T00:00:00.000Z',
  //     },
  //     backgroundImage:
  //       'https://media.rawg.io/media/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg',
  //     rating: 3.87,
  //     ratingTop: 5,
  //     ratings: [
  //       {
  //         id: 5,
  //         title: 'exceptional',
  //         count: 133,
  //         percent: 45.39,
  //       },
  //       {
  //         id: 4,
  //         title: 'recommended',
  //         count: 84,
  //         percent: 28.67,
  //       },
  //       {
  //         id: 1,
  //         title: 'skip',
  //         count: 47,
  //         percent: 16.04,
  //       },
  //       {
  //         id: 3,
  //         title: 'meh',
  //         count: 29,
  //         percent: 9.9,
  //       },
  //     ],
  //     ratingsCount: 284,
  //     metacritic: null,
  //     reviewsCount: 293,
  //     platforms: [
  //       {
  //         platformId: 4,
  //         name: 'PC',
  //         slug: 'pc',
  //       },
  //       {
  //         platformId: 187,
  //         name: 'PlayStation 5',
  //         slug: 'playstation5',
  //       },
  //       {
  //         platformId: 186,
  //         name: 'Xbox Series S/X',
  //         slug: 'xbox-series-x',
  //       },
  //       {
  //         platformId: 1,
  //         name: 'Xbox One',
  //         slug: 'xbox-one',
  //       },
  //       {
  //         platformId: 18,
  //         name: 'PlayStation 4',
  //         slug: 'playstation4',
  //       },
  //     ],
  //     parentPlatforms: [
  //       {
  //         platformId: 1,
  //         name: 'PC',
  //         slug: 'pc',
  //       },
  //       {
  //         platformId: 2,
  //         name: 'PlayStation',
  //         slug: 'playstation',
  //       },
  //       {
  //         platformId: 3,
  //         name: 'Xbox',
  //         slug: 'xbox',
  //       },
  //     ],
  //     stores: [
  //       {
  //         storeId: 5,
  //         name: 'GOG',
  //         slug: 'gog',
  //         domain: '',
  //         url: '',
  //       },
  //       {
  //         storeId: 11,
  //         name: 'Epic Games',
  //         slug: 'epic-games',
  //         domain: '',
  //         url: '',
  //       },
  //       {
  //         storeId: 1,
  //         name: 'Steam',
  //         slug: 'steam',
  //         domain: '',
  //         url: '',
  //       },
  //     ],
  //     tags: [
  //       {
  //         tagId: 31,
  //         name: 'Singleplayer',
  //         slug: 'singleplayer',
  //       },
  //       {
  //         tagId: 40847,
  //         name: 'Steam Achievements',
  //         slug: 'steam-achievements',
  //       },
  //       {
  //         tagId: 40836,
  //         name: 'Full controller support',
  //         slug: 'full-controller-support',
  //       },
  //       {
  //         tagId: 13,
  //         name: 'Atmospheric',
  //         slug: 'atmospheric',
  //       },
  //       {
  //         tagId: 42,
  //         name: 'Great Soundtrack',
  //         slug: 'great-soundtrack',
  //       },
  //       {
  //         tagId: 24,
  //         name: 'RPG',
  //         slug: 'rpg',
  //       },
  //       {
  //         tagId: 118,
  //         name: 'Story Rich',
  //         slug: 'story-rich',
  //       },
  //       {
  //         tagId: 36,
  //         name: 'Open World',
  //         slug: 'open-world',
  //       },
  //       {
  //         tagId: 8,
  //         name: 'First-Person',
  //         slug: 'first-person',
  //       },
  //       {
  //         tagId: 16,
  //         name: 'Horror',
  //         slug: 'horror',
  //       },
  //       {
  //         tagId: 26,
  //         name: 'Gore',
  //         slug: 'gore',
  //       },
  //       {
  //         tagId: 34,
  //         name: 'Violent',
  //         slug: 'violent',
  //       },
  //       {
  //         tagId: 300,
  //         name: 'Vampire',
  //         slug: 'vampire',
  //       },
  //     ],
  //     shortScreenshots: [
  //       {
  //         image:
  //           'https://media.rawg.io/media/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg',
  //       },
  //       {
  //         image:
  //           'https://media.rawg.io/media/screenshots/831/8314575622c6ac8de538e890ec6a2aab.jpg',
  //       },
  //       {
  //         image:
  //           'https://media.rawg.io/media/screenshots/eb7/eb7d75e25be2c76d6e1bd454f2071aad.jpg',
  //       },
  //       {
  //         image:
  //           'https://media.rawg.io/media/screenshots/b71/b71ee1cd39f5e8685900b47980d715a1_I3dtqc6.jpg',
  //       },
  //       {
  //         image:
  //           'https://media.rawg.io/media/screenshots/291/29185669bd2fdf8c0ec10fcf10da3063.jpg',
  //       },
  //       {
  //         image:
  //           'https://media.rawg.io/media/screenshots/7ba/7ba2d1b2998ae2c76c3ef3509ea8e104.jpg',
  //       },
  //       {
  //         image:
  //           'https://media.rawg.io/media/screenshots/234/234c1ba4292f69ffc3c988dab739fa91.jpg',
  //       },
  //     ],
  //     trailers: [],
  //     __v: 0,
  //     createdAt: {
  //       $date: '2025-04-28T21:39:04.831Z',
  //     },
  //     updatedAt: {
  //       $date: '2025-04-28T21:39:04.831Z',
  //     },
  //   },
  //   {
  //     _id: {
  //       $oid: '680ff577168c884acaae3d1e',
  //     },
  //     rawgId: 471025,
  //     slug: 'avowed',
  //     name: 'Avowed',
  //     released: {
  //       $date: '2025-02-18T00:00:00.000Z',
  //     },
  //     backgroundImage:
  //       'https://media.rawg.io/media/games/3d3/3d33abf32d9fb92b9f242917abe276ba.jpg',
  //     rating: 3.27,
  //     ratingTop: 4,
  //     ratings: [
  //       {
  //         id: 4,
  //         title: 'recommended',
  //         count: 22,
  //         percent: 37.29,
  //       },
  //       {
  //         id: 3,
  //         title: 'meh',
  //         count: 14,
  //         percent: 23.73,
  //       },
  //       {
  //         id: 1,
  //         title: 'skip',
  //         count: 13,
  //         percent: 22.03,
  //       },
  //       {
  //         id: 5,
  //         title: 'exceptional',
  //         count: 10,
  //         percent: 16.95,
  //       },
  //     ],
  //     ratingsCount: 57,
  //     metacritic: null,
  //     reviewsCount: 59,
  //     platforms: [
  //       {
  //         platformId: 4,
  //         name: 'PC',
  //         slug: 'pc',
  //       },
  //       {
  //         platformId: 186,
  //         name: 'Xbox Series S/X',
  //         slug: 'xbox-series-x',
  //       },
  //     ],
  //     parentPlatforms: [
  //       {
  //         platformId: 1,
  //         name: 'PC',
  //         slug: 'pc',
  //       },
  //       {
  //         platformId: 3,
  //         name: 'Xbox',
  //         slug: 'xbox',
  //       },
  //     ],
  //     stores: [
  //       {
  //         storeId: 1,
  //         name: 'Steam',
  //         slug: 'steam',
  //         domain: '',
  //         url: '',
  //       },
  //     ],
  //     tags: [
  //       {
  //         tagId: 31,
  //         name: 'Singleplayer',
  //         slug: 'singleplayer',
  //       },
  //       {
  //         tagId: 40847,
  //         name: 'Steam Achievements',
  //         slug: 'steam-achievements',
  //       },
  //       {
  //         tagId: 40836,
  //         name: 'Full controller support',
  //         slug: 'full-controller-support',
  //       },
  //       {
  //         tagId: 40849,
  //         name: 'Steam Cloud',
  //         slug: 'steam-cloud',
  //       },
  //       {
  //         tagId: 13,
  //         name: 'Atmospheric',
  //         slug: 'atmospheric',
  //       },
  //       {
  //         tagId: 24,
  //         name: 'RPG',
  //         slug: 'rpg',
  //       },
  //       {
  //         tagId: 118,
  //         name: 'Story Rich',
  //         slug: 'story-rich',
  //       },
  //       {
  //         tagId: 36,
  //         name: 'Open World',
  //         slug: 'open-world',
  //       },
  //       {
  //         tagId: 8,
  //         name: 'First-Person',
  //         slug: 'first-person',
  //       },
  //       {
  //         tagId: 149,
  //         name: 'Third Person',
  //         slug: 'third-person',
  //       },
  //       {
  //         tagId: 64,
  //         name: 'Fantasy',
  //         slug: 'fantasy',
  //       },
  //       {
  //         tagId: 34,
  //         name: 'Violent',
  //         slug: 'violent',
  //       },
  //       {
  //         tagId: 97,
  //         name: 'Action RPG',
  //         slug: 'action-rpg',
  //       },
  //       {
  //         tagId: 11669,
  //         name: 'stats',
  //         slug: 'stats',
  //       },
  //       {
  //         tagId: 121,
  //         name: 'Character Customization',
  //         slug: 'character-customization',
  //       },
  //       {
  //         tagId: 145,
  //         name: 'Choices Matter',
  //         slug: 'choices-matter',
  //       },
  //       {
  //         tagId: 165,
  //         name: 'Colorful',
  //         slug: 'colorful',
  //       },
  //       {
  //         tagId: 571,
  //         name: '3D',
  //         slug: '3d',
  //       },
  //       {
  //         tagId: 192,
  //         name: 'Mature',
  //         slug: 'mature',
  //       },
  //       {
  //         tagId: 1465,
  //         name: 'combat',
  //         slug: 'combat',
  //       },
  //       {
  //         tagId: 82,
  //         name: 'Magic',
  //         slug: 'magic',
  //       },
  //       {
  //         tagId: 40937,
  //         name: 'Steam Trading Cards',
  //         slug: 'steam-trading-cards-2',
  //       },
  //       {
  //         tagId: 91686,
  //         name: 'Family Sharing',
  //         slug: 'family-sharing',
  //       },
  //       {
  //         tagId: 42410,
  //         name: 'LGBTQ+',
  //         slug: 'lgbtq-2',
  //       },
  //     ],
  //     esrbRating: {
  //       id: 6,
  //       name: 'Rating Pending',
  //       slug: 'rating-pending',
  //     },
  //     shortScreenshots: [
  //       {
  //         image:
  //           'https://media.rawg.io/media/games/3d3/3d33abf32d9fb92b9f242917abe276ba.jpg',
  //       },
  //       {
  //         image:
  //           'https://media.rawg.io/media/screenshots/ac3/ac3579b4cbc333f2b18ee552027093bb.jpg',
  //       },
  //       {
  //         image:
  //           'https://media.rawg.io/media/screenshots/100/1006c41b4aba7ab83b5cb5bdbb37ca2c.jpg',
  //       },
  //       {
  //         image:
  //           'https://media.rawg.io/media/screenshots/287/2877abf64cdbfe978aab512d45031729.jpg',
  //       },
  //       {
  //         image:
  //           'https://media.rawg.io/media/screenshots/c37/c37345ff1a95b341137fcafd0ad7179f.jpg',
  //       },
  //       {
  //         image:
  //           'https://media.rawg.io/media/screenshots/675/67578060d4231329e6ec9574e528fae8.jpg',
  //       },
  //       {
  //         image:
  //           'https://media.rawg.io/media/screenshots/4a1/4a1f99895c69ff14d756c9ee44514552.jpg',
  //       },
  //     ],
  //     trailers: [],
  //     __v: 0,
  //     createdAt: {
  //       $date: '2025-04-28T21:39:05.090Z',
  //     },
  //     updatedAt: {
  //       $date: '2025-04-28T21:39:05.090Z',
  //     },
  //   },
  // ];
  list: any = [];
  constructor(private _apiGamesService: ApiGamesService) {}

  ngOnInit(): void {
    this._apiGamesService.getAllGames().subscribe({
      next: (res) => {
        console.log(res);
        this.list = res; // 8200 data
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
