import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import Profile from "../../components/TabItems/Profile";
import Wallet from "../../components/TabItems/Wallet";
import Traffic from "../../components/TabItems/Traffic";
import VpnUsers from "../../components/TabItems/VpnUsers";
import Portal from "../TabItems/Portal";

const Tabbs = () => {
    const data = [
        {
          label: "Profile",
          value: "profile",
          icon: Square3Stack3DIcon,
          desc: <Profile/>,
        },
        {
          label: "Wallet",
          value: "wallet",
          icon: UserCircleIcon,
          desc: <Wallet/>},
          {
            label: "Traffic",
            value: "traffic",
            icon: UserCircleIcon,
            desc: <Traffic/>},
        {
          label: "VpnUsers",
          value: "vpnusers",
          icon: Cog6ToothIcon,
          desc: <VpnUsers/> },
          ,
          {
            label: "Portal",
            value: "portal",
            icon: UserCircleIcon,
            desc: <Portal/>}
      ];
  return (
    
    
    <>
  <Tabs value="vpnusers" orientation="vertical" className="flex dark:bg-gray-900 flex-row px-0 
">

    
      <div class="w-full  ">

      <TabsBody className="shadow-inner rounded-xl bg-base-100  ">
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="py-0 px-0">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
      </div>

    </Tabs>
    
    </>
  )
}

export default Tabbs