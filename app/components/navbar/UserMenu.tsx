"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";

interface UserMenuProps {}

const UserMenu: React.FC<UserMenuProps> = () => {
  return (
    <div className="relative">
      <div className="flex items-center gap-x-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3
          px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Airbnb your home
        </div>

        <div
          onClick={() => {}}
          className="p-4 md:py-1 md:px-2 border border-neutral-200 flex items-center
          gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu size={18} />

          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
