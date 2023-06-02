$(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 1,
        dots: false,
        arrows: false, 
    })
});
$(function () {
    $('.slider-sale').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 4,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    centerPadding: '100px',
                    autoplaySpeed: 3000,
                    speed: 2000,
                    dots: false,
                }
            },{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerPadding: 0,
                }
            }
        ]
    })
});
const a = document.querySelector.bind(document)
const aa = document.querySelectorAll.bind(document)

const butEls = aa('.local-tab');
const dataEls = aa('.local-info');

butEls.forEach((butEl, index) => {
    const data = dataEls[index]
    butEl.onclick = function () {
        a(".local-tab.active").classList.remove('active');
        this.classList.add('active')
        a(".local-info.active").classList.remove('active')
        data.classList.add('active')
    }
})