import type { OrderType } from "./milkTeaData";

export function getInitialOrder(id: number): OrderType {
  const type = Math.floor(id / 100);
  return type <= 6
    ? {
        quantity: 1,
        extraPrice: 0,
        size: type !== 4 && id !== 204 && id !== 503 ? "medium" : undefined,
        sweetness: type !== 1 ? "1" : undefined,
        ice: "normal",
        specialInstructions: "",
        hasTea: type === 2 ? "With Green Tea" : undefined,
      }
    : {
        quantity: 1,
        extraPrice: 0,
        size: undefined,
        sweetness: undefined,
        ice: undefined,
        specialInstructions: "",
        hasTea: undefined,
      };
}
