import { Command as CommandPrimitive } from "cmdk";
import { FC, ComponentPropsWithoutRef } from "react";
import { cn } from "../../utils/cn";
import { ScrollArea } from "../ScrollArea";

export const CommandList: FC<
  ComponentPropsWithoutRef<typeof CommandPrimitive.List>
> = ({ className, ...props }) => (
  <ScrollArea>
    <CommandPrimitive.List {...props} className={cn("", className)}>
      {props.children}
    </CommandPrimitive.List>
  </ScrollArea>
);
