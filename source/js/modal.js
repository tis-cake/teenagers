$('body').click(function(e){
    if($(e.target).is($('.modal'))){
        $('.modal').removeClass('show');
    }
});


// data-toggle="modal" data-modal-id="submit_your_application"
$('*[data-toggle="modal"]').on('click', function () {

    let _this_modal = $(this).data('modal-id');
    $('.modal').removeClass('show');
    $('#' + _this_modal).addClass('show');

});
$('.close-modal').on('click', function () {
    $(this).parents('.modal').removeClass('show');
});