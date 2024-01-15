import React from 'react'

import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  Bars3CenterLeftIcon,  
  CogIcon, 
  QuestionMarkCircleIcon,
  ScaleIcon,  
  XMarkIcon,
} from "@heroicons/react/24/outline";


const ordersLinks = [
  {
    name: "Dashboard",
    href: "",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 m-1">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
    current: true,
  },

];

const productsLinks = [
  {
    name: "Get All Product",
    href: "getAllProduct",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 m-1">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
    current: false,
  },

  {
    name: "Add New Product",
    href: "addProduct",
    icon: ScaleIcon,
    current: false,
  },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CategoryLinks = [
  { 
    name: "Get All Category", 
    href: "getAllCategory", 
    icon: CogIcon },
  {
    name: "Add New Category",
    href: "addCategory",
    icon: QuestionMarkCircleIcon,
  },
];

const AdminDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
 
  return (
    <>
    
    <div className="min-h-full">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full">
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-cyan-700 pt-5 pb-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0">
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}>
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex flex-shrink-0 items-center px-4"></div>
               
                <nav
                  className="mt-5 flex flex-1 flex-col divide-y divide-cyan-800 overflow-y-auto"
                  aria-label="Sidebar">
                  {/* orders links mobile */}
                  <div className="mt-1 pt-1">
                    <div className="space-y-1 px-2">
                      {ordersLinks.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-cyan-100 hover:bg-cyan-600 hover:text-white">
                          <item.icon
                            className="mr-4 h-6 w-6 text-cyan-200"
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-1 px-2 mt-8">
                    {/*Products  links mobile */}
                    {productsLinks.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-cyan-800 text-white"
                            : "text-cyan-100 hover:text-white hover:bg-cyan-600",
                          "group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                        )}
                        aria-current={item.current ? "page" : undefined}>
                        <item.icon
                          className="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200"
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                 
                  {/* Categories mobile */}
                  <div className="mt-3 pt-3">
                    <div className="space-y-1 px-2">
                      {CategoryLinks.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-cyan-100 hover:bg-cyan-600 hover:text-white">
                          <item.icon
                            className="mr-4 h-6 w-6 text-cyan-200"
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                 
                </nav>
                {/* end of mobile nav */}
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>
  
      {/* Static sidebar for desktop */}
      <div className=" hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
     
        {/* Sidebar component, swap this element with another sidebar if you like */}
       
        <div className="flex flex-grow flex-col overflow-y-auto bg-cyan-900 pb-4">
           <div className='text-center mt-3 logodigital'>
            <h1 className='text-danger'>DIGITAL<span className='text-primary'>FLAKE</span></h1>
            {/* <img src="image/DF_logo-transparent2.png" alt="logo" style={{width: "100px",alignItems:"center", marginLeft:"60px"}}/> */}
           </div>
          <hr className='mt-3'/>
          <nav
            className="mt-5 flex flex-1 flex-col divide-y divide-cyan-800 overflow-y-auto"
            aria-label="Sidebar">
            {/* orders links desktop */}
            <div className="mt-1 pt-1">
              <div className="space-y-1 px-2">
                {ordersLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-cyan-100 hover:bg-cyan-600 hover:text-white">
                    <item.icon
                      className="mr-4 h-6 w-6 text-cyan-200"
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-1 px-2 mt-8">
              {/*Products  links desktop */}
              {productsLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-cyan-800 text-white"
                      : "text-cyan-100 hover:text-white hover:bg-cyan-600",
                    "group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                  )}
                  aria-current={item.current ? "page" : undefined}>
                  <item.icon
                    className="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200"
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              ))}
            </div>
           
            {/* Categories desktop */}
            <div className="mt-3 pt-3">
              <div className="space-y-1 px-2">
                {CategoryLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-cyan-100 hover:bg-cyan-600 hover:text-white">
                    <item.icon
                      className="mr-4 h-6 w-6 text-cyan-200"
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                  
                ))}
                
              </div>
  
   
            </div>
            
           
          </nav>
        </div>
      </div>

     
      <div className="flex flex-1 flex-col lg:pl-64">
        <div className="flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:border-none">
          <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
            onClick={() => setSidebarOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <Bars3CenterLeftIcon className="h-6 w-6" aria-hidden="true" />
          </button>
         
  
          <div className='container adminNavbar-top '>
          <div class="adminNavbar mx-4">
            <div>
              <h1>WELCOME TO ADMIN DASHBOARD</h1>
            </div>
            <div>
            <button type="button" className="p-2 btn1 px-4" >Log Out</button>

            </div>
           

            </div>
          </div>
          
        </div>
        <hr />
        <main className="flex-1 pb-8">
            {/* Page header */}
            
           
            <Outlet />
            {/* content */}
          </main>
      </div>
    </div>
  </>
  )
}

export default AdminDashboard