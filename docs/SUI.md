# Movehat: Sui

Welcome to the Movehat documentation for Sui.

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

Now, with Movehat, it looks like this:

```
const devnetNft = Movehat.getModule("devnet_nft", signer);
const moveCallTxn = await devnetNft.mint(
  'Example NFT',
  'An NFT created by the wallet Command Line Tool',
  'ipfs://bafkreibngqhl3gaa7daob4i2vccziay2jjlp435cf66vhono7nrvww53ty',
);
```

And most importantly, it has type coercion and type annotations in TypeScript!

## Usage

### Initialization

```
import { Sui as Movehat } from `pentagonxyz/movehat`;
```

### Get module

```
const devnetNft = Movehat.getModule("devnet_nft", signer);
```

### Make a move call

Type arguments first, then function arguments second.

```
const moveCallTxn = await devnetNft.mint(
  'Example NFT',
  'An NFT created by the wallet Command Line Tool',
  'ipfs://bafkreibngqhl3gaa7daob4i2vccziay2jjlp435cf66vhono7nrvww53ty',
);
```

### Publish a package

```
await devnetNft.publish(signer);
```

### Transfer an object

Where the first param is the object ID and the second is the recipient:

```
await Movehat.transferObject('0x5015b016ab570df14c87649eda918e09e5cc61e0', '0xd84058cb73bdeabe123b56632713dcd65e1a6c92', signer);
```

### Split coin

Where the first param is the object ID and the second is an array of split amounts:

```
await Movehat.splitCoin('0x5015b016ab570df14c87649eda918e09e5cc61e0', [10, 20, 30], signer);
```

### Merge two coins

Where the first param is the primary coin and the second is the coin to merge:

```
await Movehat.mergeCoin('0x5015b016ab570df14c87649eda918e09e5cc61e0', '0xcc460051569bfb888dedaf5182e76f473ee351af', signer);
```
