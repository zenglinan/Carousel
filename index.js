function Coursel(root) {
  this.$ = s => document.querySelector(s)
  this.$$ = s => document.querySelectorAll(s)
  this.root = root
  this.init()
  this.dots = Array.from(this.$$(`${this.root} .actions .dots span`))  // 转为数组，后续才可以直接查找元素的索引 
  this.bindEvents()
}
Coursel.prototype.init = function () {
  // 动态生成圆点
  this.images = Array.from(this.$$(`${this.root} .panels img`))
  this.dotsWrapper = this.$(`${this.root} .actions .dots`)
  for (let i = 0; i < this.images.length; i++) {
    let span = document.createElement("span")
    this.dotsWrapper.appendChild(span)
  }
  // 初始化第一张照片和圆点
  this.$(`${this.root} .actions .dots span:nth-child(1)`).classList.add("active")
  this.$(`${this.root} .panels img:nth-child(1)`).classList.add("active")
}
Coursel.prototype.bindEvents = function () {
  this.dotsWrapper.onclick = (e) => {
    if (e.target.tagName !== 'SPAN') return
    let index = this.dots.indexOf(e.target)
    this.setDot(index)
    this.setPanel(index)
  }
  this.$(`${this.root} .pre`).onclick = () => {
    let index = this.dots.indexOf(this.$(`${this.root} .actions .dots span.active`))
    index = (index - 1 + this.dots.length) % this.dots.length  // 关键！
    this.setDot(index)
    this.setPanel(index)
  }
  this.$(`${this.root} .next`).onclick = () => {
    let index = this.dots.indexOf(this.$(`${this.root} .actions .dots span.active`))
    index = (index + 1 + this.dots.length) % this.dots.length
    this.setDot(index)
    this.setPanel(index)
  }
}
Coursel.prototype.setDot = function (index) {
  this.dots.forEach((dot) => dot.classList.remove("active"))
  this.dots[index].classList.add("active")
}
Coursel.prototype.setPanel = function (index) {
  this.images.forEach((img) => img.classList.remove("active"))
  this.images[index].classList.add("active")
}

new Coursel(".carousel1")
new Coursel(".carousel2")

// const $ = s => document.querySelector(s)
// const $$ = s => document.querySelectorAll(s)

// // 动态生成圆点
// const images = Array.from($$(".carousel .panels img"))
// const dotsWrapper = $(".carousel .actions .dots")
// for (let i = 0; i < images.length; i++) {
//   let span = document.createElement("span")
//   dotsWrapper.appendChild(span)
// }
// // 初始化第一张照片和圆点
// $(".carousel .actions .dots span:nth-child(1)").classList.add("active")
// $(".carousel .panels img:nth-child(1)").classList.add("active")
// const dots = Array.from($$(".carousel .actions .dots span")) // 关键！

// // 给圆点绑定点击事件
// dotsWrapper.onclick = function(e) {
//   if (e.target.tagName !== 'SPAN') return
//   let index = dots.indexOf(e.target)
//   setDot(index)
//   setPanel(index)
// }
// pre.onclick = function(){
//   let index = dots.indexOf($(".carousel .actions .dots span.active"))
//   index = (index - 1 + dots.length) % dots.length  // 关键！
//   setDot(index)
//   setPanel(index)
// }
// next.onclick = function(){
//   let index = dots.indexOf($(".carousel .actions .dots span.active"))
//   index = (index + 1 + dots.length) % dots.length
//   setDot(index)
//   setPanel(index)
// }
// function setDot(index){
//   dots.forEach((dot) => dot.classList.remove("active"))
//   dots[index].classList.add("active")
// }
// function setPanel(index){
//   images.forEach((img) => img.classList.remove("active"))
//   images[index].classList.add("active")
// }

