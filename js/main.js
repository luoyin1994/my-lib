'use strict';
exports._typeof = type => {
    let toString = Object.prototype.toString;
    let string = toString.call(type).match(/^\[object\s(\w*)\]$/)[1];
    return string.toLowerCase();
}