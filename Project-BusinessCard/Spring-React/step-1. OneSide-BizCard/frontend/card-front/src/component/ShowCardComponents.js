import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

class ShowCardComponents extends Component {

    constructor(props) {
        super(props);

        this.state = {
            buscards: {}
        };

        this.main = this.main.bind(this);
        this.cardlist = this.cardlist.bind(this);
        this.addCard = this.addCard.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8080/cards/' + this.props.match.params.id)
            .then(response => {
                this.setState(
                    {cards: response.data});
                console.log(this.state.cards);
               // console.log(this.props.match.params.id);
            });
    }

    main() {
        this.props.history.push("/")
    }

    cardlist(){
        this.props.history.push("/cards")
    }
    addCard(){

        this.props.history.push('/cards/add')
    }

    delete(id) {
        console.log(id);
        axios.delete('http://localhost:8080/cards/' + id)
            .then((result) => {
                this.props.history.push("/")
            });
    }

    render() {
        return (
            <div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="button" className="btn btn-outline-primary" onClick={this.addCard}> Create Card</button>
                    <button type="button" className="btn btn-outline-secondary" onClick={this.cardlist}>Card List</button>
                    <button type="button" className="btn btn-outline-success" onClick={this.main}>Home</button>
                </div>

                <div className="container">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">
                                Business Card Details
                            </h3>
                        </div>
                        <div className="panel-body">
                        <br />
                            <dl>
                                <dt>Name:</dt>
                                <dd>{this.state.buscards.name}</dd>
                                <dt>LastName:</dt>
                                <dd>{this.state.buscards.lastName}</dd>
                                <dt>Address:</dt>
                                <dd>{this.state.buscards.address}</dd>
                                <dt>Email:</dt>
                                <dd>{this.state.buscards.email}</dd>
                                <dt>Phone Number:</dt>
                                <dd>{this.state.buscards.phone}</dd>
                                <dt>Website:</dt>
                                <dd>{this.state.buscards.website}</dd>
                                <dt>Position: </dt>
                                <dd>{this.state.buscards.position}</dd>
                                <dt>mobilePhone: </dt>
                                <dd>{this.state.buscards.mobilePhone}</dd>
                                <dt>Fax: </dt>
                                <dd>{this.state.buscards.fax}</dd>
                                <dt>Photo URL: </dt>
                                <dd>{this.state.buscards.photoUrl}</dd>
                                <dt> Specific Job: </dt>
                                <dd>{this.state.buscards.specificJob}</dd>

                            </dl>

                            <Link to={`/edit/${this.state.buscards.id}`} class="btn btn-success">Edit</Link>&nbsp;

                            <button onClick={this.delete.bind(this, this.state.buscards.id)}
                                    className="btn btn-danger">Delete
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowCardComponents;