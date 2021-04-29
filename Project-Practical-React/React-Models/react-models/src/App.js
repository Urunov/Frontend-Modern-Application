import './App.css';
import Modal from 'react-modal'
import {useState} from "react";

Modal.setAppElement('#root')
function App() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div className="App">
        <p> You may use this button now...</p>
     <button onClick={()=> setModalIsOpen(true)}> Open Modal</button>

     <Modal isOpen={modalIsOpen}
            shouldCloseOnOverlayClick={false}
            onRequestClose={()=> setModalIsOpen(false)}
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 10,
                    backgroundColor: 'rgba(200, 221, 255, 0.75)'
                },
                content: {
                    position: 'absolute',
                    top: '40px',
                    left: '40px',
                    right: '40px',
                    bottom: '40px',
                    border: '1px solid #ccc',
                    background: '#fff',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: '1',
                    padding: '20px'
                }
            }}

        >


       <h2> Modal Title</h2>
       <p> Modal Body</p>
         <div>
             <button onClick={()=> setModalIsOpen(false)}>Close</button>
         </div>
     </Modal>

    </div>
  );
}

export default App;
