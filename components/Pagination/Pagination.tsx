import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic-light-dark.css";

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
      activeItemClassName=" p-1 text-input"
      pageItemClassName="my-2"
      pageLinkClassName="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 px-3 py-2 rounded-md mx-1 cursor-pointer transition-all"
      current={currentPage}
      total={pages}
      onPageChange={handleChangePage}
    />
  );
}
