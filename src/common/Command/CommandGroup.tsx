import { Command as CommandPrimitive } from "cmdk";
import { FC, ComponentPropsWithoutRef } from "react";
import { cn } from "../../utils/cn";

export const CommandGroup: FC<
  ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
> = ({ className, ...props }) => (
  <CommandPrimitive.Group
    className={cn(
      `overflow-hidden
			 pt-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 
			 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium`,
      className
    )}
    {...props}
  />
);
