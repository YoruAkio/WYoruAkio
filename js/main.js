if (!!$.prototype.justifiedGallery) {
    var options = {
        rowHeight: 140,
        margins: 4,
        lastRow: "justify"
    };
    $(".article-gallery").justifiedGallery(options);
}

$(document).ready(function () {
    $("#header > #nav > ul > .icon").click(function () {
        $("#header > #nav > ul").toggleClass("responsive");
    });
    if ($(".post").length) {
        var menu = $("#menu");
        var nav = $("#menu > #nav");
        var menuIcon = $("#menu-icon, #menu-icon-tablet");
        if ($(document).width() >= 1440) {
            menu.show();
            menuIcon.addClass("active");
        }
        menuIcon.click(function () {
            if (menu.is(":hidden")) {
                menu.show();
                menuIcon.addClass("active");
            } else {
                menu.hide();
                menuIcon.removeClass("active");
            }
            return false;
        });
        if (menu.length) {
            $(window).on("scroll", function () {
                var topDistance = menu.offset().top;
                if (!nav.is(":visible") && topDistance < 50) {
                    nav.show();
                } else if (nav.is(":visible") && topDistance > 100) {
                    nav.hide();
                }
                if (!$("#menu-icon").is(":visible") && topDistance < 50) {
                    $("#menu-icon-tablet").show();
                    $("#top-icon-tablet").hide();
                } else if (!$("#menu-icon").is(":visible") && topDistance > 100) {
                    $("#menu-icon-tablet").hide();
                    $("#top-icon-tablet").show();
                }
            });
        }
        if ($("#footer-post").length) {
            var lastScrollTop = 0;
            $(window).on("scroll", function () {
                var topDistance = $(window).scrollTop();

                if (topDistance > lastScrollTop) {
                    $("#footer-post").hide();
                } else {
                    $("#footer-post").show();
                }
                lastScrollTop = topDistance;

                $("#nav-footer").hide();
                $("#toc-footer").hide();
                $("#share-footer").hide();

                if (topDistance < 50) {
                    $("#actions-footer > #top").hide();
                } else if (topDistance > 100) {
                    $("#actions-footer > #top").show();
                }
            });
        }
    }
});
