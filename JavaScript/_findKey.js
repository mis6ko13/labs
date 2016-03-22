'use strict';

var _ = (function() {
    return {
        findKey: function(o, value) {
        var resArr = [],
            valueLength = Object.keys(value).length,
            valueType = typeof value,
            count = 0,
            oType = typeof o;
            
            switch (valueType){
                    
            case('string'):
            case('number'):        
                    
                if (oType === 'object') {
                for (var key in o) {
                    if (value === o[key]) {    
                        resArr.push(key);
                        } 
                    }    
                }
            break;
            
            case('object'):
            
                for (var key in o) {
                var objKey = o[key];

                    for (var prop in value) {

                    if (valueLength > 1 && objKey[prop] === value[prop]) {
                        
                        count++;
                        if (count === valueLength)
                            
                            resArr.push(key); 
                    
                    } else if (objKey[prop] === value[prop]) {
                    
                        resArr.push(key);        
                        
                        }
                    }
                    count = 0;
                }
            break;
            
            case('function'):
            
                var objArr = [];
                for (var key in o) {
                    
                objArr.push(o[key]);
                       
                resArr = objArr.filter(function(){return value(o[key])});
					
				}
            
            break;        
            }        
            
            if (resArr.length < 2) {
                    return resArr[0];
                } else {
                    return resArr;
                }
            }
        }
})();

var users = {
  'barney':  { 'age': 36, 'active': true, comment: 3 },
  'fred':    { 'age': 40, 'active': false, comment: 'a'},
  'pebbles': { 'age': 1,  'active': true, comment: 'b'}
};

_.findKey(users, function(o) { return o.age < 40; });  // → ['barney', 'pebbles']
_.findKey(users, function(o) { return typeof o.comment === 'number'; });  // → 'barney'

//var o = {
//  a: 1,
//  b: 2,
//  c: 3,
//  d: 'a',
//  f: 'b',
//  e: 3
//};
//
//console.log( _.findKey(o, 2) ); // → 'b'
//console.log( _.findKey(o, 3) ); // → ['c','e']
//console.log( _.findKey(o, 'a') ); // → 'd'
//
//var users = {
//  'barney':  { 'age': 36, 'active': true, 'comment': 'a' },
//  'fred':    { 'age': 40, 'active': false, 'comment': 'b' },
//  'pebbles': { 'age': 1,  'active': true, 'comment': 'c' },
//  'nick':    { 'age': 1,  'active': true, 'comment': 'd' }
//};
//
//console.log( _.findKey(users, { 'age': 1, 'active': true, 'comment': 'd' }) ); // > nick
//console.log( _.findKey(users, { 'age': 1, 'active': true }) ); // > ["pebbles", "nick"]
//console.log( _.findKey(users, { 'active': true }) ); // > ["barney", "pebbles", "nick"]
//console.log( _.findKey(users, { 'age': 40 }) ); // > 'fred'
