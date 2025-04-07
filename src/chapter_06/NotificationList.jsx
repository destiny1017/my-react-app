import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        message: "안녕 오늘 일정 알려줄게!",
        id: 1
    },
    {
        message: "밥머거",
        id: 2
    },
    {
        message: "집에가",
        id: 3
    },
]

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if(notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({notifications: notifications});
            } else {
                this.setState({notifications: []});
                clearInterval(timer);
            }
        }, 2000);
    }

    render() {
        console.log(`Notification List render`);
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification message={notification.message} key={notification.id} id={notification.id} />
                })}
            </div>
        );
    }
}

export default NotificationList;