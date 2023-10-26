import { type RouterOutputs, api } from "~/utils/api";
import { type ParsedItemType } from "~/utils/milkTeaData";
import ActionButton from "./actionbutton";
import { pickupTimes } from "../checkout/pickuptime";

export type OrderSummaryType = RouterOutputs["orders"]["getOrders"][number] & {
  isAdminPage?: boolean;
};

const OrderSummary: React.FC<OrderSummaryType> = ({
  items,
  id,
  finished,
  pickupTime,
  isAdminPage = false,
}) => {
  const parsedItems = JSON.parse(items) as ParsedItemType[];
  const totalCost = parsedItems.reduce(
    (acc, item) => acc + (item.initialPrice + item.extraPrice) * item.quantity,
    0
  );
  const finishOrder = api.orders.finishOrder.useMutation();
  const deleteOrder = api.orders.deleteOrder.useMutation();

  const utils = api.useContext();

  const onFinishOrder = () => {
    finishOrder.mutate(
      { id },
      { onSuccess: () => void utils.orders.getOrders.invalidate() }
    );
  };

  const onDeleteOrder = () => {
    deleteOrder.mutate(
      { id },
      { onSuccess: () => void utils.orders.getOrders.invalidate() }
    );
  };

  return (
    <div className="flex w-full flex-col gap-4 border p-6 shadow-xl">
      <div className="flex items-center justify-between text-right">
        <h2 className="mr-3 text-2xl">Order Id: {(id % 100) + 100}</h2>
        {/* {isAdminPage ? (
          finished ? (
            <p className="text-sm">Complete</p>
          ) : (
            <p className="text-sm">Picking up at {pickupTime}</p>
          )
        ) : finished ? (
          <p className="text-sm">
            Order Complete! Pickup your order at the shop now.
          </p>
        ) : (
          <p className="text-sm">In Progress... Complete at {pickupTime}</p>
        )} */}
        <p className="text-xl">£{(totalCost / 100).toFixed(2)}</p>
      </div>

      <div className="flex flex-col gap-4">
        {parsedItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>

      {pickupTimes.includes(pickupTime) ? (
        <p>Collect at {pickupTime}</p>
      ) : (
        <p>Eating In</p>
      )}

      {isAdminPage && !finished && (
        <ActionButton bgColour="bg-green-500" onClick={onFinishOrder}>
          Finish Order
        </ActionButton>
      )}

      {isAdminPage && finished && (
        <ActionButton bgColour="bg-red-500" onClick={onDeleteOrder}>
          Delete Order
        </ActionButton>
      )}

      {!isAdminPage && finished && (
        <ActionButton bgColour="bg-green-500" onClick={onDeleteOrder}>
          Confirm Collection
        </ActionButton>
      )}
    </div>
  );
};

type ItemType = {
  item: ParsedItemType;
};

const Item: React.FC<ItemType> = ({ item }) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2">
        <p>{item.quantity}&times;</p>
        <h3 className="text-lg">{item.name}</h3>
      </div>
      <ul className="flex list-disc flex-col">
        {item.size && (
          <li className="ml-4 text-sm text-gray-600">
            Choice of Size: {item.size}
          </li>
        )}
        {item.ice && (
          <li className="ml-4 text-sm text-gray-600">
            Choice of Ice: {item.ice}
          </li>
        )}
        {item.sweetness && (
          <li className="ml-4 text-sm text-gray-600">
            Choice of Sweetness: {item.sweetness}
          </li>
        )}
        {item.hasTea && (
          <li className="ml-4 text-sm text-gray-600">
            Choice of Tea: {item.hasTea}
          </li>
        )}
        <li className="ml-4 text-sm text-gray-600">
          Special Instructions: {item.specialInstructions || "none"}
        </li>
      </ul>
    </div>
  );
};

export default OrderSummary;
