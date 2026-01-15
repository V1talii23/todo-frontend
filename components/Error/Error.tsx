import { Button } from "../ui/button";

interface ErrorProps {
  refresh: () => void;
  disabled: boolean;
}
export default function Error({ refresh, disabled }: ErrorProps) {
  // return <p className="">No results found. Try adjusting your search.</p>;

  return (
    <div className="">
      <p>Oops! We cound&apos;t load your tasks.</p>
      <p>Please check your connection and try again.</p>
      <Button
        type="button"
        onClick={refresh}
        disabled={disabled}
        variant="outline"
      >
        {disabled ? "Trying..." : "Try again"}
      </Button>
    </div>
  );
}
