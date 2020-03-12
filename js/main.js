$(function(){
    // headerの高さ分の調節
    const headerHeight = $('#header').height();
    $('#MV').css('padding-top', headerHeight + 'px');

    // formへ飛ぶheader__contactボタン
    $('a[href="#form"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerHeight;
        console.log(position);
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });

    // topボタン
    $('a[href="#"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });

    $('.qa__q').on('click', function () {
        /*クリックでコンテンツを開閉*/
        $(this).next().slideToggle(200);
        /*矢印の向きを変更*/
        $(this).toggleClass('open');
    });
});
