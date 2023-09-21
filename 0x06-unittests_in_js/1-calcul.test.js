const assert = require('assert');
const calculateNumber = require("./1-calcul");

/**
 * @test {calcul#calculateNumber}
 * @summary Testing the calculateNumber function
 * @description This is a description of the test
 * @property {string} type - The type of operation to perform
 * @property {number} a - The first number
 * @property {number} b - The second number
 * @property {number} expected - The expected result
 */
describe('calculateNumber', function() {
    it('should return 4 when adding 1 and 3', function() {
        assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('should return 5 when adding 1 and 3.7', function() {
        assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });

    it('should return 5 when adding 1.2 and 3.7', function() {
        assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });

    it('should return 6 when adding 1.5 and 3.7', function() {
        assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });

    it('should return 5 when adding 1.4 and 3.7', function() {
        assert.strictEqual(calculateNumber('SUM', 1.4, 3.7), 5);
    });

    it('should return 6 when adding 1.6 and 3.7', function() {
        assert.strictEqual(calculateNumber('SUM', 1.6, 3.7), 6);
    });

    it('should return 6 when adding 1.7 and 3.7', function() {
        assert.strictEqual(calculateNumber('SUM', 1.7, 3.7), 6);
    });

    it('should return 6 when adding 1.8 and 3.7', function() {
        assert.strictEqual(calculateNumber('SUM', 1.8, 3.7), 6);
    });

    it('should return 6 when adding 1.9 and 3.7', function() {
        assert.strictEqual(calculateNumber('SUM', 1.9, 3.7), 6);
    });

    it('should return 6 when adding 1.999999 and 3.7', function() {
        assert.strictEqual(calculateNumber('SUM', 1.999999, 3.7), 6);
    });

    it('should return 6 when adding 1.999999 and 3.999999', function() {
        assert.strictEqual(calculateNumber('SUM', 1.999999, 3.999999), 6);
    });

    it('should return 4 when subtracting 1 from 3', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 3, 1), 2);
    });

    it('should return 2 when subtracting 1.2 from 3.7', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.2), 3);
    });

    it('should return 3 when subtracting 1.5 from 3.7', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.5), 2);
    });

    it('should return 2 when subtracting 1.99999 from 3.99999', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 3.99999, 1.99999), 2);
    })

    it('should return 0.25 when dividing 1 by 4', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1, 4), 0.25);
    });

    it('should return 0.2 when dividing 1.2 by 4.2', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1.2, 4.2), 0.25);
    });

    it('should return Error when dividing 1.5 by 0', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 4.5, 0), 'Error');
    });

    it('should return 0.5 when dividing 1.99999 by 3.99999', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1.99999, 3.99999), 0.5);
    });

    it('should return 0 when dividing 0 by 2.5', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 0, 2.5), 0);
    })

    it('should return 2 when dividing 5.5 by 2.7', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 5.5, 2.7), 2);
    })
})