import { BaseProps } from "../types";
import UserTable from "../components/UserTable";
import { users } from "../data/data";

type Props = BaseProps;

export default function ListDemo({ title }: Props) {
  return (
    <>
      <h2>{title}</h2>
        <UserTable users={users} /> 
    </> 
  );
}
