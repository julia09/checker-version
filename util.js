const fs = require('fs');
const path = require('path');
const semver = require('semver');

function readPkg(packagePath, callbackFunction) {
    fs.readFile(packagePath, function (err, data) {
        if (err) {
            console.log('读取package.json失败');
            return;
        }
        return callbackFunction(data);
    })
}

function readPkgContent(data) {
    const pkgContent = data.toString();
    const packageObject = JSON.parse(pkgContent);
    const packageDependencies = packageObject.dependencies;
    console.log(packageDependencies);
    return packageDependencies;
}


function getPkgDependenciesContent(packageDependencies, callbackFunction) {
    var counter = 0;
    const packages = [];
    for (let key in packageDependencies) {
        const route = path.resolve('node_modules', key, 'package.json');
        readPkg(route, function (packageContent){
            counter++;
            packages.push(packageContent);
            if (packageDependencies.length <= counter) {
                return;
            }
            callbackFunction(packages);
        })
    } 
}

function readModContent(data, packageDependenciesKey) {
    const modContent = data.toString();
    const modObj = JSON.parse(modContent);
    const modVersion = modObj.version;
}

function comparePkgAndMod(modVersion, packageDependenciesKey) {
    const result = semver.satisfies(modVersion, packageDependenciesKey);
    return result;
}

module.exports = {
    readPkg,
    readPkgContent,
    getPkgDependenciesContent,  
    readModContent, 
    comparePkgAndMod,
}
