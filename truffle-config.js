require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install logic bottom trophy name rice sadness assume give kiwi metal gaze'; 
let testAccounts = [
"0xd77987dcd107e5ce89c7f66c3bb7b008cf5b32bdb09042bc58e5629bf333ca16",
"0x31ecc6315bbd3de0623b5be2e218b11b6927f369a3c4422deaad1d8056f2e7ef",
"0x5a6a78ead17783379688763253db185e12b91017f7e25e0e3df2ad4f658b7cb3",
"0xc50c888bc9760bb663a7f07fffc7e96151d69483f9de62d25e9cb51ec159d6f5",
"0xc99bfb78a465e28282374ff397bb5834b1aa8eb7341f1b23533e012999652e4c",
"0xdc108d77dbb110a0d14aa2bfcb45d9c42eb9ddd0a03676ea514fd42e7140234e",
"0x33b0b9c129aadc8c0407ff18c84bfe9058bc70ba8a595432aa62bc607be351c2",
"0x834085e105ba385a78b09ab4f8c57213924247ce5bf32a7781644a6565073786",
"0x470b267d6c8b8bb9a9874030338b380f5bed7cc4c6de3aa24623cdc8bab970d2",
"0x0400c4b39f9c3a93d1882282a17dd21aaf6317d86737e07d7c1a56580da46a84"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
