"use client"
import axiosInstancePrivate from "@/service/axiosInstancePrivate";
import Cookies from "js-cookie";
import { userType } from "../types/list";

export default async function verifyRole() : Promise<boolean> {
 const id = Cookies.get('access_token');
 const user: userType = await axiosInstancePrivate.get(`api/users/${id}`);
 return (user.role.role_value === "ADMIN");
 // Testing
 // return true;
 // return false;
}
