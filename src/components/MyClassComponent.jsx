import React from 'react';

class MyClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                        count: 0,
                    };
    }

    handleClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    render() {

        return (
                    <div>
                        <button onClick={this.handleClick}>Count button</button>
                        <p>Count: {this.state.count}</p>
                    </div>
        );
    }
}

export default MyClassComponent;