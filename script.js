 var numberCount  = 0;
var x;


function create(){
  	
  var input = document.getElementById("title-input").value;
  var inputData = document.getElementById("datepicker").value;
  if(input != "" && inputData != ""){ ///if input and inputData is not empty
	var createId = document.getElementById("create");
	    //===========================================================futureDate===========================
	var  inputData = document.getElementById("datepicker").value;
	
	  var    hourIndex = document.getElementById("hour").selectedIndex;
	  var  hourOptions = document.getElementById("hour").options;
	  var  minutesIndex = document.getElementById("minutes").selectedIndex;
	  var minutesOptions = document.getElementById("minutes").options;
	  var hourText = hourOptions[hourIndex].text;  
	  var minutesText = minutesOptions[minutesIndex].text;
	  var date= new Date();
	   var futureDate = new Date( inputData + " "  + hourText + ":" + minutesText).getTime();
    if(futureDate > date){ //if futureDate is bigger then actual date create DIV element else alert 'You must to introduce a future date'
	var create= document.createElement("DIV");
	}
	  else{
		  alert("You must to introduce a future date")
	  }
	var attribute = create.setAttribute("class", "item");
	  
	//=================================span and close========================
	var span = document.createElement("SPAN");
	var close = span.setAttribute("class", "close");  
	var text =  document.createTextNode("\u2716");
	
	create.appendChild(span);
	span.appendChild(text);
	
	  
	  
//create H2 element
    var createH2 = document.createElement("H2");
	create.appendChild(createH2);
	  var textnode = document.createTextNode(input);
	createH2.appendChild(textnode);  
	input = document.getElementById("title-input").value = ""; 
	  // create P element with class  item3
	 var createP3 = document.createElement("P");
	 var attributeP3 = createP3.setAttribute("class", "item3");
	 create.appendChild(createP3);
	 //create P element
	 var createP = document.createElement("P");
	 var attributeP = createP.setAttribute("class", "item2");
	 create.appendChild(createP);
	 
	 x = numberCount++; //x represent the number of 'item2' and 'item3' classes if you want to have more tasks

	createId.appendChild(create);
	
	myFunction2();
	 

  }
	else{
		alert("Title and date  must be filled out")
	}
	
	
}


 //==============================================================Function2============================================
  /// in myFunction2 we will put the dates (Task Date and Time Left) in class 'item'
function myFunction2(){
      
	
	  inputData = document.getElementById("datepicker").value;
	
	    hourIndex = document.getElementById("hour").selectedIndex;
	    hourOptions = document.getElementById("hour").options;
	    minutesIndex = document.getElementById("minutes").selectedIndex;
	   minutesOptions = document.getElementById("minutes").options;
	
	document.getElementsByClassName("close")[x].addEventListener("click", function(){
     this.parentNode.style.display = "none";  
	});
	  var hourText = hourOptions[hourIndex].text;  
	  var minutesText = minutesOptions[minutesIndex].text;
	
        var newCountDownDate = new Date( inputData + " "  + hourText + ":" + minutesText).getTime();
	     var item3 =  document.getElementsByClassName("item3")[x].innerHTML = " Task Date: " +  inputData +  " " + hourText + ":" + minutesText;
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
	   
	
	
	
	 

	