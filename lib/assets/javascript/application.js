import $ from 'jquery';
// import Util from './lib/util';
// import ArticleData from './lib/data';

// 対象のオブジェクトが２ペー目に入ればcolor_blackクラスを追加し、
// そうでなければ削除する
const checkSecondPageArea = (obj) => {
  if ($(obj).offset().top > $('#js_second-page').offset().top) {
    $(obj).addClass('color_black');
  } else {
    $(obj).removeClass('color_black');
  }
};

const checkSecondPageAreaImage = (obj) => {
  if ($(obj).offset().top > $('#js_second-page').offset().top) {
    $(obj).removeClass('headerNav__image');
    $(obj).addClass('headerNav__image--black');
  } else {
    $(obj).addClass('headerNav__image');
    $(obj).removeClass('headerNav__image--black');
  }
};

const changeColor = () => {
  checkSecondPageArea('#js_nav > li');
  checkSecondPageArea('#js_headerNav > li a');
  checkSecondPageAreaImage('#js_headerNav__image');
};

// ローディングページをウィンドウのインナーの高さまで拡大
const showLoadingPage = () => {
  $('#js-load').height(window.innerHeight);
};

const pageInit = () => {
  // 初期表示設定
  $('#js_main_contents').css('display', 'block');
  $('.js_page').height(window.innerHeight); // トップページの高さをウィンドウのインナーの高さまで拡大
  $('#js_fade_in_up').addClass('fade_in_up');
  $('#js_fade_in').addClass('fade_in');
  $('#js_nav').addClass('flash');
};

// HTML要素を読み込んだら実行
document.addEventListener('DOMContentLoaded', () => {
  showLoadingPage();
  // ヘッダーとナビゲーションの色を変える
  window.addEventListener('scroll', changeColor, false);
}, false);

// 画像の読み込みが終わったら実行する
$(window).on('load', () => {
  pageInit();
  // $.when($('#js-load').addClass('fade_out')).done($('#js-load').remove());
  $('#js-load').addClass('fade_out');
  $('#js-load').on('animationend', () => {
    $('#js-load').remove();
  });
});

$('#js_nav').click(() => {
  $('html,body').animate({
    scrollTop: $('#js_second-page').offset().top,
  });
});

// const articles = [
//   {
//     date: '20161130',
//     url: './20161130.html',
//     article__desc__title: 'app/assets/images/cap20161130.png',
//     article__desc__date: '忙しい人のためのフロントエンド開発環境ラインナップ',
//     article__desc__summary: 'フロントエンド開発環境の定番に関して実例とセットで解説',
//   },
// ];

// '20161207',
// '20161214',
// '20160111',


// const appArticle = new Vue({
//   el: '#app_article',
//   data: {
//     articles: [
//       {
//         date: '20170111',
//         url: './20170111.html',
//         imageUrl: 'app/assets/images/cap20170111.png',
//         article__desc__title: '忙しい人のためのフロントエンド開発環境ラインナップ',
//         article__desc__date: '2017-01-11',
//         article__desc__summary: 'フロントエンド開発環境の定番に関して実例とセットで解説',
//       },
//     ],
//   },
// });
