"use strict";
const axios = require('axios');
const config = require('./config');

class Service {
  constructor() {
    this.apiBaseUrl = `${config.api.parties_host}:${config.api.parties_port}`;
    this.date = new Date().toUTCString();
  }

  getParties(number){
    const header = {
      Accept: "application/vnd.interoperability.parties+json;version=1.0",
      "Content-Type": "application/vnd.interoperability.parties+json;version=1.0",
      Date: `${this.date}`,
      "FSPIOP-Source": "pinkbankfsp",
    };
    const response = axios.get(`${this.apiBaseUrl}/parties/MSISDN/${number}`, {
      headers: header,
    });
    return response
  }

  async postQuotes(){

  }

  async postTransfer(){

  }
}

module.exports = Service;



