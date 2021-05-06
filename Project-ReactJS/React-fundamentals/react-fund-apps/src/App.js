import './App.css';
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";
import Hello from "./component/Hello";
import Message from "./component/Message";
import Counter from "./component/Counter";
import Multiplation from "./component/Multiplation";
import FunctionClick from "./component/FunctionClick";
import ClassClick from "./component/ClassClick";
import EventHandler from "./component/EventHandler";
import UserGreeting from "./component/UserGreeting";
import NameList from "./component/NameList";
import NameListIndex from "./component/NameListIndex";

function App() {


  return (
    <div className="App">

        <NameListIndex/>
        {/*<NameList/>*/}
        {/*<UserGreeting/>*/}

        {/*<ParentComponents/>*/}

        {/*<Multiplation/>*/}
        {/*<Counter/>*/}
        {/*<Message/>*/}

        {/*<EventHandler/>*/}

        {/*<Greet name="Bruce" heroName="Batman" />*/}
        {/*<FunctionClick/>*/}
        {/*<ClassClick/>*/}
        {/*    <p>this is children props </p>*/}
        {/*</Greet>*/}
      {/*<Greet name="Hamdamboy" heroName="Superman"/>*/}
      {/*  <button> Great</button>*/}
      {/*<Greet name="Hotam" heroName="Wonder men"/>*/}


      <Welcome name="Bruce" heroName="Batman"/>
      {/*<Welcome name ="Hamdamboy" heroName="Superman" />*/}
      {/*<Welcome name="Hotam" heroName="Wonder Man"/>*/}

      {/*<Hello/>*/}

    </div>
  );
}

export default App;
