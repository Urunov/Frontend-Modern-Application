import React, {Component} from 'react';
import axios from 'axios'

const API_URL = "http://localhost:8080/api/card";

class CardComponents extends Component {

    componentDidMount() {
        axios.get('/cards')
            .then(res => {
                this.setState({ card: res.data});
                console.log(this.state.card);
            });
    }

    constructor(props) {
        super(props);

        this.state = {
            name: 'Name',
            lastname: 'Last Name',
            address: 'Address',
            companyName: 'Company Name',
            phoneNumber: 'Phone Number',
            email: 'E-mail',
            website: 'Website',
            photo: 'Photo'
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.handleChangeCompanyName = this.handleChangeCompanyName.bind(this);
        this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeWebsite = this.handleChangeWebsite.bind(this);
        this.handleChangePhoto = this.handleChangePhoto.bind(this);
    }

    handleChangeName(event){
        this.setState({
            name: event.target.value
        })
    }

    handleChangeLastName(event){
        this.setState({
            lastname: event.target.value
        })
    }

    handleChangeAddress(event){
        this.setState({
            address: event.target.value
        })
    }

    handleChangeCompanyName(event){
        this.setState({
            companyName: event.target.value
        })
    }

    handleChangePhoneNumber(event){
        this.setState({
            phoneNumber: event.target.value
        })
    }

    handleChangeEmail(event){
        this.setState({
            email: event.target.value
        })
    }

    handleChangeWebsite(event){
        this.setState({
            website: event.target.value
        })
    }

    handleChangePhoto(event){
        this.setState({
            photo: event.target.value
        })
    }
    clickHandler() {
        alert('you wanna save me')
        console.log('Clicked the button')
    }
    render() {
        return (
            <div className="container">
                <form name="card">
                    <div className="box">
                        <h1> Business Card In Your Life </h1>
                        <hr />

                    <input
                        className='name'
                        placeholder={this.state.name}
                        type='text'
                        onChange={this.handleChangeName}
                    />

                    <input
                        className='lastName'
                        placeholder={this.state.lastname}
                        type='text'
                        onChange={this.handleChangeLastName}
                    />

                    <input
                        className='address'
                        placeholder={this.state.address}
                        type='text'
                        onChange={this.handleChangeAddress}
                    />

                    <input
                        className='company'
                        placeholder={this.state.companyName}
                        type='text'
                        onChange={this.handleChangeCompanyName}
                    />

                    <input
                        className='phone'
                        placeholder={this.state.phoneNumber}
                        type='text'
                        onChange={this.handleChangePhoneNumber}
                    />


                    <input
                        className='webSite'
                        placeholder={this.state.website}
                        type='text'
                        onChange={this.handleChangeWebsite}
                    />

                     <input
                            className='email'
                            placeholder={this.state.email}
                            type='text'
                            onChange={this.handleChangeEmail}
                     />
                    <input
                        className='photo'
                        placeholder={this.state.photo}
                        type='text'
                        onChange={this.handleChangePhoto}
                    />

                    </div>
                    <div>
                        <button onClick={this.clickHandler}> Save Me</button>
                    </div>

                </form>

                <div className="cardDiv">
                    <h1 className="cardName">{this.state.name} {this.state.lastname}</h1>
                    <h2 className="cardCompanyName">{this.state.companyName}</h2>
                    <hr />

                    <p className="cardAddress">{this.state.address}</p>
                    <p className="cardPhoneNumber">{this.state.phoneNumber}</p>
                    <hr/>

                    <p className="cardEmail">{this.state.email}</p>
                    <p className="cardWebsite">{this.state.website}</p>
                </div>
            </div>
        );
    }
}

export default CardComponents;