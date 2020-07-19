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
  $("#burger").on('change', function() {
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

  // $('.see-more-toggle').on('click', function() {
  //   let _toggle = $(this).data('more-toggle');
  //   let _more = '';
  //   // if ($('.more-info').hasClass('visible')) {
  //   //     $('.more-info').removeClass('visible');
  //   //     $(this).html('Загрузить ещё');
  //   // } else {
  //   _more = eval(_toggle + '();');
  //   $('.more-info').addClass('visible');
  //   $(this).fadeOut();
  //   // }
  //   setTimeout(function() {
  //     $('.more-info[data-toggle="' + _toggle + '"]').html(_more);
  //   }, 100);
  // });
  $('.see-more-services[data-toggle-id="services"]').on('click', function() {
    let _services = new MainApp();
    _services.services(2);
    $(this).fadeOut();
  });
  // form_musk ();

  function photoGallery() {

    let _obj = [{
        src: "images/photogallery/image 40.png",
        alt: "img-1"
      },
      {
        src: "images/photogallery/image 39.png",
        alt: "img-1"
      },
      {
        src: "images/photogallery/image 41.png",
        alt: "img-1"
      },
      {
        src: "images/photogallery/image 40.png",
        alt: "img-1"
      },
      {
        src: "images/photogallery/image 41.png",
        alt: "img-1"
      },
      {
        src: "images/photogallery/image 39.png",
        alt: "img-1"
      },
    ];



    let _more = '';
    for (let i = 0; i < _obj.length; i++) {
      let _item = _obj[i];
      _more += ` <div>
                        <img src="${_item.src}" alt="${_item.alt}"/>
                    </div>`;
    }

    return `<div class="photo-list" id="more-photo-list"> ${_more} </div>`;

  }

  // function webinars() {
  //   let obj = [{
  //       src: 'https://www.youtube.com/embed/tgbNymZ7vqY?controls=0',
  //       description: 'Основные ошибки, которые допускают родители при общении с подростком наркоманом',
  //       date: '06.07.20'
  //     },
  //     {
  //       src: 'https://www.youtube.com/embed/tgbNymZ7vqY?controls=0',
  //       description: 'Как узнать зависимый ли мой ребенок?',
  //       date: '06.07.20'
  //     },
  //     {
  //       src: 'https://www.youtube.com/embed/tgbNymZ7vqY?controls=0',
  //       description: 'Основные ошибки, которые допускают родители при общении с подростком наркоманом',
  //       date: '06.07.20'
  //     },
  //     {
  //       src: 'https://www.youtube.com/watch?v=f4Mc-NYPHaQ',
  //       description: 'Основные ошибки, которые допускают родители при общении с подростком наркоманом',
  //       date: '06.07.20'
  //     },
  //     {
  //       src: 'https://www.youtube.com/embed/tgbNymZ7vqY?controls=0',
  //       description: 'Как узнать зависимый ли мой ребенок?',
  //       date: '06.07.20'
  //     },
  //     {
  //       src: 'https://www.youtube.com/embed/tgbNymZ7vqY?controls=0',
  //       description: 'Основные ошибки, которые допускают родители при общении с подростком наркоманом',
  //       date: '06.07.20'
  //     },
  //     {
  //       src: 'https://www.youtube.com/watch?v=pMYCOYjIKrE',
  //       description: 'Основные ошибки, которые допускают родители при общении с подростком наркоманом',
  //       date: '06.07.20'
  //     },
  //     {
  //       src: 'https://www.youtube.com/embed/tgbNymZ7vqY?controls=0',
  //       description: 'Как узнать зависимый ли мой ребенок?',
  //       date: '06.07.20'
  //     },
  //     {
  //       src: 'https://www.youtube.com/embed/tgbNymZ7vqY?controls=0',
  //       description: 'Основные ошибки, которые допускают родители при общении с подростком наркоманом',
  //       date: '06.07.20'
  //     },
  //   ];

  //   let _more = '';
  //   for (let i = 0; i < obj.length; i++) {
  //     let _item = obj[i];
  //     _more += ` <div>
  //                   <div class="top">
  //                       <iframe
  //                               src="${_item.src}">
  //                       </iframe>
  //                   </div>
  //                   <div class="bottom">
  //                       <p>${_item.description}</p>
  //                       <label>${_item.date}</label>
  //                   </div>
  //               </div>`;
  //   }

  //   return `<div class="webinars-list" id="more-webinars"> ${_more} <div>`;
  // }

  function specialists() {
    let obj = [{
        name: 'Виктория Проказникова',
        experience: 'стаж 5 лет',
        image: 'images/specialists/image 32.png',
        description: 'Клинический психолог',
        licence: 'licence 1',
      },
      {
        name: 'Виктория Проказникова',
        experience: 'стаж 5 лет',
        image: 'images/specialists/image 32.png',
        licence: 'licence 1',
        description: 'Клинический психолог'
      },
      {
        name: 'Анастасия Куликова',
        experience: 'стаж 5 лет',
        image: 'images/specialists/image 32.png',
        licence: 'licence 1',
        description: 'Клинический психолог'
      },
      {
        name: 'Виктория Проказникова',
        experience: 'стаж 5 лет',
        image: 'images/specialists/image 32.png',
        licence: 'licence 1',
        description: 'Клинический психолог, консультант, детский психолог'
      },
      {
        name: 'Виктория Проказникова',
        experience: 'стаж 5 лет',
        image: 'images/specialists/image 32.png',
        licence: 'licence 1',
        description: 'Клинический психолог'
      },
      {
        name: 'Виктория Проказникова',
        experience: 'стаж 5 лет',
        image: 'images/specialists/image 32.png',
        licence: 'licence 1',
        description: 'Клинический психолог'
      },
      {
        name: 'Виктория Проказникова',
        experience: 'стаж 5 лет',
        image: 'images/specialists/image 32.png',
        licence: 'licence 1',
        description: 'Клинический психолог'
      },
    ];

    let _more = '';
    for (let i = 0; i < obj.length; i++) {
      let _item = obj[i];
      _more += ` <div>
                            <div class="top">
                              <img src="${_item.image}" alt="specialist"/>
                            </div>
                            <div class="specialist-name">
                            ${_item.name}
                            </div>
                            <div class="specialist-experience">
                            ${_item.experience}
                            </div>
                            <div class="specialist-description">
                            ${_item.description}
                            </div>
                            <div class="specialist-licence">
                                 <div class="file-download" data-licence="${_item.licence}">Лицензия</div>
                            </div>
                      </div>`;
    }

    return `<div class="specialists-list" id="more-specialists-list"> ${_more} <div>`;
  }


  // function form_musk () {
  //     var phoneMask = IMask(document.getElementById('phoneNumber'), {
  //         mask: '+{7} 000 000-00-00'
  //     });
  //     var phoneMask1 = IMask(document.getElementById('phoneNumber1'), {
  //         mask: '+{7} 000 000-00-00'
  //     });
  //     var phoneMask2 = IMask(document.getElementById('phoneNumber2'), {
  //         mask: '+{7} 000 000-00-00'
  //     });
  //     var phoneMask3 = IMask(document.getElementById('phoneNumber3'), {
  //         mask: '+{7} 000 000-00-00'
  //     });
  //     var phoneMask4 = IMask(document.getElementById('phoneNumber4'), {
  //         mask: '+{7} 000 000-00-00'
  //     });
  //     var phoneMask6 = IMask(document.getElementById('phoneNumber6'), {
  //         mask: '+{7} 000 000-00-00'
  //     });
  //     var phoneMask5 = IMask(document.getElementById('phoneNumber5'), {
  //         mask: '+{7} 000 000-00-00'
  //     });
  //     var phoneMask7 = IMask(document.getElementById('phoneNumber7'), {
  //         mask: '+{7} 000 000-00-00'
  //     });
  //     var phoneMask9 = IMask(document.getElementById('phoneNumber9'), {
  //         mask: '+{7} 000 000-00-00'
  //     });
  // }

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

  // лайтбокс для отзыва с видео
  $().fancybox({
    selector: '.review-wideo',
    loop: true,
    animationEffect: "zoom-in-out",
    buttons: ['fullScreen', 'close'],
    titleShow: true,
    backFocus: false
  });

  // лайтбокс для видео-обзора
  $().fancybox({
    selector: '.webinar-video',
    loop: true,
    animationEffect: "zoom-in-out",
    buttons: ['fullScreen', 'close'],
    titleShow: true,
    backFocus: false
  });

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
