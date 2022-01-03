



    ///////////////////////button section start from here


    
    // /////////////get a qoute starts from here

 
    $("#get-qoute").click(function(){
   
      $(".main-off-main").show();
      $(".main-hol-rev").hide();
      $(".main-for-description").hide();
      $(".main-specification").hide();
  
    });
  // /////////////get a qoute ends here


  


// /////////specification starts from here

  $("#specification").click(function(){
   
    $(".main-off-main").hide();
    $(".main-specification").show();
    $(".main-hol-rev").hide();
    $(".main-for-description").hide();
  

  });

// /////////specification ends here


// /////////////description starts from here
  $("#desecription").click(function(){
   
    $(".main-off-main").hide();
    $(".main-specification").hide();
    $(".main-for-description").show();
    $(".main-hol-rev").hide();
    
  

  });
// /////////////description ends here



// //////////review starts from here
  $("#reviews").click(function(){
   
    $(".main-off-main").hide();
    $(".main-specification").hide();
    $(".main-for-description").hide();
    $(".main-hol-rev").show();
    
  

  });

// //////////review ends here

//  /////////////////universal all categories hide starts from here
  $(".main-specification").hide();
  $(".main-for-description").hide();
  $(".main-hol-rev").hide();
//  /////////////////universal all categories hide ends here

 

  ///////////////////////button section ends here here












$('.slider-4').owlCarousel({
  loop:false,
  margin:10,
  nav:false,
  dots:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:2
      }
  }
})






$('.burhan-33').owlCarousel({
  loop:false,
  margin:10,
  nav:false,
  dots:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})





$('.burhan-22').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})



$('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });






    // /////////////////////////////////////rating section starts from here
    jQuery.fn.extend({
        rating: function(options){
          if(typeof(options)=='undefined') options={};
          var ratings=[];
          objs=this;
          if(objs.length){
            for(var i=0;i<objs.length;i++){
              ratings.push(new simpleRating(options,objs[i]));
            }
          }
        },
      });
      
      class simpleRating{
        constructor(options,obj) {
          this.obj=obj;
          this.options=options;
          this.rating=0;
          this.init();
        }
      
        init(){
          var html='<div class="simple-rating star-rating">';
          for(var i=0;i<5;i++){html+='<i class="fa fa-star-o" data-rating="'+(i+1)+'"></i>';}
          html+='</div>';
        
          $(this.obj)
            .attr('type','hidden')
            .after(html);
      
          $(this.obj).next().children().click({classObj:this},function(e){
            e.data.classObj.rate(this);
          });
      
          $(this.obj).next().children().mouseenter({classObj:this},function(e){
            e.data.classObj.setstars($(this).data('rating'));
          });
      
          $(this.obj).next().children().mouseleave({classObj:this},function(e){
            e.data.classObj.setstars(e.data.classObj.rating);
          });
        }
      
        rate(obj){
          var rating=$(obj).data('rating');
          $(obj).parent().prev().val(rating);
          this.rating=rating;
          this.refresh();
        }
      
        refresh(){
          this.setstars(this.rating);
        }
      
        setstars(rating){
          var stars=$(this.obj).next().children();
          for(var i=0;i<5;i++){
            var starObj=$(this.obj).next().children()[i];
            if(i<rating){
              $(starObj).removeClass('fa-star-o');
              $(starObj).addClass('fa-star');
            }else{
              $(starObj).addClass('fa-star-o');
              $(starObj).removeClass('fa-star');
            }
          }
        }
      }




    // /////////////////////////////////////rating section starts from here





