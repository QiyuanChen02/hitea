import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useConsole } from "~/hooks/utils/useConsole";
import { useCartStore } from "~/hooks/zustand/useCart";
dayjs.extend(customParseFormat);

const times = [
  dayjs("3:30 pm", "h:mm a"),
  dayjs("3:45 pm", "h:mm a"),
  dayjs("4:00 pm", "h:mm a"),
  dayjs("4:15 pm", "h:mm a"),
];

const PickupTime: React.FC = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full flex-col justify-between gap-2">
        <h2 className="text-2xl">Pickup Time</h2>
        <p>Please choose a suitable time for you to pickup your order: </p>
        <div className="flex flex-col gap-2 py-2">
          {times.map((time, i) => (
            <PickupTimeButton key={i} time={time} />
          ))}
        </div>
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
      className={`w-36 rounded-full border border-black p-2 ${
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
