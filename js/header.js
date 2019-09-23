$(document).ready(function() {
    $('button.hamburger').click(function(e){
        e.preventDefault;
        $(this).toggleClass('menu-btn-active')
        $('div.navbar').toggleClass('menu-btn-active')
    })
})