import type { OrderType } from "./milkTeaData";

export function getInitialOrder(id: number): OrderType {
  return {
    quantity: 1,
    extraPrice: 0,
    size:
      Math.floor(id / 100) !== 4 && id !== 204 && id !== 503
        ? "medium"
        : undefined,
    sweetness: "1",
    ice: "normal",
    specialInstructions: "",
    hasTea: Math.floor(id / 100) === 2 ? "With Green Tea" : undefined,
  };
}
