import React, {Component} from 'react';
import CardService from "../services/CardService";

class UpdateCardComponents extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cards:[]
        };

        this.main = this.main.bind(this);
        this.cardlist = this.cardlist.bind(this);
    }

    componentDidMount() {
        CardService.getCardsById(this.state.id).then((res)=>
        {
            let card = res.data;
            this.setState({
                name: card.name,
                lastName: card.lastName,
                email: card.email,
                address: card.address
            })
        })
    }

    updateCard=(e)=>{
        e.preventDefault();
        let cardInfo = {name: this.state.name, lastName: this.state.lastName, email: this.state.email, address: this.state.address}
    }
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
    render() {
        const {name, lastName, address, email, phone, website, position, mobilePhone, fax, photoUrl,  specificJob} = this.state;
        return (
            <div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="button" className="btn btn-outline-primary" onClick={this.cardlist}>Card List</button>
                    <button type="button" className="btn btn-outline-success" onClick={this.main}>Home</button>
                </div>

                <div className="container">
                    <h3 className="text-center"> Update Business Card</h3>
                    <div className="row">
                        <div className="card col-md-4 offset-md-3 offset-md-3">

                            <div className="card-body">


              <form onSubmit={this.updateCard}>
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
                    <button className="btn btn-success">Update</button>
                </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default UpdateCardComponents;