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
import Deposit from "./Deposit";
import FundHistory from "./FundHistory";
import TransactionHistory from "./TransactionHistory";
 
export default function Wallet() {
  const data = [
    {
      label: "Deposit",
      value: "deposit",
      icon: Cog6ToothIcon,
      desc: <Deposit/>,
    },
    {
      label: "FundHistory",
      value: "fundhistory",
      icon: Square3Stack3DIcon,
      desc: <FundHistory/>,
    },
    {
      label: "Transactions",
      value: "transactions",
      icon: UserCircleIcon,
      desc: <TransactionHistory/>,
    },
   
  ];
  return (
    <>
    <div className="dark:bg-gray-900">
    <h2 class="p-4 text-center text-4xl tracking-tight font-extrabold  text-gray-900 dark:text-white">Wallet</h2>

    <Tabs value="fundhistory" className="dark:bg-gray-900">
      <TabsHeader className="dark:bg-gray-800">
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value} className="dark:text-blue-400">
            <div className="flex items-center gap-2 ">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} >
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
    </div>
    </>
  );
}