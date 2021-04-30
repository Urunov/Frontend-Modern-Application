import logo from './logo.svg';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist'
import {useState} from "react";
import 'react-datepicker/dist/react-datepicker.css'
function App() {
  const [selectedDate, setSelectedDate] = useState(null)
  return (
    <div className="App">
    <p>Select Date</p>
      <DatePicker selected={ selectedDate }
                  onChange={date => setSelectedDate(date)}
                  dataFormat ='yyyy/MM/dd'
      />
    </div>
  );
}

export default App;
