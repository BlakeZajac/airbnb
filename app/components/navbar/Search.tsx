"use client";

import useSearchModal from "@/app/hooks/useSearchModal";
import { BiSearch } from "react-icons/bi";

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const searchModal = useSearchModal();

  return (
    <div
      onClick={searchModal.onOpen}
      className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold px-4 pl-5">Anywhere</div>

        <div className="hidden sm:block text-sm font-semibold px-4 border-x-[1px] flex-1 text-center">
          Any Week
        </div>

        <div className="text-sm pl-4 pr-2 text-gray-600 flex items-center gap-3">
          <div className="hidden sm:block">Add Guests</div>
          <div className="p-2 bg-rose-600 rounded-full text-white">
            <BiSearch size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
