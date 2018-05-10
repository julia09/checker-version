const assert = require('assert');
const {
    readPkg,
    readPkgContent,
    getPkgDependenciesContent,
    readModContent,
    comparePkgAndMod,
} = require('../promise'); 

describe(('promise.js'), function(){
    describe(('comparePkgAndMod()'), function(){
        it('true', function(done){
            assert.strictEqual(comparePkgAndMod('3.1.0','^3.1.0'), true);
            done();
               
        })
    })
})
