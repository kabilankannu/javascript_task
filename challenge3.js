let arr1=[];
let arr2=[];
function enqueue(ele){
    arr1.push(ele);
    console.log("added: ",arr1);
  }
function dequeue(){
    if(arr2.length===0){
        if(arr1.length===0){
            console.log("empty");
        }
        while(arr1.length>0){
            let n=arr1.pop();
            arr2.push(n);
        }
    }
    console.log("remaining: " + arr2.pop());
}
enqueue(prompt());
enqueue(prompt());
enqueue(prompt());
dequeue();
dequeue();
