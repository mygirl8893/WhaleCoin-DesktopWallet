
var config = {
    name: 'Mist-WhaleCoin',
};

// change for wallet
if(global.mode === 'wallet') {
    config.name = 'WhaleCoin Wallet';
}

module.exports = config;