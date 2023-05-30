const socketEventEmiter = require("./socketEventEmiter");
const Service = require("./fetch");

async function getData() {
  try {
    const resp = new socketEventEmiter();
    resp.componentDidMount();

    const service = new Service().getParties("5514521594");

    resp.on("putParties", function (e) {
      console.log(e);
    });

    resp.on("postQuotes", function (e) {
      console.log(e);
    });

    resp.on("putQuotes", function (e) {
      console.log(e);
    });

    resp.on("postTransfers", function (e) {
      console.log(e);
    });

    resp.on("putTransfers", function (e) {
      console.log(e);
    });
  } catch (error) {
    console.log(error);
  }
}

getData();
