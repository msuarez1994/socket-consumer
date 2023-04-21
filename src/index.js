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

    state = {
        payerName: 'Pink Bank',
        hubName: 'Mojaloop Switch',
        payeeName: 'Green Bank'
    }

    handleNotificationEvents = (event) => {
        switch(event.type) {
            // Payer Side Events
            case 'getParties':
            {
                
              break
            }
            case 'getPartiesResponse':
            {
                
                
              break
            }
            case 'putParties':
            {
                console.log('**********')
                console.log(this.state.hubName, this.state.payerName, 'putParties');
                console.log(JSON.stringify(event.data.party))
                
              break
            }
            case 'putPartiesResponse':
            {
                // console.log('**********')
                // console.log(this.state.payerName, this.state.hubName, 'putPartiesResponse');
                // console.log(JSON.stringify(event.data));
              break
            }
            case 'postQuotes':
            {
                console.log('**********')
                console.log(this.state.payerName, this.state.payeeName, 'postQuotes');
                console.log(JSON.stringify(event.data.quotesRequest))
              break
            }
            case 'postQuotesResponse':
            {
                // console.log('**********')
                // console.log(this.state.hubName, this.state.payerName, 'postQuotesResponse');
                // console.log(JSON.stringify(event.data))
                
              break
            }
            case 'putQuotes':
            {
                console.log('**********')
                console.log(this.state.hubName, this.state.payerName, 'putQuotes');
                console.log(JSON.stringify(event.data.quotesResponse))
              break
            }
            case 'putQuotesResponse':
            {
                
              break
            }
            case 'postTransfers':
            {
                // console.log('**********')
                // console.log(this.state.payerName, this.state.payeeName, 'postTransfers');
                // console.log(JSON.stringify(event.data))
              break
            }
            case 'postTransfersResponse':
            {
                // console.log('**********')
                // console.log(this.state.hubName, this.state.payerName, 'postTransfersResponse');
                // console.log(JSON.stringify(event.data))
              break
            }
            case 'putTransfers':
            {
                // console.log('**********')
                // console.log(this.state.hubName, this.state.payerName, 'putTransfers');
                // console.log(JSON.stringify(event.data))
              break
            }
            case 'putTransfersResponse':
            {
                // console.log('**********')
                // console.log(this.state.payerName, this.state.hubName, 'putTransfersResponse');
                // console.log(JSON.stringify(event.data))
              break
            }
      
            
            
            // Payer Side Events
            case 'payeeGetParties':
            {
                // console.log('-------------')
                // console.log(this.state.hubName, this.state.payeeName, 'payeeGetParties');
                // console.log(JSON.stringify(event.data))
              break
            }
            case 'payeeGetPartiesResponse':
            {
                // console.log('-------------')
                // console.log(this.state.payeeName, this.state.hubName, 'payeeGetPartiesResponse');
                // console.log(JSON.stringify(event.data))
            
              break
            }
            case 'payeePutParties':
            {
                // console.log('-------------')
                // console.log(this.state.payeeName, this.state.hubName, 'payeePutParties');
                // console.log(JSON.stringify(event.data))
            
              break
            }
            case 'payeePutPartiesResponse':
            {
                console.log('-------------')
                console.log(this.state.hubName, this.state.payeeName, 'payeePutPartiesResponse');
                console.log(JSON.stringify(event.data))
                
              break
            }
            case 'payeePostQuotes':
            {
                // console.log('-------------')
                // console.log(this.state.hubName, this.state.payeeName, 'payeePostQuotes');
                // console.log(JSON.stringify(event.data))
            
              break
            }
            case 'payeePostQuotesResponse':
            {
                // console.log('-------------')
                // console.log(this.state.payeeName, this.state.hubName, 'payeePostQuotesResponse');
                // console.log(JSON.stringify(event.data))
            
              break
            }
            case 'payeePutQuotes':
            {
                console.log('-------------')
                console.log(this.state.payeeName, this.state.hubName, 'payeePutQuotes');
                console.log(JSON.stringify(event.data.requestBody))
            
              break
            }
            case 'payeePutQuotesResponse':
            {
                // console.log('-------------')
                // console.log(this.state.hubName, this.state.payeeName, 'payeePutQuotesResponse');
                // console.log(JSON.stringify(event.data))
            
              break
            }
            case 'payeePostTransfers':
            {
                console.log('-------------')
                console.log(this.state.hubName, this.state.payeeName, 'payeePostTransfers');
                console.log(JSON.stringify(event.data.requestBody))
            
              break
            }
            case 'payeePostTransfersResponse':
            {
                // console.log('-------------')
                // console.log(this.state.payeeName, this.state.hubName, 'payeePostTransfersResponse');
                // console.log(JSON.stringify(event.data))
            
              break
            }
            case 'payeePutTransfers':
            {
                console.log('-------------')
                console.log(this.state.payeeName, this.state.hubName, 'payeePutTransfers');
                console.log(JSON.stringify(event.data))
            
              break
            }
            case 'payeePutTransfersResponse':
            {
                // console.log('-------------')
                // console.log(this.state.hubName, this.state.payeeName, 'payeePutTransfersResponse');
                // console.log(JSON.stringify(event.data))
            
              break
            }
          }
    }
}
export default testSocket

const init = new testSocket().componentDidMount()