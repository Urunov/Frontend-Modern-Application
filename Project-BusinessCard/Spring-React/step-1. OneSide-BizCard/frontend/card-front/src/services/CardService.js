import axios from "axios";


const backend_URL = "http://localhost:8080/cards";

class CardService  {

    getCard(){
        return axios.get(backend_URL);
    }

    createCard(add) {
        return axios.post(backend_URL, add);

    }

    getCardsById(cardId){
        return axios.get(backend_URL + "/" + cardId);
    }
}

export default new CardService()