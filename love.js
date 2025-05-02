


function  change() {
  var randomNumber = Math.floor(Math.random() * 19) + 1;

  var img = "IMG_" + randomNumber + ".png"
  
  var imgsrc = "./Love Assets/"+ img;
  
  var album = document.querySelectorAll("img")[0];

  album.setAttribute("src", imgsrc);
}



function buttonClick () {document.getElementById("nextButton").addEventListener("click", change);

}

buttonClick ()

