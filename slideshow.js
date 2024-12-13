var current = 0;
var total = 4; // number of images



function nextPhoto() {
    
    //increment the current variable by one
    //current = current +1;
    // current += 1;

    current ++;

    //if the current variable is greater than the number of slides, reset to zero
    if(current >= total){
        current = 0;
    }

    

    console.log("next");
    console.log(current);

    //create a reference to all the slide divs
    var slides = document.getElementsByClassName("slide");

    //loop through the slides
    for(var i=0; i<slides.length; i++){
    slides[i].style.display = "none";
    }

    //display the selected slide
     
    slides[current].style.display ="block";
}   




function prevPhoto() {
    
    //increment the current variable by one
    //current = current -1;
    // current -= 1;

    current --;

    //if the current variable is less than zero, reset to the last photo total-1
    if(current < 0){
        current = total - 1;
    }

    

    console.log("prev");
    console.log(current);

    //create a reference to all the slide divs
    var slides = document.getElementsByClassName("slide");

    //loop through the slides
    for(var i=0; i<slides.length; i++){
    slides[i].style.display = "none";
    }

    //display the selected slide
     
    slides[current].style.display ="block";
}   


// // whatever is visible, hide it before opening one
//     // use the class name
    
//     var hideDivs = document.getElementsByClassName("accordion-section");
//     //loop through each section
//     for(var i=0; i<hideDivs.length; i++){
//         //hide each section
//         hideDivs[i].style.display = "none";
//     }

    
//     var content = document.getElementById(target); // it was hardcoded at section-1, but now it will apply to any target
    
    
//     // check if the content is currently displayed
//     if(content.style.display === "block"){
//         //hide the content
//         content.style.display="none";
//     } else{
//         //otherwise display it
//         content.style.display ="block";
//     }