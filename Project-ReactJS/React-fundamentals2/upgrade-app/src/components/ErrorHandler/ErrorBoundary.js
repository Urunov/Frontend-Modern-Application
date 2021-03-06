import React, {Component} from 'react';

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(errorInfo)
    }

    render() {
        if(this.state.hasError){
            return (
                <div>
                    <h1>Something went error</h1>
                </div>
            );
        } else {
            return this.props.children
        }

    }
}

export default ErrorBoundary;