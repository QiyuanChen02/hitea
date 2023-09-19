import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useCartStore } from "~/hooks/zustand/useCart";
dayjs.extend(customParseFormat);

const times = [
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
].map((time) => dayjs(`${time} pm`, "h:mm a"));

const PickupTime: React.FC = () => {
  const { pickupTime } = useCartStore();
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full flex-col justify-between gap-2">
        <h2 className="text-2xl">Pickup Time</h2>
        <p>Please choose a suitable time for you to pickup your order: </p>
        <div className="flex h-64 flex-col flex-wrap items-start gap-2 pt-2">
          {times.map((time, i) => (
            <PickupTimeButton key={i} time={time} />
          ))}
        </div>
        {pickupTime && (
          <p className="text-red-500">
            Note that certain times may be busier than others, so you may have
            to wait a bit longer.
          </p>
        )}
      </div>
    </div>
  );
};

type PickupTimeButtonType = {
  time: dayjs.Dayjs;
};

const PickupTimeButton: React.FC<PickupTimeButtonType> = ({ time }) => {
  const { pickupTime, setPickupTime } = useCartStore();

  const formattedTime = time.format("h:mm a");
  return (
    <button
      className={`w-32 rounded-full border border-black p-2 ${
        pickupTime === formattedTime
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
      onClick={() => void setPickupTime(formattedTime)}
    >
      {time.format("h:mm a")}
    </button>
  );
};

export default PickupTime;
