import './App.css';
import ListCardComponents from "./component/ListCardComponents";
import HeadComponents from "./services/HeadComponents";
import FootComponents from "./services/FootComponents";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CreateCardComponents from "./component/CreateCardComponents";
import MainPage from "./component/MainPage";
import ShowMe from "./component/ShowMe";

function App() {

  return (
    <div className="App">

        <Router>
            <HeadComponents/>
           <div className="container">
                    <Switch>
                        <Route path="/" exact component={MainPage}/>
                        <Route path="/cards/add" component={CreateCardComponents}/>
                        <Route path="/cards" component={ListCardComponents}/>
                        <Route path="/showMe" component={ShowMe}/>
                    </Switch>
           </div>
            {/*<FootComponents/>*/}

        </Router>

    </div>
  );
}

export default App;
