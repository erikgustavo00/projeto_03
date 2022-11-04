$(function(){
     var amt;
    var curIndex = 0;
    initSlider()
    autoplay()
    
    function initSlider(){
        amt = $('.sobre-equipe-wraper').length;
        var containerSize = 100 * amt ;
        var sizeBoxSingle = 100 / amt;
        $("sobre-equipe-wraper").css('width',sizeBoxSingle+'%')
        $('.scroll-wraper').css('width',containerSize+'%'); 
        
        
        for( var i = 0; i < amt; i++){    
            if(i == 0){
            $('.slider-bullets').append('<button class="btn btn-acionado"></button>')
            }else
            $('.slider-bullets').append('<button class="btn "></button>')
        }
    }

    function autoplay(){
        setInterval(function(){
        curIndex++;
        if(curIndex == amt)
            curIndex = 0;
            goToSlider(curIndex);
    },5000);
    }

    function goToSlider(curIndex){
       
    var offSetX = $('.sobre-equipe-wraper').eq( curIndex ).offset().left - $('.scroll-wraper').offset().left;
    $('.slider-bullets button').removeClass('btn-acionado');
    $('.slider-bullets button').eq(curIndex).addClass('btn-acionado');
    $('.scroll-equipe').stop().animate({'scrollLeft':offSetX+'px'});
    
    }

    $(window).resize(function(){
    $('.scroll-equipe').stop().animate({'scrollLeft':0});    
    })

    
       
})