import React, {Component} from 'react';
import cardPretty2 from "../service/images/cardPretty2.png";
import axios from "axios";
class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state ={
            cardElements:[],
            errors:{},
        }

        this.listCard = this.listCard.bind();
        this.addCard = this.addCard.bind();
    }

    componentDidMount() {
       axios.get("http://localhost:8080")
           .then((res) => {
            this.setState({cardComponents: res.data});
            console.log(this.state.cardElements);
        })
    }

    addCard=()=>{
        this.props.history.push('/create')
         }

    listCard=()=>{
        this.props.history.push('/list')
    }

    render() {
        return (
            <div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="button" className="btn btn-outline-info" onClick={this.listCard}>Card List</button>
                    <button type="button" className="btn btn-outline-primary" onClick={this.addCard}> Create Card</button>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                    <p> The pure and smart future life always consistency with Business Card</p>
                </div>
                <br />
                <div  className="d-grid gap-2 d-md-flex justify-content-md-center">
                    <img src={cardPretty2}
                         width={"40%"}
                         height={"70%"}
                         alt={"card"}
                         style={{
                             position:"center",
                             right: 15,
                             top: 10,
                             borderRadius: "24%",
                             float: "right",
                             background:"#fff"
                         }}
                    />
                </div>
            </div>
        );
    }
}

export default MainPage;