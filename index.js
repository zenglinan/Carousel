let n = 1;
init();
setInterval(() => {
  makeLeave(getImg(n))
    .one('transitionend', (e) => {
      makeWait($(e.currentTarget));
    });
  makeCurrent(getImg(n+1));
  n += 1;
},3000)



function p(n) {
  if(n > 4){
    n = n % 4;
    if(n === 0){
      n = 4;
    }
  }
  return n;
}
function init() {
  $('#images > img:nth-child(1)').addClass('current').siblings().addClass('wait');
}
function getImg(n) {
  return $(`#images > img:nth-child(${p(n)})`);
}
function makeLeave($node) {
  $node.removeClass('current').addClass('leave');
  return $node;
}
function makeCurrent($node) {
  $node.removeClass('wait').addClass('current');
  return $node;
}
function makeWait($node) {
  $node.removeClass('leave').addClass('wait');
  return $node;
}
// setTimeout(() => {
//   $('#images > img:nth-child(1)').removeClass('current').addClass('leave')
//     .one('transitionend', (e) => {
//       $(e.currentTarget).removeClass('leave').addClass('wait');
//     });
//   $('#images > img:nth-child(2)').removeClass('wait').addClass('current');
// }, 2000)
// setTimeout(() => {
//   $('#images > img:nth-child(2)').removeClass('current').addClass('leave')
//     .one('transitionend', (e) => {
//       $(e.currentTarget).removeClass('leave').addClass('wait');
//     });
//   $('#images > img:nth-child(3)').removeClass('wait').addClass('current');
// }, 4000)
// setTimeout(() => {
//   $('#images > img:nth-child(3)').removeClass('current').addClass('leave')
//     .one('transitionend', (e) => {
//       $(e.currentTarget).removeClass('leave').addClass('wait');
//     });
//   $('#images > img:nth-child(4)').removeClass('wait').addClass('current');
// }, 6000)
// setTimeout(() => {
//   $('#images > img:nth-child(4)').removeClass('current').addClass('leave')
//     .one('transitionend', (e) => {
//       $(e.currentTarget).removeClass('leave').addClass('wait');
//     });
//   $('#images > img:nth-child(1)').removeClass('wait').addClass('current');
// }, 8000)