let pic = img.getElementsByTagName('img');
let picTimer;
let index = 0;
// 创建小圆点
makePoint();
listenToUser();
autoPlay();

function listenToUser() {
  points.addEventListener('click', function (e) {
    for (let i = 0; i < points.children.length; i++) {
      points.children[i].classList.remove('redPoint')
      if (points.children[i] === e.target) {
        index = i;
        translatePic(index);
        redPoint(index);
      }
    }
  }, false);
  img.addEventListener('mouseenter', function (e) {
    clearInterval(picTimer);
  }, false)
  img.addEventListener('mouseleave', function (e) {
    setTime(1500);
  }, false)
}
function autoPlay() {
  clearInterval(picTimer);
  setTime(1500)
}
function setTime(time){
  picTimer = setInterval(function () {
    translatePic(index);
    for (let i = 0; i < points.children.length; i++) {
      points.children[i].classList.remove('redPoint')
    }
    redPoint(index);
    index++ && (index = index % 3);
  }, time);
}
function redPoint(i){
  points.children[i].classList.add('redPoint');
}
function translatePic(i) {
  img.style.transform = `translateX(${-i * 200}px)`;
}
function makePoint() {
  for (let i = 0; i < pic.length; i++) {
    points.appendChild(document.createElement('span'));
  }
  redPoint(0);
}