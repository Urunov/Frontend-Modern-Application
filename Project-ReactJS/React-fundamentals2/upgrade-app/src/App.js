import logo from './logo.svg';
import './App.css';


import ClickCounterTwo from "./components/ReactProps/ClickCounterTwo";
import HoverCounterTwo from "./components/ReactProps/HoverCounterTwo";
import User from "./components/ReactProps/User";
import Counters from "./components/ReactProps/Counters";
import ComponentC from "./components/ContextImplementation/ComponentC";
import {UserProvider} from "./components/ContextImplementation/userContext";

function App() {
    return (
    <div className="App">


        {/*<UserProvider value='React with Full'>*/}
            <ComponentC/>
        {/*</UserProvider>*/}



        {/*<Counters*/}
        {/*    render = {(count, incrementCount) =>*/}
        {/*        <ClickCounterTwo count={count} incrementCount={incrementCount}/>} />*/}

        {/*<Counters*/}
        {/*    render = {(count, incrementCount) =>*/}
        {/*        <HoverCounterTwo count={count} incrementCount={incrementCount}/>} />*/}
        {/*/!*<ClickCounterTwo/>*!/*/}
        {/*/!*<ClickCounterTwo/>*!/*/}

        {/*<User render = {(isLoggedIn) => isLoggedIn ? 'Hamdamboy' : 'Guest'} />*/}


    </div>
  );
}

export default App;
