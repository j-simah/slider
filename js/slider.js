function position(){
    var imgs = document.getElementsByClassName(".img-slide");
    var imgSrcs ;

    for (var i = 0; i < imgs.length; i++) {
        console.log(imgs[i].css('display'))
        if ( imgs[i].style.display = "block" ) {
            imgSrcs += $('.img-slide:eq('+i+')').attr('alt');
        }
        i++

    }

    return imgSrcs;
}

$('.prev').click(function(){

    var imgs = document.getElementsByClassName(".img-slide");

    // console.log( imgs );
    imgs.each(function(i)){

        if ( $('.img-slide').attr('alt') == 1 ) {
            $('.sl01').hide();
            $('.sl03').show();
        }
        if ($('.img-slide').attr('alt') == 2) {
            $('.sl02').css('display','none');
            $('.sl01').css('display','block');
        }
        if ($('.img-slide').attr('alt') == 3) {
            $('.sl03').css('display','none');
            $('.sl02').css('display','block');
        }

    });

$('.next').on('click', function(){
    var img = $('.img-slide').attr('alt');

    console.log(img)

    if (img == 1) {
        $('.sl01').css('display','none');
        $('.sl02').css('display','block');
        img =null;
    }
    if (img == 2) {
        $('.sl02').css('display','none');
        $('.sl03').css('display','block');
        img =null;
    }

    if (img == 3) {
        $('.sl03').css('display','none');
        $('.sl01').css('display','block');
        img =null;
    }
});