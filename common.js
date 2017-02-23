
// //load content
// $('.load-btn').on('click', function() {
//     $('.content').load('content.html', function() {
//         console.log('Загрузили контент на сайт');
//     });
// });
// //DEFERED WHEN()
// $('.hide-btn').on('click', function() {
//     $.when(
//         $('.main3>img').slideUp(1000),
//         $('.main3>p').slideUp(3000)
//     ).then(function() {
//         $('.main3').text('Цепочка событий: Картинки+параграф-> контент');
//     }
//     );
// });
//json
$('.btn1').on('click', function() {
    $('.main2').load('user.json');
});
$('.btn2').on('click', function() {
    var user = 'https://jsonplaceholder.typicode.com/photos/1';
    $.getJSON(user, function(response) {
        console.log(response);
        $('.img').attr('src',response.thumbnailUrl);
    });
});
//PROMISE
$('.btn3').on('click', function() {
    let promise = new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve();
        },1500);
    });
    promise
        .then(() => {
            let x = 10;
            var user = 'https://jsonplaceholder.typicode.com/ph2otos/3';
            return $.getJSON(user, function(response) {
                $('.img').attr('src',response.thumbnailUrl);
            });
        })
        .then((photo) => {
            var userPhoto = photo;
            $('.paragraph').after('<p>Цепочка промисов закончена url фотографии= ' + photo + '</p>');
        })
        .catch((reject) => alert('Error! ' + reject));
        $('.paragraph').text('Сначала выполнится эта строчка, а промис выполнится асинхронно');
});

