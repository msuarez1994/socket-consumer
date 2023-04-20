import NotificationService from "./socket-client.js";

class testSocket {
    constructor () {
        this.notificationServiceObj = new NotificationService()
        // const sessionId = this.notificationServiceObj.getSessionId()
        // this.outboundServiceObj = new OutboundService(sessionId)
    }

    // handleNotificationEvents = (event) => {
    //     console.log(event);
    // }

    componentDidMount = async () => {
        this.notificationServiceObj.setNotificationEventListener(this.handleNotificationEvents);
    }
}
export default testSocket

const init = new testSocket()
// console.log(init);




