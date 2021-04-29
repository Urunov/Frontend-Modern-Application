import logo from './logo.svg';
import './App.css';
import { toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
toast.configure()
function App() {

  const CustomToast =({ closeToast }) => {


      return(
        <div>
          Something went wrong!
          <button onClick={closeToast}>Close Please!</button>
        </div>
    )
  }
  const notify = () => {
    toast('Basic notification!', {position: toast.POSITION.TOP_LEFT, autoClose: 9000

    })
    toast.success('Success notification!', {position: toast.POSITION.TOP_CENTER, autoClose:false})
    toast.info('Info notification!', {position: toast.POSITION.TOP_RIGHT})
    toast.warning(<CustomToast/>, {position: toast.POSITION.BOTTOM_CENTER})
    toast.error('Error notification!', {position: toast.POSITION.BOTTOM_RIGHT})
  }


  return (
    <div className="App">
      <button onClick={notify}> Information for Notification!</button>
    </div>
  );
}

export default App;
