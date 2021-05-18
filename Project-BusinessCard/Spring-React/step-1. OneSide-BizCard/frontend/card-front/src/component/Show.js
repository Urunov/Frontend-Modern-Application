import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

class Show extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: {}
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/contact/'+this.props.match.params.id)
            .then(res => {
                this.setState({ card: res.data });
                console.log(this.state.card);
            });

    }
    delete(id){
        console.log(id);
        axios.delete('http://localhost:8080/contact/'+id)
            .then((result) => {
                this.props.history.push("/")
            });
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Contact Details
                        </h3>
                    </div>
                    <div className="panel-body">
                        <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"/> Contacts List</Link></h4>
                        <dl>
                            <dt>Name:</dt>
                            <dd>{this.state.cards.name}</dd>
                            <dt>Address:</dt>
                            <dd>{this.state.cards.address}</dd>
                            <dt>Phone Number:</dt>
                            <dd>{this.state.cards.phone}</dd>
                            <dt>Email Address:</dt>
                            <dd>{this.state.cards.email}</dd>
                        </dl>
                        {/*<Link to={`/edit/${this.state.card.id}`} class="btn btn-success">Edit</Link>&nbsp;*/}
                        {/*<button onClick={this.delete.bind(this, this.state.card.id)}*/}
                        {/*        className="btn btn-danger">Delete*/}
                        {/*</button>*/}
                    </div>
                </div>
            </div>);
    }
}

export default Show;