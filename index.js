var { readPkg, readPkgContent, getPkgDependenciesContent,  readModContent, comparePkgAndMod, callbackFunction } = require('./util');

readPkg('package.json', function(packageData) {
    var packageDependencies = readPkgContent(packageData);
    getPkgDependenciesContent(packageDependencies, function (dependencyPackageArray) {
        for(let modPackage of dependencyPackageArray) {
            const packageName = modPackage.name;
            const versionRule = packageDependencies[packageName];  //^1.0.1
            const result = comparePkgAndMod(versionRule, modPackage.version);
            console.log(result)
        }
        
    });
})
