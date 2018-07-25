var position = 50;

var book = document.getElementById("booki");
book.addEventListener("mouseover", function() { 
    TweenMax.to(".book", 2, {left:position});    
});
book.addEventListener("mouseout", function() { 
    TweenMax.to(".book", 0.5, {left:position-50});    
});


alert('algo');
