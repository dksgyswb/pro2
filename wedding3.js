// var slideIndex = 0;
// carousel();

// function carousel() {
//     var i;
//     var x = document.getElementsByClassName("ou_4");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > x.length) {slideIndex = 1}
//     x[slideIndex-1].style.display = "block";
//     setTimeout(carousel, 2000); // Change image every 2 seconds
// }
// var currentIndex = 0;
// var countSlide = $(".ou_4").length;
// var slidePosition;

// setInterval(function(){
//     if(currentIndex < countSlide - 1){
//         currentIndex++;
//     }else{
//         currentIndex = 0
//     }
    
//     slidePosition = currentIndex * (- 378) + "px";
//     $(".ou_4").animate({top:slidePosition},400);
    
// },3000);
setInterval( function(){             
    $(".g_2").delay("2500");        
    $(".g_2").animate({marginTop:  "-10px" },"500");  
    $(".g_2").delay("2500");                           
    $(".g_2").animate({marginTop:  "-600px" },"500"); 
    $(".g_2").delay("2500");                           
    $(".g_2").animate({marginTop:  "0" },"500");       
    });
