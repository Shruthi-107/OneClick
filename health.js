var he=document.querySelector(".h").value ;
var we=document.querySelector(".w").value ;
var bmi=parseFloat(we/(he*he)).toFixed(2);
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
     btn.onclick=function(){
     var he=document.querySelector(".h").value ;
     var we=document.querySelector(".w").value ;
     var bmi=parseFloat(we/(he*he)).toFixed(2);
     if(bmi<18.5){
          modal.style.display = "block";
          document.getElementById("Hello").innerHTML=bmi +"    Underweight";
          // appending an image

          var x = document.createElement("IMG");
          x.setAttribute("src", "https://media.tenor.com/1ApT-pZWryIAAAAM/crying-emoji.gif");
          x.setAttribute("width", "304");
          x.setAttribute("height", "300");
          x.setAttribute("display","block");
          document.getElementById("popup").appendChild(x);
          // appending text

          var y=document.createElement("h6");
          var textnode = document.createTextNode("           Awww!!!   Seems Like you dont like foodddd!!! Ummm... Check out some healthy as well Nutriciouus Dishes on our Website.....");
          y.appendChild(textnode);
          y.setAttribute("font-size","20px");
          document.getElementById("popup").appendChild(y);
     }
     else if(bmi>18.5 && bmi<24.9){
          modal.style.display = "block";
          document.getElementById("Hello").innerHTML=bmi +"    Normal";
          //appending image
          var x = document.createElement("IMG");
          x.setAttribute("src", "https://www.icegif.com/wp-content/uploads/thumbs-up-icegif.gif");
          x.setAttribute("width", "304");
          x.setAttribute("height", "300");
          x.setAttribute("display","block");
          document.getElementById("popup").appendChild(x);
     }
     else if(bmi>24.9){
          modal.style.display = "block";
          document.getElementById("Hello").innerHTML=bmi +"    Overweight"; 
          //appending image
          var x = document.createElement("IMG");
          x.setAttribute("src", "https://i.pinimg.com/originals/f6/b5/5a/f6b55a48684ed7035a25269d5e8aef5a.gif");
          x.setAttribute("width", "304");
          x.setAttribute("height", "300");
          x.setAttribute("display","block");
          document.getElementById("popup").appendChild(x);
     }
     else{
          modal.style.display = "block";
          document.getElementById("Hello").innerHTML="Please enter a valid details........."; 
          //appending image
          var x = document.createElement("IMG");
          x.setAttribute("src", "https://previews.123rf.com/images/arcady31/arcady311705/arcady31170500009/77165345-oops-vector-banner-with-emoji.jpg");
          x.setAttribute("width", "304");
          x.setAttribute("height", "300");
          x.setAttribute("display","block");
          document.getElementById("popup").appendChild(x);
     }
        }
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
