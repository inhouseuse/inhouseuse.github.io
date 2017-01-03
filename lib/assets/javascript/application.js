import $ from 'jquery';
// import Util from './lib/util';
// Util.showMsg();
// $('#h').click(() => {
//   alert('aaa');
// });

document.addEventListener('DOMContentLoaded', () => {
  // 初期表示設定
  $('.js_page').height(window.innerHeight); // トップページの高さをウィンドウのインナーの高さまで拡大
  $('#js_logo').addClass('fade_in_up');
}, false);
