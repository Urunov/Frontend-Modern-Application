import React, {Component} from 'react';
import CardService from "../services/CardService";

class ListCardComponents extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cardComponents: []
        }

        this.addCard = this.addCard.bind(this);
        this.main = this.main.bind(this);
    }

    componentDidMount() {

        CardService.getCard().then((res) => {
            this.setState({cardComponents: res.data})
        })

        // axios.get("http://localhost:8080/cards")
        //     .then((response) => {
        //         this.setState({cardComponents: response.data})
        //     })
    }

    addCard(){

        this.props.history.push('/cards/add')
    }
    main(){
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h2 className="text-center"> Business Card List </h2>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="button" className="btn btn-outline-primary" onClick={this.addCard}>Card Add</button>
                    <button type="button" className="btn btn-outline-success" onClick={this.main}>Home</button>
                </div>

                <br/>
                <br/>

                     <div className="row">
                        <table className= "table table-striped table-bordered">

                            <thead>
                            <tr>
                                <th> Name</th>
                                <th> LastName</th>
                                <th> Address</th>
                                <th> Email</th>
                                <th> Phone</th>
                                <th> Website</th>
                                <th> Position</th>
                                <th> MobilePhone</th>
                                <th> fax</th>
                                <th> Photo</th>
                                <th> Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.cardComponents.map(
                                    card =>
                                        <tr key={card.id}>
                                            <td>{card.name}</td>
                                            <td>{card.lastName}</td>
                                            <td>{card.address}</td>
                                            <td>{card.email}</td>
                                            <td>{card.website}</td>
                                            <td>{card.position}</td>
                                            <td>{card.mobilePhone}</td>
                                            <td>{card.fax}</td>
                                            <td>{card.photoUrl}</td>
                                            <td>{card.specificJob}</td>

                                        </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
            </div>
        );
    }
}

export default ListCardComponents;