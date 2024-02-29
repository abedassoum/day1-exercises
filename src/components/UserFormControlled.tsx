import { BaseProps } from "../types";
import { useState, useEffect, ChangeEvent, MouseEvent } from "react";
import { User } from "../data/data";


export type AddEditDeleteFunction = (user: User, isDelete: boolean | undefined) => void;


type UserFormProps = BaseProps & {
  onSubmitUser: AddEditDeleteFunction;
  defaultUser: User | undefined;
};


const emptyUser: User = { name: "", email: "", isActive: false };


export default function UserFormControlled({
  onSubmitUser,
  defaultUser,
}: UserFormProps) {
  const [user, setUser] = useState<User>({ ...emptyUser });


  useEffect(() => {
    if (defaultUser) {
      setUser(defaultUser);
    } else {
      // Reset to initial state if defaultUser is undefined
      setUser({ ...emptyUser });
    }
  }, [defaultUser]);


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({
      ...prev,
      [event.target.name]:
        event.target.type === "checkbox" ? event.target.checked : event.target.value,
    }));
  };


  const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const isDelete = e.currentTarget.id === "delete-btn" ? true : undefined;
    onSubmitUser(user, isDelete);
    setUser({ ...emptyUser });
  };


  return (
    <>
      <h2 style={{margin:0}}>{!user.id ? "Add User" : "Edit User"}</h2>
      <form>
        ID: {user.id}
        <br />
        First Name: <input name="name" onChange={handleChange} value={user.name} />
        <br />
        Email: <input name="email" onChange={handleChange} value={user.email} />
        <br />
        Active:
        <input type="checkbox" name="isActive" onChange={handleChange} checked={user.isActive}/>
      </form>
      <br />
      <button onClick={onSubmit}>{!user.id ? "Add User" : "Update User"} </button>
      {user.id && (
        <button type="button" id="delete-btn" onClick={onSubmit}>
          Delete User
        </button>
      )}
      {
        <button
          onClick={(e) => {
            e.preventDefault();
            setUser({ ...emptyUser });
          }}
        >
          Cancel
        </button>
      }
      {/* <p style={{ fontSize: "small" }}>{JSON.stringify(user)}</p> */}
    </>
  );
}
