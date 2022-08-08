

    $('.share a').mouseenter(function(){
        $(this).children('div').stop().slideDown(200)
    })
   
    $('.share a').mouseleave(function(){
        $(this).children('div').stop().slideUp(200)
    })
    $('.aa').hover(function(){
        $(this).stop().attr('src','../images/icon-share-weibo-active.png')
    },function(){
        $(this).stop().attr('src','../images/icon-share-weibo.png')
    })
    $('.bb').hover(function(){
        $(this).stop().attr('src','../images/icon-share-weixin-active.png')
    },function(){
        $(this).stop().attr('src','../images/icon-share-weixin.png')
    })
    $('.cc').hover(function(){
        $(this).stop().attr('src','../images/icon-share-qzone-active.png')
    },function(){
        $(this).stop().attr('src','../images/icon-share-qzone.png')
    })
    $('.dd').hover(function(){
        $(this).stop().attr('src','../images/icon-share-cut-active.png')
    },function(){
        $(this).stop().attr('src','../images/icon-share-cut.png')
    })

    $('.nav li').mouseenter(function(){
        $('section .menu .ind').stop().slideDown(200)
    })
    $('.nav li').mouseleave(function(){
        $('section .menu .ind').stop().slideUp(200)
    })