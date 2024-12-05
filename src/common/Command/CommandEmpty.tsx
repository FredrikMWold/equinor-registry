import { Command as CommandPrimitive } from "cmdk";
import { FC, ComponentPropsWithoutRef } from "react";

export const CommandEmpty: FC<
  ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
> = (props) => (
  <CommandPrimitive.Empty className="py-6 text-center text-sm" {...props} />
);
