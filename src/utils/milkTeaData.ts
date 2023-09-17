export type TeaType = {
  id: number;
  name: string;
  image: string;
  initialPrice: number;
  description: string;
};

export type TeasType = TeaType[];

export type SizeType = "medium" | "large";
export type IceType = "normal" | "half" | "none";
export type SweetnessType = "1" | "0.7" | "0.5" | "0.3";
export type HasTeaType = "With Green Tea" | "No Green Tea";

export type OrderType = {
  quantity: number;
  extraPrice: number;
  size?: SizeType;
  ice?: IceType;
  sweetness?: SweetnessType;
  hasTea?: HasTeaType;
  specialInstructions?: string;
};

export type ParsedItemType = TeaType & OrderType;

export type MilkTeaCategoryType = {
  type:
    | "Classic Milk Tea"
    | "Frappe"
    | "Colourful Milk Tea"
    | "Creamy Cheese Tea"
    | "Mixed Fruit Tea"
    | "Fizzy Boba"
    | "Coffee";
  teas: TeasType;
};

export type MilkTeaDataType = MilkTeaCategoryType[];

export const milkTeaData: MilkTeaDataType = [
  {
    type: "Classic Milk Tea",
    teas: [
      {
        id: 1,
        name: "Classic Milk Tea with Brown Sugar Pearls",
        image: "classicMilkTea.png",
        initialPrice: 350,
        description: "Classic Milk Tea with Brown Sugar Pearls",
      },
      {
        id: 2,
        name: "Cheesecake Milk Tea with Oreo Cookie",
        image: "cheesecakeMilkTea.png",
        initialPrice: 399,
        description: "Cheesecake Milk Tea with Oreo Cookie",
      },
      {
        id: 3,
        name: "Creme Brulee Milk Tea with Custard Pudding",
        image: "cremeBruleeMilkTea.png",
        initialPrice: 399,
        description: "Creme Brulee Milk Tea with Custard Pudding",
      },
      {
        id: 4,
        name: "Oat Milk Tea with Brown Sugar Pearls",
        image: "classicMilkTea.png",
        initialPrice: 350,
        description: "Oat Milk Tea with Brown Sugar Pearls",
      },
      {
        id: 5,
        name: "Milk Tea with Custard Pudding",
        image: "milkTeaCustardPudding.png",
        initialPrice: 350,
        description: "Milk Tea with Custard Pudding",
      },
      {
        id: 6,
        name: "Fresh Milk with Brown Sugar Pearls - Caffeine Free",
        image: "classicMilkTea.png",
        initialPrice: 350,
        description: "Fresh Milk with Brown Sugar Pearls - Caffeine Free",
      },
      {
        id: 7,
        name: "Jasmine Green Tea with Brown Sugar Pearls",
        image: "jasmineGreenTea.png",
        initialPrice: 350,
        description: "Jasmine Green Tea with Brown Sugar Pearls",
      },
    ],
  },
  {
    type: "Colourful Milk Tea",
    teas: [
      {
        id: 101,
        name: "Taro Milk with Brown Sugar Pearls",
        image: "taroMilk.jpg",
        initialPrice: 350,
        description: "Taro Milk with Brown Sugar Pearls",
      },
      // {
      //   id: 102,
      //   name: "Chocolate Milk with Brown Sugar Pearls",
      //   image: "chocolateMilk.jpg",
      //   initialPrice: 350,
      //   description: "Chocolate Milk with Brown Sugar Pearls",
      // },
      {
        id: 103,
        name: "Vanilla Milk with Brown Sugar Pearls",
        image: "lycheeMilk.jpg",
        initialPrice: 350,
        description: "Vanilla Milk with Brown Sugar Pearls",
      },
      {
        id: 104,
        name: "Mango Milk with Brown Sugar Pearls",
        image: "mangoMilk.jpg",
        initialPrice: 350,
        description: "Mango Milk with Brown Sugar Pearls",
      },

      {
        id: 105,
        name: "Honeydew Milk with Brown Sugar Pearls",
        image: "honeydewMilk.jpg",
        initialPrice: 350,
        description: "Honeydew Milk with Brown Sugar Pearls",
      },
      {
        id: 106,
        name: "Matcha Milk with Brown Sugar Pearls",
        image: "matchaMilk.jpg",
        initialPrice: 350,
        description: "Matcha Milk with Brown Sugar Pearls",
      },
      {
        id: 107,
        name: "Lychee Milk with Brown Sugar Pearls",
        image: "lycheeMilk.jpg",
        initialPrice: 350,
        description: "Lychee Milk with Brown Sugar Pearls",
      },
      {
        id: 108,
        name: "Strawberry Milk with Brown Sugar Pearls",
        image: "strawberryMilk.jpg",
        initialPrice: 350,
        description: "Strawberry Milk with Brown Sugar Pearls",
      },
      {
        id: 109,
        name: "Peach Milk with Brown Sugar Pearls",
        image: "peachMilk.jpeg",
        initialPrice: 350,
        description: "Peach Milk with Brown Sugar Pearls",
      },
      {
        id: 110,
        name: "Coconut Milk with Brown Sugar Pearls",
        image: "lycheeMilk.jpg",
        initialPrice: 350,
        description: "Coconut Milk with Brown Sugar Pearls",
      },
    ],
  },
  {
    type: "Mixed Fruit Tea",
    teas: [
      {
        id: 201,
        name: "Mango and Passion Fruit Tea with Popping Boba",
        image: "mango&PassionFruitTea.jpeg",
        initialPrice: 450,
        description: "Mango and Passion Fruit Tea with Popping Boba",
      },
      {
        id: 202,
        name: "Strawberry and Peach Fruit Tea with Popping Boba",
        image: "strawberryPeachFruitTea.jpg",
        initialPrice: 450,
        description: "Strawberry and Peach Fruit Tea with Popping Boba",
      },
      {
        id: 203,
        name: "Lychee Ice Green Tea with Popping Boba",
        image: "lycheeIceGreenTea.jpeg",
        initialPrice: 450,
        description: "Lychee Ice Green Tea with Popping Boba",
      },
      {
        id: 204,
        name: "Jumbo Mixed Fruit Green Tea",
        image: "jumboMixedFruitGreenTea.jpeg",
        initialPrice: 550,
        description: "Jumbo Mixed Fruit Green Tea",
      },
      {
        id: 205,
        name: "Kiwi Fruit Green Tea with Popping Boba",
        image: "kiwiFruitGreenTea.jpeg",
        initialPrice: 450,
        description: "Kiwi Fruit Green Tea with Popping Boba",
      },
      {
        id: 206,
        name: "Passion Fruit Green Tea with Popping Boba",
        image: "passionFruitGreenTea.jpeg",
        initialPrice: 450,
        description: "Passion Fruit Green Tea with Popping Boba",
      },
    ],
  },
  {
    type: "Frappe",
    teas: [
      {
        id: 301,
        name: "Oreo Bobashake Frappe",
        image: "oreoBobashakeFrappe.png",
        initialPrice: 450,
        description: "Oreo Boboshake Frappe",
      },
      {
        id: 302,
        name: "Japanese Matcha Frappe",
        image: "japaneseMatchaFrappe.png",
        initialPrice: 450,
        description: "Japanese Matcha Frappe",
      },
      {
        id: 303,
        name: "Lotus Boboshake Frappe",
        image: "lotusBobashakeFrappe.jpeg",
        initialPrice: 450,
        description: "Lotus Boboshake Frappe",
      },
      {
        id: 304,
        name: "Strawberry Yogurt Frappe",
        image: "strawberryYogurtFrappe.png",
        initialPrice: 450,
        description: "Strawberry Yogurt Frappe",
      },
      {
        id: 305,
        name: "Blueberry Yogurt Frappe",
        image: "blueberryYoghurtFrappe.jpg",
        initialPrice: 450,
        description: "Blueberry Yogurt Frappe",
      },
      {
        id: 306,
        name: "Mango Yogurt Frappe",
        image: "mangoYogurtFrappe.jpeg",
        initialPrice: 450,
        description: "Mango Yogurt Frappe",
      },
    ],
  },
  {
    type: "Creamy Cheese Tea",
    teas: [
      {
        id: 401,
        name: "Mango and Passion Fruit Smoothie with Cheese Foam",
        image: "mango&PassionfruitCheeseTea.jpeg",
        initialPrice: 499,
        description: "Mango and Passion Fruit Smoothie with Cheese Foam",
      },
      {
        id: 402,
        name: "Strawberry & Peach Smoothie with Cheese Foam",
        image: "strawberry&PeachCheeseTea.png",
        initialPrice: 499,
        description: "Strawberry & Peach Smoothie with Cheese Foam",
      },
      {
        id: 403,
        name: "Black Grape Smoothie with Cheese Foam",
        image: "blackGrapeCheeseTea.png",
        initialPrice: 499,
        description: "Black Grape Smoothie with Cheese Foam",
      },
      {
        id: 404,
        name: "Strawberry Smoothie with Cheese Foam",
        image: "strawberryCheeseTea.png",
        initialPrice: 499,
        description: "Strawberry Smoothie with Cheese Foam",
      },
      {
        id: 405,
        name: "Peach Smoothie with Cheese Foam",
        image: "peachCheeseTea.png",
        initialPrice: 499,
        description: "Peach Smoothie with Cheese Foam",
      },
    ],
  },
  {
    type: "Coffee",
    teas: [
      {
        id: 501,
        name: "Milk Coffee with Brown Sugar Pearls",
        image: "milkCoffee.jpeg",
        initialPrice: 350,
        description: "Milk Coffee with Brown Sugar Pearls",
      },
      {
        id: 502,
        name: "Coconut Latte with Coffee Jellies",
        image: "coconutLatte.jpg",
        initialPrice: 450,
        description: "Coconut Latte with Coffee Jellies",
      },
      {
        id: 503,
        name: "Black Coffee With Jasmine Tea Cheese Macchiato",
        image: "blackCoffeeWithJasmine.png",
        initialPrice: 499,
        description: "Black Coffee With Jasmine Tea Cheese Macchiato",
      },
    ],
  },
  {
    type: "Fizzy Boba",
    teas: [
      {
        id: 601,
        name: "Blueberry Lemon Fizzy Bubble",
        image: "blueberryLemonFizzy.jpeg",
        initialPrice: 350,
        description: "Blueberry Lemon Fizzy Bubble",
      },
      {
        id: 602,
        name: "Strawberry Lemon Fizzy Bubble",
        image: "strawberryLemonFizzy.jpeg",
        initialPrice: 350,
        description: "Strawberry Lemon Fizzy Bubble",
      },
    ],
  },
];
