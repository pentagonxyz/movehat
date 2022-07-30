# Movehat: Aptos

Welcome to the Movehat documentation for Aptos.

## Migration

Previously, executing `entry` functions with Aptos's TypeScript SDK looked like this:

```
const payload: Types.TransactionPayload = {
    type: "script_function_payload",
    function: "0x1::coin::transfer",
    type_arguments: ["0x1::aptos_coin::AptosCoin"],
    arguments: [account2.address().hex(), "717"],
};

const txnRequest = await client.generateTransaction(account1.address(), payload);
const signedTxn = await client.signTransaction(account1, txnRequest);
const transactionRes = await client.submitTransaction(signedTxn);
await client.waitForTransaction(transactionRes.hash);
```

Now, with Movehat, it looks like this:

```
const coin = Movehat.getModule("coin", signer);
const moveCallTxn = await coin.transfer(
  "0x1::aptos_coin::AptosCoin"
  account2.address().hex(),
  "717"
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
const coin = Movehat.getModule("coin", client, account);
```

### Make a move call

Type arguments first, then function arguments second.

```
const moveCallTxn = await coin.transfer(
  "0x1::aptos_coin::AptosCoin"
  account2.address().hex(),
  "717"
);
```

### Publish a package

```
await coin.publish(client, account);
```
