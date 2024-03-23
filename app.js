                                //  for LOOP
// var text = "My name is Shaikh Muhammad Aslam . Your name is Shaikh Muhammad Aslam";
// for( var i = 0; i < text.length; i++ ){
//     if( text.slice(i , i+5) === "Aslam" ){
//         text = text.slice(0 , i) + "Ali" + text.slice(i + 5);
//     }
// }
// console.log(text);


                                    //    indexOf
// var text = "My name is Shaikh Muhammad Aslam . Your name is Shaikh Muhammad Aslam";
// var indexNumber =text.indexOf("Aslam");
// var firstText= text.slice(0,indexNumber);
// var replaceText= "Sufyan";
// var remainText= text.slice(indexNumber + 5) 
// console.log(firstText + replaceText + remainText);

                                    //  lastIndexOf
// var text = "My name is Shaikh Muhammad Aslam . Your name is Shaikh Muhammad Aslam";
// var indexNumber =text.lastIndexOf("Aslam");
// var firstText= text.slice(0,indexNumber);
// var replaceText= "Sufyan";
// var remainText= text.slice(indexNumber + 5) 
// console.log(firstText + replaceText + remainText);

                                            //  replace(--,--)
// var text = "My name is Shaikh Muhammad Aslam . Your name is Shaikh Muhammad Aslam";
// console.log(text.replace("Shaikh Muhammad","Shaikh Abdul"));

                                            //  replaceAll(--,--)
// var text = "My name is Shaikh Muhammad Aslam . Your name is Shaikh Muhammad Aslam";
// console.log(text.replaceAll("Shaikh Muhammad","Shaikh Abdul"));

                                                //  PALINDROME WORD

// var word = prompt("Enter palindrome word...");
// var word = word.toLowerCase()
// var update = "";
// for( var i=word.length -1;i>=0;i--){
//     update += word[i]
// }
// if(word === update){
//     alert("This is a Palindrome word");
// }
// else{
//     alert("This not a Palindrome word")
// };

                                    //    HEADS/TAILS TOSS

// var headuser = prompt("Enter head user name") 
// var tailuser = prompt("Enter tail user name")
// var toss = Math.random()*2;
// console.log(toss)
// var convert = Math.floor(toss);

// if(convert === 0){
//     document.write(headuser+" win the toss")
// }
// else{
//     document.write(tailuser + " win the toss")
// }

                    //  PASSWORD GENERATOR

var randomvalues = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
for ( i=0; i< 10; i++){
    var password = Math.floor(Math.random() * randomvalues.length +1);
    document.write(randomvalues[password])
}
