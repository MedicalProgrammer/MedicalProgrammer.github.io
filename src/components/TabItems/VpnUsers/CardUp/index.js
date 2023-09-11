import { Card, Collapse } from "@material-tailwind/react";
import React from "react";
import  { useState } from "react";

export default function CarUp(props) {
  const [open, setOpen] = React.useState(false);
  const [copied, setCopied] = useState(false);


  const copyToClipboard =(str)=> () => {
    navigator.clipboard.writeText(str).then(
      () => {
        setCopied(true);
        // changing back to default state after 2 seconds.
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      },
      (err) => {
        console.log("failed to copy", err.mesage);
      }
    );
  };

  const btnStyle = copied ? "bg-gray-500 text-white" : "";








  const toggleOpen = () => setOpen((cur) => !cur);

  console.log(props.status);

  return (
    <>


      <div className="w-full h-fit  p-0 rounded-lg ">
        <div class="bg-white dark:bg-gray-900 p-3 rounded-lg">
       
          <div class="grid grid-cols-3 gap-3 mb-2">
            <dl class="bg-orange-50 dark:bg-gray-800 rounded-lg flex flex-col items-center justify-center h-[78px]">
              <dt class="w-8 h-8 rounded-full bg-orange-100 dark:bg-gray-700 text-orange-600 dark:text-orange-200 text-sm font-medium flex items-center justify-center mb-1">
                {props.total_vpn_clients}
              </dt>
              <dd class="text-orange-600 dark:text-orange-300 text-sm font-medium">
                All Users
              </dd>
            </dl>
            <dl class="bg-teal-50 dark:bg-gray-800 rounded-lg flex flex-col items-center justify-center h-[78px]">
              <dt class="w-8 h-8 rounded-full bg-teal-100 dark:bg-gray-700 text-teal-600 dark:text-teal-200 text-sm font-medium flex items-center justify-center mb-1">
                {props.total_valid_vpn_clients}
              </dt>
              <dd class="text-teal-600 dark:text-teal-300 text-sm font-medium">
                Active Users
              </dd>
            </dl>
            <dl class="bg-blue-50 dark:bg-gray-800 rounded-lg flex flex-col items-center justify-center h-[78px]">
              <dt class="w-8 h-8 rounded-full bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-200 text-sm font-medium flex items-center justify-center mb-1">
                {props.total_expired_vpn_clients}
              </dt>
              <dd class="text-blue-600 dark:text-blue-300 text-sm font-medium">
                DeActive Users
              </dd>
            </dl>
          </div>
          <button
            data-collapse-toggle="more-details"
            onClick={toggleOpen}
            type="button"
            class="hover:underline text-xs text-gray-800 dark:text-gray-300 font-medium inline-flex items-center"
            aria-expanded="true"
          >
            Show more details{" "}
            <svg
              class="w-2 h-2 ml-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              ></path>
            </svg>
          </button>

         <Collapse open={open}>
            <div class="border-gray-200 border-t dark:border-gray-600 pt-3 mt-3 space-y-2">
              <dl class="flex items-center justify-between">
                <dt class="text-gray-500 dark:text-gray-400 text-sm font-normal">
                  Balance Avalible Gigabyte
                </dt>
                <dd class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
                  <svg
                    class="w-2.5 h-2.5 mr-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 14"
                  >
                    
                  </svg>{" "}
                  
                  {props.ballance_Traffic} Gigabyte
                </dd>
              </dl>
              <dl class="flex items-center justify-between">
                <dt class="text-gray-500 dark:text-gray-400 text-sm font-normal">
                  Balance Wallet USDT
                </dt>
                <dd class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-gray-600 dark:text-gray-300">
                {props.ballance_Wallet} USDT
                </dd>
              </dl>
              <dl class="flex items-center justify-between">
                <dt class="text-gray-500 dark:text-gray-400 text-sm font-normal">
                  Your Refrall Code :
                </dt>
                <dd 
                
                
                className={btnStyle + "bg-gray-100 w-96 text-center text-gray-800 text-xs font-medium  items-center px-2.5 py-1 rounded-md dark:bg-gray-600 dark:text-gray-300"}
                onClick={copyToClipboard(props.referred_by_uuid)}
                
                >
                {copied ? "Copied" : props.referred_by_uuid}
                </dd>
              </dl>
            </div>
          </Collapse>
        </div>
      </div>
    </>
  );
}
