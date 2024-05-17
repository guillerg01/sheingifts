"use client";

import axiosInstancePrivate from "@/service/axiosInstancePrivate";
import { useState } from "react";

export default function List(){
 const [list, setList] = useState('');

const getList = async () => {
 try {
   const users = await axiosInstancePrivate.get('/api/list/all'); 
   setList(users);
 } catch (err) {
   console.log(err);
 }
}

getList();

 return(
  <div>
   List component 
    {list.length}
  </div>
 );
}
