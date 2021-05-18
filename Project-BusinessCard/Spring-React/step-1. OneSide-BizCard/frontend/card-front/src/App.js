import './App.css';
import ListCardComponents from "./component/ListCardComponents";
import HeadComponents from "./services/HeadComponents";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CreateCardComponents from "./component/CreateCardComponents";
import MainPage from "./component/MainPage";
import UpdateCardComponents from "./component/UpdateCardComponents";
import ReactNotification from 'react-notifications-component'
import ShowCardComponents from "./component/ShowCardComponents";


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
                        <Route path="/edit/:id" component={UpdateCardComponents}/>
                        <Route path="show/:id" component={ShowCardComponents}/>
                        {/*<Route path="/show/:id" render={(props) => <ShowCardComponents {...props}/>}/>*/}


                    </Switch>

           </div>
            {/*<FootComponents/>*/}
        </Router>
        <ReactNotification/>
    </div>
  );
}
export default App;
