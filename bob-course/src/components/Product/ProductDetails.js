const products = [
  {
    id: 1245,
    category_name: "Coffee Specials",
    description: "Drink our extra strong Espresso and keep motivated.",
    image:
      "https://d1g9x4k1po579z.cloudfront.net/media/1/product/cover/16121724259301.jpeg",
    name: "Dark Espresso",
    price: 14,
    unit: "Nos",
  },
  {
    category_name: "Coffee Specials",
    description: "Your favorite Americano served with melted caramel atop.",
    id: 1240,
    image:
      "https://d1g9x4k1po579z.cloudfront.net/media/1/product/cover/16121728005424.jpeg",
    name: "Americano with Caramel",
    price: 18,
    unit: "Nos",
  },
  {
    id: 1003182,
    category_name: "Coffee Specials",
    image:
      "https://d1g9x4k1po579z.cloudfront.net/media/1/product/cover/bBwTcsW23zz2uySvfJUNkyIQEXkpw1cMgk9G2hLV.jpeg",
    name: "dasd",
    price: 12,
    unit: "Nos",
  },
  {
    id: 1254,
    category_name: "Fruits",
    image:
      "https://d1g9x4k1po579z.cloudfront.net/media/1/product/cover/16121783784782.jpeg",
    name: "Black Grapes",
    price: 30,
    unit: "Kg",
  },
  {
    category_name: "sample",
    id: 1003408,
    image:
      "https://d1g9x4k1po579z.cloudfront.net/media/1/product/cover/II1UO3IsttZy56eY2f6ao2uh6Ylw03bx4Jrv9DvA.jpeg",
    name: "sample",
    price: 12,
    unit: "Nos",
  },
  {
    category_name: "sample",
    id: 1003409,
    image:
      "https://d1g9x4k1po579z.cloudfront.net/media/1/product/cover/aJ1TrakGWcT5J7rDiX8VhMyWZ3dtBbVnrvtXR88Y.jpeg",
    name: "sample",
    price: 12,
    unit: "Nos",
  },
  {
    category_name: "Fruits",
    description: "Fruity, sweet and juicy",
    id: 1003410,
    image:
      "https://d1g9x4k1po579z.cloudfront.net/media/1/product/cover/AevRSM9m8SF6UjbmlbYzr4OO8hlbqXZ7SwBE1CtF.jpeg",
    name: "Strawberry",
    price: 25,
    unit: "Kg",
  },
  {
    category_name: "Fruits",
    id: 1003411,
    image:
      "https://d1g9x4k1po579z.cloudfront.net/media/1/product/cover/ow8gW767LuswzfLkWGn8qY5QxPEenRbE1rNXtGYg.jpeg",
    name: "Red dragon fruit",
    price: 30,
    unit: "Kg",
  },
  {
    id: 1237,
    category_name: "Coffee Specials",
    description: "A normal cup of coffee made to your likes.",
    image:
      "https://d1g9x4k1po579z.cloudfront.net/media/1/product/cover/16121692947175.jpeg",
    name: "Coffee",
    price: 10,
    unit: "Nos",
  },
  {
    id: 1239,
    category_name: "Coffee Specials",
    category_name: "Coffee Specials",
    description: "An extra creamy Cappuccino for the coffee lover in you.",
    image:
      "https://d1g9x4k1po579z.cloudfront.net/media/1/product/cover/16121697448650.jpeg",
    name: "Creamy Cappuccino",
    price: 18,
    unit: "Nos",
  },
  {
    id: 1233,
    category_name: "Cake",
    description:
      "Delightful complexion of Vanilla and Dark chocolate soft sponge filled in Rich Chocolate cream and completely blended in Dark, White Truffle.",
    image:
      "https://d1g9x4k1po579z.cloudfront.net/media/1/product/cover/iHd7SMsqY2Kpm95yuVzB4D5zcHJol5QoFuOTxo55.jpeg",
    name: "White Vancho cake",
    price: 20,
    unit: "Nos",
  },
  {
    id: 1267,
    category_name: "Mojito",
    description:
      "A special Mixed fruit Mojito from Coffee Republic. This is going to be your favorite.",
    image:
      "https://d1g9x4k1po579z.cloudfront.net/media/1/product/cover/16121750371540.jpeg",
    name: "Mixed Fruit",
    price: 22,
    unit: "Nos",
  },
  {
    id: 1297,
    category_name: "Mojito",
    description: "Perfect summer drink with optional mint flavor.",
    image:
      "https://d1g9x4k1po579z.cloudfront.net/media/1/product/cover/16121745835728.jpeg",
    name: "Watermelon",
    price: 15,
    unit: "Nos",
  },
  {
    id: 1337,
    category_name: "Mojito",
    description: "Its refreshing and healthy with strawberry chips added.",
    image:
      "https://d1g9x4k1po579z.cloudfront.net/media/1/product/cover/16121743193590.jpeg",
    name: "Strawberry",
    price: 20,
    unit: "Nos",
  },
  {
    id: 12567,
    category_name: "Mojito",
    description: "The most refreshing drink to quench your thirst.",
    image:
      "https://d1g9x4k1po579z.cloudfront.net/media/1/product/cover/16121740844879.jpeg",
    name: "Lemon Mint",
    price: 18,
    unit: "Nos",
  },
  {
    category_name: "Sweets test",
    id: 861,
    image:
      "https://d1g9x4k1po579z.cloudfront.net/media/1/product/cover/liZzaJ4ymD0CLhDCRMrWxPxR5yKODq0FbDJFCOUN.jpeg",
    name: "ADASDASD",
    price: 16,
    unit: "kg",
  },
  {
    category_name: "Biriyani",
    id: 1003415,
    image:
      "https://d1g9x4k1po579z.cloudfront.net/media/1/product/cover/Iizyx2FEhXUk69pXAKfOYkMxHV5MGPIeZhpmxo8Y.jpeg",
    name: "Hyderabadi biriyani",
    price: 30,
    unit: "Nos",
  },
  {
    category_name: "Burger",
    id: 1003413,
    image:
      "https://d1g9x4k1po579z.cloudfront.net/media/1/product/cover/1ziz50CRZMjccJkKe7WgyIsqvPLgUJndsQwbUdss.jpeg",
    name: "Turkey burgers",
    price: 12,
    unit: "Nos",
  },
  {
    category_name: "Burger",
    id: 1003414,
    image:
      "https://d1g9x4k1po579z.cloudfront.net/media/1/product/cover/OggLpXqNriSm6cVZ5wRphdAIxkYhjFz5uqq6phJ6.jpeg",
    name: "Beef  burger",
    price: 15,
    unit: "Nos",
  },
  {
    category_name: "Biscuit",
    id: 1003412,
    image:
      "https://d1g9x4k1po579z.cloudfront.net/media/1/product/cover/7d1VomjvtGMlRCC5W5xPBZ7LYXqNz93FHvA6tPy7.jpeg",
    name: "Unibic",
    price: 10,
  },
  {
    category_name: "Pizza",
    description: "Pure Pizza pleasure grilled to perfection.",
    id: 1003407,
    image:
      "https://d1g9x4k1po579z.cloudfront.net/media/1/product/cover/mt09pAoDELg7bAbjPjEUaCBFfyABXkKNd5lA7tvJ.jpeg",
    name: "BBQ chicken pizza",
    price: 15,
  },
];

const orders = [
  {
    id: 10639724,
    created_on: "2021-09-01 07:40:02",
    delivery_address: "Ajman",
    mobile: "43545345345",
    name: "Gabbar Singh",
    order_amt: 4,
  },
  {
    id: 1063972,
    created_on: "2021-09-01 06:14:45",
    delivery_address: "Ajman",
    mobile: "43545345345",
    name: "Gabbar Singh",
    order_amt: 36.66,
  },
  {
    id: 1063304,
    created_on: "2021-08-31 07:53:30",
    delivery_address: "Ajman",
    mobile: "433434",
    name: "Zeeshan",
    order_amt: 0.5,
  },
  {
    id: 1060847,
    created_on: "2021-08-23 11:34:05",
    delivery_address: null,
    mobile: "4545645645",
    name: null,
    order_amt: 3.57,
  },
  {
    id: 1062818,
    created_on: "2021-08-30 15:22:29",
    delivery_address: "Qamar madina\nJurf",
    mobile: "454564345645",
    name: null,
    order_amt: 230,
  },
  {
    id: 1062463,
    created_on: "2021-08-29 18:09:54",
    delivery_address: "Ajman",
    mobile: "4544345645",
    name: null,
    order_amt: 165,
  },
  {
    id: 1062481,
    created_on: "2021-08-29 18:44:44",
    delivery_address: "Meena bilding ajman room 1208",
    mobile: "4556544345645",
    name: null,
    order_amt: 8.5,
  },
  {
    id: 1062425,
    created_on: "2021-08-29 17:01:43",
    delivery_address: "Ajman",
    mobile: "4544345645",
    name: null,
    order_amt: 155,
  },
  {
    id: 1062428,
    created_on: "2021-08-29 17:04:27",
    delivery_address: "Dream Villa, Ajman",
    mobile: "45544345645",
    name: null,
    order_amt: 23.82,
  },
  {
    id: 1062047,
    created_on: "2021-08-28 10:45:40",
    delivery_address: "Ajman",
    mobile: "4544345645",
    name: null,
    order_amt: 26.19,
  },
  {
    id: 1061513,
    coupon_id: null,
    created_on: "2021-08-26 13:54:40",
    delivery_address: "Meena bilding ajman room 1208",
    mobile: "4556544345645",
    name: null,
    order_amt: 6.19,
  },
  {
    id: 1061495,
    created_on: "2021-08-26 12:53:14",
    delivery_address: "qamar",
    mobile: "455443475645",
    name: null,
    order_amt: 5.48,
  },
  {
    id: 1054606,
    created_on: "2021-08-05 10:55:02",
    delivery_address: ",Liberty street, San Francisco",
    mobile: "058598123456",
    name: null,
    order_amt: 3.33,
  },
  {
    id: 1061243,
    created_on: "2021-08-25 08:54:44",
    delivery_address: "Dream Villa, Ajman",
    mobile: "45544345645",
    name: null,
    order_amt: 22.5,
  },
  {
    created_on: "2021-08-24 15:15:25",
    delivery_address:
      "Valiya Parambu Road\nAlungal, pulikkal\n#8, Rolex Green Apartment",
    id: 1061101,
    mobile: "4545645645",
    name: null,
    order_amt: 0,
  },
];
export default products;
