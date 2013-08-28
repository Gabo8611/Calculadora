$(function(){
	$("#txt_pantalla").val("");
	var a,b=0,c,oper=false;
	var mrc=0, madd, msus, rmrc=false, aux; 
	var aux2, aux3;
	
	$(".btnCalc").on("vclick",function(event){
		val = $(this).attr("id");
		
		if (val=="mrc"&&rmrc==false){$("#txt_pantalla").val(mrc);rmrc=true; a = mrc;}
		else if(val=="mrc"&&rmrc==true){$("#txt_pantalla").val(mrc);rmrc=true;mrc=0;a=null;};
		
		if (typeof a == 'undefined' || a == null){
			
			aux = $("#txt_pantalla").val();
			aux3=aux;
			if (aux3.indexOf(".")>0){aux3=parseFloat(aux3);}
			else{aux3=parseInt(aux3);}
		switch(val)
		{	
			case "raiz":
						a=0;
						oper=true;
						c="raiz";
						break;
			
			case "0":
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
						if(oper==true){$("#txt_pantalla").val("");}
						$("#txt_pantalla").val($("#txt_pantalla").val()+val);
						oper=false;
						break;
			
			case "punto":
						aux2=$("#txt_pantalla").val();
						if(aux2.indexOf(".")<=0){
							
							if($("#txt_pantalla").val()=='')$("#txt_pantalla").val("0");
							$("#txt_pantalla").val($("#txt_pantalla").val()+".");
							oper=false;
						}
						break;
			case "signo":
						if($("#txt_pantalla").val()=='')aux3=0;
						$("#txt_pantalla").val(aux3*-1);
						oper=false;
						break;
			
			case "ac":
						$("#txt_pantalla").val("");
						a=null;
						oper=false;
						break;
			case "off":
						window.close();
						break;
			case "add":
						a = aux3;
						oper=true;
						c="add";
						break;
			case "sus":
						a = aux3;
						oper=true;
						c="sus";
						break;
			case "mult":
						if($("#txt_pantalla").val()=='')aux3=0;
						a = aux3;
						oper=true;
						c="mult";
						break;
			case "div":
						a = aux3;
						oper=true;
						c="div";
						break;
			case "mod":
						a = aux3;
						oper=true;
						c="mod";
						break;
						
			case "madd":
						a = aux3;
						oper=true;
						c="madd";
						break;
			
			case "msus":
						a = aux3;
						oper=true;
						c="msus";
						break;
			
			default:
						//Nada;
						break;
			}			
		  }else{
		  	switch(val)
			{
			
			case "add":
			case "sus":
			case "div":
			case "mult":
			case "madd":
			case "msus":
						if(oper==true){c=val;break;}
						else{operaciones(c);break;}
				
			case "0":
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
						if(oper==true){$("#txt_pantalla").val("");}
						$("#txt_pantalla").val($("#txt_pantalla").val()+val);
						oper=false;
						break;
						
			case "punto":
						aux2=$("#txt_pantalla").val();
						if(aux2.indexOf(".")<=0){
							
							if($("#txt_pantalla").val()=='')$("#txt_pantalla").val("0");
							$("#txt_pantalla").val($("#txt_pantalla").val()+".");
							oper=false;
						}
						break;
						
			case "ac":
						$("#txt_pantalla").val("");
						rmrc=false;
						oper=false;
						a=null;
						break;
			case "off":
						window.close();
						break;
			
			case "result":
						operaciones(c);
						c = null;
						break;
			}
		  }
		  
		
		function operaciones(type){
			var b = $("#txt_pantalla").val();
			if (b.indexOf(".")>0){b=parseFloat(b)}
			else{b=parseInt(b)}
			
			
			if(type=="raiz"){r=Math.sqrt(b);}
			if(type=="add"){r=a+b};
			if(type=="sus"){r=a-b;}
			if(type=="mult"){r=a*b;}
			if(type=="div"){r=a/b;}
			if(type=="mod"){r=(a/100)*b;}
			if(type=="madd"){r=a+b;mrc=r;}
			if(type=="msus"){r=a-b;mrc=r;}
			
			$("#txt_pantalla").val(r);
			a=r
			oper=true;

		}
		
	});
})
