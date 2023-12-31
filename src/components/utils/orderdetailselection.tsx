import { type OrderType } from "~/utils/milkTeaData";
import RadioSelection, { type ChangeOrderType } from "./radioselection";

type OrderDetailSelectionType = {
  order: OrderType;
  changeOrder: ChangeOrderType;
};

const OrderDetailSelection: React.FC<OrderDetailSelectionType> = ({
  order,
  changeOrder,
}) => {
  return (
    <div className="flex w-full flex-col items-start gap-3">
      {order.size && (
        <RadioSelection
          title="Choice of Size"
          order={order}
          changeOrder={changeOrder}
          type="size"
          options={["large", "medium"]}
        />
      )}

      {order.ice && (
        <RadioSelection
          title="Choice of Ice"
          order={order}
          changeOrder={changeOrder}
          type="ice"
          options={["normal", "half", "none"]}
        />
      )}

      {order.sweetness && (
        <RadioSelection
          title="Choice of Sweetness"
          order={order}
          changeOrder={changeOrder}
          type="sweetness"
          options={["1", "0.7", "0.5", "0.3"]}
        />
      )}

      {order.hasTea && (
        <RadioSelection
          title="Choice of Tea"
          order={order}
          changeOrder={changeOrder}
          type="hasTea"
          options={["With Green Tea", "No Green Tea"]}
        />
      )}

      <select
        value={order.quantity}
        onChange={(e) => changeOrder("quantity", parseInt(e.target.value))}
        className="rounded-full bg-gray-300 px-4 py-2"
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>

      <h2 className="text-xl">Special Instructions</h2>
      <textarea
        value={order.specialInstructions}
        onChange={(e) => changeOrder("specialInstructions", e.target.value)}
        className="w-full resize-none rounded-md bg-gray-100 p-2"
        placeholder="Add requests here. Any requests may cost extra."
      />
    </div>
  );
};

export default OrderDetailSelection;
