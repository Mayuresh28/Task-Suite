let textbox = document.getElementById("textbox");

// console.log(textbox)
textbox.addEventListener('input',function(){
   var store = this.value
   var store2= store.split(" ");
 var  store3 = store2.filter(function(e){
     return e != ""
 })
//  console.log(store3)
 //    console.log(store2);
 var charc = store.length
 var characters = document.getElementById("character");
 //    console.log(store)
 var wordc = store3.length
 var words= document.getElementById("word")
 // console.log(wordc)

 characters.innerHTML = charc;
 words.innerHTML = wordc;
 
})