import React, {Component, Fragment} from "react";
import './App.css';
import  Greet from "./Greet.jsx";
import  Message from "./Message.jsx";
import  Counter from "./Counter.jsx";
import ParentComponent from "./ParentComponent.jsx";
import Form from "./Form.jsx";
import LifecycleA from "./LifecycleA.jsx";
import Fragmentdemo from "./Fragmentdemo.jsx";
import Childstatelift from "./Childstatelift.jsx";
import StatehookCounter from "./StatehookCounter.jsx";
import Statehookcounter2 from "./Statehookcounter2.jsx";
import Statehookcounter3 from "./Statehookcounter3.jsx";
import Statehookcounter4 from "./Statehookcounter4.jsx";
import Effecthookcounter1 from "./Effecthookcounter1.jsx";
import Effecthookcounter2 from "./Effecthookcounter2.jsx";
import Mousecontainer from "./Mousecontainer.jsx";
import Intervalhookcounter from "./Intervalhookcounter.jsx";
import DataFetching from "./DataFetching.jsx";

// const App = () => {

//    function parent(greet){
//     alert(greet);
//    }

//   return (
//     <Fragment>
//       <Childstatelift func={parent} />
//     </Fragment>
//   );
// }

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <Greet name="Everyone" />
        <p>Using children props</p> */}
        {/* <Message /> */}
        {/* <Counter /> */}
        {/* <ParentComponent /> */}
        {/* <Form /> */}
        {/* <LifecycleA /> */}
        {/* <Fragmentdemo /> */}
        {/* <StatehookCounter /> */}
        {/* <Statehookcounter2 /> */}
        {/* <Statehookcounter3 /> */}
        {/* <Statehookcounter4 /> */}
        {/* <Effecthookcounter1 /> */}
        {/* <Effecthookcounter2 /> */}
        {/* <Mousecontainer /> */}
        {/* <Intervalhookcounter /> */}
        <DataFetching />
        
      </div>
    );
  }
}
export default App;