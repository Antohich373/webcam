const swipers = new Swiper('.opportunities-slide-container', {

    breakpoints: {
    320: {
        slidesPerView: 1,
        spaceBetween: -30,
    },
    360: {
        slidesPerView: 1.5,
        spaceBetween: 70,
    },
    450: {
        spaceBetween: 20,
    },

    500: {
        slidesPerView: 2,
        spaceBetween: 200,
    },

    600: {
        slidesPerView: 2.5,
        spaceBetween: 150,
    },
    800: {
        spaceBetween: 0,
        slidesPerView: 3,
        watchOverflow: true,
    },
    1000: {
        spaceBetween: 0,
        slidesPerView: 2.5,
        watchOverflow: true,
    },

    1250: {
        loop: false,
        spaceBetween: 0,
        slidesPerView: 3,
        watchOverflow: true,
    },
    // 1000: {
    //     loop: false,
    //     centeredSledes: false,
    //     spaceBetween: 5,
    //     slidesPerView: 3,
    //     watchOverflow: true,
    // },
    },
    loop: true,
});

const swiper = new Swiper('.conditions-slide-container', {

    breakpoints: {
    320: {
        slidesPerView: 1,
        spaceBetween: -30,
    },
    360: {
        slidesPerView: 1.5,
        spaceBetween: 70,
    },
    450: {
        spaceBetween: 150,
    },

    500: {
        slidesPerView: 2,
        spaceBetween: 200,
    },

    600: {
        slidesPerView: 3,
        spaceBetween: 200,
    },
    800: {
        spaceBetween: 0,
        slidesPerView: 2.5,
        watchOverflow: true,
    },
    1000: {
        spaceBetween: 0,
        slidesPerView: 3,
        watchOverflow: true,
    },

    1250: {
        loop: false,
        spaceBetween: 0,
        slidesPerView: 4,
        watchOverflow: true,
    },
    // 1000: {
    //     loop: false,
    //     centeredSledes: false,
    //     spaceBetween: 5,
    //     slidesPerView: 3,
    //     watchOverflow: true,
    // },
    },
    loop: true,
});

const reviews = new Swiper('.reviews-slide-container', {
      navigation: {
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
            roundLengths: true,
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: true,
            roundLengths: true,
        },

        1700: {
            slidesPerView: 5,
            spaceBetween: -60,
            centeredSlides: true,
            roundLengths: true,
        },
    },

    loop: true,
});





// setTimeout(function () {
//     blockItem[j].style.setProperty('display', 'none')
// }, 300)

let blockItem = document.querySelectorAll('.quiz-box__form__block');
let input = document.querySelectorAll('.quiz-box__form__block__wrap__question__radio');

//переключение с первого квиза на второй
for(let i = 0; i < document.querySelectorAll('.quiz-1').length; i++) {
    document.querySelectorAll('.quiz-1')[i].addEventListener('click', function() {
        for(let i = 0; i < blockItem.length; i++) {
            blockItem[i].classList.remove('quiz-box__form__block-active');
        }
        document.querySelector('.quizblock-2').classList.toggle('quiz-box__form__block-active')
        document.querySelector('.quiz-prev-2').classList.add('quiz-prev-quiz-2')
        document.querySelector('.quiz-box__cyrent__number').innerHTML = '2'
        document.querySelector('.quiz-box__progress-bar__current').style = 'width: 66%'
    })
}

document.querySelector('.quiz-prev-2').addEventListener('click', function() {
    for(let i = 0; i < blockItem.length; i++) {
            blockItem[i].classList.remove('quiz-box__form__block-active');
    }
    document.querySelector('.quizblock-1').classList.toggle('quiz-box__form__block-active')
    document.querySelector('.quiz-prev-2').classList.remove('quiz-prev-quiz-2')
    document.querySelector('.quiz-box__progress-bar__current').style = 'width: 33%'
    document.querySelector('.quiz-box__cyrent__number').innerHTML = '1'
})

//переключение с второго квиза на третий
for(let i = 0; i < document.querySelectorAll('.quiz-2').length; i++) {
    document.querySelectorAll('.quiz-2')[i].addEventListener('click', function() {
        for(let i = 0; i < blockItem.length; i++) {
            blockItem[i].classList.remove('quiz-box__form__block-active');
        }
        document.querySelector('.quizblock-3').classList.toggle('quiz-box__form__block-active')
        document.querySelector('.quiz-prev-2').classList.remove('quiz-prev-quiz-2')
        document.querySelector('.quiz-pre-3').classList.add('quiz-prev-quiz-2')
        document.querySelector('.quiz-box__cyrent__number').innerHTML = '3'
        document.querySelector('.quiz-box__progress-bar__current').style = 'width: 100%'
    })
}

document.querySelector('.quiz-pre-3').addEventListener('click', function() {
    for(let i = 0; i < blockItem.length; i++) {
            blockItem[i].classList.remove('quiz-box__form__block-active');
    }
    document.querySelector('.quizblock-2').classList.toggle('quiz-box__form__block-active')
    document.querySelector('.quiz-prev-2').classList.add('quiz-prev-quiz-2')
    document.querySelector('.quiz-pre-3').classList.remove('quiz-prev-quiz-2')
    document.querySelector('.quiz-box__progress-bar__current').style = 'width: 66%'
    document.querySelector('.quiz-box__cyrent__number').innerHTML = '2'
})

//переключение с третьего квиза на четвертый 
for(let i = 0; i < document.querySelectorAll('.quiz-3').length; i++) {
    document.querySelectorAll('.quiz-3')[i].addEventListener('click', function() {
        for(let i = 0; i < blockItem.length; i++) {
            blockItem[i].classList.remove('quiz-box__form__block-active');
        }
        document.querySelector('.quizblock-4').classList.toggle('quiz-box__form__block-active')
        //
        document.querySelector('.quiz-box__progress-bar').classList.add('quiz-box__progress-bar-remove')
        document.querySelector('.quiz-box__cyrent').classList.add('quiz-box__cyrent-remove')
        document.querySelector('.quiz-prev-2').classList.remove('quiz-prev-quiz-2')
        document.querySelector('.quiz-pre-3').classList.remove('quiz-prev-quiz-2')
    })
}

//переключение с 4 квиза на завершающий
document.querySelector('.quiz-box__form').addEventListener('submit', function(evt) {
    evt.preventDefault();
    var data = new FormData(this) // Сборка формы 
    var url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url, {
        method: 'post',
        headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: data // Отправка самой формы
    })
    .then(response => response.json())
    .then((json) => { // Ответ
        if (json.id === 101) { // Для примера проверка пройдена если id === 101
            for(let i = 0; i < blockItem.length; i++) {
                blockItem[i].classList.remove('quiz-box__form__block-active');
            }
            document.querySelector('.quizblock-5').classList.toggle('quiz-box__form__block-active')
            document.querySelector('.quiz-box').classList.add('quiz-box-active')
        }else {
        console.log(json)
        }

    })
    .catch(err => console.log(err));
})


document.querySelector('.quizblock-5__img__button').addEventListener('click', function() {
        for(let i = 0; i < blockItem.length; i++) {
            blockItem[i].classList.remove('quiz-box__form__block-active');
        }
        document.querySelector('.quizblock-1').classList.toggle('quiz-box__form__block-active')
        document.querySelector('.quiz-box__progress-bar').classList.remove('quiz-box__progress-bar-remove')
        document.querySelector('.quiz-box__cyrent').classList.remove('quiz-box__cyrent-remove')
        document.querySelector('.quiz-box__progress-bar__current').style = 'width: 33%'
        document.querySelector('.quiz-box__cyrent__number').innerHTML = '1'
        document.querySelector('.quiz-box__form__block__input').value = ''
        document.querySelector('.quiz-box').classList.remove('quiz-box-active')
        let form = document.querySelector('.quiz-box__form');
        let checbox = form.querySelectorAll("input[type=radio]");
        checbox.forEach(function(el) {
            el.checked = false;
        });
})


//АНКЕТА
document.querySelector('.questionnaire__form').addEventListener('submit', function(evt) {
    evt.preventDefault();
    var data = new FormData(this) // Сборка формы 
    var url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url, {
        method: 'post',
        headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: data // Отправка самой формы
    })
    .then(response => response.json())
    .then((json) => { // Ответ
        if (json.id === 101) { // Для примера проверка пройдена если id === 101
            document.querySelector('.successful-sending').classList.add('successful-sending-active')
            document.querySelector('.modal__show').classList.add('modal-call-active');
        }else {
        console.log(json)
        }

    })
    .catch(err => console.log(err));
})

document.querySelector('.successful-sending__button').addEventListener('click', function() {
    document.querySelector('.successful-sending').classList.remove('successful-sending-active');
    document.querySelector('.modal__show').classList.remove('modal-call-active');
    document.querySelector('.questionnaire__form__name').value = ''
    document.querySelector('.questionnaire__form__tel').value = ''
    document.querySelector('.questionnaire__form__number').value = ''
    document.querySelector('.questionnaire__form__file').value = ''
})

document.querySelector('.successful-sending__close').addEventListener('click', function() {
    document.querySelector('.successful-sending').classList.remove('successful-sending-active');
    document.querySelector('.modal__show').classList.remove('modal-call-active');
    document.querySelector('.questionnaire__form__name').value = ''
    document.querySelector('.questionnaire__form__tel').value = ''
    document.querySelector('.questionnaire__form__number').value = ''
    document.querySelector('.questionnaire__form__file').value = ''
})

//ЗАКАЗАТЬ ЗВОНОК
document.querySelector('.modal-call__form').addEventListener('submit', function(evt) {
    evt.preventDefault();
    var data = new FormData(this) // Сборка формы 
    var url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url, {
        method: 'post',
        headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: data // Отправка самой формы
    })
    .then(response => response.json())
    .then((json) => { // Ответ
        if (json.id === 101) { // Для примера проверка пройдена если id === 101
            document.querySelector('.successful-sending').classList.add('successful-sending-active')
            document.querySelector('.modal__show').classList.add('modal-call-active'); 
            document.querySelector('.modal-call').classList.remove('modal-call-active')
            document.querySelector('.modal-call__form__input-name').value = ''
            document.querySelector('.modal-call__form__input-tel').value = ''
        }else {
        console.log(json)
        }

    })
    .catch(err => console.log(err));
})