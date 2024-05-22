"use client";
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

import { useEffect, useState } from "react";
import verifyRole from "@/app/modules/verifyRole";
import axiosInstancePrivate from "@/service/axiosInstancePrivate";
// tipos de respuesta del backend
import { userType } from "@/app/types/list";

export default function List(){
 const [list, setList] = useState<userType[]|null>(null);
 const [error, setError] = useState<boolean>(false);
 const [isAdmin, setIsAdmin] = useState<boolean>(false);


useEffect(()=>{

const fetchData = async () => {
  const res = await axiosInstancePrivate.get('/api/list/all',{
   params: { 
    page: 1, 
    limit: 10,
   }
  });
  const users = res.data.data;
  setList(test);
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

},[]);

// Usar un contenedor
return (
  <div className="w-full h-full flex items-center justify-center">
    {error ? <div>Error fetching from the database</div> :
      isAdmin ? 
        <div>
          {/* Vista de Administrador */}
        </div>
        :
        <div>
          {/* Vista de Usuario */}
          <h2 className="text-2xl font-bold mb-4 text-center">Lista de Usuarios</h2>
          <div className="overflow-x-auto">
            <table className="text-left border-collapse border">
              <thead>
                <tr className="bg-blue-500 rounded-md shadow-md">
                  <th className="p-2 md:p-4">#</th>
                  <th className="p-2 md:p-4">Usuario</th>
                  <th className="p-2 md:p-4">Correo</th>
                  <th className="p-2 md:p-4">Rol</th>
                </tr>
              </thead>
              <tbody>
                {list?.map((user, index) => (
                  <tr key={index} className="bg-gray-100 rounded-md shadow-md">
                    <td className="p-2 md:p-4">{index+1}</td>
                    <td className="p-2 md:p-4">{user.username}</td>
                    <td className="p-2 md:p-4">{user.email}</td>
                    <td className="p-2 md:p-4">{user.role.role_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    }
  </div>
);
}

