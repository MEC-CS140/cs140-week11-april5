// script.js - Let's add some interactivity to make our web development journey exciting!

document.getElementById('funButton').addEventListener('click', function() {
    const funText = document.getElementById('funText');
    funText.innerHTML = '🎉 Congratulations on taking your first step into web development with CS 140! 🎉';
});

function areaOfSquareSizeTwenty(){
    let side = 20;
    let area = side * side;
    
    // This does the same thing, area is area^2
    //Math.pow(side, 2);

    alert("The area of a square with a side of 20 is: " + area);
}

function areaOfSquareSizeNegativeTwenty()
{
    let side = -20;

    if (side <= 0) 
    {
        alert("Area must be larger than 0.");
    }
    else
    {
        let area = side * side;
        
        // This does the same thing, area is area^2
        //Math.pow(side, 2);
        alert("The area of a square with a side of 20 is: " + area);
    }
}

let p = document.getElementById("existingText");
console.log(p);
p.textContent = "This text has been changed!";

function changeFooter()
{
    let footerP = document.getElementById("footerParagraph");
    footerP.textContent = "Footer has been changed!";

}

let clicks = 0;

function clickEvent(){
    let countText = document.getElementById("clicksText");
    clicks++;

    countText.textContent = clicks;
    console.log("Number of clicks: " + clicks);
    
    console.log("Remainder of clicks divided by 2: " + clicks % 2);

    if (clicks % 2 == 0 ) {
         alert(clicks + " is even");
    }

    // console.log("this is a test");
}

////////////////////Extra: Textboxes

function getText() 
{
    let t = document.getElementById("mytextbox");
    console.log(t.value);
}

function getCheck(){
    let c = document.getElementById("mycheckbox");
    console.log(c.checked);
}