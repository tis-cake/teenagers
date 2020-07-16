$(document).ready(function () {

    $(document).on('click' , '.file-download' , function () {
        download("your data here", "filename.csv", "text/csv");
    });
    function download(content, filename, contentType)
    {
        if(!contentType) contentType = 'application/octet-stream';
        var a = document.createElement('a');
        var blob = new Blob([content], {'type':contentType});
        a.href = window.URL.createObjectURL(blob);
        a.download = filename;
        a.click();
    }
    $("#burger").on('change' , function () {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.m-menu').removeClass('active');
            $('#hiddenMobile').removeClass('mobile-hidden');
        } else {
            $(this).addClass('active');
            $('.m-menu').addClass('active');
            $('#hiddenMobile').addClass('mobile-hidden');
        }
    });

    $('.see-more-toggle').on('click' , function () {
        let _toggle = $(this).data('more-toggle');
        let _more = '';
        // if ($('.more-info').hasClass('visible')) {
        //     $('.more-info').removeClass('visible');
        //     $(this).html('Загрузить ещё');
        // } else {
            _more = eval(_toggle + '();');
            $('.more-info').addClass('visible');
            $(this).fadeOut();
        // }
        setTimeout(function () {
            $('.more-info[data-toggle="'+_toggle+'"]').html(_more);
        } , 100);
    });
    $('.see-more-services[data-toggle-id="services"]').on('click', function () {
        let _services = new MainApp();
        _services.services(2);
        $(this).fadeOut();
    });
    // form_musk ();

    function photoGallery() {

        let _obj = [
            {
                src:"images/photogallery/image 40.png",
                alt:"img-1"
            },
            {
                src:"images/photogallery/image 39.png",
                alt:"img-1"
            },
            {
                src:"images/photogallery/image 41.png",
                alt:"img-1"
            },
            {
                src:"images/photogallery/image 40.png",
                alt:"img-1"
            },
            {
                src:"images/photogallery/image 41.png",
                alt:"img-1"
            },
            {
                src:"images/photogallery/image 39.png",
                alt:"img-1"
            },
        ];



        let _more = '';
        for(let i = 0; i < _obj.length; i ++) {
            let _item = _obj[i];
            _more += ` <div>
                        <img src="${_item.src}" alt="${_item.alt}"/>
                    </div>`;
        }

        return `<div class="photo-list" id="more-photo-list"> ${_more} </div>`;

    }
    function webinars() {
        let obj = [
            {
                src: 'https://www.youtube.com/embed/tgbNymZ7vqY?controls=0',
                description: 'Основные ошибки, которые допускают родители при общении с подростком наркоманом',
                date: '06.07.20'
            },
            {
                src: 'https://www.youtube.com/embed/tgbNymZ7vqY?controls=0',
                description: 'Как узнать зависимый ли мой ребенок?',
                date: '06.07.20'
            },
            {
                src: 'https://www.youtube.com/embed/tgbNymZ7vqY?controls=0',
                description: 'Основные ошибки, которые допускают родители при общении с подростком наркоманом',
                date: '06.07.20'
            },
            {
                src: 'https://www.youtube.com/watch?v=f4Mc-NYPHaQ',
                description: 'Основные ошибки, которые допускают родители при общении с подростком наркоманом',
                date: '06.07.20'
            },
            {
                src: 'https://www.youtube.com/embed/tgbNymZ7vqY?controls=0',
                description: 'Как узнать зависимый ли мой ребенок?',
                date: '06.07.20'
            },
            {
                src: 'https://www.youtube.com/embed/tgbNymZ7vqY?controls=0',
                description: 'Основные ошибки, которые допускают родители при общении с подростком наркоманом',
                date: '06.07.20'
            },
            {
                src: 'https://www.youtube.com/watch?v=pMYCOYjIKrE',
                description: 'Основные ошибки, которые допускают родители при общении с подростком наркоманом',
                date: '06.07.20'
            },
            {
                src: 'https://www.youtube.com/embed/tgbNymZ7vqY?controls=0',
                description: 'Как узнать зависимый ли мой ребенок?',
                date: '06.07.20'
            },
            {
                src: 'https://www.youtube.com/embed/tgbNymZ7vqY?controls=0',
                description: 'Основные ошибки, которые допускают родители при общении с подростком наркоманом',
                date: '06.07.20'
            },
        ];

        let _more = '';
        for(let i = 0; i < obj.length; i ++) {
            let _item = obj[i];
            _more += ` <div>
                    <div class="top">
                        <iframe
                                src="${_item.src}">
                        </iframe>
                    </div>
                    <div class="bottom">
                        <p>${_item.description}</p>
                        <label>${_item.date}</label>
                    </div>
                </div>`;
        }

        return `<div class="webinars-list" id="more-webinars"> ${_more} <div>`;
    }
    function specialists() {
        let obj = [
            {
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
        for(let i = 0; i < obj.length; i ++) {
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
});
