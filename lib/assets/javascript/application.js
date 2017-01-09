import $ from 'jquery';
// import Util from './lib/util';
// Util.showMsg();
// $('#h').click(() => {
//   alert('aaa');
// });

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

document.addEventListener('DOMContentLoaded', () => {
  // 初期表示設定
  $('.js_page').height(window.innerHeight); // トップページの高さをウィンドウのインナーの高さまで拡大
  $('#js_fade_in_up').addClass('fade_in_up');
  $('#js_fade_in').addClass('fade_in');
  $('#js_nav').addClass('flash');

  // ヘッダーとナビゲーションの色を変える
  window.addEventListener('scroll', changeColor, false);
}, false);

$('#js_nav').click(() => {
  $('html,body').animate({
    scrollTop: $('#js_second-page').offset().top,
  });
});
