const assert = require("assert");
const add = require("./0-calcus");

/**
 * @test {calcul#add}
 * @summary Testing the add function
 * @description This is a description of the test
 */
describe("add", function() {
    it("floating point whole numbers", function() {
        assert.strictEqual(add(1.0, 2.0), 3);
    });

    it('rounding down a and b\'s floating point fractional values', function() {
        assert.strictEqual(add(1.4, 3.4), 4);
    });

    it('rounding up a and b\'s floating point fractional values', function() {
        assert.strictEqual(add(1.6, 3.6), 6);
    });

    it('rounding up b\'s floating point fractional values', function() {
        assert.strictEqual(add(1, 3.6), 5);
    })

    it('rounding up a\'s floating point fractional values', function() {
        assert.strictEqual(add(1.6, 3), 5);
    })

    it('rounding down b\'s floating point fractional values', function() {
        assert.strictEqual(add(1, 3.4), 4);
    })

    it('rounding down a\'s floating point fractional values', function() { 
        assert.strictEqual(add(1.4, 3), 4);
    })

    it('rounding down a and b\'s floating point fractional values with trailing 9\'s', function() {
        assert.strictEqual(add(1.999999, 3.999999), 6);
    });
});