"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export const BackButton: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <Button onClick={handleClick} className={"sm:w-40"}>
      <p className={"text-lg"}>Go back</p>
    </Button>
  );
};
