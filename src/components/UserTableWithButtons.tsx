import { useEffect, useState } from "react";
import { User } from "../data/data";


type UserTableProps = { users: User[]; editUser: (userId: number) => void };


export default function UserTableWithButtons({ users, editUser }: UserTableProps) {
  const [usersLocal, setUsersLocal] = useState<User[]>(users);


  // 1) Implement an eventhandler that will handle the edit button click and call the editUser callback
  // const handleEditUser = (userId: number) => {};
  // 2) When done, attach the event handler to the edit button


    const handleEditUser = (userId: number) => {
      editUser(userId);
    }
    
  
  useEffect(() => {
    setUsersLocal(users);
  }, [users]);


  return (
    <>
      <table className="simple-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Active</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {usersLocal.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </td>
              <td>{user.isActive ? "Yes" : "No"}</td>
              <td>
                {/* <button  onClick={() => handleEditUser(user.id || -1)}> */}
                <button onClick={() => handleEditUser(user.id || -1)}> 
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
