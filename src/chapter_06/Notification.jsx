import React from "react";

const styles = {

}

class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log(`${this.props.id} Notification componentDidMount`);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`${this.props.id} Notification componentDidUpdate(prevProps, prevState, snapshot)`);
    }

    componentWillUnmount() {
        console.log(`${this.props.id} Notification componentWillUnmount`);
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

export default Notification;