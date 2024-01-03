function printerError(s) {
    let sampleString = "abcdefghijklm";
    let goodChars = [];
    let sRR = s.split('')
    for(let char in sRR){
      let current = sRR[char];
      if(sampleString.includes(current)){
        goodChars.push(current)
      }
    }
  return `${s.length - goodChars.length}/${s.length}`
}

console.log(printerError("aaabbbbjaijjjm")) // --> 0/14
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm")) // --> 8/22