# Movehat

Movehat is a TypeScript SDK for Move on Sui built on top of [Sui's TypeScript SDK](https://github.com/MystenLabs/sui/tree/main/sdk/typescript) and [our fork of Ian Macalinao's `move-ts`](https://github.com/pentagonxyz/move-ts). Movehat aspires to be the [Hardhat](https://hardhat.org/) or [Foundry](https://github.com/foundry-rs/foundry) of Move. Support for Aptos coming soon.

## Installation

1. First, install [our fork of `move-ts`](`https://github.com/pentagonxyz/move-ts`): `cargo install --git https://github.com/pentagonxyz/move-ts/crates/move-tsgen`
2. Then, install `movehat`: `npm i --save-dev pentagonxyz/movehat`
3. Then, generate TypeScript files by running `move-tsgen` in a directory containing `Move.toml`.

## Usage

### [Sui usage: see `docs/SUI.md`](docs/SUI.md)
### [Aptos usage: see `docs/APTOS.md`](docs/APTOS.md)
