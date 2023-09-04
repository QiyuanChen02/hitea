export type TeaType = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
};

export type TeasType = TeaType[];

export type SizeType = "normal" | "large";
export type IceType = "normal" | "half" | "none";
export type SweetnessType = "1" | "0.7" | "0.5" | "0.3";

export type OrderType = {
  quantity: number;
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
        name: "Classic Milk Tea with Brown Sugar Peals",
        image: "classicMilkTea.png",
        price: 350,
        description: "Classic Milk Tea with Brown Sugar Peals",
      },
      {
        id: 2,
        name: "Cheesecake Milk Tea with Oreo Cookie",
        image: "cheesecakeMilkTea.png",
        price: 399,
        description: "Cheesecake Milk Tea with Oreo Cookie",
      },
      {
        id: 3,
        name: "Creme Brulee Milk Tea with Custard Pudding",
        image: "cremeBruleeMilkTea.png",
        price: 399,
        description: "Creme Brulee Milk Tea with Custard Pudding",
      },
      {
        id: 4,
        name: "Oat Milk Tea with Brown Sugar Pearls",
        image: "classicMilkTea.png",
        price: 350,
        description: "Oat Milk Tea with Brown Sugar Pearls",
      },
      {
        id: 5,
        name: "Milk Tea with Custard Pudding",
        image: "milkTeaCustardPudding.png",
        price: 350,
        description: "Milk Tea with Custard Pudding",
      },
      {
        id: 6,
        name: "Fresh Milk with Brown Sugar Pearls - Caffeine Free",
        image: "classicMilkTea.png",
        price: 350,
        description: "Fresh Milk with Brown Sugar Pearls - Caffeine Free",
      },
      {
        id: 7,
        name: "Jasmine Green Tea with Brown Sugar Pearls",
        image: "jasmineGreenTea.png",
        price: 350,
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
        price: 450,
        description: "Oreo Boboshake Frappe",
      },
      {
        id: 9,
        name: "Japanese Matcha Frappe",
        image: "japaneseMatchaFrappe.png",
        price: 450,
        description: "Japanese Matcha Frappe",
      },
      {
        id: 10,
        name: "Lotus Boboshake Frappe",
        image: "oreoBobashakeFrappe.png",
        price: 450,
        description: "Lotus Boboshake Frappe",
      },
      {
        id: 11,
        name: "Strawberry Yogurt Frappe",
        image: "strawberryYogurtFrappe.png",
        price: 450,
        description: "Strawberry Yogurt Frappe",
      },
      {
        id: 12,
        name: "Blueberry Yogurt Frappe",
        image: "oreoBobashakeFrappe.png",
        price: 450,
        description: "Blueberry Yogurt Frappe",
      },
      {
        id: 13,
        name: "Mango Yogurt Frappe",
        image: "mangoYogurtFrappe.jpg",
        price: 450,
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
        image: "oreoBobashakeFrappe.png",
        price: 450,
        description: "Mango and Passion Fruit Tea with Popping Boba",
      },
      {
        id: 15,
        name: "Strawberry and Peach Fruit Tea with Popping Boba",
        image: "oreoBobashakeFrappe.png",
        price: 450,
        description: "Strawberry and Peach Fruit Tea with Popping Boba",
      },
      {
        id: 16,
        name: "Lychee Ice Green Tea with Popping Boba",
        image: "oreoBobashakeFrappe.png",
        price: 450,
        description: "Lychee Ice Green Tea with Popping Boba",
      },
      {
        id: 17,
        name: "Jumbo Mixed Fruit Green Tea",
        image: "oreoBobashakeFrappe.png",
        price: 500,
        description: "Jumbo Mixed Fruit Green Tea",
      },
      {
        id: 18,
        name: "Kiwi Fruit Green Tea with Popping Boba",
        image: "oreoBobashakeFrappe.png",
        price: 450,
        description: "Kiwi Fruit Green Tea with Popping Boba",
      },
      {
        id: 19,
        name: "Passion Fruit Green Tea with Popping Boba",
        image: "oreoBobashakeFrappe.png",
        price: 450,
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
        image: "oreoBobashakeFrappe.png",
        price: 450,
        description: "Mango and Passion Fruit Cheese Tea Macchiato",
      },
      {
        id: 21,
        name: "Strawberry & Peach Cheese Tea Macchiato",
        image: "strawberry&PeachCheeseTea.png",
        price: 450,
        description: "Strawberry & Peach Cheese Tea Macchiato",
      },
      {
        id: 22,
        name: "Black Grape Cheese Tea Macchiato",
        image: "blackGrapeCheeseTea.png",
        price: 450,
        description: "Black Grape Cheese Tea Macchiato",
      },
      {
        id: 23,
        name: "Strawberry Cheese Tea Macchiato",
        image: "oreoBobashakeFrappe.png",
        price: 450,
        description: "Strawberry Cheese Tea Macchiato",
      },
      {
        id: 24,
        name: "Peach Cheese Tea Macchiato",
        image: "oreoBobashakeFrappe.png",
        price: 450,
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
        image: "oreoBobashakeFrappe.png",
        price: 350,
        description: "Milk Coffee with Brown Sugar Pearls",
      },
      {
        id: 26,
        name: "Coconut Latte with Coffee Jellies",
        image: "strawberry&PeachCheeseTea.png",
        price: 450,
        description: "Coconut Latte with Coffee Jellies",
      },
      {
        id: 27,
        name: "Black Coffee With Jasmine Tea Cheese Machiato",
        image: "blackCoffeeWithJasmine.png",
        price: 450,
        description: "Black Coffee With Jasmine Tea Cheese Machiato",
      },
    ],
  },
  {
    type: "Fizzy Boba",
    teas: [
      {
        id: 28,
        name: "Blueberry Lemon Fizzy Bubble",
        image: "oreoBobashakeFrappe.png",
        price: 350,
        description: "Blueberry Lemon Fizzy Bubble",
      },
      {
        id: 29,
        name: "Strawberry Lemon Fizzy Bubble",
        image: "strawberry&PeachCheeseTea.png",
        price: 350,
        description: "Strawberry Lemon Fizzy Bubble",
      },
    ],
  },
];
