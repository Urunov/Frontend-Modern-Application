import React, {Component} from 'react';

class FootComponents extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }
    render() {

        return (

                <footer className="footer">
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <span className="text-muted"> All Right Reserved 2021 @Nextree</span>
                    </nav>
                </footer>

        );
    }
}

export default FootComponents;