import Link from "next/link";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuLabel,
  ContextMenuSeparator,
} from "@/components/ui/context-menu";

interface Props {
  children: React.ReactNode;
  onViewCrewMember: () => void;
  wikiPageHref: string;
}

export const ContextMenuElement: React.FC<Props> = ({
  children,
  onViewCrewMember,
  wikiPageHref,
}) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
      <ContextMenuContent className={"px-5"}>
        <ContextMenuLabel>Actions</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem onClick={onViewCrewMember}>
          View Crew Member
        </ContextMenuItem>
        <ContextMenuItem>
          <Link href={wikiPageHref} passHref>
            View Wikipedia page
          </Link>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};
