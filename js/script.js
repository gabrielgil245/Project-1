/*
let slideInterval = 4000;

function getFigures()
{
    return document.getElementById("slideshow")
        .getElementsByTagName("figure");
}

function moveForward()
{
    let pointer;
    let figures = getFigures();
    for (let index = 0; index < figures.length; index++)
    {
        if(figures[index].className == "visible")
        {
            figures[index].className = " ";
            pointer = index;
        }
    }
    pointer++;
    if(pointer == figures.length) {pointer = 0;}
    figures[pointer].className = "visible";
    startPlayBack();
}

function startPlayBack()
{
    setTimeout(moveForward, slideInterval);
}

startPlayBack();
*/