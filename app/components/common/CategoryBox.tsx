"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import qs from "query-string";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  // 1. Define an empty query
  const handeClick = useCallback(() => {
    let currentQuery = {};

    // 2. Look through current params and parse to object instead of string
    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    // 3. Spread the currentQuery and add the new category
    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    // 4. Check if the new category is already selected, if so we deselect it
    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    // 5. Generate the URL, passing in the pathname and newest query
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [params, label, router]);

  return (
    <div
      onClick={handeClick}
      className={`flex flex-col items-center justify-center gap-2 p-3
      border-b-2 hover:text-neutral-800 hover:border-b-neutral-300 transition cursor-pointer
      ${
        selected
          ? "border-b-neutral-800 text-neutral-800"
          : "border-transparent text-neutral-500"
      }
      `}
    >
      <Icon size={20} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
