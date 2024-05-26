// Cada fila de la tabla tiene la funcionalidad de edicion y eliminacion
// Como al parecer no existian usuarios en la bd no probe con datos reales las peticiones delete y patch

import Image from "next/image";
import { userType } from "../types/list";
import bin24 from "@/public/8icons/bin24.png"
import edit24 from "@/public/8icons/edit24.png"
import { useState } from "react";
import axiosInstancePrivate from "@/service/axiosInstancePrivate";

export default function UserRow({user,index}:{user: userType, index: number}) {
 const [data, setData] = useState<userType>(user);
 const [exists, setExists] = useState<boolean>(true);
 const [editing, setEditing] = useState<boolean>(false);
 
 const deleteUser = async () => {
  try {
   // Eliminar al usuario de la base de datos
   const res = await axiosInstancePrivate.delete("/api/users/delete/" + data.role.id);
   setExists(false);
  } catch (err) {
   console.log(err);
  }
 }

 const editUser = () => {
  setEditing(!editing);
  console.log('funciona');
 }

 const verifyEditEnd = async (e: React.KeyboardEvent<HTMLInputElement>) => {
  if(e.key === "Enter"){
   const newWidth = e.target.value.length + 2;
   e.target.style.width = `${newWidth}ch`;
   setEditing(false);
   try { 
    // Editar el usuario en la base de datos
    const res = await axiosInstancePrivate.patch("/api/users/edit"+data.role.id, user);
   } catch (err) {
     console.log(err);
   }
  } 
 }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   const { name, value } = e.target;
   setData({ ...data, [name]: value });
   console.log(data);
  };

 return(
   <tr className={`bg-gray-100 rounded-md shadow-md ${exists ? '' : 'hidden'} ${editing ? "bg-yellow-200" : ""}`}>
                    <td className="p-2 md:p-4 md:text-base text-sm" >{index+1}</td>
                    <td className="p-2 md:p-4 md:text-base text-sm" ><input className="p-2 bg-gray-100" type="text" defaultValue={user.username} style={{width: `${user.username.length+2}ch`}} onKeyDown={verifyEditEnd} disabled={!editing} onChange={handleInputChange}></input></td>
                    <td className="p-2 md:p-4 md:text-base text-sm" ><input className="p-2 bg-gray-100" type="text" defaultValue={user.email} style={{width: `${user.email.length+2}ch`}} onKeyDown={verifyEditEnd} disabled={!editing} onChange={handleInputChange} ></input></td>
                    <td className="p-2 md:p-4 md:text-base text-sm" ><input className="p-2 bg-gray-100" type="text" defaultValue={user.role.role_value} style={{width: `${user.role.role_value.length+2}ch`}} onKeyDown={verifyEditEnd} disabled={!editing} onChange={handleInputChange} ></input></td>
                    <td className="p-2 md:p-4 md:text-base text-sm" ><input className="p-2 bg-gray-100" type="text" defaultValue={user.role.role_name} style={{width: `${user.role.role_name.length+2}ch`}} onKeyDown={verifyEditEnd} disabled={!editing} onChange={handleInputChange} ></input></td>
                    <td className="p-2 md:p-4 md:text-base text-sm" ><input className="p-2 bg-gray-100" type="text" defaultValue={user.role.id} style={{width: `${user.role.id.length+2}ch`}} onKeyDown={verifyEditEnd} disabled={!editing} onChange={handleInputChange} ></input></td>
                    <td className="p-2 md:p-4 md:text-base text-sm flex gap-2 items-center justify-center text-center">
                     <div className="bg-green-500 p-2 text-center rounded-md"> Activo</div>
                     <Image src={edit24} alt="_edit" className="cursor-pointer" onClick={editUser}/>
                     <Image src={bin24} alt="_delete" className="cursor-pointer" onClick={deleteUser}/>
                    </td>
  </tr> 
 );
}
