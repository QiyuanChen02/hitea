import type {
  IceType,
  OrderType,
  SizeType,
  SweetnessType,
} from "~/utils/milkTeaData";
import { type OrderOptions } from "../chooseItem/itemsdescription";

export type ChangeOrderType = <T extends OrderOptions>(
  key: T,
  value: T extends "quantity" | "extraPrice" ? number : string
) => void;

type RadioSelectionType = {
  order: OrderType;
  changeOrder: ChangeOrderType;
} & (
  | {
      type: "size";
      options: SizeType[];
    }
  | {
      type: "sweetness";
      options: SweetnessType[];
    }
  | {
      type: "ice";
      options: IceType[];
    }
);

const RadioSelection: React.FC<RadioSelectionType> = ({
  order,
  changeOrder,
  type,
  options,
}) => {
  const onChangeOrder = (option: SizeType | SweetnessType | IceType) => {
    changeOrder(type, option);
    if (type === "size") {
      changeOrder("extraPrice", option === "large" ? 100 : 0);
    }
  };
  return (
    <>
      {options.map((option) => (
        <div key={type + option}>
          <input
            type="radio"
            value={option}
            name={type}
            id={type + option}
            checked={order[type] === option}
            onChange={() => onChangeOrder(option)}
          />{" "}
          <label htmlFor={type + option}>
            {option === "large" ? "large (+£1.00)" : option}
          </label>
        </div>
      ))}
    </>
  );
};

export default RadioSelection;
