import React from 'react'
import { useState,useEffect } from "react";
import axios from "axios";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


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



const TABLE_HEAD2 = ["created_at","Total Traffic Balance", "Traffic Exchange Amount", "Transaction Description","Reverted","Request Uuid"];

const History = () => {
  var headers = {
    origin: 'http://localhost:3000',     
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

const [listUsers,setlistUsers]=useState([]);




  const [vpnClients, setVpnClients] = useState([]);

  const [infovpnClients, setinfoVpnClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [totalClients, setTotalClients] = useState(0); // New state for total clients
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [orderBy, setOrderBy] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [status, setStatus] = useState("all");
  const [keyword, setKeyword] = useState("");

  const url=`https://api.v2rayreseller.com/api/v1/bandwidth/transactions?page=${page}&limit=${limit}&order_by=${orderBy}&order=${order}&keyword=${keyword}`;


 
  const fetchVpnClients = async () => {
   
    const response = await axios.get(url, { withCredentials: true },headers);
    setVpnClients(response.data.transactions);
    setinfoVpnClients(response.data);

    setTotalClients(response.data.fund_requests); // Assuming total clients is available in the response
  };







  useEffect(() => {
    fetchVpnClients();

    axios
      .get(url, {
          withCredentials: true,
        })
      .then((json) => {
        setlistUsers(json.data.requests)
        console.log(json.data.requests)


      })
      .catch((error) => {
        console.log(error);
      });
  }, [page, limit, orderBy,searchTerm, order,keyword]);

  const handleSort = (column) => {
    setOrder(order === "asc" ? "desc" : "asc");
  };

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


  return (


<>



<Card className="h-full w-full dark:bg-gray-900">

    
    



<div className="w-full  ">
            <Input label="Search" 
            placeholder="Search by email, uuid, etc."
            onChange={(e) => handleInputChange(e.target.value)}
             icon={<MagnifyingGlassIcon className="h-5 w-5 " />} />
          </div>

<CardBody className="overflow-scroll dark:bg-gray-900 px-0">
  <table className="mt-4 w-full min-w-max table-auto text-gray-500 text-left">
    <thead className='uppercase'>
      <tr>
        {TABLE_HEAD2.map((head) => (
          <th key={head} onClick={() => handleSort(head)}  
          className="border-y border-blue-gray-100 bg-blue-gray-50/50 dark:bg-gray-800 p-4">
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





      {listUsers.map(({  created_at, total_traffic_balance, traffic_exchange_amount, transaction_description,reverted,request_uuid }, index) => {
        const isLast = index === listUsers.length - 1;
        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

        return (
          <tr key={request_uuid} className=" px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">




            

            <td className={classes}>
            <Typography variant="small"  className="font-normal text-gray-900 dark:text-white">
                {created_at}
              </Typography>
            </td>

            <td className={classes}>
            <Typography variant="small"  className="font-normal text-gray-900 dark:text-white">
                {total_traffic_balance}
              </Typography>
            </td>


            <td className={classes}>
            <Typography variant="small"  className="font-normal text-gray-900 dark:text-white">
                {traffic_exchange_amount}
              </Typography>
            </td>

            

            <td className={classes}>
            <Typography variant="small"  className="font-normal text-gray-900 dark:text-white">
                {transaction_description}
              </Typography>
            </td>
            
            <td className={classes}>
            <Typography variant="small"  className="font-normal text-gray-900 dark:text-white">
                {reverted}
              </Typography>
            </td>
            <td className={classes}>
            <Typography variant="small"  className="font-normal text-gray-900 dark:text-white">
                {request_uuid}
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



</>



    )
}

export default History