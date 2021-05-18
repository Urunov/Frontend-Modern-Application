import React, {Component} from 'react';
import axios from "axios";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import "bootstrap/dist/css/bootstrap.min.css";

class CreateCardComponents extends Component {

    constructor() {
        super();

        this.state = {
            name:'',
            lastName:'',
            address: '',
            email: '',
            phone:'',
            website:'',
            position:'',
            mobilePhone:'',
            fax:'',
            photoUrl:'',
            specificJob:''
        };
             this.main = this.main.bind(this);
             this.cardlist = this.cardlist.bind(this);

             // preserve the initial state in a new object
             this.baseState = this.state
    }

    resetForm = () => {
     store.addNotification({
            title:"Canceled!",
            message: "May think again",
            type: "warning",
            container: "top-center",
            insert: "top",
            dismiss: {
                duration: 3000,
                onScreen: true
            }
        });
        this.setState(this.baseState);
    }

    main() {
        this.props.history.push("/")
    }

    cardlist(){
        this.props.history.push("/cards")
    }

    onChange =(event)=> {
        const state = this.state
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {name, lastName, address, email, phone, website, position, mobilePhone, fax, photoUrl,  specificJob} = this.state;

        axios.post('http://localhost:8080/cards/add', {name, lastName, address, email, phone, website, position, mobilePhone, fax, photoUrl,  specificJob})
            .then(() => {
                this.props.history.push("/cards/add")
            });
    }

    handleOnClickDefault = () => {
        store.addNotification({
            title:"New Card Add",
            message: "You are Great",
            type: "success",
            container: "top-right",
            insert: "top",
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        });
    }

    fileSelectHandler = (event) => {

        this.setState({
            selectFile: event.target.files[0]
        })
        console.log(event.target.files[0]);
    }

    fileUploadHandler = () =>{
        const fd = new FormData();
        fd.append('image', this.state.selectFile, this.state.selectFile.name);

        axios.post('gs://business-card-9343c.appspot.com/images/', fd, {
            onUploadProgress: progressEvent => {
               console.log('Upload Progress: ' + Math.round(progressEvent.loaded /progressEvent.total * 100) + '%');
            }
        })
            .then(res => {
            console.log(res);
        });
    }


    render() {
        const {name, lastName, address, email, phone, website, position, mobilePhone, fax, photoUrl,  specificJob} = this.state;
        return (
            <div>
                <ReactNotification/>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="button" className="btn btn-outline-primary" onClick={this.cardlist}>Card List</button>
                    <button type="button" className="btn btn-outline-success" onClick={this.main}>Home</button>
                </div>

                <div className="container">
                    <h3 className="text-center"> Create Business Card</h3>
                    <div className="row">
                        <div className="card col-md-4 offset-md-3 offset-md-3">

                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="name" value={name}
                                               onChange={this.onChange} placeholder="Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="lastName" value={lastName}
                                               onChange={this.onChange} placeholder="LastName"/>
                                    </div>

                                    <div className="form-group">
                                        <input type="text" className="form-control" name="address" value={address}
                                               onChange={this.onChange} placeholder="Address"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="email" value={email}
                                               onChange={this.onChange} placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="phone" value={phone}
                                               onChange={this.onChange} placeholder="Phone"/>
                                    </div>

                                    <div className="form-group">
                                        <input type="text" className="form-control" name="website" value={website}
                                               onChange={this.onChange} placeholder="Website"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="position" value={position}
                                               onChange={this.onChange} placeholder="Position"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="mobilePhone" value={mobilePhone}
                                               onChange={this.onChange} placeholder="Mobile Phone"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="fax" value={fax}
                                               onChange={this.onChange} placeholder="Fax"/>
                                    </div>
                                    <div className="form-group">

                                        {/*<input type="text" className="form-control" name="photoUrl" value={photoUrl}*/}
                                        {/*       onChange={this.onChange} placeholder="PhotoUrl"/>*/}

                                        <input type="file" className="form-control" name="photoUrl" value={photoUrl}
                                               onChange={this.fileSelectHandler}  />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="specificJob" value={specificJob}
                                               onChange={this.onChange} placeholder="SpecificJob"/>
                                    </div>

                                    <button className="btn btn-danger" style={{margin: "10px"}} onClick={this.resetForm}> Cancel </button>
                                    <button className="btn btn-success m-1" onClick={this.handleOnClickDefault} >Store</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default CreateCardComponents;