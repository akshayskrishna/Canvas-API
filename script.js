var c = document.getElementById('c');
c.width = window.innerWidth;
c.height = window.innerHeight;
window.addEventListener("resize", () => {
   c.width = window.innerWidth;
   c.height = window.innerHeight;
   
 })
if (c.getContext) 
{
var ctx = c.getContext("2d");
          
      for (i = 10; i <c.width; i += 20) 
	     {
       ctx.strokeStyle = '#000';
       ctx.lineWidth = 3;
       ctx.beginPath();
		   ctx.moveTo(i, 0);
		   ctx.lineTo(i,c.width);
		   ctx.stroke();
       
		  }
      
 var ctr = c.getContext("2d");
          
      for (i = 15; i <c.width; i += 20) 
	     {
            ctr.strokeStyle = '#f00';
            ctr.lineWidth = 3;
		    ctr.beginPath();
            ctr.moveTo(i, 0);
		    ctr.lineTo(i,c.width);
		    ctr.stroke();
       
		  }
      
          var ctb = c.getContext("2d");
          
          for (i = 1; i <c.width; i += 20) 
             {
                ctb.strokeStyle = '#00f';
                ctb.lineWidth = 3;
                ctb.beginPath();
                ctb.moveTo(i, 0);
                ctb.lineTo(i,c.width);
                ctb.stroke();
           
              }

              var cty = c.getContext("2d");
          
              for (i = 5; i <c.width; i += 20) 
                 {
                    cty.strokeStyle = '#FFFF00';
                    cty.lineWidth = 3;
                    cty.beginPath();
                    cty.moveTo(i, 0);
                    cty.lineTo(i,c.width);
                    cty.stroke();
               
                  }

                  var ctp = c.getContext("2d");
          
                  for (i = 5; i <c.width; i += 20) 
                     {
                        ctp.strokeStyle = '#E040FB';
                        ctp.lineWidth = 3;
                        ctp.beginPath();
                        ctp.moveTo(i, 0);
                        ctp.lineTo(i,c.width);
                        ctp.stroke();
                   
                      }

                      

                      var cto = c.getContext("2d");
          
                      for (i = 5; i <c.width; i += 20) 
                         {
                            cto.strokeStyle = '#E65100';
                            cto.lineWidth = 3;
                            cto.beginPath();
                            cto.moveTo(i, 0);
                            cto.lineTo(i,c.width);
                            cto.stroke();
                       
                          }

                          var ctbr = c.getContext("2d");
          
                          for (i = 5; i <c.width; i += 20) 
                             {
                                ctbr.strokeStyle = '#4E342E';
                                ctbr.lineWidth = 3;
                                ctbr.beginPath();
                                ctbr.moveTo(i, 0);
                                ctbr.lineTo(i,c.width);
                                ctbr.stroke();
                           
                              }
} 
 
 
