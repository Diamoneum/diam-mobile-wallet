"use strict";
var global = typeof window !== 'undefined' ? window : self;
global.config = {
    apiUrl: typeof window !== 'undefined' && window.location ? window.location.href.substr(0, window.location.href.lastIndexOf('/') + 1) + 'api/' : 'http://wallet.diamoneum.com/api/',
    trustedDaemonsAddresses: [
        'http://wallet.diamoneum.com:57576/'
    ],
    phpRelay: typeof window !== 'undefined' ? true : false,
    mainnetExplorerUrl: "http://explorer.diamoneum.xyz/",
    mainnetExplorerUrlHash: "http://explorer.diamoneum.xyz/transaction.html?hash={ID}",
    mainnetExplorerUrlBlock: "http://explorer.diamoneum.xyz/block.html?height={ID}",
    testnetExplorerUrl: "http://testnet.diamoneum.xyz/",
    testnetExplorerUrlHash: "http://testnet.diamoneum.xyz/tx/{ID}",
    testnetExplorerUrlBlock: "http://testnet.diamoneum.xyz/block/{ID}",
    testnet: false,
    coinUnitPlaces: 8,
    txMinConfirms: 10,
    txCoinbaseMinConfirms: 60,
    addressPrefix: 0x9825b,
    integratedAddressPrefix: 0x9825b,
    addressPrefixTestnet: 33,
    integratedAddressPrefixTestnet: 0x9825b,
    subAddressPrefix: 52,
    subAddressPrefixTestnet: 73,
    feePerKB: new JSBigInt('100000000000'),
    dustThreshold: new JSBigInt('100000000000'),
    defaultMixin: 12,
    idleTimeout: 30,
    idleWarningDuration: 20,
    coinSymbol: 'DIAM',
    openAliasPrefix: "diam",
    coinName: 'Diamoneum',
    coinUriPrefix: 'diamoneum:',
    avgBlockTime: 120,
    maxBlockNumber: 500000000,
    donationAddresses: [
        '5qfrSvgYutM1aarmQ1px4aDiY9Da7CLKKDo3UkPuUnQ7bT7tr7i4spuLaiZwXG1dFQbkCinRUNeUNLoNh342sVaqTaWqvt8',
        '5nYWvcvNThsLaMmrsfpRLBRou1RuGtLabUwYH7v6b88bem2J4aUwsoF33FbJuqMDgQjpDRTSpLCZu3dXpqXicE2uSWS4LUP',
        '9ppu34ocgmeZiv4nS2FyQTFLL5wBFQZkhAfph7wGcnFkc8fkCgTJqxnXuBkaw1v2BrUW7iMwKoQy2HXRXzDkRE76Cz7WXkD'
    ]
};
