(function(){
    var $oBgNav = $("#bgnav");
    var $oLi = $("#bgnav ul li");
    var oLiLenght = $oLi.length;

    var $aboutBtn = $("#aboutBtn");
    var $aboutMe = $("#aboutme");
    var $aboutClose = $("#aboutClose");
    var $btnTheme = $("#theme");

    var $nav = $("#nav");

    $(window).resize(function() {
        location.reload();
        if ($(document).width() < 680) {
            $oBgNav.children('ul').css("display","none");
            return;
        }else{

        };
    });

  if ($(document).width() > 680) {

    //背景轮播
    var idx = 0;
    for (var i = 0; i < oLiLenght; i++) {
        $oLi.eq(i).css({
            "background" : 'url(images/bg/'+i+'.png)',
            "backgroundSize" : "cover"
        });
    };
    var timer = setInterval(bgnav,3000);
    function bgnav(){
        $oLi.eq(idx).fadeOut(800);
        idx++;
        if (idx > oLiLenght-1) {
            idx = 0;
        };
        $oLi.eq(idx).fadeIn(800);
    }

     //鼠标移入移出事件
    $nav.on("mousemove",".item",function(){
       $(this).children(".navbtn").stop(true).fadeIn(100);
    })
    $nav.on("mouseout",".item",function(){
       $(this).children(".navbtn").stop(true).fadeOut();
    })
  }


  //鼠标点击事件
  $aboutBtn.click(function(){
      $aboutMe.fadeIn();
  });

  $aboutClose.click(function(){
      $aboutMe.slideUp();
  });




})()


