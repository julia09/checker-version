const assert = require('assert');
const {
    readPkg,
    readPkgContent,
    getPkgDependenciesContent,
    readModContent,
    comparePkgAndMod,
} = require('../util'); 

describe(('util.js'), function(){
    describe(('comparePkgAndMod()'), function(){
        it('true', function(done){
            assert.strictEqual(comparePkgAndMod('3.1.0','^3.1.0'), true);
            done();
               
        })
    })
})
