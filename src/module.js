const x=3;
const y=5;
const sum=x+y;
const mult=x*y;

//export { sum };                   // es6

//module.exports=sum;                 // export single value

exports.s=sum;                      // multiple export
exports.m=mult;                     // multiple export