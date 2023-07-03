export type TeaType = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
};

export type TeasType = TeaType[];

export type MilkTeaCategoryType = {
  type:
    | "Classic Milk Tea"
    | "Frappe"
    | "Creamy Cheese Tea"
    | "Mixed Fruit Tea"
    | "Fizzy Boba";
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
    type: "Frappe",
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
      //   {
      //     id: 10,
      //     name: "Lotus Boboshake Frappe",
      //     image: "lotusBoboshakeFrappe.png",
      //     price: 450,
      //     description: "Lotus Boboshake Frappe",
      //   },
      {
        id: 11,
        name: "Strawberry Yogurt Frappe",
        image: "strawberryYogurtFrappe.png",
        price: 450,
        description: "Strawberry Yogurt Frappe",
      },
      //   {
      //     id: 12,
      //     name: "Blueberry Yogurt Frappe",
      //     image: "blueberryYogurtFrappe.png",
      //     price: 450,
      //     description: "Blueberry Yogurt Frappe",
      //   },
      {
        id: 13,
        name: "Mango Yogurt Frappe",
        image: "mangoYogurtFrappe.jpg",
        price: 450,
        description: "Mango Yogurt Frappe",
      },
    ],
  },
];
