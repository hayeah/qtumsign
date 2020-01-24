const bitcoin = require('bitcoinjs-lib'); // v3.x.x
const bitcoinMessage = require('bitcoinjs-message');
const wif = require('wif');

const networks = {
  'qtum': {
    name: 'qtum',
    messagePrefix: '\u0015Qtum Signed Message:\n',
    bech32: 'bc',
    bip32: { public: 76067358, private: 76066276 },
    pubKeyHash: 58,
    scriptHash: 50,
    wif: 128,
  },
  'qtum_testnet': {
    name: 'qtum_testnet',
    // messagePrefix: "\u0015Qtum Signed Message:\n",
    messagePrefix: '\u0015Qtum Signed Message:\n',
    bech32: 'tb',
    bip32: { public: 70617039, private: 70615956 },
    pubKeyHash: 120,
    scriptHash: 110,
    wif: 239,
  },
};

const network = networks.qtum_testnet;

const pkey = 'cMbgxCJrTYUqgcmiC1berh5DFrtY1KeU4PXZ6NZxgenniF1mXCRk';

const keyPair = bitcoin.ECPair.fromWIF(pkey, network);
const privateKey = keyPair.privateKey;
const message = 'hello world';

const msghash = bitcoinMessage.magicHash(message, network.messagePrefix);
const signature = bitcoinMessage.sign(message, privateKey, keyPair.compressed, network.messagePrefix);

console.log('msg hash:', msghash.toString('hex'));
console.log('sig base64:', signature.toString('base64'));
console.log('sig hex:', signature.toString('hex'));
