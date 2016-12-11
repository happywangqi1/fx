function YSMove(obj,json,speed,fn){

   clearInterval(obj.timer);

  obj.timer = setInterval(function(){

   var flag = true;

    for(var p in json){

    var target = json[p];

    var icur;

    if(p=='opacity'){

      icur = Math.round(getStyle(obj,'opacity')*100);

    }

    else{
    icur = parseInt(getStyle(obj,p));

    }



    if(target<icur){

      speed = 0-Math.abs(speed);

    }

    else{

      speed = Math.abs(speed);

    }

    console.log(p+"="+icur);
    console.log(p+"="+target);
    console.log(p+"="+speed);




    if(!(Math.abs(target-icur)<=Math.abs(speed))){

       if(p=='opacity'){

         obj.style.opacity = (icur+speed)/100;

         obj.style.filter = 'alpha(opacity='+(icur+speed)+')';

      }

      else{

        console.log("###"+icur);

        console.log('##'+speed);

       console.log("%%%%"+(icur+speed));

       obj.style[p] = icur+speed+'px';

      }

     flag = false;


    }

    else{

      if(p=='opacity'){

       obj.style.opacity=target/100;

       obj.style.filter ='alpha(opacity='+target+')';

      }

      else{

        obj.style[p]=target+'px';

      }

    }

    }

   if(flag){

    clearInterval(obj.timer);

     if(fn){

       fn();


     }


   }







  },30);

}

function HCMove(obj,json,fn){

     clearInterval(obj.timer);

       obj.timer = setInterval(function(){

       var flag = true;

       for(var p in json){

          var target = json[p];

          var icur;

          if(p=='opacity'){

           icur = Math.round(getStyle(obj,'opacity')*100);

          }
          else{

            icur = parseInt(getStyle(obj,p));

          }
        var speed = (target-icur)/7;

        if(speed>0){

          speed = Math.ceil(speed);

        }
        else{
          speed = Math.floor(speed);

        }

        if(icur!=target){

         if(p=='opacity'){



           obj.style.opacity=(icur+speed)/100;

           obj.style.filter = 'alpha(opacity='+(icur+speed)+')';

         }
         else{

        obj.style[p] = icur+speed+'px';

         }
          flag = false;

        }
    }



       if(flag){

         clearInterval(obj.timer);

         if(fn){

           fn();

         }
       }


     },30);




}

function TXMove(obj,json,fn){

      clearInterval(obj.timer);

     var speeds={};

     for(var p in json){

       speeds[p]=0;
     }


    obj.timer = setInterval(function(){

       var flag = true;


       for(var p in json){

         var icur;

         var target = json[p];

         if(p=='opacity'){

           icur = Math.round(getStyle(obj,'opacity')*100);

         }
         else{

            icur = parseInt(getStyle(obj,p));

         }

         var zlspeed = (target-icur)/7;

          speeds[p] = speeds[p]+zlspeed;

          speeds[p]= 0.75*speeds[p];

        if(!(Math.abs(speeds[p])<=1&&Math.abs(target-icur)<=1)){

             if(p=='opacity'){

               obj.style.opacity=(icur+speeds[p])/100;

               obj.style.filter = 'alpha(opacity='+(icur+speeds[p])+')';
             }
             else{

               obj.style[p] = (icur+speeds[p])+'px';

             }

             flag = false;


        }

        else{

             if(p=='opacity'){

                obj.style.opacity=target/100;

                obj.style.filter = 'alpha(opacity='+target+')';

             }
             else{

               obj.style[p]=target+'px';

             }


        }

    }

    if(flag){

        clearInterval(obj.timer);

        if(fn){

          fn();

        }


       }


    },30);




}




 function getStyle(obj,attr){

     if(obj.currentStyle){

       return obj.currentStyle[attr];

     }
    return getComputedStyle(obj,false)[attr];

 }

   function TimeMove(obj,json,fx,time,fn){

        clearInterval(obj.timer);

        var begin = new Date().getTime();

        var jsonc = {};

        for(var p in json){

            if(p=='opacity'){

            jsonc[p]=Math.round(getStyle(obj,'opacity')*100);

            }
            else{

             jsonc[p] =parseInt(getStyle(obj,p));

            }


        }


       obj.timer = setInterval(function(){

           var now = new Date().getTime();

           var t = now-begin;

           if(t>=time){

            t = time;
            }

          for(var p in json){

           var value = Tween[fx](t,jsonc[p],json[p]-jsonc[p],time);

            if(p=='opacity'){

               obj.style.opacity = value/100;

               obj.style.filter = 'alpha(opacity='+value+')';

            }
            else{

              obj.style[p] = value+'px';

            }


          }


          if(t==time){

            clearInterval(obj.timer);

            if(fn){

               fn();

            }

          }



       },30);





   }



 var Tween = {
  linear: function (t, b, c, d){  //匀速
    return c*t/d + b;
  },
  easeIn: function(t, b, c, d){  //加速曲线
    return c*(t/=d)*t + b;
  },
  easeOut: function(t, b, c, d){  //减速曲线
    return -c *(t/=d)*(t-2) + b;
  },
  easeBoth: function(t, b, c, d){  //加速减速曲线
    if ((t/=d/2) < 1) {
      return c/2*t*t + b;
    }
    return -c/2 * ((--t)*(t-2) - 1) + b;
  },
  easeInStrong: function(t, b, c, d){  //加加速曲线
    return c*(t/=d)*t*t*t + b;
  },
  easeOutStrong: function(t, b, c, d){  //减减速曲线
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
  },
  easeBothStrong: function(t, b, c, d){  //加加速减减速曲线
    if ((t/=d/2) < 1) {
      return c/2*t*t*t*t + b;
    }
    return -c/2 * ((t-=2)*t*t*t - 2) + b;
  },
  elasticIn: function(t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
    if (t === 0) {
      return b;
    }
    if ( (t /= d) == 1 ) {
      return b+c;
    }
    if (!p) {
      p=d*0.3;
    }
    if (!a || a < Math.abs(c)) {
      a = c;
      var s = p/4;
    } else {
      var s = p/(2*Math.PI) * Math.asin (c/a);
    }
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  },
  elasticOut: function(t, b, c, d, a, p){    //正弦增强曲线（弹动渐出）
    if (t === 0) {
      return b;
    }
    if ( (t /= d) == 1 ) {
      return b+c;
    }
    if (!p) {
      p=d*0.3;
    }
    if (!a || a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else {
      var s = p/(2*Math.PI) * Math.asin (c/a);
    }
    return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
  },
  elasticBoth: function(t, b, c, d, a, p){
    if (t === 0) {
      return b;
    }
    if ( (t /= d/2) == 2 ) {
      return b+c;
    }
    if (!p) {
      p = d*(0.3*1.5);
    }
    if ( !a || a < Math.abs(c) ) {
      a = c;
      var s = p/4;
    }
    else {
      var s = p/(2*Math.PI) * Math.asin (c/a);
    }
    if (t < 1) {
      return - 0.5*(a*Math.pow(2,10*(t-=1)) *
          Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    }
    return a*Math.pow(2,-10*(t-=1)) *
        Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
  },
  backIn: function(t, b, c, d, s){     //回退加速（回退渐入）
    if (typeof s == 'undefined') {
       s = 1.70158;
    }
    return c*(t/=d)*t*((s+1)*t - s) + b;
  },
  backOut: function(t, b, c, d, s){
    if (typeof s == 'undefined') {
      s = 3.70158;  //回缩的距离
    }
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
  },
  backBoth: function(t, b, c, d, s){
    if (typeof s == 'undefined') {
      s = 1.70158;
    }
    if ((t /= d/2 ) < 1) {
      return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    }
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
  },
  bounceIn: function(t, b, c, d){    //弹球减振（弹球渐出）
    return c - Tween['bounceOut'](d-t, 0, c, d) + b;
  },
  bounceOut: function(t, b, c, d){
    if ((t/=d) < (1/2.75)) {
      return c*(7.5625*t*t) + b;
    } else if (t < (2/2.75)) {
      return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
    } else if (t < (2.5/2.75)) {
      return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
    }
    return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
  },
  bounceBoth: function(t, b, c, d){
    if (t < d/2) {
      return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
    }
    return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
  }
};
