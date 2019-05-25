var lis = document.querySelectorAll("li");
var items = document.querySelectorAll(".item");
var display = document.querySelector(".code");
var protect = document.querySelector(".protect");
var pulse;
var colorArray;
var random;
var color;
var start;
var comparator;

for(var i=1; i<lis.length; i++){
    lis[i].addEventListener("click", function(){
        display.innerHTML = "Choosing the difficult...";
        protect.style.display = "block";
        switch(this.innerHTML){
            case "Easy":
            for(var i = 0; i<9; i++){
                if(i<=2){
                    items[i].style.backgroundColor = "#7FBD32";
                    items[i].classList.add("show");
                } else{
                    items[i].classList.remove("show");
                }
            }  
            break;
            case "Medium":
            for(var i = 0; i<9; i++){
                if(i<=5){
                    items[i].style.backgroundColor = "#7FBD32";
                    items[i].classList.add("show");
                } else{
                    items[i].classList.remove("show");
                }
            }
            break;
            case "Hard":
            for(var i = 0; i<9; i++){
                items[i].style.backgroundColor = "#7FBD32";
                items[i].classList.add("show");             
            }
            break;
        }
        for(var i=1; i<lis.length; i++){
            if(lis[i].classList.contains("clicked") === true){
                lis[i].classList.remove("clicked");   
            } 
            this.classList.add("clicked");
        }
    });
}

lis[0].addEventListener("click", function(){
    protect.style.display = "none";
    colorArray = [];
    for(var i=1; i<lis.length; i++){
        if(lis[i].classList.contains("clicked")){
            switch(lis[i].innerHTML){
                case "Easy":
                for(var i = 0; i<9; i++){
                    if(i<=2){
                        items[i].setAttribute("style", colorChange());
                        items[i].classList.add("show");
                        colorArray.push(items[i].getAttribute("style"));
                    } else{
                        items[i].classList.remove("show");
                    }
                }
                break;
                case "Medium":
                for(var i = 0; i<9; i++){
                    if(i<=5){
                        items[i].setAttribute("style", colorChange());
                        items[i].classList.add("show");
                        colorArray.push(items[i].getAttribute("style"));
                    } else{
                        items[i].classList.remove("show");
                    }
                }
                break;
                case "Hard":
                for(var i = 0; i<9; i++){
                    items[i].setAttribute("style", colorChange());
                    items[i].classList.add("show");
                    colorArray.push(items[i].getAttribute("style"));
                }
                break;
            } 
        }
    }
    for(var i = 0; i<colorArray.length; i++){
        random = Math.floor(Math.random() * length);
    }
    if(colorArray.length > 0){
        color = colorArray[random];
        start = color.search("rgb");
        color = color.substr(start);
        comparator = color;
        console.log(comparator);
        color = color.slice(0, 3) + " " + color.slice(3);
        display.innerHTML = color.toUpperCase();
    }
});

for(var i=0; i<items.length; i++){
    items[i].addEventListener("click", function(){
        for(var i=0; i<items.length; i++){
                if(this.style.backgroundColor === comparator){
                    display.innerHTML = "You win the game!";
                    for(var i=0; i<items.length; i++){
                        items[i].style.backgroundColor = comparator;
                    }
                } else{
                    this.style.backgroundColor = "rgb(77, 70, 70)";
                }
        }
    });
}

function colorChange(){
    var r, g, b;
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256); 
    return "background-color: rgb(" + r + ", " + g + ", " + b + ")";   
}
