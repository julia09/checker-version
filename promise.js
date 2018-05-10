const fs = require('fs');
const path = require('path');
const semver = require('semver');

function readFile(filePath) {
    return new Promise(function (resolve, reject) {
       fs.readFile(filePath, function (err, data) {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
        
    });
}

function readPkg(packagePath) {
    return readFile(packagePath);
}

function readPkgContent(data) {
    const pkgContent = data.toString();
    const packageObject = JSON.parse(pkgContent);
    const packageDependencies = packageObject.dependencies;
    console.log(packageDependencies);
    return packageDependencies;
}

function getPkgDependenciesContent(packageDependencies) {
    const packageContentsPromiseArray = Promise.all(Object.keys(packageDependencies).map(function (key) {
        const route = path.resolve('node_modules', key, 'package.json');
        return readPkg(route);
    }));
    return packageContentsPromiseArray;
}



function comparePkgAndMod(modVersion, packageDependenciesKey) {
    return semver.satisfies(modVersion, packageDependenciesKey);
}

module.exports = {
    readPkg,
    readPkgContent,
    getPkgDependenciesContent,  
    comparePkgAndMod,
    readFile,
}
  

