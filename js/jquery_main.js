$(document).ready(function () {
  //優惠倒數
  var index = 0
  var roll = 0

  arrowshow()
  // 按下往右鈕執行fnNext函式
  $('#flNext').on('click', fnNext)
  // 按下往左鈕執行fnPrev函式
  $('#flPrev').on('click', fnPrev)

  function fnNext() {
    index++
    roll -= 1190
    $('.flash-item-box').animate(
      {
        left: roll,
      },
      3000,
      'swing',
    )

    arrowshow()
    console.log(index)
  }

  function fnPrev() {
    index--
    roll += 1190
    $('.flash-item-box').animate(
      {
        left: roll,
      },
      3000,
      'swing',
    )
    arrowshow()
    console.log(index)
  }

  //控制按鈕出現消失
  function arrowshow() {
    if (index <= 0) {
      $('#flPrev').fadeOut(500)
    } else if (index >= 2) {
      $('#flNext').fadeOut(500)
    } else {
      $('#flPrev').show()
      $('#flNext').show()
    }
  }

  //按鈕懸停效果
  $('#flPrev, #flNext').hover(
    function () {
      $(this).addClass('arrow-effect')
    },
    function () {
      $(this).removeClass('arrow-effect')
    },
  )

  //物件懸停效果
  $('.flash-item').hover(
    function () {
      $(this).css('marginTop', '-5px')
    },
    function () {
      $(this).css('marginTop', '0px')
    },
  )

  //出入區塊改變標題
  $('.time-limit').hover(
    function () {
      $(this).find('.area-title').css('color', 'white')
      $(this).find('.round-bg div').css('background-color', 'crimson')
    },
    function () {
      $(this).find('.area-title').css('color', 'crimson')
      $(this).find('.round-bg div').css('background-color', 'white')
    },
  )

  //今日限時
  var i = 0
  var toroll = 0
  var tofinal = Math.floor(11 / 3)

  toArrowshow()

  $('#toNext').on('click', toNext)
  $('#toPrev').on('click', toPrev)

  function toNext() {
    i++
    toroll -= 660
    $('.today-box').animate(
      {
        left: toroll,
      },
      3000,
      'swing',
    )

    toArrowshow()
    console.log(i)
  }

  function toPrev() {
    i--
    toroll += 660
    $('.today-box').animate(
      {
        left: toroll,
      },
      3000,
      'swing',
    )

    toArrowshow()
    console.log(i)
  }

  function toArrowshow() {
    if (i <= 0) {
      $('#toPrev').fadeOut()
    } else if (i >= tofinal) {
      $('#toNext').fadeOut()
    } else {
      $('#toPrev').fadeIn()
      $('#toNext').fadeIn()
    }
  }

  //出入區塊改變標題
  $('.today-limit').hover(
    function () {
      $(this).find('.area-title').css('color', 'white')
      $(this).find('.round-bg div').css('background-color', 'crimson')
    },
    function () {
      $(this).find('.area-title').css('color', 'crimson')
      $(this).find('.round-bg div').css('background-color', 'white')
    },
  )

  //改變按鈕顏色
  $('#toPrev, #toNext').hover(
    function () {
      $(this).css('background-color', 'gray')
    },
    function () {
      $(this).css('background-color', 'lightgray')
    },
  )

  //熱門商品

  var j = 0
  var hotroll = 0
  var hotFinal = Math.floor(6 / 2)

  $('#hotPrev').on('click', hotPrev)
  $('#hotNext').on('click', hotNext)

  function hotNext() {
    j++
    hotroll -= 424
    $('.hot-list').animate(
      {
        left: hotroll,
      },
      2000,
      'swing',
    )

    hotshow()
  }

  function hotPrev() {
    j--
    hotroll += 424
    $('.hot-list').animate(
      {
        left: hotroll,
      },
      2000,
      'swing',
    )

    hotshow()
  }

  hotshow()
  function hotshow() {
    if (j <= 0) {
      $('#hotPrev').hide()
    } else if (j >= hotFinal - 1) {
      $('#hotNext').hide()
    } else {
      $('#hotPrev').show()
      $('#hotNext').show()
    }
  }

  //出入區塊改變標題
  $('.hot-sale').hover(
    function () {
      $(this).find('.area-title').css('color', 'white')
      $(this).find('.round-bg div').css('background-color', 'crimson')
    },
    function () {
      $(this).find('.area-title').css('color', 'crimson')
      $(this).find('.round-bg div').css('background-color', 'white')
    },
  )

  //改變按鈕顏色
  $('#hotPrev, #hotNext').hover(
    function () {
      $(this).css('background-color', 'gray')
    },
    function () {
      $(this).css('background-color', 'lightgray')
    },
  )

  //////////商城瘋購//////////

  $('.mustbuy-item').mouseenter(function () {
    $(this)
      .stop()
      .animate(
        {
          height: 300,
        },
        800,
        'swing',
      )
      .find('.container-small')
      .stop()
      .slideUp(1)
      .siblings()
      .stop()
      .slideDown(200)

    $(this)
      .siblings()
      .stop()
      .animate(
        {
          height: 62,
        },
        800,
        'swing',
      )
      .find('.container-small')
      .stop()
      .slideDown(200)
      .siblings()
      .stop()
      .slideUp(1)
  })

  ///////商品分類懸停///////

  $('.area-cate p').hover(
    function () {},
    function () {},
  )

  ///////電梯導航///////
  $(function () {
    var tooltop = $('.mustbuy-area').offset().top
    var toolbtm = $('.footer').offset().top
    var flag = true

    screenmove()

    function screenmove() {
      // if($(document).scrollTop()>=tooltop) {
      //     $(".toolbox").fadeIn()
      // } else {
      //     $(".toolbox").fadeOut()
      // }

      if (
        $(document).scrollTop() >= tooltop - 100 &&
        $(document).scrollTop() <= toolbtm + 500
      ) {
        $('.toolbox').fadeIn(500)
      } else {
        $('.toolbox').fadeOut(500)
      }
    }

    $(window).scroll(function () {
      screenmove()

      if (flag) {
        $('.index').each(function (i, element) {
          // console.log(i)
          // console.log(element)
          if ($(document).scrollTop() >= $(element).offset().top - 200) {
            $('.box')
              .eq(i)
              .addClass('current-bg')
              .siblings('.box')
              .removeClass('current-bg')
          }
        })
      }
    })

    $('.box').click(function () {
      // console.log($(this).index())
      flag = false

      var move = $('.index').eq($(this).index()).offset().top

      $('body,html')
        .stop()
        .animate(
          {
            scrollTop: move - 50,
          },
          1000,
          'linear',
          function () {
            flag = true
          },
        )

      $(this).addClass('current-bg').siblings().removeClass('current-bg')
    })

    $('.circle').click(function () {
      $('body,html').stop().animate(
        {
          scrollTop: 0,
        },
        1000,
        'linear',
      )
    })
  })
})
