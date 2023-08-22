"use client";

import { useSearchParams, usePathname } from "next/navigation";
import Container from "../common/Container";
import CategoryBox from "../common/CategoryBox";

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";

interface CategoriesProps {}

export const categories = [
  {
    icon: TbBeach,
    label: "Beach",
    description: "This property is close to the beach!",
  },

  {
    icon: GiWindmill,
    label: "Windmills",
    description: "This property has windmills!",
  },

  {
    icon: MdOutlineVilla,
    label: "Modern",
    description: "This property is modern!",
  },

  {
    icon: TbMountain,
    label: "Country",
    description: "This property is in the countryside!",
  },

  {
    icon: TbPool,
    label: "Pools",
    description: "This property has a pool!",
  },

  {
    icon: GiIsland,
    label: "Island",
    description: "This property is on an island!",
  },

  {
    icon: GiBoatFishing,
    label: "Lake",
    description: "This property is close to a lake!",
  },

  {
    icon: FaSkiing,
    label: "Skiing",
    description: "This property has skiing activities!",
  },

  {
    icon: GiCastle,
    label: "Castles",
    description: "This property is in a castle!",
  },

  {
    icon: GiForestCamp,
    label: "Camping",
    description: "This property has camping activities!",
  },

  {
    icon: BsSnow,
    label: "Arctic",
    description: "This property is in an arctic area!",
  },

  {
    icon: GiCaveEntrance,
    label: "Cave",
    description: "This property is in a cave!",
  },

  {
    icon: GiCactus,
    label: "Desert",
    description: "This property is in the desert!",
  },

  {
    icon: GiBarn,
    label: "Barns",
    description: "This property is in a barn!",
  },

  {
    icon: IoDiamond,
    label: "Luxury",
    description: "This property is luxurious!",
  },
];

const Categories: React.FC<CategoriesProps> = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-2 flex items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
