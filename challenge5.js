var str1=prompt();
var str2=prompt();
let l1=str1.length;
let l2=str2.length;
if(l1!=l2) console.log("empty");
let f1=str1.split('').sort().join('');
let f2=str2.split('').sort().join('');
if(f1===f2){
    console.log("true ,its a anagram");
}
else console.log("false,its not a anagram");
}
