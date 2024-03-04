import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="container flex h-24 items-center">
        <div className="flex flex-grow items-center gap-4">
          <Image src="/logo.png" width="42" height="42" alt="logo" />
          <div className="text-3xl font-light uppercase">
            <strong className="font-medium">Hydra&nbsp;</strong>
            <span className="text-zinc-500">4-KEY</span>
          </div>
        </div>
        <div>
          <strong className="text-xl font-light uppercase">Game profile</strong>
        </div>
      </div>
    </header>
  );
};

export default Header;
