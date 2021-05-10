import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Pure extends PureComponent {

    render() {
        console.log('Pure Component Render')
        return (
            <div>
                Pure Component: {this.props.name}
            </div>
        );
    }
}

Pure.propTypes = {};

export default Pure;