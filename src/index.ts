export class Sui {
    static async getModule(moduleName: string, signer: any) {
        let module = await import("../build/ts/" + moduleName + "/index.ts");
        return new module.Module(async function(functionName: string, typeArgs: any, funcArgs: any, gasBudget: any = 10000) {
            return await signer.executeMoveCall({
                packageObjectId: module.ADDRESS,
                module: moduleName,
                function: functionName,
                typeArguments: typeArgs,
                arguments: funcArgs,
                gasBudget,
            });
        });
    }
}

export class Aptos {
    static async getModule(moduleName: string, client: any, account: any) {
        let module = await import("../build/ts/" + moduleName + "/index.ts");
        return new module.Module(async function(functionName: string, typeArgs: any, funcArgs: any) {
            for (let i = 0; i < funcArgs.length; i++) if (funcArgs[i].constructor.name === "AptosAccount") funcArgs[i] = funcArgs[i].address().hex();
            for (let i = 0; i < funcArgs.length; i++) if (funcArgs[i].constructor.name === "HexString") funcArgs[i] = funcArgs[i].hex();
            const payload = {
                type: "script_function_payload",
                function: module.ADDRESS + "::" + moduleName + "::" + functionName,
                type_arguments: typeArgs,
                arguments: funcArgs,
            };
            const txnRequest = await client.generateTransaction(account.address(), payload);
            const signedTxn = await client.signTransaction(account, txnRequest);
            const transactionRes = await client.submitTransaction(signedTxn);
            return await client.waitForTransaction(transactionRes.hash);
        });
    }
}
