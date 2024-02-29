import { useState } from "react";
import "./App.css";
import Propsdemo from "./exercises/PropsDemo";
import ListDemo from "./exercises/ListDemo";
import EventDemo1 from "./exercises/EventDemo";
import FormUncontrolled from "./exercises/FormUncontrolled";
import StateDemo1 from "./exercises/StateDemo1";
import StateDemo2 from "./exercises/StateDemo2";
import StateDemo3 from "./exercises/StateDemo3";
import UseEffect from "./exercises/UseEffect";
import FetchDemo from "./exercises/FetchDemo";
import LiftingState from "./exercises/LiftingState";


export default function App() {
  const [selectedView, setSelectedView] = useState("info");


  function handleSelected(selected: string) {
    setSelectedView(selected);
  }
  return (
    <>
      <div className="outer-div-style">
        <div className="header-style">
          <h2>React Exercises</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons onSelected={handleSelected} />
          </div>
          <div className="exercise-style">
            {selectedView === "info" ? <p>All exercises for React day-1</p> : null}
            {selectedView === "props1" ? (
              <div>
                <Propsdemo title="Props Demo" />
              </div>            
            ) : null} 
            
             {selectedView === "ListDemo" ? ( 
              <div>
                <ListDemo title="List Demo" />
                </div>
                ) : null
                }   

            {selectedView === "EventDemo1" ? (
              <div>
               <EventDemo1 title="Event Demo1" />
              </div>
            ) : null} 

            {selectedView === "FormUncontrolled" ? (
              <div>
                <FormUncontrolled title="Form Uncontrolled" />
              </div>
            ) : null}

            {selectedView === "StateDemo1" ? (
              <div>
                <StateDemo1 title="State Demo1" />
              </div>
            ) : null}

            {selectedView === "StateDemo2" ? (
              <div>
                <StateDemo2 title="State Demo2" />
              </div>
            ) : null}

            {selectedView === "StateDemo3" ? (
              <div>
                <StateDemo3 title="State Demo3" />
                </div>
                ) : null}

            {selectedView === "UseEffect" ? (
              <div>
                <UseEffect title="UseEffect" />
              </div>
            ) : null}

            {selectedView === "FetchDemo" ? (
              <div>
                <FetchDemo title="FetchDemo" />
                </div>
                ) : null}

                {selectedView === "LiftingState" ? (
                  <div>
                    <LiftingState title="Lifting State" />
                    </div>
                    ) : null}


                    
            {/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
          </div>
        </div>
      </div>
    </>
  );
}
type ButtonProps = {
  onSelected: (selected: string) => void;
  btnStyle?: string;
};
const Buttons = (props: ButtonProps) => {
  const { onSelected: handleSelected, btnStyle } = props;
  return (
    <>
      <button className="btn-w100" onClick={() => handleSelected("info")}>
        Info
      </button>
      {/* Add a new button for each of the exercises you complete */}
      <button className="btn-w100" onClick={() => handleSelected("props1")}>
        Props demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("ListDemo")}>
        ListDemo 
      </button>

      <button className="btn-w100" onClick={() => handleSelected("EventDemo1")}>
        EventDemo1
      </button>

      <button className="btn-w100" onClick={() => handleSelected("FormUncontrolled")}>
        FormUncontrolled
      </button>

      <button className="btn-w100" onClick={() => handleSelected("StateDemo1")}>
        StateDemo1 (Count)
      </button>

      <button className="btn-w100" onClick={() => handleSelected("StateDemo2")}>
        StateDemo2 (Update Object)
      </button>
         
       <button className="btn-w100" onClick={() => handleSelected("StateDemo3")}>
        StateDemo3 (Update Array)
      </button>

      <button className="btn-w100" onClick={() => handleSelected("UseEffect")}>
        UseEffect Demo
      </button>

      <button className="btn-w100" onClick={() => handleSelected("FetchDemo")}>
        Fetch Demo
      </button>

      <button className="btn-w100" onClick={() => handleSelected("LiftingState")}>
        Lifting State
      </button>
    </>
  );
};
