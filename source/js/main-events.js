const width = $(window).width();

$(document).ready(function() {

  $(document).on('click', '.file-download', function() {
    download("your data here", "filename.csv", "text/csv");
  });

  function download(content, filename, contentType) {
    if (!contentType) contentType = 'application/octet-stream';
    var a = document.createElement('a');
    var blob = new Blob([content], { 'type': contentType });
    a.href = window.URL.createObjectURL(blob);
    a.download = filename;
    a.click();
  }
  $("#burger").on('click', function() {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.m-menu').removeClass('active');
      $('#hiddenMobile').removeClass('mobile-hidden');
    } else {
      $(this).addClass('active');
      $('.m-menu').addClass('active');
      $('#hiddenMobile').addClass('mobile-hidden');
    }
  });

  // закрытие модального окна при клике вне элемента
  $('body').click(function(e) {
    if ($(e.target).is($('.modal'))) {
      $('.modal').removeClass('show');
    }
  });

  // модальное окно 1
  // data-toggle="modal" data-modal-id="submit_your_application"
  $('*[data-toggle="modal"]').on('click', function(evt) {
    evt.preventDefault();

    let _this_modal = $(this).data('modal-id');
    $('.modal').removeClass('show');
    $('#' + _this_modal).addClass('show');

  });
  $('.close-modal').on('click', function() {
    $(this).parents('.modal').removeClass('show');
  });

  // маска на телефон
  $('.phoneNumber').mask('+7 999 999-99-99');

  // выпадающее подменю на мобильном
  if (width <= 756) {
    $('.sub-menu-toggle').click(function(evt) {
      evt.preventDefault();
      let currentParrent = $(this).closest('.dropdown-toggle');
      $('.dropdown-toggle').not(currentParrent).removeClass('show');
      currentParrent.toggleClass('show');
    });
  }

  // лайтбокс для отзыва с видео
  $().fancybox({
    selector: '.review-wideo',
    loop: true,
    animationEffect: "zoom-in-out",
    buttons: ['fullScreen', 'close'],
    titleShow: true,
    backFocus: false
  });

  // лайтбокс для онлайн-вебинаров
  $().fancybox({
    selector: '.webinar-video',
    loop: true,
    animationEffect: "zoom-in-out",
    buttons: ['fullScreen', 'close'],
    titleShow: true,
    backFocus: false
  });

  // лайтбокс для галереи центра
  $().fancybox({
    selector: '.photo-list-item',
    loop: true,
    blackFocus: false
  });

  // кнопка "показать ещё" у услуг
  $('.services .see-more-services').on('click', function() {
    $('#services').addClass('show');
    $(this).addClass('hidden');
  })

  // кнопка "показать ещё" у этапов
  $('.rehabilitation_stages .see-more-services').on('click', function() {
    $(this).closest('.rehabilitation_stages_items-wrapper').find('.rehabilitation_stages_items').addClass('show');;
    $(this).addClass('hidden');
  })

});

// отзывы
$(document).ready(function() {

  let sizeOverflow = 115;

  // если переполнение - полный текст переносим в модальное окно, затем обрезаем
  $('.reviews-item:not(.photo-review):not(.video-review)').each(function (el) {
    let currentTextBlock = $(this).find('.text');
    let currentText = currentTextBlock.text().trim();
    let currentTextSize = currentText.length;

    if (currentTextSize >= sizeOverflow) {
      $(this).addClass('detail-review');

      $(this).find('.text-full').text(currentText);
      currentTextBlock.text(currentText.slice(0, sizeOverflow) + ' ...');
    }
  });

  // модальное окно с детальным отзывом
  $('.detail-review .btn').on('click', function() {
    $('#review-block').addClass('show');
    let currentReview = this.closest('.detail-review');
    createReviewFragment(currentReview);
  });

  // делегируем вызов лайтбокса для отзыва с видео
  $('.video-review .btn').on('click', function() {
    $(this).closest('.video-review').find('.review-wideo-block').click();
  })

  // шаблон детального отзыва в модальном онке
  function createReviewFragment(currentReview) {

    let reviewModal = document.querySelector('#review-block');
    let reviewContainer = reviewModal.querySelector('.review-content');
    reviewContainer.innerHTML = '';

    let reviewName = currentReview.querySelector('.username').textContent.trim();
    let reviewDate = currentReview.querySelector('.date').textContent.trim();
    let reviewText = currentReview.querySelector('.text-full').textContent.trim();

    let reviewTemplate = reviewModal.querySelector('#review-block-template').content;
    let reviewTemplateContent = reviewTemplate.querySelector('.review-content');

    let reviewTemplateName = reviewTemplateContent.querySelector('.modal-review-name');
    let reviewTemplateDate = reviewTemplateContent.querySelector('.modal-review-date');
    let reviewTemplateText = reviewTemplateContent.querySelector('.modal-review-text');

    reviewTemplateName.textContent = reviewName;
    reviewTemplateDate.textContent = reviewDate;
    reviewTemplateText.textContent = reviewText;

    let review = reviewTemplateContent.cloneNode(true);
    reviewContainer.appendChild(review);
  }
});
