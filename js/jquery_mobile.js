$(document).ready(function(){
    //漢堡切換選單
    $(".fas").click(function(){
        $(".toggle-list").fadeToggle(400)
    })

    //漢堡選單分類項目
    $(".column-cate").click(function(){
        var i=$(this).index();
        $(".cate").eq(i).show().siblings().hide()
        console.log(i);

        $(".column-list").eq(i).animate({
            width:105
        },100,function(){
            $(this).siblings().animate({
                width:86
            },100)
        })
    })


})