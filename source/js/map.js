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
  // myMap.hint.open(myMap.getCenter(), "<div class='map-hint'><div class='map_hint_title' >Время первых</div><div class='map_hint_description'>Закрыто до завтра</div></div>", {
  //   // Опция: задержка перед открытием.
  //   openTimeout: 300
  // });
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
