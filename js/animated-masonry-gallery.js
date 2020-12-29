$(window).load(function () {
    var size = 1;
    var button = 1;
    var button_class = "gallery-header-center-right-links-current";
    var normal_size_class = "gallery-content-center-normal";
    var full_size_class = "gallery-content-center-full";
    var $container = $('#gallery-content-center');
    $container.isotope({
        itemSelector: 'img'
    });
    $container.isotope({
        filter: '.Timune'
    });

    function check_button() {
        $('.gallery-header-center-right-links').removeClass(button_class);
        
        if (button == 1) {
            $("#filter-timune").addClass(button_class);
            $("#gallery-header-center-left-title").html('Timune Gallery');
        }
        if (button == 2) {
            $("#filter-santcal").addClass(button_class);
            $("#gallery-header-center-left-title").html('Santcal Gallery');
        }
        if (button == 3) {
            $("#filter-santvit").addClass(button_class);
            $("#gallery-header-center-left-title").html('Santvit Gallery');
        }
        if (button == 4) {
            $("#filter-all").addClass(button_class);
            $("#gallery-header-center-left-title").html('Complete Gallery');
        }
    }

    function check_size() {
        $("#gallery-content-center").removeClass(normal_size_class).removeClass(full_size_class);
        if (size == 0) {
            $("#gallery-content-center").addClass(normal_size_class);
            $("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23a;"></span>');
        }
        if (size == 1) {
            $("#gallery-content-center").addClass(full_size_class);
            $("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23b;"></span>');
        }
        $container.isotope({
            itemSelector: 'img'
        });
    }
    $("#filter-all").click(function () {
        $container.isotope({
            filter: '.Complete'
        });
        button = 4;
        check_button();
    });
    $("#filter-timune").click(function () {
        $container.isotope({
            filter: '.Timune'
        });
        button = 1;
        check_button();
    });
    $("#filter-santcal").click(function () {
        // $('.Santcal1').css({
        //     display: "block";
        // })
        $container.isotope({
            filter: '.Santcal'
        });
        button = 2;
        check_button();
    });
    $("#filter-santvit").click(function () {
        $container.isotope({
            filter: '.Santvit'
        });
        button = 3;
        check_button();
    });
    $("#gallery-header-center-left-icon").click(function () {
        if (size == 0) {
            size = 1;
        } else if (size == 1) {
            size = 0;
        }
        check_size();
    });
    check_button();
    check_size();
});