jQuery('#EnquireNow').on('submit', function (e) {
    jQuery('#Alert').html('');
    jQuery('#submits').html('Please wait...');
    jQuery('#submits').attr('disabled', true);
    jQuery.ajax({
        url: 'submit.php',
        type: 'post',
        data: jQuery('#EnquireNow').serialize(),
        success: function (result) {
            jQuery('#Alert').html(result);
            jQuery('#submits').html('Success 👍');
            jQuery('#submits').attr('disabled', false);
            jQuery('#EnquireNow')[0].reset();
        }
    });
    e.preventDefault();
});

jQuery('#EnquireNow').on('submit', function (e) {
    e.preventDefault();
    jQuery('#Alert').html('Please wait...');
    jQuery('#submits').attr('disabled', true);
    jQuery.ajax({
        url: 'https://script.google.com/macros/s/AKfycbzh3HPaRj1EIW09JFrtNgudrwNUFt2TpNO5xkvf81MeOYCRSzzX5ZKE-hFwPl8Gm2jAXQ/exec',
        type: 'post',
        data: jQuery('#EnquireNow').serialize(),
        success: function (result) {
            jQuery('#EnquireNow')[0].reset();
            jQuery('#Alert').html('Thank You');
            jQuery('#submits').attr('disabled', false);
        }
    });
});


jQuery('#EnquireNows').on('submit', function (e) {
    jQuery('#Alerts').html('');
    jQuery('#submit1').html('Please wait...');
    jQuery('#submit1').attr('disabled', true);
    jQuery.ajax({
        url: 'submit1.php',
        type: 'post',
        data: jQuery('#EnquireNows').serialize(),
        success: function (result) {
            jQuery('#Alerts').html(result);
            jQuery('#submit1').html('Success 👍');
            jQuery('#submit1').attr('disabled', false);
            jQuery('#EnquireNows')[0].reset();
        }
    });
    e.preventDefault();
});

jQuery('#EnquireNows').on('submit', function (e) {
    e.preventDefault();
    jQuery('#Alerts').html('Please wait...');
    jQuery('#submit1').attr('disabled', true);
    jQuery.ajax({
        url: 'https://script.google.com/macros/s/AKfycbzh3HPaRj1EIW09JFrtNgudrwNUFt2TpNO5xkvf81MeOYCRSzzX5ZKE-hFwPl8Gm2jAXQ/exec',
        type: 'post',
        data: jQuery('#EnquireNows').serialize(),
        success: function (result) {
            jQuery('#EnquireNows')[0].reset();
            jQuery('#Alerts').html('Thank You');
            jQuery('#submit1').attr('disabled', false);
        }
    });
});