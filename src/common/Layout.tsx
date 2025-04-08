import { SideBar, TopBar } from "@equinor/eds-core-react";
import { Outlet } from "react-router";
import { EquinorStar } from "./EquinorStar";

export const Layout = () => {
  return (
    <div className="grid h-screen grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      <TopBar sticky={false} className="col-span-2"></TopBar>
      <SideBar
        className="h-[calc(100vh-64px)] !overflow-x-hidden !border-r-0"
        open
      >
        <SideBar.Content></SideBar.Content>
        <SideBar.Footer>
          <SideBar.Toggle className="[&_svg]:fill-primary-resting" />
          <div className="flex items-center justify-center py-4">
            <EquinorStar />
          </div>
        </SideBar.Footer>
      </SideBar>
      <div className="h-full min-w-[320px] overflow-y-auto py-10">
        <Outlet />
      </div>
    </div>
  );
};
