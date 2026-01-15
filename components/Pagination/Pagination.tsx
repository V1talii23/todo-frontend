import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic-light-dark.css";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "../ui/pagination";

interface PaginationProps {
  pages: number;
  currentPage: number;
  handleChangePage: (page: number) => void;
}

export default function Paginations({
  pages,
  currentPage,
  handleChangePage,
}: PaginationProps) {
  return (
    <ResponsivePagination
      current={currentPage}
      total={pages}
      onPageChange={handleChangePage}
    />
  );
  // return (
  //   <Pagination>
  //     <PaginationContent>
  //       <PaginationItem>
  //         <PaginationPrevious href="#" />
  //       </PaginationItem>
  //       <PaginationItem>
  //         <PaginationLink href="#">1</PaginationLink>
  //       </PaginationItem>
  //       <PaginationItem>
  //         <PaginationEllipsis />
  //       </PaginationItem>
  //       <PaginationItem>
  //         <PaginationNext href="#" />
  //       </PaginationItem>
  //     </PaginationContent>
  //   </Pagination>
}
