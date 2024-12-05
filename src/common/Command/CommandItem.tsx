import { Command as CommandPrimitive } from "cmdk";
import { FC, ComponentPropsWithoutRef } from "react";
import { cn } from "../../utils/cn";

export const CommandItem: FC<
  ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
> = ({ className, ...props }) => (
  <CommandPrimitive.Item
    className={cn(
      `relative flex cursor-pointer 
			select-none items-center rounded-sm px-4 py-2 text-sm 
			outline-none aria-selected:bg-primary/10 aria-selected:text-text-default 
			data-[disabled="true"]:pointer-events-none data-[disabled="true"]:opacity-50`,
      className
    )}
    {...props}
  />
);
