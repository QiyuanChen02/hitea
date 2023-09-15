export type TeaType = {
  id: number;
  name: string;
  image: string;
  initialPrice: number;
  description: string;
};

export type TeasType = TeaType[];

export type SizeType = "normal" | "large";
export type IceType = "normal" | "half" | "none";
export type SweetnessType = "1" | "0.7" | "0.5" | "0.3";

export type OrderType = {
  quantity: number;
  extraPrice: number;
  size?: SizeType;
  ice?: IceType;
  sweetness?: SweetnessType;
  specialInstructions?: string;
};

export type ParsedItemType = TeaType & OrderType;

export type MilkTeaCategoryType = {
  type:
    | "Classic Milk Tea"
    | "Frappe"
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
    type: "Frappe", // only type to not have normal and large sizes
    teas: [
      {
        id: 8,
        name: "Oreo Bobashake Frappe",
        image: "oreoBobashakeFrappe.png",
        initialPrice: 450,
        description: "Oreo Boboshake Frappe",
      },
      {
        id: 9,
        name: "Japanese Matcha Frappe",
        image: "japaneseMatchaFrappe.png",
        initialPrice: 450,
        description: "Japanese Matcha Frappe",
      },
      {
        id: 10,
        name: "Lotus Boboshake Frappe",
        image: "lotusBobashakeFrappe.jpeg",
        initialPrice: 450,
        description: "Lotus Boboshake Frappe",
      },
      {
        id: 11,
        name: "Strawberry Yogurt Frappe",
        image: "strawberryYogurtFrappe.png",
        initialPrice: 450,
        description: "Strawberry Yogurt Frappe",
      },
      {
        id: 12,
        name: "Blueberry Yogurt Frappe",
        image: "blueberryYoghurtFrappe.jpeg",
        initialPrice: 450,
        description: "Blueberry Yogurt Frappe",
      },
      {
        id: 13,
        name: "Mango Yogurt Frappe",
        image: "mangoYogurtFrappe.jpeg",
        initialPrice: 450,
        description: "Mango Yogurt Frappe",
      },
    ],
  },
  {
    type: "Mixed Fruit Tea",
    teas: [
      {
        id: 14,
        name: "Mango and Passion Fruit Tea with Popping Boba",
        image: "mango&PassionFruitTea.jpeg",
        initialPrice: 450,
        description: "Mango and Passion Fruit Tea with Popping Boba",
      },
      {
        id: 15,
        name: "Strawberry and Peach Fruit Tea with Popping Boba",
        image: "strawberryPeachFruitTea.jpeg",
        initialPrice: 450,
        description: "Strawberry and Peach Fruit Tea with Popping Boba",
      },
      {
        id: 16,
        name: "Lychee Ice Green Tea with Popping Boba",
        image: "lycheeIceGreenTea.jpeg",
        initialPrice: 450,
        description: "Lychee Ice Green Tea with Popping Boba",
      },
      {
        id: 17,
        name: "Jumbo Mixed Fruit Green Tea",
        image: "jumboMixedFruitGreenTea.jpeg",
        initialPrice: 550,
        description: "Jumbo Mixed Fruit Green Tea",
      },
      {
        id: 18,
        name: "Kiwi Fruit Green Tea with Popping Boba",
        image: "kiwiFruitGreenTea.jpeg",
        initialPrice: 450,
        description: "Kiwi Fruit Green Tea with Popping Boba",
      },
      {
        id: 19,
        name: "Passion Fruit Green Tea with Popping Boba",
        image: "passionFruitGreenTea.jpeg",
        initialPrice: 450,
        description: "Passion Fruit Green Tea with Popping Boba",
      },
    ],
  },
  {
    type: "Creamy Cheese Tea",
    teas: [
      {
        id: 20,
        name: "Mango and Passion Fruit Cheese Tea Macchiato",
        image: "mango&PassionFruitCheeseTea.jpeg",
        initialPrice: 450,
        description: "Mango and Passion Fruit Cheese Tea Macchiato",
      },
      {
        id: 21,
        name: "Strawberry & Peach Cheese Tea Macchiato",
        image: "strawberry&PeachCheeseTea.png",
        initialPrice: 499,
        description: "Strawberry & Peach Cheese Tea Macchiato",
      },
      {
        id: 22,
        name: "Black Grape Cheese Tea Macchiato",
        image: "blackGrapeCheeseTea.png",
        initialPrice: 499,
        description: "Black Grape Cheese Tea Macchiato",
      },
      {
        id: 23,
        name: "Strawberry Cheese Tea Macchiato",
        image: "strawberryCheeseTea.png",
        initialPrice: 499,
        description: "Strawberry Cheese Tea Macchiato",
      },
      {
        id: 24,
        name: "Peach Cheese Tea Macchiato",
        image: "peachCheeseTea.png",
        initialPrice: 499,
        description: "Peach Cheese Tea Macchiato",
      },
    ],
  },
  {
    type: "Coffee",
    teas: [
      {
        id: 25,
        name: "Milk Coffee with Brown Sugar Pearls",
        image: "milkCoffee.jpeg",
        initialPrice: 350,
        description: "Milk Coffee with Brown Sugar Pearls",
      },
      {
        id: 26,
        name: "Coconut Latte with Coffee Jellies",
        image: "coconutLatte.jpeg",
        initialPrice: 450,
        description: "Coconut Latte with Coffee Jellies",
      },
      {
        id: 27,
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
        id: 28,
        name: "Blueberry Lemon Fizzy Bubble",
        image: "blueberryLemonFizzy.jpeg",
        initialPrice: 350,
        description: "Blueberry Lemon Fizzy Bubble",
      },
      {
        id: 29,
        name: "Strawberry Lemon Fizzy Bubble",
        image: "strawberryLemonFizzy.jpeg",
        initialPrice: 350,
        description: "Strawberry Lemon Fizzy Bubble",
      },
    ],
  },
];
