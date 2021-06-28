import $ from "jquery"; 
import 'slick-carousel';

let module = (() => {
    function showMenu(){
        let btn = document.querySelector('.mobile-menu-btn');
        let nav = document.querySelector('.header__nav');
        let menuLinks = document.querySelectorAll('.header__menu-link');
        btn.addEventListener('click', function(e){
            btn.classList.toggle('mobile-menu-btn--close-js');
            nav.classList.toggle('header__nav--active-js');
            document.body.classList.toggle('body--hidden');
        });
        nav.addEventListener('click', function (e) {
            if (e.target.classList.contains('header__menu-link')) {
                btn.classList.remove('mobile-menu-btn--close-js');
                nav.classList.remove('header__nav--active-js');
                document.body.classList.remove('body--hidden');
                menuLinks.forEach((el)=>{
                    if (el.classList.contains('header__menu-link--active')) {
                        el.classList.remove('header__menu-link--active')
                    }
                });
                e.target.classList.add('header__menu-link--active');
            }             
        })         
    }
    showMenu();

    function showTopModal(){
        let modal = document.querySelector('.top__modal');
        let btnModal = document.querySelector('.top__btn');
        btnModal.addEventListener('click', function(e){
            modal.classList.add('top__modal--active');
        });
        modal.addEventListener('click', function (e) {
            e.target.classList.remove('top__modal--active');
        })
    }
    showTopModal();

    function showModalCardProducts(){
        let sectionProducts = document.querySelector('.products');
        let modal = document.querySelector('.products__card-modal');
        let content = '';
        let modalContent = document.querySelector('.products__card-modal-content');        
        sectionProducts.addEventListener('click', function(e){
            if (e.target.classList.contains('products__slide-card-btn') ||
                e.target.classList.contains('products__card-btn-txt')) {
                content = document.querySelector(`div[data-mod=${e.target.dataset.mod}`);
                modalContent.innerHTML = content.innerHTML;
                modal.classList.add('products__card-modal--active');                              
            }                        
        });
        document.body.addEventListener('click', function(e) {
            if (e.target.classList.contains('products__card-close-img')) {                
                modal.classList.remove('products__card-modal--active');                 
            }                          
        });

        let btnMobArr = document.querySelectorAll('.products__slide-btn-mob');
        btnMobArr.forEach((el, i)=>{
            el.addEventListener('click', function(e){
                content = document.querySelector(`div[data-mod=${this.dataset.mod}`);
                modalContent.innerHTML = content.innerHTML;
                modal.classList.add('products__card-modal--active');                 
            })
        })
    }
    showModalCardProducts();

    $(function() {
        $('.products__slider').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,                      
            responsive: [                
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3                       
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2                         
                    }
                },
                {
                    breakpoint: 380,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 3,
                        centerMode: true,
                        infinite: true,                         
                        prevArrow: $('.slider-prev--js'),
                        nextArrow: $('.slider-next--js')                         
                    }
                }                 
            ]
        });
    });

    let qualitySlider = function(){
        let dots = document.querySelectorAll('.quality__slider-dot');
        let slides = document.querySelectorAll('.quality__slider-slide');  
        let pointer = document.querySelector('.quality__pointer-img');
        let dotActive = '';
        let targetSlide = '';
        
        dots.forEach((el,i)=>{
            el.addEventListener('click', function(e){
                targetSlide = document.querySelector(`div[id=${this.dataset.quality}`);                
                if (targetSlide) {
                    slides.forEach((elem, i) => {
                        if (elem.classList.contains('quality__slider-slide--active')) {
                            elem.classList.remove('quality__slider-slide--active');
                        }
                    });
                    dots.forEach((item, i) => {
                        if (item.classList.contains('quality__slider-dot--active')) {
                            item.classList.remove('quality__slider-dot--active');
                        }
                    });
                    targetSlide.classList.add('quality__slider-slide--active');
                    this.classList.add('quality__slider-dot--active');                     
                    pointer.style.top = this.offsetTop + 'px';
                }                 
            });
        });

        window.addEventListener('resize', function () {
            dotActive = document.querySelector('.quality__slider-dot--active');
            pointer.style.top = dotActive.offsetTop + 'px';             
        });       
    };
    qualitySlider();     
         
})();

export default module;