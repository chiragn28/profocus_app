/*
    Author : Carlos Raniel Ariate Arro 

    Last Update Date & Time : Tuesday,August 10 2021  5:55pm

*/

// preset values for the timer function template 
var min = 25;
var sec = "00";
var hrs ="00";

function template(){
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
}



function showOptions(){
    var options = document.getElementById("timer-options");
    options.style.setProperty("display","block","important");
}


var minutes_interval = 0;
var seconds_interval = 0;
function start(){
    min = min-1;
    sec = 59;
    document.getElementById("minutes").innerHTML= min;
    document.getElementById("seconds").innerHTML = sec;
    
    minutes_interval = setInterval(minutesTimer,60000);
    seconds_interval = setInterval(secondsTimer,1000);

    function minutesTimer(){
        min-min-1;
        document.getElementById("minutes").innerHTML = min;
    }
    function secondsTimer(){
        sec = sec - 1;
        document.getElementById("seconds").innerHTML = sec;
        if(sec <= 0){
            if(min <= 0){
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);
            }
            sec = 60;
        }
    }
}

function clear(){
    console.log("executed");
}




$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

$("#menu-untoggle").click(function(e){
    e.preventDefault();
    $("#wrapper").not(this).removeClass("toggled");
});


  function toggleForm(){
      var form = document.getElementById("form");
      form.style.setProperty("display","block","important");
  }
  function hideForm(){
      var form = document.getElementById("form");
      form.style.setProperty("display","none","important");
  }


  var check_no = 0;
  // function will be invoked after submit button located in the Task list form clicked
  function AddTask(){
      var task = document.createElement('div');
      task.className="task";
      var li = document.createElement('li');
      li.className = 'li';
      var box = document.createElement('label');
      box.className = "box";
      var input = document.querySelector('#TaskInput').value;
      var text = document.createElement("label");
      text.className = "text-label";
      text.innerHTML = input;
      //generating check element
      /* Need to figure out how to dynamically create checkboxes properly */
      var checkbox = document.createElement("input");
      checkbox.type="checkbox";
      checkbox.className="check";
      check_no += 1
      checkbox.id="check " +check_no;
      var checkmark = document.createElement('label');
      checkmark.htmlFor = checkbox.id;
      checkmark.className = "checkmark";
      //delete button
      var btnRMV = document.createElement("span");
      btnRMV.setAttribute("class","far fa-trash-alt");
      //calling the removeTask() function when the button is clicked 
      var remove = document.createElement("button");
      remove.onclick= function(){
          this.parentNode.parentNode.remove();
      }
      //adding the elements
      li.appendChild(task);
      task.appendChild(box);
      task.appendChild(remove);
      box.appendChild(checkbox);
      box.appendChild(checkmark);
      box.appendChild(text);
      remove.appendChild(btnRMV);
      // checking whether or not the user has entered a task or not
      if(input ===""){
          alert("You must write something to add!");
      }else{
          document.getElementById("list").appendChild(li);
      }
      document.getElementById("TaskInput").value=""; 
  }


function hideArrow(){
    var btn = document.getElementById("menu-toggle");
    btn.style.setProperty("display","none","important");
}

function showArrow(){
    var btn = document.getElementById("menu-toggle");
    btn.style.setProperty("display","block","important");
}