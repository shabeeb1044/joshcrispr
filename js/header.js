; (function ($) {
    'use strict'
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    }; // is Mobile

    var responsiveMenu = function () {
        var menuType = 'desktop';

        $(window).on('load resize', function () {
            var currMenuType = 'desktop';

            if (matchMedia('only screen and (max-width: 991px)').matches) {
                currMenuType = 'mobile';
            }

            if (currMenuType !== menuType) {
                menuType = currMenuType;

                if (currMenuType === 'mobile') {
                    var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
                    var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');
                    var hasChildMenuMega = $('#mainnav-mobi').find('li:has(div.submenu)');

                    $('#header').after($mobileMenu);
                    hasChildMenu.children('ul').hide();
                    hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                    hasChildMenuMega.children('div.submenu').hide();
                    $('ul.submenu-child').hide();
                    hasChildMenuMega.find('h3').append('<span class="btn-submenu-child"></span>');
                    $('.btn-menu').removeClass('active');

                } else {
                    var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');
                    $desktopMenu.find('.submenu').removeAttr('style');
                    $('#header').find('.nav-wrap').append($desktopMenu);
                    $('.btn-submenu').remove();
                    $('ul.submenu-child').show();
                    $('h3').children('span').removeClass('btn-submenu-child');
                }
            }
        });

        $('.btn-menu').on('click', function () {
            $('#mainnav-mobi').slideToggle(300);
            $(this).toggleClass('active');
            return false;
        });

        $(document).on('click', '#mainnav-mobi li.has-mega-menu .row .btn-submenu-child', function (e) {
            $(this).toggleClass('active').parent('h3.cat-title').next('.submenu-child').slideToggle(400);
            e.stopImmediatePropagation();
            return false;
        });

        $(document).on('click', '#mainnav-mobi li .btn-submenu', function (e) {
            $(this).toggleClass('active').next('.submenu').slideToggle(400);
            e.stopImmediatePropagation();
            return false;
        });

    }; // Responsive Menu       

    var responsiveMenuMega_S2 = function () {
        var menuType = 'desktop';

        $(window).on('load resize', function () {
            var currMenuType = 'desktop';

            if (matchMedia('only screen and (max-width: 991px)').matches) {
                currMenuType = 'mobile';
            }

            if (currMenuType !== menuType) {
                menuType = currMenuType;

                if ($('body').hasClass('grid')) {
                    if (currMenuType === 'mobile') {
                        var $mobileMenuMegaV2 = $('#mega-menu').attr('id', 'mega-mobile').hide();
                        var ChildMenuMegaV2 = $('.header-bottom').find('.grid-right');
                        var ChildDropmenuV2 = $('.drop-menu').children('.one-third');

                        $('.btn-mega').hide();
                        $('#header').after($mobileMenuMegaV2);
                        ChildMenuMegaV2.append('<div class="btn-menu-mega"><span></span></div>');

                        $('.drop-menu').hide();
                        $mobileMenuMegaV2.find('.dropdown').append('<span class="btn-dropdown"></span>');

                        ChildDropmenuV2.children('ul').hide();
                        $('.drop-menu').find('.cat-title').append('<span class="btn-dropdown-child"></span>');

                    } else {
                        var $desktopMenuMegaV2 = $('#mega-mobile').attr('id', 'mega-menu').removeAttr('style');

                        $desktopMenuMegaV2.find('.drop-menu').removeAttr('style');
                        $('.header-bottom.style1').find('.grid-left').append($desktopMenuMegaV2);
                    }
                };

            };

        });


        $(document).on('click', '#mega-mobile ul.menu li a .btn-dropdown', function (e) {
            $(this).toggleClass('active').closest('li').children('.drop-menu').slideToggle(400);
            e.stopImmediatePropagation();
            return false;
        });

        $(document).on('click', '#mega-mobile .btn-dropdown-child', function (e) {
            $(this).toggleClass('active').closest('.one-third').children('ul').slideToggle(400);
            e.stopImmediatePropagation();
            return false;
        });

    }; // Responsive Menu Mega S2

    var responsiveMenuMega = function () {
        var menuType = 'desktop';

        $(window).on('load resize', function () {
            var currMenuType = 'desktop';

            if (matchMedia('only screen and (max-width: 991px)').matches) {
                currMenuType = 'mobile';
            }

            if (currMenuType !== menuType) {
                menuType = currMenuType;

                if (currMenuType === 'mobile') {
                    var $mobileMenuMega = $('#mega-menu').attr('id', 'mega-mobile').hide();
                    var ChildMenuMega = $('.header-bottom').find('.col-2');
                    var ChildDropmenu = $('.drop-menu').children('.one-third');

                    $('.btn-mega').hide();
                    $('#header').after($mobileMenuMega);
                    ChildMenuMega.append('<div class="btn-menu-mega"><span></span></div>');

                    $('.drop-menu').hide();
                    $mobileMenuMega.find('.dropdown').append('<span class="btn-dropdown"></span>');

                    ChildDropmenu.children('ul').hide();
                    $('.drop-menu').find('.cat-title').append('<span class="btn-dropdown-child"></span>');

                } else {
                    var $desktopMenuMega = $('#mega-mobile').attr('id', 'mega-menu').removeAttr('style');

                    $('.btn-mega').show();
                    $desktopMenuMega.find('.drop-menu').removeAttr('style');
                    $('.header-bottom').find('.col-2').append($desktopMenuMega);
                    $('.btn-menu-mega').remove();
                    $('.btn-dropdown-child').remove();
                    $('.drop-menu').children('.one-third').children('ul').show();
                }
            }
        });

        $(document).on('click', '.btn-menu-mega', function () {
            $('#mega-mobile').slideToggle(300);
            $(this).toggleClass('active');
            return false;
        });

        $(document).on('click', '#mega-mobile ul.menu li a .btn-dropdown', function (e) {
            $(this).toggleClass('active').closest('li').children('.drop-menu').slideToggle(400);
            e.stopImmediatePropagation();
            return false;
        });

        $(document).on('click', '#mega-mobile .btn-dropdown-child', function (e) {
            $(this).toggleClass('active').closest('.one-third').children('ul').slideToggle(400);
            e.stopImmediatePropagation();
            return false;
        });


    }; // Responsive Menu Mega

    var searchButton = function () {
        var showsearch = $('.show-search button');
        showsearch.on('click', function () {
            $('.show-search').parent('div').children('.top-search.style1').toggleClass('active');
            showsearch.toggleClass('active');
        });
    }; // Show Search


    // Dom Ready
    $(function () {
        responsiveMenu();
        responsiveMenuMega_S2();
        responsiveMenuMega();
        searchButton();
        searchFilterbox();
        waveButton();
    });

})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
    window.onscroll = function () { myFunction() };

    var navbar = document.getElementsByClassName("header-bottom")[0]; // Accessing the first element
    var sticky = navbar.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }
});

        $(function () {
            var availableTags = [
                "ActionScript",
                "AppleScript",
                "Asp",
                "BASIC",
                "C",
                "C++",
                "Clojure",
                "COBOL",
                "ColdFusion",
                "Erlang",
                "Fortran",
                "Groovy",
                "Haskell",
                "Java",
                "JavaScript",
                "Lisp",
                "Perl",
                "PHP",
                "Python",
                "Ruby",
                "Scala",
                "Scheme"
            ];
            $("#search").autocomplete({
                source: availableTags
            });
        });