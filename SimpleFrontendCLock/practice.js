//  function myOwnSetTimeout(cb, duration){
//   setTimeout(cb, duration)
//  }


//  myOwnSetTimeout(function() {
//   console.log("after setTimeout")
//  }, 1000)
 

 function promisifiedMyOwnSetTimeout(duration){
  const p = new Promise(function(resolve) {
    setTimeout(function() {
      resolve();
    }, duration);
  });
  return p;
 }

 const ans = promisifiedMyOwnSetTimeout(1000);
 console.log(ans);
 ans.then(function(){
  console.log("timeout is done")
 })