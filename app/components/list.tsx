// Conseguir la informacion de los usuarios
// Revisar la cookie de autoenticacion para determinar si admin o usuario normal
// Renderizar

"use client";
import { useEffect, useState } from "react";
import verifyRole from "@/app/modules/verifyRole";
import axiosInstancePrivate from "@/service/axiosInstancePrivate";
// tipos de respuesta del backend
import { usersAll, userType } from "@/app/types/list";

export default function List(){
 const [list, setList] = useState<usersAll|null>(null);
 const [error, setError] = useState<boolean>(false);


useEffect(()=>{
const fetchData = async () => {
 try {
  const res = await axiosInstancePrivate.get('/api/list/all',{
   params: { 
    page: 1, 
    limit: 10,
   }
  });
  const users = res.data;
  setList(users);
 } catch (err) {
  setError(true);
 }
}
fetchData();
},[]);


return (
 <div>{JSON.stringify(list?.data)}</div>
);

}
