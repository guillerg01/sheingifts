export interface userType {
 email: string;
 username: string;
 password: string;
 role: {
  id: string,
  role_value: string,
  role_name: string,
 }
} 

export interface usersAll {
 pageNumber: string;
 pageLimit: string;
 totalElements: string;
 totalPages: string;
 data: userType[];
}
