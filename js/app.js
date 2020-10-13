$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    infinite:true,
    speed:300,
    slidesToShow:6,
    slidesToScroll:2,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive:[
    {
        breakpoint:1040,
        settings:
        { 
          slidesToShow:4,
        slidesToScroll:2,
        arrow:true,
        centerMode:true,
        centerPadding:'40px',
        slideShows:3
      }
      },
      {
        breakpoint:760,
        settings:
        {
          arrow:false,
        centerMode:true,
        centerPadding:'40px',
        slidesToShow:3,
        slidesToScroll:4,
      }
      },
      {
        breakpoint:480,
        settings:
        {
        arrow:false,
        centerMode:true,
        centerPadding:'40px',
        slidesToShow:2,
    slidesToScroll:8,
      }
      }
    ]
  });
});


function openNewWindow(e, url){
    e.preventDefault();
    window.open(url,"_blank", "width=450px,height=650")
}


// $('.autoplay').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });



