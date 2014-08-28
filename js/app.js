//Want a loop that counts from 1 to 100 and prints out to the body
//We then need to print fizz for all number divisible by 3
//We also want to print buzz for all number divisible by 5
//For numbers divisible by 3 and 5 we want to print fizzbuzz
$(document).ready(function(){

	var userInput =	Number(prompt("Please choose a whole number between 1 and 100","Type number here!"));


		var play = function() {
		for( var count = 1; count <= userInput; count++){
			if( count % 3 === 0 && count % 5 === 0){
				$("body").append("FizBuzz").append("<br />");
			} else if(count % 3 === 0){
				$("body").append("Fiz").append("<br />");
			} else if(count % 5 === 0){
				$("body").append("Buzz").append("<br />");
			} else {
				$("body").append(count).append("<br />");
			}
		}
	} // end of play



		var game = function() {
			while(true){
					userInput;
					if(userInput > 0 && userInput <= 100 && userInput % 1 === 0 && !isNaN(userInput)){
						play();
						break;
					}else{
						alert("Please choose a WHOLE number between 1 and 100");
					}//end of else
			}//end of while loop
			
		
		}; //end of game

game();//Run fizbuzz game


}); // end of doc ready
					



// if(userInput <= 0 || userInput >100){
// 			alert("Please choose a number between 1 and 100");
// 		} else if (userInput %1 != 0) {
// 			alert("Please choose a WHOLE number between 1 and 100");
// 		} else {
// 			alert("Nice Pick");
// 		}

// userInput <= 0 || userInput >100 || userInput % 1 != 0

// if(userInput <= 0 || userInput >100){
			// 	alert("Please choose a number between 1 and 100");
			// 	userNum();
			// }else if (userInput % 1 != 0){
			// 	alert("Please choose a WHOLE number between 1 and 100");
			// } else {
			// 	// alert("Lets run the program!");
			// 	play();
			// }