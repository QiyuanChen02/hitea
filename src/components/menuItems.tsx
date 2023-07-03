import Image from "next/image";
import {
  type MilkTeaCategoryType,
  type TeaType,
  milkTeaData,
} from "~/utils/milkTeaData";

type MenuType = object;

const Menu: React.FC<MenuType> = () => {
  return (
    <div className="flex w-full flex-col md:w-3/5">
      {milkTeaData.map((category) => (
        <Category key={category.type} {...category} />
      ))}
    </div>
  );
};

const Category: React.FC<MilkTeaCategoryType> = ({ type, teas }) => {
  return (
    <>
      <h2 className="text-2xl">{type}</h2>
      <div className="flex w-full flex-row flex-wrap  gap-4">
        {teas.map((tea) => (
          <MenuItem key={tea.id} {...tea} />
        ))}
      </div>
    </>
  );
};

const MenuItem: React.FC<TeaType> = ({
  id,
  name,
  price,
  description,
  image,
}) => {
  return (
    <div className="flex h-64 w-64 flex-col p-2 hover:cursor-pointer hover:shadow-xl">
      <figure className="relative h-4/5 w-full border-2">
        <Image src={`/hiteadrinks/${image}`} alt={"photo of " + name} fill />
      </figure>
      <p>{description}</p>
      <p className="text-sm">£{(price / 100).toFixed(2)}</p>
    </div>
  );
};

export default Menu;
