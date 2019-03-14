 var numberCount  = 0;
var x;

function create(){
  	
  var input = document.getElementById("title-input").value;
  var inputData = document.getElementById("datepicker").value;
  if(input != "" && inputData != ""){ ///daca input nu este gol
	var createId = document.getElementById("create"); 
	var create= document.createElement("DIV");
	var attribute = create.setAttribute("class", "item");
	  
	//=================================span and close========================
	var span = document.createElement("SPAN");
	var close = span.setAttribute("class", "close");  
	var text =  document.createTextNode("\u2716");
	
	create.appendChild(span);
	span.appendChild(text);
	
	  
	  
//create H1 element
    var createH1 = document.createElement("H1");
	create.appendChild(createH1);
	  var textnode = document.createTextNode(input);
	createH1.appendChild(textnode);  
	input = document.getElementById("title-input").value = ""; ///// dupa ce dai click inputul este gol
	  // create P3 element
	 var createP3 = document.createElement("P");
	 var attributeP3 = createP3.setAttribute("class", "item3");
	 create.appendChild(createP3);
	 //create P element
	 var createP = document.createElement("P");
	 var attributeP = createP.setAttribute("class", "item2");
	 create.appendChild(createP);
	 
	 x = numberCount++;

	  
         
		
	  
	  
	createId.appendChild(create);
	
	myFunction2();
	 

  }
	else{
		alert("Title and date  must be filled out")
	}
	
	
}
 //==============================================================Function2============================================

function myFunction2(){
                        
	
	   var inputData = document.getElementById("datepicker").value;
	
	   var hourIndex = document.getElementById("hour").selectedIndex;
	   var hourOptions = document.getElementById("hour").options;
	   var minutesIndex = document.getElementById("minutes").selectedIndex;
	  var minutesOptions = document.getElementById("minutes").options;
	document.getElementsByClassName("close")[x].addEventListener("click", function(){
     this.parentNode.style.display = "none";  
	});
	  var hourText = hourOptions[hourIndex].text;  
	  var minutesText = minutesOptions[minutesIndex].text; 
        var newCountDownDate = new Date( inputData + " "  + hourText + ":" + minutesText).getTime();
	     var item3 =  document.getElementsByClassName("item3")[x].innerHTML = " Time Date: " +  inputData +  " " + hourText + ":" + minutesText;
	    inputData = document.getElementById("datepicker").value = "";
	    hourOptions = document.getElementById("hour").selectedIndex= "00";
	    minutesOptions = document.getElementById("minutes").selectedIndex= "00";
	var item2 = document.getElementsByClassName("item2")[x];
	/*inputData = document.getElementById("datepicker").value= "";*/
setInterval(function(){
	
	 var now = new Date();

	var distance  = newCountDownDate - now;
	
	  var    days = Math.floor(distance / (1000 * 60 * 60 * 24));
       var   hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		item2.innerHTML  = "Time left: " +  days + "d "  + hours + "h " + minutes + "m " + seconds +  "s";
	    
		if(distance < 0){
		  item2.parentElement.style.display = "none";
		}
	   
		},1000);
	
	   
	}
	
	
	 

	