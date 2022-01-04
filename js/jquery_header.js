$(document).ready(function () {
  var index = 0
  var timer = null

  function changeImg(i) {
    $('.slider img').eq(i).fadeIn().siblings().fadeOut()
    $('.slider-points div')
  }

  function autoplay() {
    timer = setInterval(() => {
      index++
      if (index === 5) {
        index = 0
      }
      changeImg(index)
    }, 4000)
  }

  autoplay()

  // $('#sright').click(() => {
  //   clearInterval(timer)
  //   index++
  //   if (index === 5) {
  //     index = 0
  //   }
  //   changeImg(index)
  //   autoplay()
  //   console.log(index)
  // })

  // $('#sleft').click(() => {
  //   clearInterval(timer)
  //   index--
  //   if (index === -1) {
  //     index = 4
  //   }
  //   console.log(index)

  //   changeImg(index)
  //   autoplay()
  // })

  // $('.slider-left, .slider-right')
  //   .mouseenter(() => {
  //     clearInterval(timer)
  //     console.log('!')
  //   })
  //   .mouseleave(() => {
  //     autoplay()
  //     console.log('@')
  //   })

  //panel圖標懸停更換
  $('.panel-icon1').hover(
    function () {
      $(this).attr('src', 'image/upper/panel-g-01.svg')
    },
    function () {
      $(this).attr('src', 'image/upper/panel-w-01.svg')
    },
  )

  $('.panel-icon2').hover(
    function () {
      $(this).attr('src', 'image/upper/panel-g-02.svg')
    },
    function () {
      $(this).attr('src', 'image/upper/panel-w-02.svg')
    },
  )

  $('.panel-icon3').hover(
    function () {
      $(this).attr('src', 'image/upper/panel-g-03.svg')
    },
    function () {
      $(this).attr('src', 'image/upper/panel-w-03.svg')
    },
  )

  //懸停子選單的分類時動畫
  $('.category-group').mouseenter(function () {
    let index = $(this).index()
    // console.log(index);
    $(this)
      .parents('.category')
      .siblings('.deco')
      .children('img')
      .eq(index)
      .stop()
      .fadeIn(500)
      .siblings()
      .stop()
      .fadeOut(500)
  })

  $('.category-group').mouseleave(function () {
    let index = $(this).index()
    $(this)
      .parents('.category')
      .siblings('.deco')
      .children('img')
      .eq(index)
      .fadeOut(1200)
  })

  //品牌懸停展示
  $('.brand img').hover(
    function () {
      $(this).siblings('img').stop().fadeTo(200, 0.1)
      $(this).addClass('bs')
    },
    function () {
      $(this).siblings('img').stop().fadeTo(500, 1)
      $(this).removeClass('bs')
    },
  )

  //nav下拉選單

  $('.nav-item1, .dropdown').on({
    mouseenter: function () {
      var index = $(this).index()
      $('.dropdown').eq(index).stop().fadeIn(200).siblings().stop().fadeOut(100)
    },

    mouseleave: function () {
      var index = $(this).index()
      $('.dropdown').eq(index).stop().fadeOut(100)
    },
  })

  $('.nav-item2, .dropdown').on({
    mouseenter: function () {
      var index = $(this).index()
      $('.dropdown').eq(index).stop().fadeIn(200).siblings().stop().fadeOut(100)
    },

    mouseleave: function () {
      var index = $(this).index()
      $('.dropdown').eq(index).stop().fadeOut(100)
    },
  })

  // $(".nav-item1").hover(function(){
  //     $(this).addClass("text-deco1")
  // },function(){
  //     $(this).removeClass("text-deco1")
  // })

  // $(".nav-item2").hover(function(){
  //     $(this).addClass("text-deco2")
  // },function(){
  //     $(this).removeClass("text-deco2")
  // })
})
