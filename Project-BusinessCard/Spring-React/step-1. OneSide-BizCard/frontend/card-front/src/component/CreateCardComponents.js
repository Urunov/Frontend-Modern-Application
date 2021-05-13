import React, {Component} from 'react';
import axios from "axios";

class CreateCardComponents extends Component {

    constructor(props) {
        super(props);

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
             //
             // this.changeNameHandler = this.changeNameHandler.bind(this);
             // this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
             // this.changeEmailHandler = this.changeEmailHandler.bind(this);
             // this.handleSubmit = this.handleSubmit.bind(this);

             this.main = this.main.bind(this);
             this.cardlist = this.cardlist.bind(this);
    }


   // cancel(){
   //         this.props.history.push('/')
   // }
   //
   //
   //  changeNameHandler =(event) => {
   //      this.setState({name: event.target.value})
   //  }
   //  changeLastNameHandler = (event) =>{
   //      this.setState({lastName: event.target.value})
   //  }
   //  changeEmailHandler = (event) => {
   //      this.setState({email: event.target.value})
   //  }
   //
   //  changeAddressHandler = (event) => {
   //      this.setState({address: event.target.value})
   //  }
   //
   //  changePhoneHandler = (event) => {
   //      this.setState({phone: event.target.value})
   //  }
   //
   //  changeWebsiteHandler = (event) => {
   //      this.setState({website: event.target.value})
   //  }
   //
   //  changeSpecificJobHandler = (event) => {
   //      this.setState({specificJob: event.target.value})
   //  }

    main() {
        this.props.history.push("/")
    }

    cardlist(){
        this.props.history.push("/cards")
    }

    onChange =(e)=> {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {name, lastNam, address, email, phone, website, position, mobilePhone, fax, photoUrl,  specificJob} = this.state;

        // let cardB = {
        //     name: this.state.name,
        //     lastName: this.state.lastName,
        //     email: this.state.email,
        //     address: this.state.address,
        //     phone: this.state.phone,
        //     website: this.state.website,
        //     specificJob: this.state.specificJob
        //
        // };
       // console.log('cards => ' + JSON.stringify(cardB));

        // CardService.createCard(cardB).then(res =>
        //     this.props.history.push('/cards/add'));

        axios.post('http://localhost:8080/cards/add', {name, lastNam, address, email, phone, website, position, mobilePhone, fax, photoUrl,  specificJob})
            .then(() => {
                this.props.history.push("/")
            });
    }

    render() {
        const {name, lastNam, address, email, phone, website, position, mobilePhone, fax, photoUrl,  specificJob} = this.state;
        return (
            <div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="button" className="btn btn-outline-primary" onClick={this.cardlist}>Card List</button>
                    <button type="button" className="btn btn-outline-success" onClick={this.main}>Home</button>
                </div>

                <div className="container">
                    <h3 className="text-center"> Adding Business Card</h3>
                    <div className="row">
                        <div className="card col-md-4 offset-md-3 offset-md-3">

                            <div className="card-body">

                                {/*<form>*/}
                                {/*    <div className="form-group">*/}
                                {/*        <input placeholder="Name" name="name" className="form-control"*/}
                                {/*               value={this.state.name} onChange={this.changeNameHandler}/>*/}
                                {/*    </div>*/}
                                {/*    <div className="form-group">*/}
                                {/*        <input placeholder="LastName" name="lastName" className="form-control"*/}
                                {/*               value={this.state.lastName} onChange={this.changeLastNameHandler}/>*/}

                                {/*    </div>*/}
                                {/*    <div className="form-group">*/}
                                {/*        <input placeholder="Address" name="address" className="form-control"*/}
                                {/*               value={this.state.address} onChange={this.changeAddressHandler}/>*/}

                                {/*    </div>*/}

                                {/*    <div className="form-group">*/}
                                {/*        <input placeholder="Phone" name="phone" className="form-control"*/}
                                {/*               value={this.state.phone} onChange={this.changePhoneHandler}/>*/}

                                {/*    </div>*/}


                                {/*    <div className="form-group">*/}
                                {/*        <input placeholder="Email" name="Email" className="form-control"*/}
                                {/*               value={this.state.email} onChange={this.changeEmailHandler}/>*/}
                                {/*    </div>*/}

                                {/*    <div className="form-group">*/}
                                {/*        <input placeholder="Website" name="website" className="form-control"*/}
                                {/*               value={this.state.website} onChange={this.changeWebsiteHandler}/>*/}

                                {/*    </div>*/}

                                {/*    <div className="form-group">*/}
                                {/*        <input placeholder="SpecificJob" name="specificJob" className="form-control"*/}
                                {/*               value={this.state.specificJob} onChange={this.changeSpecificJobHandler}/>*/}

                                {/*    </div>*/}

                                {/*    <button className="btn btn-success" onClick={this.handleSubmit}> Save </button>*/}
                                {/*    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{margin: "10px"}}> Cancel </button>*/}
                                {/*</form>*/}


                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="name" value={name}
                                               onChange={this.onChange} placeholder="Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="address" value={address}
                                               onChange={this.onChange} placeholder="Address"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="website" value={website}
                                               onChange={this.onChange} placeholder="Website"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="phone" value={phone}
                                               onChange={this.onChange} placeholder="Phone Number"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="email" value={email}
                                               onChange={this.onChange} placeholder="Email Address"/>
                                    </div>
                                    <button className="btn btn-danger" style={{margin: "10px"}}> Cancel </button>
                                    <button className="btn btn-success">Store</button>

                                    {/*    <button className="btn btn-success" onClick={this.handleSubmit}> Save </button>*/}
                                    {/*    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{margin: "10px"}}> Cancel </button>*/}

                                </form>
                            </div>
                        </div>
                    </div>
                </div>



                {/*<div className = "cardDivX">*/}
                {/*    <div className = "cardX">*/}
                {/*        <h1 className = "cardNameX">{this.state.name} {this.state.lastName}</h1>*/}
                {/*        <h2 className = "cardCompanyNameX">{this.state.email}</h2>*/}
                {/*        <hr />*/}
                {/*        <p className = "cardAddressX">{this.state.address}</p>*/}
                {/*        <p className = "cardPhoneNumber">{this.state.phone}</p>*/}
                {/*        <hr />*/}
                {/*        <p className = "cardEmailX">{this.state.email}</p>*/}
                {/*        <p className = "cardWebsite">{this.state.website}</p>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>
        );
    }
}


export default CreateCardComponents;