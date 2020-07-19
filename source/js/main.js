class MainApp {
  constructor() {
    // this.menu();

    // if (document.getElementById('services') !== null) {
    //     if(window.innerWidth > 767) {
    //         this.services(0);
    //     } else {
    //         this.services(0, 3);
    //     }
    // }
    if (document.getElementById('addresses-list') !== null) {
      this.contacts();
    }

    if (document.getElementById('map') !== null) {
      this.map();
    }
    if (document.getElementById('map') !== null) {
      this.map();
    }
    if ($('.item-list-1[data-id="knowledge_base_list"]').length > 0) {
      let _count = $('.item-list-1[data-id="knowledge_base_list"]').data('count');
      _count = _count === undefined ? 'all' : parseInt(_count);
      this.knowledge_base(_count);
    }
    if ($('.item-list-2').length > 0) {
      this.listBanner();
    }

  }


  knowledge_base(_count) {
    let _obj = [{
        title: "Лечение от героиновой зависимости",
        addiction: "Героиновая зависимость",
        date: "01.04.20",
        description: "Спасибо за  такую качественную работу!Конеч. нам предстоит еще большой путьчтобы все вернулось на свои круги, но..."
      },
      {
        title: "Лечение от мефедроно- вой зависимости",
        addiction: "Солевая зависимость",
        date: "01.04.20",
        description: "Спасибо за  такую качественную работу!Конеч. нам предстоит еще большой путьчтобы все вернулось на свои круги, но..."
      },
      {
        title: "Лечение от мефедроновой зависимости",
        addiction: "Солевая зависимость",
        date: "01.04.20",
        description: "Спасибо за  такую качественную работу!Конеч. нам предстоит еще большой ..."
      },
      {
        title: "Как приготовить мет?",
        addiction: "Другие виды наркотиков",
        date: "01.04.20",
        description: "Спасибо за  такую качественную работу!Конеч. нам предстоит еще большой путьчтобы все вернулось на свои круги, но..."
      },
      {
        title: "Лечение от героиновой зависимости",
        addiction: "Героиновая зависимость",
        date: "01.04.20",
        description: "Спасибо за  такую качественную работу!Конеч. нам предстоит еще большой путьчтобы все вернулось на свои круги, но..."
      },
      {
        title: "Лечение от мефедроно- вой зависимости",
        addiction: "Солевая зависимость",
        date: "01.04.20",
        description: "Спасибо за  такую качественную работу!Конеч. нам предстоит еще большой путьчтобы все вернулось на свои круги, но..."
      },
      {
        title: "Лечение от мефедроновой зависимости",
        addiction: "Солевая зависимость",
        date: "01.04.20",
        description: "Спасибо за  такую качественную работу!Конеч. нам предстоит еще большой ..."
      },
      {
        title: "Как приготовить мет?",
        addiction: "Другие виды наркотиков",
        date: "01.04.20",
        description: "Спасибо за  такую качественную работу!Конеч. нам предстоит еще большой путьчтобы все вернулось на свои круги, но..."
      },
    ];
    let _contacts = ``;

    for (let prop in _obj) {
      let item = _obj[prop];

      if (_count !== 'all') {
        if (prop >= _count) {
          break;
        }
      }

      _contacts += `<div>
                           <div class="title">${item.title}</div>
                           <div class="addiction-bar">
                           <span class="addiction">${item.addiction}</span>
                           <span class="date">${item.date}</span>
                           </div>
                           <div class="description">
                           ${item.description}
                           </div>
                          </div>`;
    }

    $('.item-list-1[data-id="knowledge_base_list"]').html(_contacts);
  }

  listBanner() {
    if ($('.item-list-2[data-id="1"]').length > 0) {
      let _obj = [{
          title: "Лечение игровой зависимости",
          description: "Стабилищация физического состояния и психики.  Полное ограничение доступа к какому-либо виду игр.",
          img: "images/Mask Group2342.png",
        },
        {
          title: "Лечение игровой зависимости",
          description: "Стабилищация физического состояния и психики.  Полное ограничение доступа к какому-либо виду игр.",
          img: "images/Mask Group (2).png",
        },
        {
          title: "Детоксикация в клинике!",
          description: "Детоксикая поможет справиться с фищическими недомоганиями в кроткий срок!",
          img: "images/Mask Group (1).png",
        },
        {
          title: "Снятие ломки",
          description: "Самостоятельное снятие ломки приводит к нарушениям нервной системы и заболеваниям психики.",
          img: "images/Mask Group7898.png",
        },
      ];
      this.list1(_obj, 1);
    }
    if ($('.item-list-2[data-id="2"]').length > 0) {
      let _obj = [{
          title: "Классическая интервенция",
          description: "Поможем уговорить подростка на лечение. Возможность проведения экскурсии в РЦ.",
          img: "images/Mask Group (4).png",
        },
        {
          title: "<span class='title-sm'>Специализированные реабилитационные центры</span>",
          description: `<ul class="list-ul sm-text">
                                    <li>Проживание только несовершеннолетних</li>
                                    <li>Образовательная программа</li>
                                    <li>Спортивные площадки, профессиональные тренеры</li>
                                    <li>Наличие детских психологов и терапевтов</li>
                                    <li>Групповая и индивидуальная терапия</li>
                                                                     </ul>`,
          img: "images/Mask Group (1)798.png",
        },
        {
          title: "Детоксикация в клинике!",
          description: "Мы ответим на ваши вопросы онлайн, первая консультация бесплатно!",
          img: "images/Mask Group (1)7982.png",
        },
        {
          title: "Снятие ломки",
          description: "Мы ответим на ваши вопросы онлайн, первая консультация бесплатно!",
          img: "images/Mask Group (2)7982.png",
        },
      ];
      this.list1(_obj, 2);
    }
  }

  list1(_obj, _id) {
    let _inner_block = ``;
    for (let prop in _obj) {
      let item = _obj[prop];
      _inner_block += `<div>
                           <div class="title">${item.title}</div>
                          <div class="description">
                           ${item.description}
                           </div>
                           <img class="img-bg-bottom" src="${item.img}" alt="img3"/>
                          </div>`;
    }
    let _block = `<div class="steps-list-2 mb-30">${_inner_block}</div>`;
    $('.item-list-2[data-id="' + _id + '"]').html(_block);
  }

  map() {
    ymaps.ready(function() {
      var myMap = new ymaps.Map('map', {
          center: [55.759689, 37.64719],
          zoom: 16
        }, {
          searchControlProvider: 'yandex#search'
        }),

        // Creating a content layout.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Время первых',
          balloonContent: 'Закрыто до завтра'

        }, {
          /**
           * Options.
           * You must specify this type of layout.
           */
          iconLayout: 'default#image',
          // Custom image for the placemark icon.
          iconImageHref: 'images/map_pin.png',
          // The size of the placemark.
          iconImageSize: [56, 64],
          /**
           * The offset of the upper left corner of the icon relative
           * to its "tail" (the anchor point).
           */
          iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.759689, 37.64719], {
          hintContent: 'Время первых',
          balloonContent: 'Закрыто до завтра',
          iconContent: '12'
        }, {
          /**
           * Options.
           * You must specify this type of layout.
           */
          iconLayout: 'default#imageWithContent',
          // Custom image for the placemark icon.
          iconImageHref: 'images/ball.png',
          // The size of the placemark.
          iconImageSize: [48, 48],
          /**
           * The offset of the upper left corner of the icon relative
           * to its "tail" (the anchor point).
           */
          iconImageOffset: [-24, -24],
          // Offset of the layer with content relative to the layer with the image.
          iconContentOffset: [15, 15],
          // Content layout.
          iconContentLayout: MyIconContentLayout
        });

      myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
      myMap.hint.open(myMap.getCenter(), "<div class='map-hint'><div class='map_hint_title' >Время первых</div><div class='map_hint_description'>Закрыто до завтра</div></div>", {
        // Опция: задержка перед открытием.
        openTimeout: 300
      });
      // var placemark = new ymaps.Placemark(myMap.getCenter(), {
      //     // Зададим содержимое заголовка балуна.
      //     balloonContentHeader: '<p style="font-size: 22px;">Время первых</p>',
      //     // Зададим содержимое основной части балуна.
      //     balloonContentBody: '<p class="color:red">Закрыто до завтра</p>',
      // });
      // // Добавим метку на карту.
      // myMap.geoObjects.add(placemark);
      // // Откроем балун на метке.
      // placemark.balloon.open();
    });
  }

  contacts() {
    let _obj = [{
        city: "г. Казань",
        index: "201000",
        address: "Москва, Покровка, 21-23/25с1",
        phone: "8 (800) 600-39-60",
        email: "cv@nasrf.ru",
      },

      {
        city: "г. Тюмень",
        index: "201000",
        address: "Москва, Покровка, 21-23/25с1",
        phone: "8 (800) 600-39-60",
        email: "cv@nasrf.ru",
      },

      {
        city: "г. Казань",
        index: "201000",
        address: "Москва, Покровка, 21-23/25с1",
        phone: "8 (800) 600-39-60",
        email: "cv@nasrf.ru",
      },

      {
        city: "г. Казань",
        index: "201000",
        address: "Москва, Покровка, 21-23/25с1",
        phone: "8 (800) 600-39-60",
        email: "cv@nasrf.ru",
      },

      {
        city: "г. Тюмень",
        index: "201000",
        address: "Москва, Покровка, 21-23/25с1",
        phone: "8 (800) 600-39-60",
        email: "cv@nasrf.ru",
      },

      {
        city: "г. Казань",
        index: "201000",
        address: "Москва, Покровка, 21-23/25с1",
        phone: "8 (800) 600-39-60",
        email: "cv@nasrf.ru",
      },

    ];

    let _contacts = ``;
    for (let prop in _obj) {
      let item = _obj[prop];
      _contacts += `<div>
                           <div class="city">${item.city}</div>
                           <table class="address-table">
                                <tr>
                                   <td class="key">
                                        Индекс:
                                    </td>
                                    <td class="value">${item.index}</td>
                                </tr>
                                <tr>
                                    <td class="key">
                                        Адрес:
                                    </td>
                                    <td class="value">${item.address}</td>
                                </tr>
                                <tr>
                                   <td class="key">
                                        Телефон:
                                    </td>
                                    <td class="value">${item.phone}</td>
                                </tr>
                                <tr>
                                    <td class="key">
                                        Email:
                                    </td>
                                    <td class="value">${item.email}</td>
                                </tr>
                         </table>
                        </div>`;
    }
    document.getElementById('addresses-list').innerHTML = _contacts;
  }

  // services(_start = 0 , _length = undefined) {
  //     let _obj = [
  //         {
  //             icon: 'images/icons/service_icon (6).png',
  //             title: 'Лечение наркомании',
  //             description: 'Лечение от 6 месяцев',
  //             menu_items: [
  //                 {
  //                     text: 'Солевая',
  //                     href: '/'
  //                 },
  //                 {
  //                     text: 'Героиновая',
  //                     href: '/'
  //                 },
  //                 {
  //                     text: 'Бутират',
  //                     href: '/'
  //                 },
  //                 {
  //                     text: 'Опиаты',
  //                     href: '/'
  //                 },
  //                 {
  //                     text: 'Спайсы',
  //                     href: '/'
  //                 },
  //                 {
  //                     text: 'Лирика',
  //                     href: '/'
  //                 },
  //                 {
  //                     text: 'Другие',
  //                     href: '/'
  //                 },
  //             ],
  //             reviews: 45,
  //             stars: 4,
  //             more_link: '/'
  //         },
  //         {
  //             icon: 'images/icons/service_icon (7).png',
  //             title: 'Лечение алкоголизма',
  //             description: 'Лечение от 6 месяцев',
  //             menu_items: [
  //                 {
  //                     text: 'Вывод из запоя',
  //                     href: '/'
  //                 },
  //                 {
  //                     text: 'Групповая терапия',
  //                     href: '/'
  //                 },
  //                 {
  //                     text: 'Реабилитация',
  //                     href: '/'
  //                 },
  //                 {
  //                     text: 'Детоксикация',
  //                     href: '/'
  //                 },


  //             ],
  //             reviews: 45,
  //             stars: 4,
  //             more_link: '/'
  //         },
  //         {
  //             icon: 'images/icons/games.png',
  //             title: 'Лечение игромании',
  //             description: 'Лечение от 5 месяцев',
  //             menu_items: [
  //                 {
  //                     text: 'Онлайн игры',
  //                     href: '/'
  //                 },
  //                 {
  //                     text: 'Интернет-зависимость',
  //                     href: '/'
  //                 },
  //                 {
  //                     text: 'Казино',
  //                     href: '/'
  //                 },
  //                 {
  //                     text: 'Социальные сети',
  //                     href: '/'
  //                 },
  //             ],
  //             reviews: 45,
  //             stars: 4,
  //             more_link: '/'
  //         },
  //         {
  //             icon: 'images/icons/service_icon (1).png',
  //             title: 'Лечение булимии',
  //             description: 'Лечение от 2 месяцев',
  //             menu_items: [
  //                 {
  //                     text: 'Нервная булимия',
  //                     href: '/'
  //                 },
  //                 {
  //                     text: 'Тестирование',
  //                     href: '/'
  //                 },
  //                 {
  //                     text: 'Лекарственная терапия',
  //                     href: '/'
  //                 },
  //                 {
  //                     text: 'Психотерапия',
  //                     href: '/'
  //                 },
  //             ],
  //             reviews: 45,
  //             stars: 4,
  //             more_link: '/'
  //         },
  //         {
  //             icon: 'images/icons/service_icon (2).png',
  //             title: 'Консультация нарколога',
  //             description: 'Круглосуточно',
  //             menu_items: [
  //                 {
  //                     text: 'Консультация онлайн',
  //                     href: '/'
  //                 },
  //                 {
  //                     text: 'Выезд на дом',
  //                     href: '/'
  //                 },
  //                 {
  //                     text: 'Консультация в стационаре',
  //                     href: '/'
  //                 },

  //             ],
  //             reviews: 45,
  //             stars: 4,
  //             more_link: '/'
  //         },
  //         {
  //             icon: 'images/icons/service_icon (3).png',
  //             title: 'Работа с психологом',
  //             description: 'Семейная терапия',
  //             menu_items: [

  //                 {
  //                     text: 'Онлайн встречи',
  //                     href: '/'
  //                 },
  //                 {
  //                     text: 'Личные встречи',
  //                     href: '/'
  //                 },
  //                 {
  //                     text: 'Семеная терапия',
  //                     href: '/'
  //                 },


  //             ],
  //             reviews: 45,
  //             stars: 4,
  //             more_link: '/'
  //         },
  //         {
  //             icon: 'images/icons/service_icon (4).png',
  //             title: 'Амбулаторное лечение',
  //             description: 'Лечение от 1 года',
  //             menu_items: [
  //                 {
  //                     text: 'Наркомания',
  //                     href: '/'
  //                 },
  //                 {
  //                     text: 'Алкоголизм',
  //                     href: '/'
  //                 },
  //                 {
  //                     text: 'Игромания',
  //                     href: '/'
  //                 },
  //                 {
  //                     text: 'Встречи АА ',
  //                     href: '/'
  //                 },
  //                 {
  //                     text: 'Встречи АН',
  //                     href: '/'
  //                 },
  //             ],
  //             reviews: 45,
  //             stars: 4,
  //             more_link: '/'
  //         },
  //         {
  //             icon: 'images/icons/service_icon (5).png',
  //             title: 'Лечение за границей',
  //             description: 'Реабилитация + Детокс',
  //             menu_items: [
  //                 {
  //                     text: 'Израиль',
  //                     href: '/'
  //                 },
  //                 {
  //                     text: 'Черногория',
  //                     href: '/'
  //                 },
  //                 {
  //                     text: 'Таиланд',
  //                     href: '/'
  //                 },
  //                 {
  //                     text: 'Казахстан',
  //                     href: '/'
  //                 },
  //                 {
  //                     text: 'Украина',
  //                     href: '/'
  //                 },
  //             ],
  //             reviews: 45,
  //             stars: 4,
  //             more_link: '/'
  //         },
  //     ];
  //     let _block_inner = ``;
  //     _length = _length === undefined?_obj.length:3;

  //     for (let j = _start; j < _length; j++) {
  //         let item = _obj[j];
  //         let inner_menu = ``;
  //         for (let i = 0; i < item['menu_items'].length; i++) {
  //             let _item = item['menu_items'][i];
  //             inner_menu += `<li>
  //             <a href="/${_item.href}">${_item.text}</a>
  //             </li>`
  //         }

  //         let stars = ``;
  //         for (let j = 0; j < item.stars; j++) {
  //             stars += `<li><img src="images/icons/Star 4.png" alt="star" /></li>`;
  //         }
  //         for (let j = 0; j < (5 - item.stars); j++) {
  //             stars += `<li><img src="images/icons/Star 5.png" alt="star" /></li>`;
  //         }
  //         stars = `<ul class="stars">${stars}</ul>`;


  //         _block_inner += `<div>
  //                   <!-- <a href="${item.more_link}">  -->
  //                                 <div class="top">
  //                                     <div class="icon">
  //                                         <img src="${item.icon}" alt="icon1"/>
  //                                     </div>
  //                                     <div class="description">
  //                                         <h6 class="h6-title">
  //                                         ${item.title}
  //                                         </h6>
  //                                        <p class="p-light"> ${item.description}</p>
  //                                     </div>
  //                                 </div>
  //                                 <div class="middle"><ul>${inner_menu}</ul></div>
  //                                 <div class="reviews-bar">
  //                                    <div class="left"> ${stars}
  //                                        <label class="reviews">Отзывы:  ${item.reviews}</label>
  //                                     </div>
  //                                     <div class="right">
  //                                          <a href="${item.more_link}" class="btn btn-sm btn-cyan"><span>Подробнее</span></a>
  //                                     </div>
  //                                 </div>
  //       <!--             </a>-->
  //                       </div>`;
  //     }


  //     let _block = ` ${_block_inner}`;
  //     document.getElementById('services').innerHTML += `${_block}`;
  // }

  // menu() {

  //     let _block_inner = ``;
  //     let _obj = [
  //         {
  //             menu: 'Наркомания',
  //             submenu: [
  //                 {
  //                     title: 'Как узнать о заивисимости?',
  //                     link: '/'
  //                 },
  //                 {
  //                     title: 'Специализированная реабилитация',
  //                     link: '/'
  //                 },
  //                 {
  //                     title: 'Снятие ломки',
  //                     link: '/'
  //                 },
  //                 {
  //                     title: 'Солевая зависимость',
  //                     link: '/'
  //                 },
  //                 {
  //                     title: 'Героиновая зависимость',
  //                     link: '/'
  //                 },
  //                 {
  //                     title: 'Спайсовая зависимость',
  //                     link: '/'
  //                 },
  //                 {
  //                     title: 'Семейная терапия',
  //                     link: '/'
  //                 },
  //                 {
  //                     title: 'ВИП лечение',
  //                     link: '/'
  //                 },
  //                 {
  //                     title: 'Амбулаторное лечение',
  //                     link: '/'
  //                 },
  //             ]
  //         },
  //         {
  //             menu: 'Алкоголизм',
  //             submenu: [
  //                 {
  //                     title: 'Детоксикация',
  //                     link: '/'
  //                 },
  //                 {
  //                     title: 'Специализированная реабилитация',
  //                     link: '/'
  //                 },
  //                 {
  //                     title: 'Нарколог на дом',
  //                     link: '/'
  //                 },
  //                 {
  //                     title: ' Вывод из запоя',
  //                     link: '/'
  //                 },
  //                 {
  //                     title: 'Семейная терапия',
  //                     link: '/'
  //                 },
  //                 {
  //                     title: 'ВИП лечение',
  //                     link: '/'
  //                 },
  //                 {
  //                     title: 'Амбулаторное лечение',
  //                     link: '/'
  //                 },
  //                 {
  //                     title: 'Кодирование',
  //                     link: '/'
  //                 },
  //             ]
  //         },
  //         {
  //             menu: 'Игромания',
  //             submenu: [
  //                 {
  //                     title: 'Специализированная реабилитация',
  //                     link: '/'
  //                 },
  //                 {
  //                     title: 'Интернет зависимость',
  //                     link: '/'
  //                 },
  //                 {
  //                     title: 'Online игры',
  //                     link: '/'
  //                 },
  //                 {
  //                     title: 'Семейная терапия',
  //                     link: '/'
  //                 },
  //                 {
  //                     title: 'ВИП лечение',
  //                     link: '/'
  //                 },
  //                 {
  //                     title: ' Амбулаторное лечение',
  //                     link: '/'
  //                 }
  //             ]
  //         },
  //         {
  //             menu: 'Созависимость',
  //             submenu: [
  //                 {
  //                     title: 'Родственникам',
  //                     link: '/'
  //                 },
  //                 {
  //                     title: ' Семейная терапия',
  //                     link: '/'
  //                 },
  //                 {
  //                     title: 'Родителям (раздел статей)',
  //                     link: '/'
  //                 }
  //             ]
  //         },
  //         {
  //             menu: 'Реабилитация',
  //             mainlink: 'catalog.html'
  //             // submenu: [
  //             //     {
  //             //         title: 'Родственникам',
  //             //         link: '/'
  //             //     },
  //             //     {
  //             //         title: ' Семейная терапия',
  //             //         link: '/'
  //             //     },
  //             //     {
  //             //         title: 'Родителям (раздел статей)',
  //             //         link: '/'
  //             //     }
  //             // ]
  //         },
  //         {
  //             menu: 'Психолог',
  //             mainlink: 'catalog.html'
  //             // submenu: [
  //             //     {
  //             //         title: 'Родственникам',
  //             //         link: '/'
  //             //     },
  //             //     {
  //             //         title: ' Семейная терапия',
  //             //         link: '/'
  //             //     },
  //             //     {
  //             //         title: 'Родителям (раздел статей)',
  //             //         link: '/'
  //             //     }
  //             // ]
  //         },
  //         {

  //             menu: 'О портале',
  //             submenu: [
  //                 {
  //                     title: 'О портале “Время решений”',
  //                     link: 'about.html'
  //                 },
  //                 {
  //                     title: 'База знаний',
  //                     link: 'knowledge_base.html'
  //                 },
  //                 {
  //                     title: 'Контакты',
  //                     link: 'contacts.html'
  //                 }
  //             ]
  //         }
  //     ];

  //     for (let prop in _obj) {
  //         let item = _obj[prop];
  //         let _dropdown = ``;
  //         let _toggle_id = `menu-${prop}`;

  //         for (let _prop in item.submenu) {
  //             let sub_item = item.submenu[_prop];
  //             _dropdown += `<li>
  //                         <a href="${sub_item.link}">${sub_item.title}</a>
  //                         </li>`;
  //         }

  //         if (_dropdown !== '') {
  //             _dropdown = `<ul class="sub-dropdown" id="${_toggle_id}">${_dropdown}</ul>`
  //         } else {
  //           let _single_link = _obj[prop].mainlink;
  //           _block_inner += ` <li class="dropdown-toggle" data-toggle="${_toggle_id}">
  //                      <a href="${_single_link}" class="menu-a clearfix">
  //                      <span>${item.menu}</span>
  //                      <span class="d-mobile pull-right plus-minus"><i></i></span>
  //                      </a>
  //                      ${_dropdown}
  //                     </li>`;

  //           continue;
  //         }

  //         _block_inner += ` <li class="dropdown-toggle" data-toggle="${_toggle_id}">
  //                      <a class="menu-a clearfix">
  //                      <span>${item.menu}</span>
  //                      <span class="d-mobile pull-right plus-minus"><i></i></span>
  //                      </a>
  //                      ${_dropdown}
  //                     </li>`;
  //     }

  //     let _block = `  <ul class="menu-ul">${_block_inner}</ul>`;
  //     document.getElementById('m-menu').innerHTML = `${_block}`;
  // }
}
new MainApp();
