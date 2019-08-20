function sum() {
  let sum = 0;
  let nums = Array.from(arguments);

  for (let i = 0; i < nums.length; i++) {
     sum += nums[i];
  }
  return sum;
}

function sum2(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

Function.prototype.myBind = function(){
  let args = Array.from(arguments);
  let context = args[0];
  let otherArgs = args.slice(1);
  debugger
  return (...args2) => this.call(context, ...otherArgs, ...args2);
};

 function curriedSum() {
  let numTimes = arguments[0];
  let args = [];
   return function _curriedSum (num1){
     args.push(num1);
     if (args.length === numTimes) {
       let sum = 0;
       for (let i = 0; i < args.length; i++) {
         sum += args[i];
       }
       return sum;
      } else {
        return _curriedSum;
      }
    };
 }

Function.prototype.curry = function (numArgs) {
   let args = [];
   let that = this; 

   let _curry = function(arg) {
     args.push(arg);
     if (numArgs === args.length) {
       return that(...args);
     } else {
       return _curry;
     }
   };
   return _curry;
};


let sum3 = curriedSum(3);
console.log(sum3(5)(10)(15));
