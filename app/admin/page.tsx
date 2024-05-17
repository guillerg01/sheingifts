'use client'
import React, { useState } from 'react';
import { Sidebar } from './Componentes/sidebar'
import DataTable from './Componentes/table';
interface Column {
    label: string;
    key: string;
  }
  
  interface DataItem {
    [key: string]: any;
  }
export default function Admin(){


    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const columns: Column[] = [
        { label: '#', key: 'number' },
        { label: 'Name', key: 'name' },
        { label: 'Job Title', key: 'jobTitle' },
        { label: 'Phone', key: 'phone' },
        { label: 'Email', key: 'email' },
        { label: 'Address', key: 'address' },
      ];
      
const contactsData: DataItem[] = [
    { number:1,name: 'Dwight Adams', jobTitle: 'UI Designer', phone: '555-873-9812', email: 'dwight@adams.com', address: '71 Cherry Court, SO, United Kingdom' },
    { number:2,name: 'Dwight Adams', jobTitle: 'UI Designer', phone: '555-873-9812', email: 'dwight@adams.com', address: '71 Cherry Court, SO, United Kingdom' },
    { number:3,name: 'Dwight Adams', jobTitle: 'UI Designer', phone: '555-873-9812', email: 'dwight@adams.com', address: '71 Cherry Court, SO, United Kingdom' },

  ];
  
  return (

    <div className='flex flex-cols-2'>
        <Sidebar></Sidebar>
        <div className='h-screen w-full p-2 flex flex-col items-center'>
            
        <div className="flex items-center -mx-4 space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <div className={`flex items-center flex-shrink-0 border-b-4 dark:border-gray-300 dark:text-gray-600 px-5 py-2 ${selectedIndex === 0? 'border-blue-500 text-blue-500' : ''}`} onClick={() => setSelectedIndex(0)}>Sorteo mágico</div>
<div className={`flex items-center flex-shrink-0 border-b-4 dark:border-gray-300 dark:text-gray-600  px-5 py-2 ${selectedIndex === 1? 'border-blue-500 text-blue-500' : ''}`} onClick={() => setSelectedIndex(1)}>Regalos gratis</div>
<div className={`flex items-center flex-shrink-0 border-b-4 dark:border-gray-300 dark:text-gray-600 px-5 py-2 ${selectedIndex === 2? 'border-blue-500 text-blue-500' : ''}`} onClick={() => setSelectedIndex(2)}>Fácil de ganar</div>
<div className={`flex items-center flex-shrink-0 border-b-4 dark:border-gray-300 dark:text-gray-600 px-5 py-2 ${selectedIndex === 3? 'border-blue-500 text-blue-500' : ''}`} onClick={() => setSelectedIndex(3)}>Guardería canina</div>
<div className={`flex items-center flex-shrink-0 border-b-4 dark:border-gray-300 dark:text-gray-600 px-5 py-2 ${selectedIndex === 4? 'border-blue-500 text-blue-500' : ''}`} onClick={() => setSelectedIndex(4)}>Feliz sorteo</div>
<div className={`flex items-center flex-shrink-0 border-b-4 dark:border-gray-300 dark:text-gray-600 px-5 py-2 ${selectedIndex === 5? 'border-blue-500 text-blue-500' : ''}`} onClick={() => setSelectedIndex(5)}>Sorteo Shein</div>
<div className={`flex items-center flex-shrink-0 border-b-4 dark:border-gray-300 dark:text-gray-600 px-5 py-2 ${selectedIndex === 6? 'border-blue-500 text-blue-500' : ''}`} onClick={() => setSelectedIndex(6)}>Árbol de dinero</div>
</div>

<DataTable data={contactsData} columns={columns} />


</div>
    </div>
  )
}
