// 1
const num=[1,2,3,4,5]
num.forEach(myfn);
function  myfn(element)
{
  console.log(element);
}
// 2
const map1=num.map(function(i){
    return i*i;
})
console.log(map1);
// 3
const country=["Estonia", "Finland", "Sweden", "Denmark", "Norway","Fiji"]
const res=country.filter(i=>i.startsWith('E'));
console.log(res);
// 4

function getStringList(arr){
  return arr.filter(i=> typeof i == 'string');
}
const array1=[1,"str","kabilan","123",234]
const strarr=getStringList(array1);
console.log(strarr);
// 5
const sentence=country.reduce((accum,curr)=>accum+","+curr);
console.log(sentence+" are north European countries");
//7
const univalues=[1.6021766634,3.14159,9.8,37,100]
 const [e,pi,gravity,humanbodytemp,waterBoilingTemp] = univalues;
console.log(e);
console.log(pi);
console.log(humanbodytemp);
console.log(waterBoilingTemp);
console.log(gravity);

//8
const a=[4,5,8,9];
const b=[3,4,5,7];
let A=new Set(a);
let B=new Set(b);
const strr=['abc','gth','tyu']
const seet=new Set();
console.log(seet);
for(let i=1;i<=10;i++)
{
  seet.add(i);
}
console.log(seet);
seet.delete(10);
console.log(seet);
seet.clear();
console.log(seet);

//9
const fivestring=new Set(strr);
console.log(fivestring);

//10
let uni=[...a,...b]
let c=new Set(uni)
console.log(c);
//intersection
let cc=a.filter(i=> B.has(i))
let c1=new Set(cc);
console.log(c1);
//difference
let cd=a.filter(i=> !B.has(i))
let c2=new Set(cd);
console.log(c2);
