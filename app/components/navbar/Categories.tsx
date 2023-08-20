"use client";

import { useSearchParams, usePathname } from "next/navigation";
import Container from "../common/Container";
import CategoryBox from "../common/CategoryBox";

import { TbBeach } from "react-icons/tb";
import { GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";

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
      <div className="pt-4 flex items-center justify-between overflow-x-auto">
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
