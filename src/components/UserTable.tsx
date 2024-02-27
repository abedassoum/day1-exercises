import { User } from "../data/data"

export default function UserTable({ users }: {users: User[]}){
    return (
        <table>   
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
          <th>#</th>
        </tr>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.isActive ? "Yes" : "No"}</td>
            <td><button>Delete</button></td>
          </tr>
        ))}
      </table>
    )
}