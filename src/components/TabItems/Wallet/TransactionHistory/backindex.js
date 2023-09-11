import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState,useEffect } from "react";
import axios from "axios";
import Card3 from "./Card3"
import { Breadcrumbs } from "@material-tailwind/react";

import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
 
const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

  
   
  
  

const TABLE_HEAD2 = ["Create At","Description", "Transaction Value", "Wallet Balance"];











 
export default function TransactionHistory() {
  var headers = {
    origin: 'http://localhost:3000',     
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}
  const url="https://api.v2rayreseller.com/api/v1/user/wallet/transactions?page=1&limit=10&order_by=created_at&order=desc";
  const [data,setData]=useState([]);
  const [listUsers,setlistUsers]=useState([]);

  useEffect(() => {
    axios
      .get(url, {
          withCredentials: true,
        },headers)
      .then((json) => {
        setData(json.data)
        setlistUsers(json.data.transactions)
        console.log(json.data.transactions)

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


 
  


  const handleaddMember=(e)=>{
    e.preventDefault();
    window.location.replace("/adduser");


}

const handleChargeUser=(e)=>{
  e.preventDefault();
  window.location.replace("/renewuser");


}


  return (
    <>
    <Card3 total_count={data.total_count} />



    <Card className="h-full w-full ">

    
    





      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left text-gray-500 dark:text-gray-400">
          <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {TABLE_HEAD2.map((head) => (
                <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="dark:border-gray-700">





            {listUsers.map(({  created_at, transaction_description, transaction_value, wallet_balance }, index) => {
              const isLast = index === listUsers.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50 ";
 
              return (

                


                <tr key={created_at} className=" px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">




                  

                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {created_at}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {transaction_description}
                    </Typography>
                  </td>


                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {transaction_value}
                    </Typography>
                  </td>

                  

                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {wallet_balance}
                    </Typography>
                  </td>
                  
                  
                  
                  
                  


                  
                 



                  






               
                
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" color="blue-gray" size="sm">
            Previous
          </Button>
          <Button variant="outlined" color="blue-gray" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
    </>
  );
  
}