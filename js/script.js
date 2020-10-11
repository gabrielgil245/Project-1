var slideInterval = 3000;

function getFigures()
{
    return document.getElementById("slideshow")
        .getElementsByTagName("figure");
}

function moveForward()
{
    var pointer;
    var figures = getFigures();
    for (var index = 0; index < figures.length; index++)
    {
        if(figures[index].className == "visible")
        {
            figures[index].className = " ";
            pointer = index;
        }
    }
    if(++pointer == figures.length) {pointer = 0;}
    figures[pointer].className = "visible";
    startPlayBack();
}

function startPlayBack()
{
    setTimeout(moveForward, slideInterval);
}

startPlayBack();