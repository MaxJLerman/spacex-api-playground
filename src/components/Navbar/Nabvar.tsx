import Link from "next/link";

import { cn } from "@/lib/utils";
import { DarkLightToggle } from "@/components/DarkLightToggle/DarkLightToggle";

export const Nabvar: React.FC = () => {
  return (
    <nav
      className={cn(
        "fixed top-0 z-30 flex flex-row w-full items-center justify-between bg-black px-4 py-3 2xl:py-[1.625rem]",
      )}
    >
      <Link
        href={"/"}
        className={"text-xl 2xl:text-4xl font-bold text-white tracking-widest"}
      >
        SpaceX API Playground
      </Link>
      <DarkLightToggle />
    </nav>
  );
};
