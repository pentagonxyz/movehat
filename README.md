# Movehat

Movehat is a TypeScript SDK for Move on Sui built on top of [Sui's TypeScript SDK](https://github.com/MystenLabs/sui/tree/main/sdk/typescript) and [Ian Macalinao's `move-ts`](https://github.com/movingco/move-ts).

## Installation

1. First, install [`move-ts`](`https://github.com/pentagonxyz/move-ts`): `cargo install --git https://github.com/pentagonxyz/move-ts/crates/move-tsgen`
2. Then, install `movehat`: `npm i --save-dev pentagonxyz/movehat`
3. Then, generate TypeScript files by running `move-tsgen` in a directory containing `Move.toml`.

## Migration

Previously, executing `entry` functions with Sui's TypeScript SDK looked like this:

```
const moveCallTxn = await signer.executeMoveCall({
  packageObjectId: '0x2',
  module: 'devnet_nft',
  function: 'mint',
  typeArguments: [],
  arguments: [
    'Example NFT',
    'An NFT created by the wallet Command Line Tool',
    'ipfs://bafkreibngqhl3gaa7daob4i2vccziay2jjlp435cf66vhono7nrvww53ty',
  ],
  gasBudget: 10000,
});
```

Now, with Movemate, it looks like this:

```
const devnetNft = Movemate.getModule("devnet_nft", signer);
const moveCallTxn = await devnetNft.mint(
  'Example NFT',
  'An NFT created by the wallet Command Line Tool',
  'ipfs://bafkreibngqhl3gaa7daob4i2vccziay2jjlp435cf66vhono7nrvww53ty',
);
```

And it has type coercion!

## Usage

### Get module

```
const devnetNft = Movemate.getModule("devnet_nft", signer);
```

### Make a move call

```
const moveCallTxn = await devnetNft.mint(
  'Example NFT',
  'An NFT created by the wallet Command Line Tool',
  'ipfs://bafkreibngqhl3gaa7daob4i2vccziay2jjlp435cf66vhono7nrvww53ty',
);
```

### Publish a package

```
await devnetNft.publish();
```

### Transfer an object

Where the first param is the object ID and the second is the recipient:

```
await Movemate.transferObject('0x5015b016ab570df14c87649eda918e09e5cc61e0', '0xd84058cb73bdeabe123b56632713dcd65e1a6c92');
```

### Split coin

Where the first param is the object ID and the second is an array of split amounts:

```
await Movemate.splitCoin('0x5015b016ab570df14c87649eda918e09e5cc61e0', [10, 20, 30]);
```

### Merge two coins

Where the first param is the primary coin and the second is the coin to merge:

```
await Movemate.mergeCoin('0x5015b016ab570df14c87649eda918e09e5cc61e0', '0xcc460051569bfb888dedaf5182e76f473ee351af');
```
