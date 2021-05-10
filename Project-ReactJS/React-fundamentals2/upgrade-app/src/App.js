import logo from './logo.svg';
import './App.css';
import FragmentDemo from "./components/framgement/FragmentDemo";
import Table from "./components/framgement/Table";
import Form from "./components/form/Form";
import LifeCycleA from "./components/lifecycle/LifeCycleA";
import UpdateLifeCycleA from "./components/lifecycle/UpdateLifeCycleA";
import Pure from "./components/pure/Pure";
import ParentComp from "./components/pure/ParentComp";
import RefDemo from "./components/Refs/RefDemo";
import FocusInput from "./components/Refs/FocusInput";
import FrInput from "./components/Refs/FRInput";
import FrParentInput from "./components/Refs/FRParentInput";
import PortalDemo from "./components/Portal/PortalDemo";

function App() {
  return (
    <div className="App">

        <PortalDemo/>

        {/*<FrParentInput/>*/}
       {/*<RefDemo/>*/}

        {/*<ParentComp/>*/}
        {/*<UpdateLifeCycleA/>*/}
        {/*<LifeCycleA/>*/}
        {/*<Form/>*/}
        {/*<Table/>*/}
      {/*<FragmentDemo/>*/}
    </div>
  );
}

export default App;
