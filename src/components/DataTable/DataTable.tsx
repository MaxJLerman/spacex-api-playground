"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTypedSelector } from "@/redux/store/hooks";
import { cn } from "@/lib/utils";
import { PaginationElement } from "@/elements/PaginationElement/PaginationElement";
import { ContextMenuElement } from "@/elements/ContextMenuElement/ContextMenuElement";

export const DataTable: React.FC = () => {
  const router = useRouter();
  const { crewData } = useTypedSelector((state) => state.crewReducer);
  const [currentPage, setCurrentPage] = useState<number>(0);

  return (
    <>
      <div className={"flex 2xl:hidden"}>
        <PaginationElement
          dataLength={crewData.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <Table>
        <TableCaption className={"text-base 2xl:text-xl mt-10"}>
          A table of crew data responses
        </TableCaption>
        <TableHeader>
          <TableRow className={"text-base 2xl:text-2xl"}>
            <TableHead className={"max-w-28"}>Crew Member Name</TableHead>
            <TableHead className={"text-center"}>Agency</TableHead>
            <TableHead className={"text-center"}>Launches</TableHead>
            <TableHead className={"text-right"}>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {crewData.slice(currentPage, currentPage + 10).map((crewMember) => (
            <ContextMenuElement
              key={crewMember.id}
              onViewCrewMember={() => router.push(`/crew/${crewMember.id}`)}
              wikiPageHref={crewMember.wikipedia}
            >
              <TableRow className={"2xl:text-base"}>
                <TableCell className={"max-w-28"}>{crewMember.name}</TableCell>
                <TableCell className={"text-center"}>
                  {crewMember.agency}
                </TableCell>
                <TableCell className={"text-center"}>
                  {crewMember.launches.length}
                </TableCell>
                <TableCell
                  className={cn("text-right uppercase", {
                    ["text-green-500"]: crewMember.status === "active",
                  })}
                >
                  {crewMember.status}
                </TableCell>
              </TableRow>
            </ContextMenuElement>
          ))}
        </TableBody>
      </Table>
      <PaginationElement
        dataLength={crewData.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
