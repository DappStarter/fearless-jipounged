require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remember essay idea knife fortune soup'; 
let testAccounts = [
"0x5138c7d942e9f43d24bc4c3e888d4d5ae1268d81d73d137449c9e5eebd686ab6",
"0x1b5b0e5d116f9c0aedd0a1237fc23ff0734af3b5676b06ea29fcdb5b1f0fcdb6",
"0x537e92e04e9e64f010803862f5dbb712c5eb5bd29c2ec2deb5ac04e399f69bfa",
"0xc76d0e31cb9625a17181af28d3a7fa8b0f83051b4d4579a7c77454718c3df9e5",
"0x0325433c1d45aa8ca4c76cf4513522958e45714477621afad2e23ecd63a14710",
"0x55574a6e5193c444c6137ad7a8b77ebfe76a2bd1f53494dddb23556b20c61d29",
"0x5799a5a53d18d285a03f4dab6584ef94787215a0487047e2a336eeda42df7d32",
"0x3267678a8c626e1107ecffddc0f062b12acb114e9c49da38b5c283b1f1322c24",
"0x6abc78e3c8d2ac7dd068c756ca47ac0d6242cd2a1997b1d9f422720d43e3666a",
"0x46a4d6842655530f7c6ff6228728df74fb2effcf8e37c41b7681246b8d16bf75"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
