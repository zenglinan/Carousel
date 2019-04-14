let img = images.children;
let lastIndex = 1;  // 上一个索引
let timer = null;
// 制作按钮
addButton();
// 克隆第一张和最后一张，并插入
cloneNode();
// 点哪个动哪个
listenToClick();
// 上一张、下一张
let btnLen = btnWrapper.children.length;
next.addEventListener('click', function () {
  lastIndex++;
  if (lastIndex > btnLen) {
    lastIndex = btnLen;
    goToSlide(1);
  } else {
    goToSlide(lastIndex);
  }
})
previous.addEventListener('click', function () {
  lastIndex--;
  if (lastIndex < 1) {
    lastIndex = 1;
    goToSlide(4);
  } else {
    goToSlide(lastIndex);
  }
})
function listenToClick() {
  btnWrapper.addEventListener('click', function (e) {
    index = e.target.innerText;
    if (!e.target.tagName === "SPAN") { return; }
    goToSlide(index);
  })
}
function goToSlide(index) {
  if (lastIndex == 1 && index == btnLen) {  // 如果上一张是第一张并且当前点的是最后一张
    to(0);  // 先滑到最左边（克隆的最后一张）
    images.addEventListener('transitionend', function () {  // 动画结束后马上切到真的最后一张  
      firstOrEndTo(-400 * btnLen);
      images.removeEventListener('transitionend', arguments.callee);
    })
  } else if (lastIndex == btnLen && index == 1) {  // 如果上一张是最后一张并且当前点的是最后一张
    console.log('here')
    to(-400 * (btnLen + 1));  // 先滑到最右边（克隆的第一张）
    images.addEventListener('transitionend', function () {  // 然后动画结束后马上切到真的第一张
      firstOrEndTo(-400)
      images.removeEventListener('transitionend', arguments.callee);
    })
  } else {
    // 正常情况
    to(-400 * index);
  }
  lastIndex = index;
}
function to(pos) {
  images.style.transform = `translateX(${pos}px)`;
}
function cloneNode() {
  let firstClone = img[0].cloneNode(true);
  let lastClone = img[img.length - 1].cloneNode(true);
  images.appendChild(firstClone);
  images.prepend(lastClone);
};
function firstOrEndTo(pos) {
  images.style.display = "none";
  images.getBoundingClientRect();
  images.style.transform = `translateX(${pos}px)`
  images.style.display = "flex";
  images.removeEventListener('transitionend', arguments.callee);
}
function addButton() {
  for (let i = 1; i <= img.length; i++) {
    let newBtn = document.createElement('span');
    let btnNum = document.createTextNode(`${i}`);
    newBtn.appendChild(btnNum);
    btnWrapper.appendChild(newBtn);
  }
}