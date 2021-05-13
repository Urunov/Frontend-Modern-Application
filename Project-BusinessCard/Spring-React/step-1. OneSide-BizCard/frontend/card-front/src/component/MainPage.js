import React, {Component} from 'react';
import CardService from "../services/CardService";
import cardPretty2 from "../images/cardPretty2.png";
class MainPage extends Component {

    constructor(props) {
        super(props);

        this.state ={
            errors:{},
        }

        this.listCard = this.listCard.bind();
        this.addCard = this.addCard.bind();
    }

    componentDidMount() {
            CardService.getCard().then((res) => {
                this.setState({cardComponents: res.data})
            })
    }

    addCard=()=>{
        // const {history} = this.props;
        this.props.history.push('/cards/add')
        console.log('list of cards');
    }

     listCard=()=>{
         // const {history} = this.props;
         this.props.history.push('/cards')
         console.log('add card');
    }

    render() {
        return (
            <div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="button" className="btn btn-outline-info" onClick={this.listCard}>Card List</button>
                    <button type="button" className="btn btn-outline-primary" onClick={this.addCard}>Card Add</button>
                </div>

                <div>
                    <p> The pure and smart future life always consistency with Business Card</p>
                </div>

                <div>
                    <img src={cardPretty2}
                         width={"40%"}
                         height={"70%"}
                         alt={"card example"}
                         style={{
                             position:"center",
                             right: 15,
                             top: 10,
                             borderRadius: "24%",
                             float: "center",
                             background:"#fff"
                         }}
                    />
                </div>
            </div>
        );
    }
}

export default MainPage;