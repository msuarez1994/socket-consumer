import NotificationService from "./socket-client.js";

class testSocket {
    constructor () {
        this.notificationServiceObj = new NotificationService()
        // const sessionId = this.notificationServiceObj.getSessionId()
        // this.outboundServiceObj = new OutboundService(sessionId)
    }

    

    componentDidMount = async () => {
        this.notificationServiceObj.setNotificationEventListener(this.handleNotificationEvents)
        
    }

    handleNotificationEvents = (event) => {
        switch(event.type) {
            // Payer Side Events
            case 'getParties':
            {
                // console.log(event);
            //   this.clearEverything()
            //   if (this.testDiagramRef.current) {
            //     this.testDiagramRef.current.addSequence(this.state.payerName, this.state.hubName, '[HTTP REQ] GET ' + event.data.resource.path, {activation: { mode: 'activate', peer: 'both'}})
            //   }
              break
            }
            case 'getPartiesResponse':
            {
                // console.log(event);
            //   if (this.testDiagramRef.current) {
            //     this.testDiagramRef.current.addSequence(this.state.hubName, this.state.payerName, '[HTTP RESP] ' + event.data.responseStatus, {dashed: true, activation: { mode: 'deactivate', peer: 'destination'}})
            //   }
              break
            }
            case 'putParties':
            {
                console.log(event);
            //   if (this.testDiagramRef.current) {
            //     this.testDiagramRef.current.addSequence(this.state.hubName, this.state.payerName, '[HTTP Callback] PUT ' + event.data.resource.path, {activation: { mode: 'activate', peer: 'destination'}})
            //   }
              break
            }
            case 'putPartiesResponse':
            {
                console.log(event);
            //   if (this.testDiagramRef.current) {
            //     this.testDiagramRef.current.addSequence(this.state.payerName, this.state.hubName, '[HTTP RESP] ' + event.data.responseStatus, {dashed: true, activation: { mode: 'deactivate', peer: 'both'}})
            //   }
              break
            }
            case 'postQuotes':
            {
                console.log(event);
            //   if (this.testDiagramRef.current) {
            //     this.testDiagramRef.current.addNoteOver(this.state.payerName, this.state.payeeName, 'Quotes')
            //     this.testDiagramRef.current.addSequence(this.state.payerName, this.state.hubName, '[HTTP REQ] POST ' + event.data.resource.path, {activation: { mode: 'activate', peer: 'both'}})
            //   }
              break
            }
            case 'postQuotesResponse':
            {
                console.log(event);
            //   if (this.testDiagramRef.current) {
            //     this.testDiagramRef.current.addSequence(this.state.hubName, this.state.payerName, '[HTTP RESP] ' + event.data.responseStatus, {dashed: true, activation: { mode: 'deactivate', peer: 'destination'}})
            //   }
              break
            }
            case 'putQuotes':
            {
            //   if (this.testDiagramRef.current) {
            //     this.testDiagramRef.current.addSequence(this.state.hubName, this.state.payerName, '[HTTP Callback] PUT ' + event.data.resource.path, {activation: { mode: 'activate', peer: 'destination'}})
            //   }
              break
            }
            case 'putQuotesResponse':
            {
            //   if (this.testDiagramRef.current) {
            //     this.testDiagramRef.current.addSequence(this.state.hubName, this.state.payerName, '[HTTP RESP] ' + event.data.responseStatus, {dashed: true, activation: { mode: 'deactivate', peer: 'both'}})
            //   }
              break
            }
            case 'postTransfers':
            {
            //   if (this.testDiagramRef.current) {
            //     this.testDiagramRef.current.addNoteOver(this.state.payerName, this.state.payeeName, 'Transfer')
            //     this.testDiagramRef.current.addSequence(this.state.payerName, this.state.hubName, '[HTTP REQ] POST ' + event.data.resource.path, {activation: { mode: 'activate', peer: 'both'}})
            //   }
              break
            }
            case 'postTransfersResponse':
            {
            //   if (this.testDiagramRef.current) {
            //     this.testDiagramRef.current.addSequence(this.state.hubName, this.state.payerName, '[HTTP RESP] ' + event.data.responseStatus, {dashed: true, activation: { mode: 'deactivate', peer: 'destination'}})
            //   }
              break
            }
            case 'putTransfers':
            {
            //   if (this.testDiagramRef.current) {
            //     this.testDiagramRef.current.addSequence(this.state.hubName, this.state.payerName, '[HTTP Callback] PUT ' + event.data.resource.path, {activation: { mode: 'activate', peer: 'destination'}})
            //   }
              break
            }
            case 'putTransfersResponse':
            {
            //   if (this.testDiagramRef.current) {
            //     this.testDiagramRef.current.addSequence(this.state.payerName, this.state.hubName, '[HTTP RESP] ' + event.data.responseStatus, {dashed: true, activation: { mode: 'deactivate', peer: 'both'}})
            //   }
              break
            }
      
            // Payer Side Events
            case 'payeeGetParties':
            {
            //   if (this.testDiagramRef.current) {
            //     this.testDiagramRef.current.addCustomSequence(`rect rgb(255, 245, 173)\n${this.state.hubName}-->>${this.state.hubName}: Oracle Lookup\nend\n`)
            //     // this.testDiagramRef.current.addSequence(this.state.hubName, this.state.hubName, 'Oracle Lookup')
            //     this.testDiagramRef.current.addSequence(this.state.hubName, this.state.payeeName, '[HTTP REQ] GET ' + event.data.resource.path, {activation: { mode: 'activate', peer: 'destination'}})
            //   }
              break
            }
            case 'payeeGetPartiesResponse':
            {
            //   if (this.testDiagramRef.current) {
            //     this.testDiagramRef.current.addSequence(this.state.payeeName, this.state.hubName, '[HTTP RESP] ' + event.data.responseStatus, {dashed: true})
            //   }
              break
            }
            case 'payeePutParties':
            {
            //   if (this.testDiagramRef.current) {
            //     this.testDiagramRef.current.addSequence(this.state.payeeName, this.state.hubName, '[HTTP Callback] PUT ' + event.data.resource.path)
            //   }
              break
            }
            case 'payeePutPartiesResponse':
            {
            //   if (this.testDiagramRef.current) {
            //     this.testDiagramRef.current.addSequence(this.state.hubName, this.state.payeeName, '[HTTP RESP] ' + event.data.responseStatus, {dashed: true, activation: { mode: 'deactivate', peer: 'destination'}})
            //   }
              break
            }
            case 'payeePostQuotes':
            {
            //   if (this.testDiagramRef.current) {
            //     this.testDiagramRef.current.addSequence(this.state.hubName, this.state.payeeName, '[HTTP REQ] POST ' + event.data.resource.path, {activation: { mode: 'activate', peer: 'destination'}})
            //   }
              break
            }
            case 'payeePostQuotesResponse':
            {
            //   if (this.testDiagramRef.current) {
            //     this.testDiagramRef.current.addSequence(this.state.payeeName, this.state.hubName, '[HTTP RESP] ' + event.data.responseStatus, {dashed: true})
            //   }
              break
            }
            case 'payeePutQuotes':
            {
            //   if (this.testDiagramRef.current) {
            //     this.testDiagramRef.current.addSequence(this.state.payeeName, this.state.hubName, '[HTTP Callback] PUT ' + event.data.resource.path)
            //   }
              break
            }
            case 'payeePutQuotesResponse':
            {
            //   if (this.testDiagramRef.current) {
            //     this.testDiagramRef.current.addSequence(this.state.hubName, this.state.payeeName, '[HTTP RESP] ' + event.data.responseStatus, {dashed: true, activation: { mode: 'deactivate', peer: 'destination'}})
            //   }
              break
            }
            case 'payeePostTransfers':
            {
            //   if (this.testDiagramRef.current) {
            //     this.testDiagramRef.current.addSequence(this.state.hubName, this.state.payeeName, '[HTTP REQ] POST ' + event.data.resource.path, {activation: { mode: 'activate', peer: 'destination'}})
            //   }
              break
            }
            case 'payeePostTransfersResponse':
            {
            //   if (this.testDiagramRef.current) {
            //     this.testDiagramRef.current.addSequence(this.state.payeeName, this.state.hubName, '[HTTP RESP] ' + event.data.responseStatus, {dashed: true})
            //   }
              break
            }
            case 'payeePutTransfers':
            {
            //   if (this.testDiagramRef.current) {
            //     this.testDiagramRef.current.addSequence(this.state.payeeName, this.state.hubName, '[HTTP Callback] PUT ' + event.data.resource.path)
            //   }
              break
            }
            case 'payeePutTransfersResponse':
            {
            //   if (this.testDiagramRef.current) {
            //     this.testDiagramRef.current.addSequence(this.state.hubName, this.state.payeeName, '[HTTP RESP] ' + event.data.responseStatus, {dashed: true, activation: { mode: 'deactivate', peer: 'destination'}})
            //   }
              break
            }
          }
    }
}
export default testSocket

const init = new testSocket().componentDidMount()


// import io from "socket.io-client";


// const socket = io.connect("http://35.203.25.18:5050", {
//   transports: ["websocket"] // use WebSocket first, if available
// });


// socket.on('newOutboundLog', ( data ) => {
//     console.log(data);
// })


// socket.on('error', (error) => {
//     console.log(error);
// });



