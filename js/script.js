window.onscroll = function(){

    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");
    header_img = document.getElementById("header_img");

    if (scroll > 20){
        header.classList.add('nav_mod');
        header_img.classList.add('nav_img_mod');
    }else if(scroll < 20){
        header.classList.remove('nav_mod');
        header_img.classList.remove('nav_img_mod');
    }

}