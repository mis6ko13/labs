function update(id) {
    var elem = document.getElementById(id);
    var elemArr = elem.getElementsByTagName('li');
    for(var i = 0; i < elemArr.length; i++) {
        elemArr[i].innerHTML = parseInt(elemArr[i].innerHTML, 10) * 2;
    }
}

//update('list2'); //

function update(id, funct) {
    var elem = document.getElementById(id);
    var elemArr = elem.getElementsByTagName('li');
    
    for(var i = 0; i < elemArr.length; i++) {
        elemArr[i].innerHTML = funct(elemArr[i].innerHTML);
    }
}

update('list1', function(value){return +value * 3});

/*
for (var i = 0; i < 5; i++) {
    (function(j) {
        setTimeout(function() {
        console.log(j);
        }, j * 1000);
    })(i);
}

var _ = function() {
    return {
      findKey: function(o, value) {}  
    };
}

var o = {
    a: 1,
    b: 2,
    c: 3,
    d: 'a',
    f: 'b',
};

_.findKey(o, 2); // 2
_.findKey(o, 3); // ['c', 'e']
_.findKey(o, 'a'); // 'd'
*/