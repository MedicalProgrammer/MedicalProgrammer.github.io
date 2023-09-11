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
import Buy from "./Buy";
import Calculate from "./Calculate";
import History from "./History";
import Card4 from "./Card4";
import { useState,useEffect } from "react";
import axios from "axios";

 
export default function Traffic() {

  const [ballanceWallet, setBallanceWallet] = useState();
  const [ballanceTraffic, setBallanceTraffic] = useState();

  

  const [ref, setRef] = useState();
  var headers = {
    origin: 'http://localhost:3000',     
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

  const [data,setData]=useState([]);
  const [listUsers,setlistUsers]=useState([]);
  useEffect(() => {
    fetchprice();
    fetchBallance();
  }, []);



  const fetchprice = async () => {
    var headers = {
      origin: 'http://localhost:3000',     
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  }
    const url = "https://api.v2rayreseller.com/api/v1/bandwidth/pricing";
    const response = await axios.get(url, { withCredentials: true },headers);
    setData(response.data.bandwidth_pricing)
  };




  const fetchBallance = async () => {
    var headers = {
      origin: 'http://localhost:3000',     
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  }
    const url = "https://api.v2rayreseller.com/api/v1/portal_user";
    const response = await axios.get(url, { withCredentials: true },headers);
    setBallanceTraffic(response.data.bandwidth_balance);
    setBallanceWallet(response.data.wallet_balance);
    setRef(response.data.referred_by_uuid);
    console.log(ballanceTraffic);
  };



  const dataa = [
    {
      label: "Buy",
      value: "buy",
      icon: Cog6ToothIcon,
      desc: <Buy/>,
    },
    {
      label: "Calculate",
      value: "calculate",
      icon: Square3Stack3DIcon,
      desc: <Calculate/>,
    },
    {
      label: "History",
      value: "history",
      icon: UserCircleIcon,
      desc: <History/>,
    },
   
  ];
  return (
    <>
        <div className="dark:bg-gray-900">

    <h2 class="p-4 text-center text-4xl tracking-tight font-extrabold  text-gray-900 dark:text-white">Traffic</h2>

<Card4 referred_by_uuid={ref} ballance_Traffic={ballanceTraffic} ballance_Wallet={ballanceWallet} GB_1_1000={data.GB_1_1000} GB_1000_5000={data.GB_1000_5000} GB_5000_more={data.GB_5000_more} />

    <Tabs value="buy" className="dark:bg-gray-900">
      <TabsHeader className="dark:bg-gray-800">
        {dataa.map(({ label, value, icon }) => (
          <Tab key={value} value={value} className="dark:text-blue-400">
            <div className="flex items-center gap-2 ">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {dataa.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
    </div>
    </>
  );
}