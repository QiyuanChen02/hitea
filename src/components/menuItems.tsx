import Image from "next/image";
import { useRouter } from "next/router";
import {
  type MilkTeaCategoryType,
  type TeaType,
  milkTeaData,
} from "~/utils/milkTeaData";

type MenuType = object;

const Menu: React.FC<MenuType> = () => {
  return (
    <div className="mt-3 flex w-full flex-col gap-3 md:w-4/5">
      {milkTeaData.map((category) => (
        <Category key={category.type} {...category} />
      ))}
    </div>
  );
};

const Category: React.FC<MilkTeaCategoryType> = ({ type, teas }) => {
  return (
    <div className="p-2">
      <h2 className="p-2 text-2xl">{type}</h2>
      <div className="flex w-full flex-row flex-wrap md:gap-2">
        {teas.map((tea) => (
          <MenuItem key={tea.id} {...tea} />
        ))}
      </div>
    </div>
  );
};

const MenuItem: React.FC<TeaType> = ({
  id,
  name,
  price,
  description,
  image,
}) => {
  const router = useRouter();
  return (
    <div
      className="flex h-56 w-44 flex-col p-2 hover:cursor-pointer hover:shadow-xl md:h-64 md:w-60"
      onClick={() => void router.push(`items/${id.toString()}`)}
    >
      <figure className="relative h-4/5 w-full border-2">
        <Image
          src={`/hiteadrinks/${image}`}
          alt={"photo of " + name}
          fill
          priority // todo: remove this for items under the
          sizes="250px"
        />
      </figure>
      <p className="my-1 font-semibold">{description}</p>
      <p className="text-sm">£{(price / 100).toFixed(2)}</p>
    </div>
  );
};

export default Menu;
