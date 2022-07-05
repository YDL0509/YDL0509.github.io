/* 
    目的: 
    1. 讲原来存储对象出现: [object object]  解决掉
    第一步要有自己的存储方法, 因为系统的存储方法已经没办法满足我们的需求

*/

var FZStorage = {
    setLoc: function (key, value) {
        // 考虑到传过来的value 可能是字符串, 也可能是其他类型
        // 我们不用考虑是什么类型,  只要有值过来,
        // 我们就将其传唤为字符串, 然后存储到Storage
        localStorage.setItem(key, JSON.stringify(value));
    },
    getLoc: function(key) {
        // 取出来的值, 我们不知道是什么类型,
        // 不管是什么类型, 我们都将其转成对象
        var value = localStorage.getItem(key);
        // JSON.parse 转对象
        if(value){
            return JSON.parse(value);
        }
        return null;
    }
}