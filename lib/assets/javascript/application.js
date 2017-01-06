import $ from 'jquery';
// import Util from './lib/util';
// Util.showMsg();
// $('#h').click(() => {
//   alert('aaa');
// });

document.addEventListener('DOMContentLoaded', () => {
  // 初期表示設定
  $('.js_page').height(window.innerHeight); // トップページの高さをウィンドウのインナーの高さまで拡大
  $('#js_fade_in_up').addClass('fade_in_up');
  $('#js_fade_in').addClass('fade_in');
  // $('#js_nav').addClass('fade_in');
  $('#js_nav').addClass('flash');

  // for(let key in initialDisplayObj) {
  // }
}, false);

$('#js_nav').click(() => {
  $('html,body').animate({
    scrollTop: $('#js_second-page').offset().top,
  });
});

// let initialDisplayObj = {
//   fade_in_up: 'js_logo',
//   fade_in: 'js_nav',
//   flash: 'js_na',
// };

// let addClassObj = ($obj, className) => {
//   $obj.addClass(className);
// };
