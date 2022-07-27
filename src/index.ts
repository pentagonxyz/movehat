export async function getModule(moduleName: string, signer: any) {
    let module = await import("../build/ts/" + moduleName + "/index.ts");
    return new module.Module(async function(functionName: string, typeArgs: any, funcArgs: any, gasBudget = 10000) {
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
