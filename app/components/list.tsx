"use client";
import { useState } from "react";

import axiosInstancePrivate from "@/service/axiosInstancePrivate";
import { usersAll, userType } from "@/app/types/list";


export default function List(){
 const [list, setList] = useState<usersAll|null>(null);
 const [error, setError] = useState<boolean>(false);

const getList = async () => {
 try {
   const users = await axiosInstancePrivate.get('/api/list/all',{
    params: { 
     page: 1, 
     limit: 10,
    }
   })

   setList(users.data);
  } catch (err) {
   setError(true);
 }
}

getList();

return (
    <ul>
    {!error && list?.data.map((user: userType) => (
       <li key={user.role.id}>
        <div>{user.username}</div>
        <div>{user.email}</div>
       </li>
      ))
    }
    </ul>
);

}
