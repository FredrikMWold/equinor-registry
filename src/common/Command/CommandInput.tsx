import { Icon } from "@equinor/eds-core-react";
import { search } from "@equinor/eds-icons";
import { Command as CommandPrimitive } from "cmdk";
import { ComponentPropsWithoutRef, FC, RefObject } from "react";
import { cn } from "../../utils/cn";

export const CommandInput: FC<
  ComponentPropsWithoutRef<typeof CommandPrimitive.Input> & {
    inputRef?: RefObject<HTMLInputElement>;
  }
> = ({ className, inputRef, ...props }) => {
  return (
    <div
      className="flex items-center gap-2 bg-background-default
	  px-4 hover:bg-background-medium"
    >
      <Icon data={search} color="gray" size={24} />
      <CommandPrimitive.Input
        ref={inputRef}
        className={cn(
          `flex h-11 w-full rounded-md bg-transparent py-3 text-sm
		  outline-none disabled:cursor-not-allowed disabled:opacity-50`,
          className
        )}
        {...props}
      />
    </div>
  );
};
