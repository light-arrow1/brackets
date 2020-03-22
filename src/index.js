module.exports = function check(str, bracketsConfig) {
  let array = bracketsConfig.map(i=>i.join(''))
  let answ = str;
  let tr = [true];
  while (tr.includes(true) && answ.length){
      for (let i = 0; i < array.length; i++ ) {
          answ = answ.replace(array[i],'');
      }
      tr = array.map( p=> {
          if (answ.indexOf(p) < 0) {
              return false;
          } else {
              return true; }
      })
  }

  return !answ;



  // your solution
}
