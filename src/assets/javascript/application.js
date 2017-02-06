// import $ from 'jquery';

// // 対象のオブジェクトが２ペー目に入ればcolor_blackクラスを追加し、
// // そうでなければ削除する
// const checkSecondPageArea = (obj) => {
//   if ($(obj).offset().top > $('#js_second-page').offset().top) {
//     $(obj).addClass('color_black');
//   } else {
//     $(obj).removeClass('color_black');
//   }
// };

// const checkSecondPageAreaImage = (obj) => {
//   if ($(obj).offset().top > $('#js_second-page').offset().top) {
//     $(obj).removeClass('headerNav__image');
//     $(obj).addClass('headerNav__image--black');
//   } else {
//     $(obj).addClass('headerNav__image');
//     $(obj).removeClass('headerNav__image--black');
//   }
// };

// const changeColor = () => {
//   checkSecondPageArea('#js_nav > li');
//   checkSecondPageArea('#js_headerNav > li a');
//   checkSecondPageAreaImage('#js_headerNav__image');
// };

// // ローディングページをウィンドウのインナーの高さまで拡大
// const showLoadingPage = () => {
//   $('#js-load').css('min-height', window.innerHeight);
// };

// const pageInit = () => {
//   // 初期表示設定
//   $('#js_main_contents').css('display', 'block');
//   $('.js_page').height(window.innerHeight); // トップページの高さをウィンドウのインナーの高さまで拡大
//   $('#js_fade_in_up').addClass('fade_in_up');
//   $('#js_fade_in').addClass('fade_in');
//   $('#js_nav').addClass('flash');
// };

// // HTML要素を読み込んだら実行
// document.addEventListener('DOMContentLoaded', () => {
//   showLoadingPage();
//   // ヘッダーとナビゲーションの色を変える
//   window.addEventListener('scroll', changeColor, false);
// }, false);

// // 画像の読み込みが終わったら実行する
// $(window).on('load', () => {
//   pageInit();
//   // $.when($('#js-load').addClass('fade_out')).done($('#js-load').remove());
//   $('#js-load').addClass('fade_out');
//   $('#js-load').on('animationend', () => {
//     $('#js-load').remove();
//   });
// });

// $('#js_nav').click(() => {
//   $('html,body').animate({
//     scrollTop: $('#js_second-page').offset().top,
//   });
// });

// $('.js_toggleModalLink').click(() => {
//   $('#js-modallink').toggleClass('display_none').height(window.innerHeight);
// });


// 初期処理
$(() => {
  // landingpageやloadの高さをwindowのインナーの高さまで上げる
  $('.js-resize').height(window.innerHeight);
  $('.js-resize-contents').height(window.innerHeight - $('header').height());
  // navをクリックしたあと
  $('#js_nav').click(() => {
    $('html,body').animate({
      scrollTop: $('#js_second-page').offset().top,
    });
  });
  // mordalリンククリック時に
  $('.js_toggleModalLink').click(() => {
    $('#js-modallink').toggleClass('display_none').height(window.innerHeight);
  });
});

// $(window).load(() => {
//   $('.js-fadeout').addClass('fade_out');
//   $('.js-fadeout').on('animationend', () => {
//     $('.js-fadeout').remove();
//   });
// });

// Vue.component('card-item', {
//   template: `
//     <div>
//     </div>
//   `
// });


const vueApp = new Vue({
  el: '#vueapp',
  data: {
    cardView: true,
    archives: [
      { title: 'inHouseUseの作り方', date: '2017/02/08', image: 'cap20170208_300x200.png', comment: '今まで紹介した技術要素の使いどころを紹介', url: './20170208.html' },
      { title: 'JavaScript 2016 with ES6', date: '2017/01/25', image: 'cap20170118_300x200.png', comment: 'Javascriptの標準仕様 EcmaScript2016についての紹介', url: './20170118.html' },
      { title: 'フロントエンド開発環境②', date: '2017/01/18', image: 'cap20170111_300x200.png', comment: '引き続き開発環境周りの解説', url: './20170111.html' },
      { title: 'フロントエンド開発環境①', date: '2017/01/11', image: 'cap20170111_300x200.png', comment: 'フロントエンド開発環境の定番に関して実例とセットで解説', url: './20170111.html' },
      { title: 'jQueryを使ってみよう②', date: '2016/12/14', image: 'cap20161214_300x200.png', comment: 'jQueryの使い方を実例を使って説明。Ajaxのとは何か？という内容についても解説', url: './20161214.html' },
      { title: 'jQueryを使ってみよう①', date: '2016/12/07', image: 'cap20161207_300x200.png', comment: 'jQueryの使い方を基本から説明。ID/Classセレクタの使い方や導入手順を説明', url: './20161207.html' },
      { title: '忙しい人のためのHTML5入門入門', date: '2016/11/30', image: 'cap20161130_300x200.png', comment: 'HTML5とは何か？HTML5でできることとは?またHTML5の勉強方法に関しての説明', url: './20161130.html' },
    ],
  },
  methods: {
    toggleVue() {
      this.cardView = !this.cardView;
    },
  },
});

$(document).ready(() => {
  $('.collapsible').collapsible();
});

// console.log(archiveVueApp.view);
