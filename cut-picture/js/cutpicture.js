window.onload=function(){
    $("#cyanmain").draggable({containment: 'parent'});
    var rightdiv=document.getElementById("right");
    var updiv=document.getElementById("up");
    var leftdiv=document.getElementById("left");
    var fotdiv=document.getElementById("fot");
    var upleftdiv=document.getElementById("up-left");
    var uprightdiv=document.getElementById("up-right");
    var fotleftdiv=document.getElementById("fot-left");
    var fotrightdiv=document.getElementById("fot-right");
    var maindiv=document.getElementById("cyanmain");
    var okbtn=false;
    var conbtn="";
     rightdiv.onmousedown=function(e){
         e.stopPropagation();
        okbtn=true;
         conbtn="right";
    };
    updiv.onmousedown=function(e){
        e.stopPropagation();
        okbtn=true;
        conbtn="top";
    };
    leftdiv.onmousedown=function(e){
        e.stopPropagation();
        okbtn=true;
        conbtn="left";
    };
    fotdiv.onmousedown=function(e){
        e.stopPropagation();
        okbtn=true;
        conbtn="fot";
    };
    upleftdiv.onmousedown=function(e){
        e.stopPropagation();
        okbtn=true;
        conbtn="up-left";
    };
    uprightdiv.onmousedown=function(e){
        e.stopPropagation();
        okbtn=true;
        conbtn="up-right";
    };
    fotleftdiv.onmousedown=function(e){
        e.stopPropagation();
        okbtn=true;
        conbtn="fot-left";
    };
    fotrightdiv.onmousedown=function(e){
        e.stopPropagation();
        okbtn=true;
        conbtn="fot-right";
    };
    window.onmouseup=function(){
        okbtn=false;
    };
    window.onmousemove=function(e){
        if(okbtn==true){
           switch (conbtn){
               case "right":rightmove(e);break;
               case "up":upmove(e);break;
               case "left":leftmove(e);break;
               case "fot":fotmove(e);break;
               case "up-right":upmove(e);rightmove(e);break;
               case "up-left":upmove(e);leftmove(e);break;
               case "fot-left":fotmove(e);leftmove(e);break;
               case "fot-right":fotmove(e);rightmove(e);break;
           }
        }
        lightpicture();
        setpreview();
    };
    function rightmove(e){
        var x= e.clientX;
        var addwith="";
        var widthbefor=maindiv.clientWidth-2;
        addwith=x-getposition(maindiv).left-widthbefor;
        maindiv.style.width=addwith+widthbefor+"px";
    }
    function upmove(e){
        var y= e.clientY;
        var addheight="";
        var heightbefor=maindiv.offsetHeight-2;
        addheight=getposition(maindiv).top-y;
        maindiv.style.height=addheight+heightbefor+"px";
        maindiv.style.top=maindiv.offsetTop-addheight+"px";
    }

    function leftmove(e){
        var x= e.clientX;
        var addwidthl="";
        var widthbeforl=maindiv.offsetWidth-2;
        addwidthl=getposition(maindiv).left-x;
        maindiv.style.width=addwidthl+widthbeforl+"px";
        maindiv.style.left=maindiv.offsetLeft-addwidthl+"px";
    }

    function fotmove(e){
        var y= e.clientY;
        var addheight="";
        var heightbefor=maindiv.clientHeight-2;
        addheight=y-getposition(maindiv).top-heightbefor;
        maindiv.style.height=addheight+heightbefor+"px";
    }

    function lightpicture(){
        var top=maindiv.offsetTop;
        var buttom=maindiv.offsetTop+maindiv.offsetHeight;
        var left=maindiv.offsetLeft;
        var right=maindiv.offsetWidth+maindiv.offsetLeft;
        var img2=document.getElementById("cyanimg2");
        img2.style.clip="rect("+top+"px,"+right+"px,"+buttom+"px,"+left+"px)";
    }

    function setpreview(){
        var top=maindiv.offsetTop;
        var buttom=maindiv.offsetTop+maindiv.offsetHeight;
        var left=maindiv.offsetLeft;
        var right=maindiv.offsetWidth+maindiv.offsetLeft;
        var img3=document.getElementById("cyanimg3");
        img3.style.top=-top+"px";
        img3.style.left=-left+"px";
        img3.style.clip="rect("+top+"px,"+right+"px,"+buttom+"px,"+left+"px)";
    }
};




function getposition(node){
    var left=node.offsetLeft;
    var top=node.offsetTop;
    var parent=node.offsetParent;
    while(parent!=null){
        left+=parent.offsetLeft;
        top+=parent.offsetTop;
        parent=parent.offsetParent;
    }
    return{"left":left ,"top":top};
}
