"use client";

import { Button } from "@mui/material";
import { Menu } from "lucide-react";
import Dropdown from "./Dropdown";

export default function Header() {
  return (
    <header className="flex justify-between w-full py-6">
      <a href="">
        <img src="/assets/Logo.svg" alt="logo" />
      </a>
      <div className="flex items-center">
        <Button className="button mr-2" variant="contained">
          создать счет
        </Button>
        <Button className="button mr-2" variant="contained">
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
