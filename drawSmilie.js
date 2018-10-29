function draw(){
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");
   
    drawHead(context)
    drawEyes(context)
    drawMouth(context)
    
    
    
    
    
}
/**
 * 
 * @param {CanvasRenderingContext2D} context 
 */

function drawHead(context){
    context.beginPath();
    context.arc(100, 100, 50, 0, 10) ;
    context.stroke();
    
}
function drawEyes(context){
    context.beginPath();
    context.arc( 75, 75, 4, 0 , 10);
    context.stroke();
    
    context.beginPath();
    context.arc( 120, 75, 4, 0 , 10);
    context.stroke();
}
function drawMouth(context){
    
    context.beginPath();
    context.arc( 100, 100, 35, 0 ,3 );
    context.stroke();
}





    /**  context.fillStyle="green"; 
    context.fillRect(10,10,400,500)
 
    context.lineWidth= 10;
    context.strokeStyle="red";
    context.strokeRect(20,20,300,400)
 
    context.lineWidth= 5;
    context.strokeStyle="yellow";
    context.beginPath();
    context.moveTo(16,25 );
    context.lineTo(300,420);
    context.stroke(); */