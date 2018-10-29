var nrOfDots = 100  ;
var multiplier = 4;
var dotPositions = [];

var circelRadius = 250;
var dotRadius = 5;
var lineWidth = 1;
var offset = 55;

function draw(){
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");
   
    drawCircel(context);
    drawDots(context);
    drawLines(context);


}
/**
 * Draw the circel
 * @param {CanvasRenderingContext2D} context 
 */

function drawCircel(context) {

        var circelCenterPoint = circelRadius + offset;
        
        context.arc(circelCenterPoint,circelCenterPoint,circelRadius,0, 2 * Math.PI);
        context.stroke();
    
}

/**
 *  Draw the dot on the line of circel 
 * @param {CanvasRenderingContext2D} context 
 */



function drawDots(context){
    var outlineCircleCenter = circelRadius + offset;
    for (var i = 0; i <nrOfDots; i++){
        
        angel = 2 * Math.PI / nrOfDots * i;
        var x = outlineCircleCenter + circelRadius * Math.cos(angel);
        var y = outlineCircleCenter + circelRadius * Math.sin(angel);
        context.beginPath();
        context.arc( x, y , dotRadius, 0 , 2 * Math.PI);
        context.fillStyle = 'red'
        context.fill();
        dotPositions.push({
            x:x,
            y:y
        });
        
        


        


    }


 }


/**
 * 
 * @param {CanvasRenderingContext2D} context 
 */

function drawLines(context){
    for (var i = 0; i <nrOfDots; i++){
        var startingPoint = dotPositions[i]
        var nextIndex = i * multiplier % dotPositions.length;
        var endingPoint = dotPositions[nextIndex]
        context.beginPath();
        context.moveTo(startingPoint.x, startingPoint.y)
        context.lineTo(endingPoint.x , endingPoint.y)
        context.stroke();
    }
    
}

function myFirstSlider () {
    var sliderOne = document.getElementsByClassName("myRange").value 
    console.log(myrange)
}