var { readPkg, readFile, readPkgContent, getPkgDependenciesContent,  readModContent, comparePkgAndMod, callbackFunction } = require('./promise');

// readPkg('package.json', function(packageData) {
//     var packageDependencies = readPkgContent(packageData);
//     getPkgDependenciesContent(packageDependencies, function (dependencyPackageArray) {
//         for(let modPackage of dependencyPackageArray) {
//             const packageName = modPackage.name;
//             const versionRule = packageDependencies[packageName];  //^1.0.1
//             const result = comparePkgAndMod(versionRule, modPackage.version);
//             console.log(result)
//         }
        
//     });
// })


readFile('package.json')
.then(readPkgContent)
.then(getPkgDependenciesContent)
.then(function(data) {
    for(let modKey of data){
        const packageName = modKey.name;
        const versionRule = modKey[packageName];  
        const version = data.version;
        const result = comparePkgAndMod(versionRule, version);
        console.log(result);  
    }
})  







