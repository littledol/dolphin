
var pic = document.getElementById('box')
var mouse = document.getElementById('mouse')
var rightbtn = document.getElementById('right')
var leftbtn = document.getElementById('left')
var n = 0;
var timer;
function run(){

    timer=setInterval(function(){
    n++;
    if(n==2){
        n=0
    };
    pic.style.transform='translateX('+-n*500+'px)';
        },2000)
    }

      run()
    
        rightbtn.onclick=function(){ 
            n++;
            if(n==2){
                n=0
            }
            pic.style.transform='translateX('+-n*500+'px)';
        }    
        leftbtn.onclick=function(){
            n--;
            if(n==-1){
                n=1
            }
            pic.style.transform='translateX('+-n*500+'px)'
}



       var leftbtnpy = document.getElementById('leftpy')
       var rightbtnpy = document.getElementById('rightpy')
       var picpy = document.getElementById('boxpy')
       var piclist = document.getElementById('boxpy').children
        var num = 0;
 
        leftbtnpy.onclick=function(){
            num--;
            if(num==-1){
                num=5
                // leftbtnpy.style.background='red';
            }
            picpy.style.transform='translateX('+-num*340+'px)'
        }


        rightbtnpy.onclick=function(){
           
                num++;
            if(num==6){
                num=0             
                // rightbtnpy.style.background='red';
            }

            picpy.style.transform='translateX('+-num*340+'px)';
           
            
        }    

        // var piclink = document.getElementById("piclink")
        // var linkblock = document.getElementById("link")

        // piclink.onmouseenter=function(){
        //     linkblock.style.display="inline-block"
        // }
        // piclink.onmouseleave=function(){
        //     linkblock.style.display="none"
        // }
        // console.log('aa')
        $('.down i').mouseenter(function(){
            $(this).children('div').slideDown(200)
        })
        $('.down i').mouseleave(function(){
            $(this).children('div').slideUp(200)
        })
        $('.aa').hover(function(){
            $(this).attr('src','../images/icon-share-weibo-active.png')
        },function(){
            $(this).attr('src','../images/icon-share-weibo.png')
        })
        $('.bb').hover(function(){
            $(this).attr('src','../images/icon-share-weixin-active.png')
        },function(){
            $(this).attr('src','../images/icon-share-weixin.png')
        })
        $('.cc').hover(function(){
            $(this).attr('src','../images/icon-share-qzone-active.png')
        },function(){
            $(this).attr('src','../images/icon-share-qzone.png')
        })
        $('.dd').hover(function(){
            $(this).attr('src','../images/icon-share-cut-active.png')
        },function(){
            $(this).attr('src','../images/icon-share-cut.png')
        })
