// Get script ready for DOM
$(document).ready(function(){
// Script for generating cpu # and displaying it.	
var targetNumber =Math.floor(Math.random() *101+19)

	$('#targetNumber').html("Target Number: " + targetNumber + " ");
// Variables for generating crystal values in multiples of 12.
	var num1= Math.floor(Math.random()*11+1)
	var num2= Math.floor(Math.random()*11+1)
	var num3= Math.floor(Math.random()*11+1)
	var num4= Math.floor(Math.random()*11+1)
// Varibales for win/loss/user total.
	var wins= 0;
	var loss= 0;
	var userTotal = 0;
// Displaying variables as elements.
	$('#wins').html("Wins :" + wins);
	$('#losses').html("Losses : " + loss);
	$('#userTotal').html("Score: " + userTotal);

// DOM on load will generate these values and run the the above variables.
// In other words, the page will run scripts.
	function reset(){
		targetNumber=Math.floor(Math.random()*101+19);
		console.log(targetNumber)
		$('#targetNumber').html("Target Number: " + targetNumber);
		num1= Math.floor(Math.random()*11+1);
		num2= Math.floor(Math.random()*11+1);
		num3= Math.floor(Math.random()*11+1);
		num4= Math.floor(Math.random()*11+1);
		userTotal= 0;
		$('#userTotal').html("Score: " + userTotal);
	}
// Alerts the user through a window prompt that pops up when the user WINS. Resets the game when user clicks on "Ok".
// Calls on the variable "wins" and changes the number within the element when the user successfully hits the Target Number.
	function win(){
		alert("You win! Play again?");
		wins++;
		$('#wins').html("Wins: " + wins);
		reset();
	}
// Alerts the user through a window prompt that pops up when the user LOSES. Resets the game when user clicks on "Ok".
// Calls on the variable "losses" and changes the number with in the element when the user busts, or goes past the Target Number.
	function losses(){
		alert("You lose. Play again?");
		loss++;
		$('#losses').html("Losses: " + loss);
		reset();
	}
// Turns the pictures of the crystals into buttons for the user to click on. When the user clicks on each respective crystal, the user value
// changes after the addition operator is executed.
// Also adds the win/loss condition with the if and else/if statements.
	$('#one').on ('click', function(){
		userTotal = userTotal + num1;
			console.log("New userTotal= " + userTotal);
		$('#userTotal').html("Score: " + userTotal);
			if (userTotal === targetNumber){
			win();
			}
			else if (userTotal>targetNumber){
			console.log("inside elseif userTotal>targetNumber")
			losses();
			}
	})

	$('#two').on ('click', function(){
		userTotal = userTotal + num2;
			console.log("New userTotal= " + userTotal);
		$('#userTotal').html("Score: " + userTotal);
			if (userTotal === targetNumber){
			win();
			}
			else if (userTotal>targetNumber){
			losses();
			}
	})

	$('#three').on ('click', function(){
		userTotal = userTotal + num3;
			console.log("New userTotal= " + userTotal);
		$('#userTotal').html("Score: " + userTotal);
			if (userTotal === targetNumber){
			win();
			}
			else if (userTotal>targetNumber){
			losses();
			}
	})

	$('#four').on ('click', function(){
		userTotal = userTotal + num4;
			console.log("New userTotal= " + userTotal);
		$('#userTotal').html("Score: " + userTotal);
					if (userTotal === targetNumber){
			win();
			} else if (userTotal>targetNumber){
			losses();
				}
	});
});