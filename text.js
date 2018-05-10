//做饭
function cook(aaa){
    console.log('开始做饭。');
    return new Promise(function(resolve, reject){        //做一些异步操作
        setTimeout(function(){
            console.log('做饭完毕！');
            resolve('鸡蛋炒饭'+aaa);
        }, 1000);
    });
    
}
/* 
//吃饭
function eat(data){
    console.log('开始吃饭：' + data);
    var p = new Promise(function(resolve, reject){        //做一些异步操作
        setTimeout(function(){
            console.log('吃饭完毕!');
            resolve('一块碗和一双筷子');
        }, 2000);
    });
    return p;
}
 
function wash(data){
    console.log('开始洗碗：' + data);
    var p = new Promise(function(resolve, reject){        //做一些异步操作
        setTimeout(function(){
            console.log('洗碗完毕!');
            resolve('干净的碗筷');
        }, 2000);
    });
    return p;
}
*/
cook("****")
//.then(eat)
//.then(wash)
.then(function(data){
    console.log(data);
});