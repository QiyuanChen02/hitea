import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useCartStore } from "~/hooks/zustand/useCart";
dayjs.extend(customParseFormat);

const times = [
  "3:00",
  "3:10",
  "3:20",
  "3:30",
  "3:40",
  "3:50",
  "4:00",
  "4:10",
  "4:20",
  "4:30",
  "4:40",
  "4:50",
  "5:00",
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
