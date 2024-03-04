import Link from "next/link";
import { ReactNode } from "react";
import { FaRunning } from "react-icons/fa";
import { GrGamepad } from "react-icons/gr";
import { LuSettings2, LuHelpCircle } from "react-icons/lu";
import { IoSettingsSharp } from "react-icons/io5";

type NavButtonProps = {
  children: ReactNode;
  href: string;
  active?: boolean;
};

const Nav = () => {
  return (
    <nav className="border-b border-sky-500 bg-zinc-800 bg-gradient-to-b from-zinc-800 to-zinc-950 uppercase text-zinc-400">
      <div className="container flex h-16 gap-0.5">
        <NavButton href="/">
          <GrGamepad size="1.75rem" />
          GAME Profile
        </NavButton>
        <NavButton href="/">
          <FaRunning size="1.75rem" />
          Action
        </NavButton>
        <NavButton href="/">
          <LuSettings2 size="1.75rem" />
          CONFIGURATION
        </NavButton>
        <NavButton href="/">
          <IoSettingsSharp size="1.75rem" />
          SETTINGS
        </NavButton>
        <NavButton href="/">
          <LuHelpCircle size="1.75rem" />
          HELP
        </NavButton>
      </div>
    </nav>
  );
};

const NavButton = ({ children, href }: NavButtonProps) => {
  return (
    <Link
      className="flex items-center justify-center gap-2 border-r border-zinc-950 px-12 first:pl-0 first:text-sky-500"
      href={href}
    >
      {children}
    </Link>
  );
};

export default Nav;
