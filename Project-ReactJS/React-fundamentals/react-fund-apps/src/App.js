import './App.css';
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";
import Hello from "./component/Hello";
import Message from "./component/Message";
import Counter from "./component/Counter";

function App() {


  return (
    <div className="App">
        <Counter/>
        <Message/>

      {/*  <Greet name="Bruce" heroName="Batman">*/}
      {/*      <p>this is children props </p>*/}
      {/*  </Greet>*/}
      {/*<Greet name="Hamdamboy" heroName="Superman"/>*/}
      {/*  <button> Great</button>*/}
      {/*<Greet name="Hotam" heroName="Wonder men"/>*/}


      {/*<Welcome name="Bruce" heroName="Batman"/>*/}
      {/*<Welcome name ="Hamdamboy" heroName="Superman" />*/}
      {/*<Welcome name="Hotam" heroName="Wonder Man"/>*/}

      {/*<Hello/>*/}

    </div>
  );
}

export default App;
