import { EquinorLogo } from "@equinor/amplify-component-lib";
import { SideBar, TopBar } from "@equinor/eds-core-react";
import { add } from "@equinor/eds-icons";
import { Outlet } from "react-router-dom";
import { ScrollArea } from "../common/ScrollArea";

export const Layout = () => {
  return (
    <div className="grid h-full grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      <TopBar sticky={false} className="col-span-2"></TopBar>
      <SideBar
        className="h-[calc(100vh-64px)] !overflow-x-hidden !border-r-0"
        open
      >
        <SideBar.Content>
          <SideBar.Button
            label="Add an app"
            icon={add}
            className="[&_button]:rounded-full [&_button]:hover:rounded-full"
          />
        </SideBar.Content>
        <SideBar.Footer>
          <SideBar.Toggle className="[&_svg]:fill-primary-resting" />
          <div className="flex items-center justify-center py-4">
            <EquinorLogo />
          </div>
        </SideBar.Footer>
      </SideBar>
      <ScrollArea>
        <div className="h-full min-w-[320px] overflow-y-auto py-10">
          <Outlet />
        </div>
      </ScrollArea>
    </div>
  );
};
