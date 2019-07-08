const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

// 动态生成圆点
const images = Array.from($$(".carousel .panels img"))
const dotsWrapper = $(".carousel .actions .dots")
for (let i = 0; i < images.length; i++) {
  let span = document.createElement("span")
  dotsWrapper.appendChild(span)
}
// 初始化第一张照片和圆点
$(".carousel .actions .dots span:nth-child(1)").classList.add("active")
$(".carousel .panels img:nth-child(1)").classList.add("active")
const dots = Array.from($$(".carousel .actions .dots span")) // 关键！

// 给圆点绑定点击事件
dotsWrapper.onclick = function(e) {
  if (e.target.tagName !== 'SPAN') return
  let index = dots.indexOf(e.target)
  setDot(index)
  setPanel(index)
}
pre.onclick = function(){
  let index = dots.indexOf($(".carousel .actions .dots span.active"))
  index = (index - 1 + dots.length) % dots.length  // 关键！
  setDot(index)
  setPanel(index)
}
next.onclick = function(){
  let index = dots.indexOf($(".carousel .actions .dots span.active"))
  index = (index + 1 + dots.length) % dots.length
  setDot(index)
  setPanel(index)
  
}
function setDot(index){
  dots.forEach((dot) => dot.classList.remove("active"))
  dots[index].classList.add("active")
}
function setPanel(index){
  images.forEach((img) => img.classList.remove("active"))
  images[index].classList.add("active")
}