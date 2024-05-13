import { Dispatch, SetStateAction } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Props {
  dataLength: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const PaginationElement: React.FC<Props> = ({
  dataLength,
  currentPage,
  setCurrentPage,
}) => {
  const handlePreviousClick = () => {
    if (currentPage <= 0) return;
    setCurrentPage((prevPage) => prevPage - 10);
  };

  const handleNextClick = () => {
    if (currentPage + 10 >= dataLength) return;
    setCurrentPage((prevPage) => prevPage + 10);
  };

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber * 10);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem className={"cursor-pointer"}>
          <PaginationPrevious onClick={handlePreviousClick} />
        </PaginationItem>
        {Array.from({ length: Math.ceil(dataLength / 10) }, (_, index) => (
          <PaginationItem key={index} className={"cursor-pointer"}>
            <PaginationLink
              onClick={() => handleClick(index)}
              isActive={currentPage / 10 === index}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem className={"cursor-pointer"}>
          <PaginationNext onClick={handleNextClick} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
