import { Command as CommandPrimitive } from "cmdk";
import { FC, ComponentPropsWithoutRef } from "react";
import { cn } from "../../utils/cn";

export const CommandSeparator: FC<
  ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
> = ({ className, ...props }) => (
  <CommandPrimitive.Separator
    className={cn("-mx-1 h-px bg-zinc-300", className)}
    {...props}
  />
);
