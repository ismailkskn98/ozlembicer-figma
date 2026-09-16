const searchDataConfig = [
   {
      "id": 1,
      "type": "page",
      "href": "/",
      "image": null
   },
   {
      "id": 2,
      "type": "page",
      "href": "/about-us",
      "image": null
   },
   {
      "id": 3,
      "type": "page",
      "href": "/about-us/dr-ozlem-bicer",
      "image": null
   },
   {
      "id": 4,
      "type": "page",
      "href": "/about-us/clinic-team",
      "image": null
   },
   {
      "id": 5,
      "type": "page",
      "href": "/about-us/pricing",
      "image": null
   },
   {
      "id": 6,
      "type": "page",
      "href": "/hair-loss",
      "image": null
   },
   {
      "id": 7,
      "type": "page",
      "href": "/hair-loss/couses-of-hair-loss/male-hair-loss",
      "image": null
   },
   {
      "id": 8,
      "type": "page",
      "href": "/hair-loss/couses-of-hair-loss/female-hair-loss",
      "image": null
   },
   {
      "id": 9,
      "type": "page",
      "href": "/hair-loss/treatments-of-hair-loss/hair-mesotherapy",
      "image": null
   },
   {
      "id": 10,
      "type": "page",
      "href": "/hair-loss/treatments-of-hair-loss/prp-hair-treatment",
      "image": null
   },
   {
      "id": 11,
      "type": "page",
      "href": "/hair-loss/treatments-of-hair-loss/stamp-cell-treatment",
      "image": null
   },
   {
      "id": 12,
      "type": "page",
      "href": "/hair-loss/treatments-of-hair-loss/trichopat-treatment",
      "image": null
   },
   {
      "id": 13,
      "type": "page",
      "href": "/hair-transplant",
      "image": null
   },
   {
      "id": 14,
      "type": "page",
      "href": "/hair-transplant#fue-micro-motor",
      "image": null
   },
   {
      "id": 15,
      "type": "page",
      "href": "/hair-transplant#fue-manuel",
      "image": null
   },
   {
      "id": 16,
      "type": "page",
      "href": "/hair-transplant#body-hair-transplant",
      "image": null
   },
   {
      "id": 17,
      "type": "page",
      "href": "/hair-transplant#reconstructive-hair-transplant",
      "image": null
   },
   {
      "id": 18,
      "type": "page",
      "href": "/hair-transplant#long-hair",
      "image": null
   },
   {
      "id": 19,
      "type": "page",
      "href": "/hair-transplant#fut",
      "image": null
   },
   {
      "id": 20,
      "type": "page",
      "href": "/beard-transplantation",
      "image": null
   },
   {
      "id": 21,
      "type": "page",
      "href": "/eyebrown-transplant",
      "image": null
   },
   {
      "id": 22,
      "type": "page",
      "href": "/gallery",
      "image": null
   },
   {
      "id": 23,
      "type": "page",
      "href": "/gallery/before-after-images",
      "image": null
   },
   {
      "id": 24,
      "type": "page",
      "href": "/hair-loss/couses-of-hair-loss",
      "image": null
   },
   {
      "id": 25,
      "type": "page",
      "href": "/hair-loss/treatments-of-hair-loss",
      "image": null
   },
   {
      "id": 26,
      "type": "page",
      "href": "/guides",
      "image": null
   },
   {
      "id": 27,
      "type": "page",
      "href": "/guides/before-hair-transplantation",
      "image": null
   },
   {
      "id": 28,
      "type": "page",
      "href": "/guides/after-hair-transplantation",
      "image": null
   },
   {
      "id": 29,
      "type": "page",
      "href": "/contact-us",
      "image": null
   },
   {
      "id": 30,
      "type": "page",
      "href": "/hair-wash",
      "image": null
   }
];

export function getSearchData(t) {
   const localizedItems = t.raw('items');

   return searchDataConfig.map((item, index) => ({ ...item, ...localizedItems[index] }));
}
