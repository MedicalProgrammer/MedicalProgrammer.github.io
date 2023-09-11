import React, { useState, useEffect } from "react";
import axios from "axios";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import CarUp from "./CardUp";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import ReNewUser from '../VpnUsers/ReNewUser'

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
 
const TABLE_HEAD2 = [ "Email","Status", "V2ray Connection","Bandwidth Check","Charge User","V2ray Sub", "OutLine", "Bandwidth Balance","Bandwidth Used","Create Date","Expire Date"];


const VpnClientsTable = () => {
  const [vpnClients, setVpnClients] = useState([]);
  const [infovpnClients, setinfoVpnClients] = useState([]);

  const [totalClients, setTotalClients] = useState(0); // New state for total clients
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [orderBy, setOrderBy] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [status, setStatus] = useState("all");
  const [keyword, setKeyword] = useState("");
  const [searchTerm, setSearchTerm] = useState("");





  const [ballanceWallet, setBallanceWallet] = useState();
  const [ballanceTraffic, setBallanceTraffic] = useState();

  

  const [ref, setRef] = useState();

  const [uuid, setUuid] = useState("ss");
  var headers = {
    origin: 'http://localhost:3000',
        'Accept': 'application/json',
    'Content-Type': 'application/json'
}










  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const handleInputChange = (value) => {
    setKeyword(value);
    debouncedSearch(value);
  };

  const debouncedSearch = debounce((value) => {
    setSearchTerm(value);
  }, 100);

  const handleSort = (column) => {
    setOrderBy(column);
    setOrder(order === "asc" ? "desc" : "asc");
  };


  const TABS = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Active",
      value: "active",
    },
    {
      label: "Expired",
      value: "expired",
    },
  ];


  const fetchVpnClients = async () => {
    const url = `https://api.v2rayreseller.com/api/v1/vpn_client?page=${page}&limit=${limit}&order_by=${orderBy}&order=${order}&status=${status}&keyword=${keyword}`;
    const response = await axios.get(url, { withCredentials: true },headers);
    setVpnClients(response.data.vpn_clients);
    setinfoVpnClients(response.data);

    setTotalClients(response.data.total_vpn_clients); // Assuming total clients is available in the response
  };

  useEffect(() => {
    fetchVpnClients();
    fetchBallance();

  }, [page, limit, orderBy, order, status, searchTerm,ballanceWallet,ballanceTraffic,ref]);

  const fetchBallance = async () => {
   
    const url = "https://api.v2rayreseller.com/api/v1/portal_user";
    const response = await axios.get(url, { withCredentials: true },headers);
    setBallanceTraffic(response.data.bandwidth_balance);
    setBallanceWallet(response.data.wallet_balance);
    setRef(response.data.referred_by_uuid);
    console.log(ballanceTraffic);

  };

  return (

    <>
    <div className="dark:bg-gray-900">


<CarUp referred_by_uuid={ref} ballance_Traffic={ballanceTraffic} ballance_Wallet={ballanceWallet}  total_expired_vpn_clients={infovpnClients.total_expired_vpn_clients} total_valid_vpn_clients={infovpnClients.total_valid_vpn_clients} total_vpn_clients={infovpnClients.total_vpn_clients}/>
<Card className="h-full w-full bg-gray-50 dark:bg-gray-900">

<CardHeader floated={false} shadow={false} className="g-white dark:bg-gray-900 ">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" className="text-gray-900 dark:text-white">
              Members list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal text-gray-900 dark:text-gray-300">
              See information about all members
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <Link to="/adduser" state={{ from: "" }}>

            <Button className="flex items-center gap-3" color="blue" size="sm">

              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
            </Button>
            </Link>
             <Link to="/renewuser" state={{ from: "" }}>

            <Button className="flex items-center gap-3" variant="outlined"  color="blue-gray" size="sm" >
            <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Charge User
            </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between  gap-2 md:flex-row">
          <Tabs value="all" className="w-full  ">
            <TabsHeader className="dark:bg-gray-800">
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value} className="dark:text-blue-400" onClick={(e) => setStatus(value)}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
         
          <div className="w-full  ">
            <Input label="Search" 
            placeholder="Search by email, uuid, etc."
            onChange={(e) => handleInputChange(e.target.value)}
             icon={<MagnifyingGlassIcon className="h-5 w-5 " />} />
          </div>
        </div>
      </CardHeader>


    


      

      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max m-2 table-auto text-left">
          <thead>
            <tr>


            {TABLE_HEAD2.map((head) => (
                <th key={head} onClick={() => handleSort(head)} 
                className="border-y text-gray-500 md:text-lg dark:text-gray-400 dark:bg-gray-800  p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70 dark:text-blue-gray-50"
                  >
                    {head} {orderBy === head && (order === "asc" ? "↑" : "↓")}
                  </Typography>
                </th>
              ))}


            </tr>






          </thead>
          <tbody>




            {vpnClients.map(({  email,status, v2ray_connections_url, v2ray_sub_url, outline_connections_url, bandwidth_balance,bandwidth_used,created_at,expiration_time,check_bandwidth_url,vpn_client_uuid }, index) => {
              const isLast = index === vpnClients.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
              return (
                <tr key={vpn_client_uuid}>

                  <td className={classes}>
                    <Typography variant="small"  className="font-normal text-gray-900 dark:text-white">
                      {email}
                    </Typography>
                  </td>


                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant=""
                        size="sm"
                        value={status}
                        color={status==="expired" ? "red" : "green"}
                      />
                    </div>
                  </td>

                  <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                  <Link to={v2ray_connections_url} className="">

                    <Button className="flex items-center gap-3" color="blue" size="sm" >
                       Open Link
                    </Button>
                    </Link>
                 </Typography>
                   
                  </td>



                  <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                  <Link to={check_bandwidth_url} className="">

                    <Button className="flex items-center gap-3" color="blue" size="sm" >
                       Open Link
                    </Button>
                    </Link>
                 </Typography>
                    
                  </td>
                  
                  <td className={classes} >
                    <div className="flex items-center ">
                    <Tooltip content="Recharge User" >
                      <Link to="/renewuser" state={{ from: vpn_client_uuid }}>
                      <Button className="flex items-center gap-3" color="green" size="sm" >
Charge User                    </Button>

                      
                      </Link>
                    </Tooltip>
                    </div>
                  </td>



                  <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                  <Link to={v2ray_sub_url} className="">
                    <Button className="flex items-center gap-3" color="blue" size="sm" >
                       Open Link
                       
                    </Button>
                    </Link>


                    
          



                    
                 </Typography>
                    
                  </td>


                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                    <Link to={outline_connections_url} className="">

                    <Button className="flex items-center gap-3" color="blue" size="sm" >
                       Open Link
                    </Button>
                    </Link>
                                </Typography>
                  </td>

                  <td className={classes}>
                    <Typography variant="small" className="font-normal text-gray-900 dark:text-white">
                      {bandwidth_balance}
                    </Typography>
                  </td>
                  
                  <td className={classes}>
                    <Typography variant="small"  className="font-normal text-gray-900 dark:text-white">
                      {bandwidth_used}
                    </Typography>
                  </td>
                  
                  <td className={classes}>
                    <Typography variant="small" className="font-normal text-gray-900 dark:text-white">
                      {created_at}
                    </Typography>
                  </td>
                  
                  <td className={classes}>
                    <Typography variant="small" className="font-normal text-gray-900 dark:text-white">
                      {expiration_time}
                    </Typography>
                  </td>


                  
                 
                  </tr>

);
})}






          
          </tbody>
        </table>
      </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
     
       <div className="flex flex-row items-center justify-center">
       <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white pr-5">Page Show :   </label>
<select id="countries"
onChange={(e) => setLimit(e.target.value)}
class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option value="10">10</option>
  <option value="20">20</option>
  <option value="50">50</option>
  <option value="100">100</option>
</select>
       </div>








        <div className="flex gap-2">
          <Button variant="outlined" color="blue-gray" size="sm" disabled={page === 1} onClick={() => setPage(page - 1)}>
            Previous
          </Button>
          {Array.from({ length: Math.ceil(totalClients / limit) }, (_, i) => (
            <button
              key={i}
              disabled={i + 1 === page}
              onClick={() => setPage(i + 1)}
              className={i + 1 === page ? " font-normal text-gray-900 dark:text-white selected-page" : "font-normal text-gray-900 dark:text-white"}
              style={{ margin: "0 5px" }}
            >
              {i + 1}
            </button>
          ))}
          <Button variant="outlined" color="blue-gray" size="sm"  onClick={() => setPage(page + 1)}>
            Next
          </Button>
        </div>
      </CardFooter>




      </Card>
    </div>
    </> 
    );
};

export default VpnClientsTable;
