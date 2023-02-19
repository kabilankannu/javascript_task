
class Utilities{
  static camelCase(str){
    str=str.toLowerCase();
    let words=str.split(' ');
    for(let i=1;i<words.length;i++)
    {
      words[i]=words[i][0].toUpperCase()+words[i].slice(1);
    
    }
    return words.join('');
  }
}
const uobj=new Utilities();
console.log(Utilities.camelCase("Monkey Banana"));
console.log(Utilities.camelCase("I love cookies"));
console.log(Utilities.camelCase("HELLO THERE"));
