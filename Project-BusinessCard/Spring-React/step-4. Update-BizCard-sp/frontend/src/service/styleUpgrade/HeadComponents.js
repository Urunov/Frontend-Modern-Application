import React, {Component} from 'react';

class HeadComponents extends Component {
    render() {
        return (

                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a href className="navbar-brand">
                                 Business Card
                            </a>
                            <form className="form-inline my-2 my-lg-0">
                                {/*<input className="form-control mr-sm-2" type="search" placeholder="Search"*/}
                                {/*       aria-label="Search">*/}
                                {/*    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
                                {/*</input>*/}
                            </form>
                        </div>

                    </nav>
                </header>
        );
    }
}

export default HeadComponents;