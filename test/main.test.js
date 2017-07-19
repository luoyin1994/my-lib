var main   = require('../js/main')
var expect = require('assert').equal
// var expect = require('chai').expect
describe('测试"js/main.js"中 _typeofy 函数', function () {
    var test = main._typeof
    it('Number', function () {
        expect('number', test(new Number))
        expect('number', test(new Number()))
        expect('number', test(1))
        expect('number', test(0))
        expect('number', test(0.5689))
        expect('number', test(3.5623))
        expect('number', test(120))
        expect('number', test(012))
    })
    it('String', function () {
        expect('string', test(new String))
        expect('string', test(new String()))
        expect('string', test(''))
        expect('string', test('xxx'))
        expect('string', test('122456'))
        expect('string', test('122xxx'))
        expect('string', test('xxx123456'))
    })
    it('Boolean', function () {
        expect('boolean', test(new Boolean))
        expect('boolean', test(new Boolean()))
        expect('boolean', test(false))
        expect('boolean', test(true))
    })
    it('Function', function () {
        expect('function', test(new Function))
        expect('function', test(new Function()))
        expect('function', test(function () {
        }))
        expect('function', test(function a() {
        }))
    })
    it('Array', function () {
        expect('array', test(new Array))
        expect('array', test(new Array()))
        expect('array', test([]))
        expect('array', test([1, 2, 3]))
        expect('array', test(['12', 'string', '']))
        expect('array', test(['']))
    })
    it('Date', function () {
        expect('date', test(new Date))
        expect('date', test(new Date()))
    })
    it('RegExp', function () {
        expect('regexp', test(new RegExp))
        expect('regexp', test(new RegExp()))
        expect('regexp', test(/^/))
        expect('regexp', test(/$/))
        expect('regexp', test(/\w*/))
    })
    it('Error', function () {
        expect('error', test(new Error))
        expect('error', test(new Error()))
    })
    it('Object', function () {
        expect('object', test(new Object))
        expect('object', test(new Object()))
        expect('object', test({}))
        expect('object', test({a: 1}))
    })
    it('Undefined', function () {
        expect('undefined', test(undefined))
    })
    it('Null', function () {
        expect('null', test(null))
    })
})

describe('测试"js/main.js"中 _toDefault 函数', function () {
    var test = main._toDefault
    it('Number', function () {
        expect(-1, test(new Number))
        expect(-1, test(new Number()))
        expect(-1, test(0))
        expect(-1, test(56))
        expect(-1, test(-5656))
        expect(-1, test(0.56))
        expect(-1, test(5.56))
    })
    it('String', function () {
        expect('', test(new String))
        expect('', test(new String('fdfdfd')))
        expect('', test(''))
        expect('', test('xxx'))
        expect('', test('122456'))
        expect('', test('122xxx'))
        expect('', test('xxx123456'))
        expect('', test('*xxx1234fd56'))
    })
    it('Boolean', function () {
        expect(false, test(false))
        expect(false, test(true))
    })
    it('Undefined', function () {
        expect('', test(undefined))
    })
    it('Null', function () {
        expect('', test(null))
    })
})

describe('测试"js/main.js"中 _baseEmpty2string 函数', function () {
    var test = main._baseEmpty2string
    it('null',function () {
        expect('',test(null))
    })
    it('""',function () {
        expect('',test(''))
    })
    it('undefined',function () {
        expect('',test(undefined))
    })
})


