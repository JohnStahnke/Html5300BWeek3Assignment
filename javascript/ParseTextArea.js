/**
 * @author JohnStahnke
 *
 */

var numbers = [];
var words = [];
var obj = {};

   
$('#submitText').on('click', parseText);
$('#reset').on('click', reset);
    
    
function parseText(){
	var input = $('#inputText').val().split(' ');
        
    $.each(input, function(i, name){
    		//check if NaN
    	if(isNaN(name))
    	{
    		words.push(name);
    	}
    	else
    	{
    		numbers.push(name);
    	}
    	
    }); //end $.each(input, function())
    	

    	
 		//This is where I build my word count
		//Loop using how many words are in array
    	for (i = 0; i < words.length; i++) {
    		// check to see if array element is empty
    		if (words[i] != '') {
    			//if object does not contain key "words[i]" and of course no value create key value pair with 0 as value and words[i] string as key
        		if (!obj[words[i]]) {
            		obj[words[i]] = 0;
        		}
        	obj[words[i]]++;
			}//end if(words[i] != '')
		}
		
		
	//ConcatenateStrings();
	DisplayNumbers();
	DisplayWords();
	return false;
}

function DisplayNumbers()
{
	var count = 0;
	var sum = 0;
	var avg = 0;
	
	$.each(numbers, function(){
		count++;
		sum += parseInt(this, 10);
	});
	
/*
 * var total = 0;
 * $.each(arr,function() {
 *     total += this;
 * });
 * */

	$('#count').append(count);
	$('#sum').append(sum);
	$('#average').append(sum/count);
}

function DisplayWords()
{
	
	var i, len, item;
	var tr, td;
	
	$('#wordsCountList').empty();
	
	for(key in obj){
		tr = $('<tr>');
		
		td = $('<td>');
		td.text(key);
		tr.append(td);
		
		td = $('<td>');
		td.text(obj[key]);
		tr.append(td);
		
		$('#wordsCountList').append(tr);

	}
	
	$("#concatenatedString").append(words.join(" "));
	return false;
}

 
function reset()
{

    $('#inputText').val('');
    $('#count').empty();
    $('#sum').empty();
    $('#average').empty();
    $("#concatenatedString").empty();
    $('#wordsCountList').empty();
    numbers.length = 0;
    words.length = 0;
    for (var prop in obj) { if (obj.hasOwnProperty(prop)) { delete obj[prop]; } }
}
