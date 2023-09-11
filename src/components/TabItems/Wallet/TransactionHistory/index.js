import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Card3 from "./Card3";
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

const TABLE_HEAD2 = [
  "Create At",
  "Description",
  "Transaction Value",
  "Wallet Balance",
];

export default function TransactionHistory() {
  const [data, setData] = useState([]);
  const [listUsers, setlistUsers] = useState([]);

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

  const fetchVpnClients = useCallback(async () => {
    var headers = {
      origin: 'http://localhost:3000',

      "Accept": "application/json",
      "Content-Type": "application/json",
    };
    const url = `https://api.v2rayreseller.com/api/v1/user/wallet/transactions?page=${page}&limit=${limit}&order_by=${orderBy}&order=${order}&keyword=${keyword}`;
    const response = await axios.get(url, { withCredentials: true }, headers);
    setVpnClients(response.data.transactions);
    setinfoVpnClients(response.data);

    setTotalClients(response.data.fund_requests); // Assuming total clients is available in the response
  }, [page, limit, orderBy, order]);

  const fetchBallance = useCallback(async () => {
    var headers = {
      origin: 'http://localhost:3000',

      "Accept": "application/json",
      "Content-Type": "application/json",
    };
    const url = "https://api.v2rayreseller.com/api/v1/portal_user";
    const response = await axios.get(url, { withCredentials: true }, headers);
    setBallanceTraffic(response.data.bandwidth_balance);
    setBallanceWallet(response.data.wallet_balance);
    setRef(response.data.referred_by_uuid);
    console.log(ballanceTraffic);
  }, []);

  useEffect(() => {
    fetchVpnClients();

    fetchBallance();
  }, [page, limit, orderBy, order, ballanceWallet,searchTerm, ballanceTraffic, ref,keyword]);


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
      <Card3
        referred_by_uuid={ref}
        ballance_Traffic={ballanceTraffic}
        ballance_Wallet={ballanceWallet}
        total_count={infovpnClients.total_count}
      />

      <Card className="h-full w-full mt-5 dark:bg-gray-900">
      <div className="w-full  ">
            <Input label="Search" 
            placeholder="Search by email, uuid, etc."
            onChange={(e) => handleInputChange(e.target.value)}
             icon={<MagnifyingGlassIcon className="h-5 w-5 " />} />
          </div>
        <CardBody className="overflow-scroll px-0 dark:bg-gray-900">
          <table className=" w-full min-w-max table-auto text-left text-gray-500 ">
            <thead className="text-gray-700 uppercase  dark:bg-gray-900 ">
              <tr>
                {TABLE_HEAD2.map((head) => (
                  <th
                  onClick={() => handleSort(head)}  
                    key={head}
                    
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 dark:bg-gray-800 p-4"
                  >
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
            <tbody className="dark:border-gray-700 ">
              {vpnClients.map(
                (
                  {
                    created_at,
                    transaction_description,
                    transaction_value,
                    wallet_balance,
                  },
                  index
                ) => {
                  const isLast = index === vpnClients.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50 ";

                  return (
                    <tr
                      key={created_at}
                      className=" px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="font-normal text-gray-900 dark:text-white"
                        >
                          {created_at}
                        </Typography>
                      </td>

                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="font-normal text-gray-900 dark:text-white"
                        >
                          {transaction_description}
                        </Typography>
                      </td>

                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="font-normal text-gray-900 dark:text-white"
                        >
                          {transaction_value}
                        </Typography>
                      </td>

                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="font-normal text-gray-900 dark:text-white"
                        >
                          {wallet_balance}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <div className="flex flex-row items-center justify-center">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white pr-5"
            >
              Page Show :{" "}
            </label>
            <select
              id="countries"
              onChange={(e) => setLimit(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outlined"
              color="blue-gray"
              size="sm"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Previous
            </Button>
            {Array.from({ length: Math.ceil(totalClients / limit) }, (_, i) => (
              <button
                key={i}
                disabled={i + 1 === page}
                onClick={() => setPage(i + 1)}
                className={
                  i + 1 === page
                    ? " font-normal text-gray-900 dark:text-white selected-page"
                    : "font-normal text-gray-900 dark:text-white"
                }
                style={{ margin: "0 5px" }}
              >
                {i + 1}
              </button>
            ))}
            <Button
              variant="outlined"
              color="blue-gray"
              size="sm"
              onClick={() => setPage(page + 1)}
            >
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}