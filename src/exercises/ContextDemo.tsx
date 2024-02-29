import { BaseProps } from "../types";
import RoleContextProvider, {useRole} from "../components/RoleContentProvider";


const topWidth = 220;


export default function ContextDemoApp({ title }: BaseProps) {
  return (
    <>
    <div className="title">{title}</div>
    <RoleContextProvider>
      <Root />
    </RoleContextProvider>
    </>
  );
}


function Root() {
  const { role } = useRole();
  return (
    <div className="root-box">
      <h2 style={{margin:0}}>Root</h2>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <A />
        <D />
      </div>
    </div>
  );
}

function A() {
  return (
    <div className="box" style={{ width: topWidth }}>
      <h2>A</h2>
      <B />
    </div>
  );
}

function B() {
 const { role } = useRole();
  return (
    <div className="box" style={{ width: topWidth - 20 }}>
      <h2>B</h2>
     <div>Current Role: {role}</div>
      <C />
    </div>
  );
}

function C() {
const { role } = useRole();
  return (
    <div className="box" style={{ width: topWidth - 40 }}>
      <h2>C</h2>
      <div>Current Role: {role}</div>
    </div>
  );
}

function D() {
  const { role, setRole } = useRole();
  return (
    <div className="box" style={{ width: topWidth }}>
      <h2 style={{ margin: 0 }}>D</h2>
      <p style={{ margin: 0 }}>Simulates a login that provides a role</p>
      <select defaultValue={role} onChange={(evt) => setRole(evt.target.value)}>
        <option value="anonymous">anonymous</option>
        <option value="USER">USER</option>
        <option value="ADMIN">ADMIN</option>
      </select>
      <E />
    </div>
  );
}

function E() {
  return (
    <div className="box" style={{ width: topWidth - 20 }}>
      <h2>E</h2>
      <F />
    </div>
  );
}

function F() {  
const { role } = useRole();
  return (
    <div className="box" style={{ width: topWidth - 40 }}>
      <h2>F</h2>
      <div>Current Role: {role}</div>
    </div>
  );
}
