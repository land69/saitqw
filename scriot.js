// document.querySelectorAll('nav a').forEach(link => {
//     link.addEventListener('click', function(e) {
//         e.preventDefault();
//         const target = this.getAttribute('href');
//         document.querySelectorAll('div').forEach(div => {
//             if (div.id === target) {
//                 div.style.display = 'block';
//             } else {
//                 div.style.display = 'none';
//             }
//         });
//     });
// });

// Добавьте здесь код для теста и настроек
window.onscroll = function() {
    var menu = document.getElementById('bottom-menu');
    if (window.pageYOffset >  200) { // Если прокручено больше  200px
      menu.style.display = 'none'; // Скрыть меню
    } else {
      menu.style.display = 'block'; // Показать меню
    }
  };
  
  var lastScrollTop =  0;
  
  window.addEventListener("scroll", function(){   
     var st = window.pageYOffset || document.documentElement.scrollTop;   
     if (st > lastScrollTop){
         document.getElementById("bottom-menu").style.display = 'none';
     } else {
        document.getElementById("bottom-menu").style.display = 'block';
     }
     lastScrollTop = st <=  0 ?  0 : st; // Установите последнюю позицию прокрутки в  0, если пользователь прокручивает вверх до самого верха страницы
  }, false);

  