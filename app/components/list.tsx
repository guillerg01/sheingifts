"use client";
/*
const test: userType[] = [
  {
    email: "user1@example.com",
    username: "user1",
    password: "password1",
    role: {
      id: "1",
      role_value: "admin",
      role_name: "Administrator",
    }
  },
  {
    email: "user2@example.com",
    username: "user2",
    password: "password2",
    role: {
      id: "2",
      role_value: "user",
      role_name: "User",
    }
  },
  
  {
    email: "user3@example.com",
    username: "user3",
    password: "password3",
    role: {
      id: "3",
      role_value: "moderator",
      role_name: "Moderator",
    }
    }
];
*/

import { useEffect, useState } from "react";
import verifyRole from "@/app/modules/verifyRole";
import axiosInstancePrivate from "@/service/axiosInstancePrivate";
import { userType } from "@/app/types/list";
import UserRow from "./userRow";


const PAGE_SIZE = 10;

export default function List(){
 const [list, setList] = useState<userType[]|null>(null);
 const [error, setError] = useState<boolean>(false);
 const [isAdmin, setIsAdmin] = useState<boolean>(false);
 const [page, setPage] = useState<number>(1);
 const [numberOfUsers, setNumberOfUsers] = useState<number>(0);


useEffect(()=>{

const fetchData = async () => {
  const res = await axiosInstancePrivate.get('/api/list/all',{
   params: { 
    page: page, 
    limit: PAGE_SIZE,
   }
  });
  const users = res.data.data;
  // testing
  // setList (test)
  setList(users);
}
   const checkRole = async () => {
    const isAdmin = await verifyRole();
    setIsAdmin(isAdmin);
  }
 try {
fetchData();
checkRole();
 } catch (err) {
  setError(true);
 }

},[page]);

useEffect(()=>{
 const getTotal = async () => {
  let rows = await axiosInstancePrivate.get('api/list/all');  
  setNumberOfUsers(rows.data.data.length); 
  /* Tengo que hacer esto para obtener el total de usuarios registrados, seria mejor si 
     alguna ruta de la API devolviese solo el numero de filas de la tabla */
 }
 getTotal();
},[]);



// Usar un contenedor
return (
  <div className="md:ml-2 ml-80 w-full h-full flex items-center justify-center">
    {error ? <div>Error fetching from the database</div> :
      isAdmin ? 
        <div>
          {/* Vista de Administrador */}
          <h2 className="text-2xl font-bold mb-4 text-center">Lista de Usuarios</h2>
          {/* Tabla */}
          <div className="overflow-x-auto">
            <table className="text-left border-collapse border">
              <thead>
                <tr className="bg-blue-500 shadow-md">
                  <th className="p-2 md:p-4 md:text-base text-sm">#</th>
                  <th className="p-2 md:p-4 md:text-base text-sm">username</th>
                  <th className="p-2 md:p-4 md:text-base text-sm">email</th>
                  <th className="p-2 md:p-4 md:text-base text-sm">role_value</th>
                  <th className="p-2 md:p-4 md:text-base text-sm">role_name</th>
                  <th className="p-2 md:p-4 md:text-base text-sm">role_id</th>
                  <th className="p-2 md:p-4 md:text-base text-sm text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {list?.map((user, index) => (
                 <UserRow index={index} user={user} key={index}/>
                ))}
              </tbody>
            </table>
          </div>
          {/* Paginacion */}
          <div className="flex gap-3 justify-around mt-5">
           <div className={`bg-blue-500 rounded-md font-semibold cursor-pointer shadow-md md:text-base text-sm md:p-4 p-2 ${page === 1 ? "invisible" : "" }`}
            onClick={()=>{if(page>1)setPage(page-1)}}>Anterior</div>
           <div className={`bg-blue-500 rounded-md font-semibold cursor-pointer shadow-md md:text-base text-sm md:p-4 p-2 ${numberOfUsers <= (PAGE_SIZE * page) ? "invisible" : "" }`}
            onClick={()=>{if(numberOfUsers >= (PAGE_SIZE * page))setPage(page+1)}}>Siguiente</div>
          </div>
        </div>
        :
        <div>
          {/* Vista de Usuario */}
          <h2 className="text-base md:text-2xl font-bold mb-4 text-left md:text-center">Lista de Usuarios</h2>
          {/* Tabla */}
          <div className="overflow-x-auto">
            <table className="text-left border-collapse border">
              <thead>
                <tr className="bg-blue-500 rounded-md shadow-md">
                  <th className="p-2 md:p-4 md:text-base text-sm">#</th>
                  <th className="p-2 md:p-4 md:text-base text-sm">Usuario</th>
                  <th className="p-2 md:p-4 md:text-base text-sm">Correo</th>
                  <th className="p-2 md:p-4 md:text-base text-sm">Rol</th>
                </tr>
              </thead>
              <tbody>
                {list?.map((user, index) => (
                  <tr key={index} className="bg-gray-100 rounded-md shadow-md">
                    <td className="p-2 md:p-4 md:text-base text-sm">{index+1}</td>
                    <td className="p-2 md:p-4 md:text-base text-sm">{user.username}</td>
                    <td className="p-2 md:p-4 md:text-base text-sm">{user.email}</td>
                    <td className="p-2 md:p-4 md:text-base text-sm">{user.role.role_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Paginacion */}
          <div className="flex gap-3 justify-around mt-5">
           <div className={`bg-blue-500 rounded-md font-semibold cursor-pointer shadow-md md:text-base text-sm md:p-4 p-2 ${page === 1 ? "invisible" : "" }`}
            onClick={()=>{if(page>1)setPage(page-1)}}>Anterior</div>
           <div className={`bg-blue-500 rounded-md font-semibold cursor-pointer shadow-md md:text-base text-sm md:p-4 p-2 ${numberOfUsers <= (PAGE_SIZE * page) ? "invisible" : "" }`}
            onClick={()=>{if(numberOfUsers >= (PAGE_SIZE * page))setPage(page+1)}}>Siguiente</div>
          </div>
        </div>
    }
  </div>
);
}

