"use client";

import Image from "next/image";
import { Button } from "@mui/material";
import { Menu } from "lucide-react";
import Dropdown from "./Dropdown";

export default function Header() {
  return (
    <header className="flex justify-between w-full py-[29px] px-4 md:py-6 md:px-0">
      <a href="">
        <Image
          className="w-40 h-10 md:w-48 md:h-12"
          src="/assets/Logo.svg"
          alt="logo"
        />
      </a>
      <div className="flex items-center">
        <Button className="button mr-2 hidden md:block" variant="contained">
          создать счет
        </Button>
        <Button className="button mr-2 hidden md:block" variant="contained">
          корзина
        </Button>
        <Dropdown />
        <button type="button">
          <Menu className="ml-4" />
        </button>
      </div>
    </header>
  );
}
