export default function(fn,timeout = 500){
    let times = null        // 变量const错误  const 不能更改
   return (...args) => {
      clearTimeout(times)       //  错误  在定时器之前删
    times = setTimeout(() => {
        fn(...args)
    }, timeout);
   }
}

// export default function(fn, duration = 100) {
//     let timer = null;
//     return (...args) => {
//       clearTimeout(timer);
//       timer = setTimeout(() => {
//         fn(...args);
//       }, duration);
//     };
//   }
  