
var pic = document.getElementById('box')
// var list = document.getElementById('list').children
var mouse = document.getElementById('mouse')
var rightbtn = document.getElementById('right')
var leftbtn = document.getElementById('left')
var text = document.getElementById('picindex')
var n = 0;
var timer;
//用一个函数封装定时器
function run(){

    timer=setInterval(function(){
    n++;
    text.innerHTML++;
    if(text.innerHTML==8){
        text.innerHTML=1
    }
    if(n==7){
        n=0
    };
    //图片移动
    pic.style.transform='translateX('+-n*867+'px)';
    //清除样式即是li的类名(类名也是属性或样式)  移动原小点
       
        //增加样式
        },2000)
    }

      run()
       

        //鼠标移入停止运行
        mouse.onmouseenter=function(){
            //清除定时器
            clearInterval(timer)
        }
        //鼠标离开继续运行
        mouse.onmouseleave=function(){
            run()
        }

        //点击右键
        rightbtn.onclick=function(){
            //图片移动
            n++;
            if(n==7){
                n=0
            }
            pic.style.transform='translateX('+-n*867+'px)';
            text.innerHTML++;
            if(text.innerHTML==8){
                text.innerHTML=1
            }
            
           //圆点移动
           //
        //    for(t=0;t<list.length;t++){
        //     list[t].removeAttribute('class')
        //    }
        //    list[n].setAttribute('class','current')
       
        }

        //点击左键
        leftbtn.onclick=function(){
            n--;
            if(n==-1){
                n=6
            }
            pic.style.transform='translateX('+-n*867+'px)'
            text.innerHTML--;
            if(text.innerHTML==0){
                text.innerHTML=7
            }
     
    
        }

        $('.navlist li').mouseenter(function(){
            $(this).children('.zd').stop().slideDown()
        })
        $('.navlist>li').mouseleave(function(){
            $(this).children('.zd').stop().slideUp()
        })


        // var text = document.getElementsByTagName('li')
        // var block = document.getElementsByTagName('.neirong div')
        // for(var i = 0;i<text.length;i++){
        //     //动态增加属性
        //     text[i].setAttribute('index',i)
        //     text[i].onclick=function(){
        //     //获取当前点击的下标
        //     console.log('aa')
        //     var c=this.getAttribute('index')        
        //     //     
        //     //遍历清除之前的样式    
        //     for(t=0;t<text.length;t++){    
        //     text[t].removeAttribute('class','current')
        //     block[t].removeAttribute('class','current')
        //     }
        //     //点亮当前点击的样式
        //     this.setAttribute('class','current')
        //     block[c].setAttribute('class','current')
        //     //没有display:block会被隐藏
        //     // block[c].setAttribute('background','pink')
        //     }
        // }
        
          
        // $(this).addClass('current');
        // $(this).siblings().removeClass('current')
   $('.xxk li').click(function(){
        $(this).addClass('current');
        $(this).siblings().removeClass('current')
        var t=$(this).index()
        t++;
        console.log(t)
        $('.neirong').children(t).addClass('current')
        $('.neirong').children(t).siblings().removeClass('current')
   })



