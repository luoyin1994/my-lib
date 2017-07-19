'use strict';
/**
 * 类型检测
 * @param type
 * @returns {*}
 * @private
 */
let _typeof = type => {
    let toString = Object.prototype.toString;
    let string = toString.call(type).match(/^\[object\s(\w*)\]$/)[1];
    return string.toLowerCase();
};

/**
 * 置为默认值
 * 传入各个类型的值，并将其值置为相应类型的指定的默认值
 * @param value
 * @returns {*}
 * @private
 */
let _toDefault = value => {
    // 可以从配置文件导入，实现自定义配置
    let types = [
        {name:'Boolean',value:false},
        {name:'Number',value:-1},
        {name:'String',value:''},
        {name:'Function',value:new Function},
        {name:'Array',value:[]},
        {name:'Date',value:new Date},
        {name:'RegExp',value:new RegExp},
        {name:'Object',value:{}},
        {name:'Undefined',value:''},
        {name:'Null',value:''},
        {name:'Error',value:new Error},
    ];
    types.forEach(function(type,i){
        if(_typeof(value) == type.name.toLowerCase()){
            value = type.value;
        }
    });
    return value;
}

/**
 * 转化【'',null,undefined】为【''】
 * @param value
 * @returns {*}
 * @private
 */
let _baseEmpty2string = value => {
     let types = ['',null,undefined];
     types.forEach(function (item) {
         if(value === item) {
             value = '';
         }
     })
    return value;
};

/**
 * 清理数组中不干净的数据，
 * 包括【null】
 * @param arr
 * @returns {*}
 * @private
 */
let _cleanArr = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == null) {
            arr.splice(i, 1);
            i--;
        }else if(_typeof(arr[i]) == 'array'){
            _cleanArr(arr[i]);
        }else if(_typeof(arr[i]) == 'object'){
            _cleanObj(arr[i]);
        }
    }
    return arr;
}
/**
 * 清理对象中不干净的数据，
 * 包括【null】
 * @param obj
 * @returns {*}
 * @private
 */
let _cleanObj = obj => {
    for(let key in obj){
        if(_typeof(obj[key]) == 'array'){
            obj[key] =  _cleanArr(obj[key]);
        }else if(_typeof(obj[key]) == 'object'){
            _cleanObj(obj[key]);
        }
    }
    return obj;
}

/**
 * 清理数组和对象中不干净的数据，
 * 包括【null】
 * @param data
 * @returns {*}
 * @private
 */
let _cleanData = data => {
    if(_typeof(data) == 'array') return _cleanArr(data);
    if(_typeof(data) == 'object') return _cleanObj(data);
}
module.exports =  {
    _typeof,_toDefault,_baseEmpty2string,_cleanArr,_cleanObj,_cleanData
}

