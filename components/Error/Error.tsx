import { Button } from "../ui/button";

interface ErrorProps {
  refresh: () => void;
  disabled: boolean;
}
export default function Error({ refresh, disabled }: ErrorProps) {
  return (
    <div className="text-center py-12">
      <p className="text-gray-500 dark:text-gray-400 text-lg">
        Oops! We cound&apos;t load your tasks.
      </p>
      <p className="text-gray-500 dark:text-gray-400 text-lg">
        Please check your connection and try again.
      </p>
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
