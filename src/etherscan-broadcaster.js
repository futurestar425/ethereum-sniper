const got = require("got");

const { log } = require("./utils");

class EtherscanBroadcaster {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async sendRawTransaction(hex) {
    log("Sending transaction to Etherscan");
    return got("https://api.etherscan.io/api", {
      module: "proxy",
      action: "eth_sendRawTransaction",
      hex,
      apikey: this.apiKey,
    });
  }
}

module.exports = EtherscanBroadcaster;
