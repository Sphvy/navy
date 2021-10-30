 
function init() 
{ 
  	var canvas = document.getElementById("canvas");
	if(canvas.getContext)
	{
        
        var ctx = canvas.getContext("2d");
        ctx.fillStyle="#f0f0f0";					
        ctx.fillRect (100, 125, 800, 300); 	

        ctx.fillStyle="#d10000";					
        ctx.fillRect (140, 230, 750, 80); 

        ctx.lineWidth=80;

        ctx.strokeStyle="#080096";
        ctx.strokeRect (100, 125, 800, 300);
        
        ctx.fillStyle="#080096";
		ctx.beginPath();							
		ctx.arc(500, 275, 250, 0,Math.PI*2, true);		
        ctx.fill();


    }
}
onload=init;

