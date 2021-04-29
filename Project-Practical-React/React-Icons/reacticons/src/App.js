import logo from './logo.svg';
import './App.css';
import {FaReact} from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";
import {IconContext} from "react-icons";
import {MdAlarm} from "react-icons/md";

function App() {
  return (
      <IconContext.Provider value ={{color: 'blue', size: '5rem'}}>
             <div className="App">
                  <FaReact color='purple' size='10rem'/>
                  <MdFingerprint color='black' size='10rem'/>
                  <MdAlarm/>
             </div>

      </IconContext.Provider>

  )
}

export default App;
