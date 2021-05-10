import React, {Component} from 'react';
import axios from 'axios'
class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
          elements: [],
            errorMsg: ''
        }
    }

    componentDidMount() {

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({elements: response.data})
            })
            .catch(error => {
                console.log(error)
                this.setState({errorMsg: 'Error retrieving data'})
            })
    }

    render() {
        const {elements} = this.state
        return (
            <div>
                List of posts
                {
                    elements.length ?
                    elements.map(post =>
                        <div key={post.id}> {post.title} </div> )
                        : null
                }
            </div>
        );
    }
}

export default PostList;