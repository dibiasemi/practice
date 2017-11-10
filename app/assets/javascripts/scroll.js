var currentpos = 0,
        alt = 1,
        curpos1 = 0,
        curpos2 = -1

    // function initialize() {
    //     startit()
    // }

    function scrollwindow() {
        if (document.all)
            temp = document.body.scrollTop
        else
            temp = window.pageYOffset
        if (alt == 0)
            alt = 1
        else
            alt = 0
        if (alt == 0)
            curpos1 = temp
        else
            curpos2 = temp
        if (curpos1 != curpos2) {
            if (document.all)
                currentpos = document.body.scrollTop + 1
            else
                currentpos = window.pageYOffset + 1
            window.scroll(0, currentpos)
        } else {
            currentpos = 0
            window.scroll(0, currentpos)
        }
    }

    var speed = 100;
    $(document).ready(function() {
          var karl = setInterval("scrollwindow()", speed)
        $('.slow').on('click', function(){

          console.log(speed)
          speed = speed + 10
          console.log(speed)
          clearInterval(karl)
          karl = setInterval("scrollwindow()", speed)
        })

          $('.fast').on('click', function(){
          console.log(speed)
          speed = speed - 10
          console.log(speed)
          clearInterval(karl)
          karl = setInterval("scrollwindow()", speed)
        })

        //   $('.pause').on('click', function(){
        //   console.log(speed)
        //   speed = 5000
        //   console.log(speed)
        //   clearInterval(karl)
        //   karl = setInterval("scrollwindow()", speed)
        // })
    });

    // function startit(speed = -10) {
    //   setInterval("scrollwindow()", speed)
    // }

    // window.onload = initialize
