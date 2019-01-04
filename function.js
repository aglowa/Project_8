var input_1 = document.getElementById("name_1");
var input_2 = document.getElementById("name_2");
var input_3 = document.getElementById("name_3");
var gender_1 = document.getElementById("gender_1");
var gender_2 = document.getElementById("gender_2");
var gender_3 = document.getElementById("gender_3");
var last_1,
	last_2,
	last_3;

var stringlength;

input_1.onkeyup = function() {

	if(input_1.value.length > input_2.value.length && input_1.value.length>0 && input_2.value.length>0)
   {
   	input_2.value = input_2.value + "_";   
}
	if(input_1.value.length > input_3.value.length && input_1.value.length>0 && input_3.value.length>0)
	{
		input_3.value = input_3.value + "_";
	}




last_1 = input_1.value[input_1.value.length-1];
}



input_2.onkeyup = function() {

	if(input_2.value.length > input_3.value.length && input_1.value.length>0 && input_3.value.length>0)
   {
   	input_3.value = input_3.value + "_";   
}
	if(input_2.value.length > input_1.value.length && input_2.value.length>0 && input_1.value.length>0)
	{
		input_1.value = input_1.value + "_";
	}


last_2 = input_2.value[input_2.value.length-1];

}
input_3.onkeyup = function() {

	if(input_3.value.length > input_1.value.length && input_3.value.length>0 && input_1.value.length>0)
   {
   	input_1.value = input_1.value + "_";   
}


last_3 = input_3.value[input_3.value.length-1];

}

function myCheck(){
if(input_1.value !="" && input_2.value !="" && input_3.value !=""){
	if (last_1 == "a")
	{
		gender_1.value ="It is a girl";
	}
	else
	{
		gender_1.value = "It is a boy"; 
	}

	if (last_2 == "a")
	{
		gender_2.value ="It is a girl";
	}
	else
	{
		gender_2.value = "It is a boy"; 
	}

	if (last_3 == "a")
	{
		gender_3.value ="It is a girl";
	}
	else
	{
		gender_3.value = "It is a boy"; 
	}

}
}

function refresh()
{
	window.location.reload();
}




