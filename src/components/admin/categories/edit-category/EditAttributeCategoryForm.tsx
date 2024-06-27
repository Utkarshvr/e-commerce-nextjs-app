import { Checkbox } from "@/components/ui/checkbox";

type Props = {};

export default function EditAttributeCategoryForm({}: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-4">
        <Checkbox checked />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Dimensions
        </label>
      </div>
      <div className="flex items-center space-x-4">
        <Checkbox checked />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Colour & Sizes
        </label>
      </div>
      <div className="flex items-center space-x-4">
        <Checkbox checked />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Misc Info
        </label>
      </div>
    </div>
  );
}
