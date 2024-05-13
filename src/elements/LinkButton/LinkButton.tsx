import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const LinkButton: React.FC<Props> = ({ href, children, className }) => {
  return (
    <Link href={href}>
      <Button className={cn("h-16 w-60 text-2xl", className)}>
        {children}
      </Button>
    </Link>
  );
};
