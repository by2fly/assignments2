// antiCaps('Hello')  // hELLO
// antiCaps('racEcar')  // RACeCAR
// antiCaps('bAnAnA')  // BaNaNa




// // function isCaps(letter) {
// //     return letter === letter.toUpperCase();
// //   }



// function isCaps() {
//     let str = "QWERTYqwertyABCabc";
//     let strArr = str.split("") ;
//     let newArr = [];
  
//     for (var i=0; i<strArr.length; i++) {
//         if (strArr[i]===strArr[i].toUpperCase())

//          { newArr[i] = strArr[i].toLowerCase();

// } else { newArr[i]=strArr[i].toUpperCase();
//    }   
//    console.log(newArr);


// return newArr.join("");
// }
// }
// console.log(newArr);


function antiCaps(a) {
    var b = "";
    for (i = 0; i < a.length; i++) {
        if (a.charCodeAt(i) >= 65 && a.charCodeAt(i) <= 90) {
            b = b + a.charAt(i).toLowerCase();
        } else {
            b = b + a.charAt(i).toUpperCase();
        } 
    }
    return b;
}
console.log(antiCaps("QWERTYqwertyABCabc"));

swapcase = function swapcase(str) {
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
console.log(swapcase('QWERTYqwertyABCabc'));

srtesrteswrswefrsefserfsefserujkjjukklkj kjik matchMedia;klj;lkji;lkjjk i k;ljii