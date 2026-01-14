import { Input } from "../ui/input";

interface SearchBoxProps {
  onChange: (search: string) => void;
  value?: string;
}

export default function SearchBox({ onChange, value }: SearchBoxProps) {
  return (
    <Input
      onChange={(e) => onChange(e.target.value.trim())}
      defaultValue={value}
      type="text"
      placeholder="Search todos"
    />
  );
}
