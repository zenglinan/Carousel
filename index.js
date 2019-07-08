function Coursel(root) {
  this.$ = s => document.querySelector(s)
  this.$$ = s => document.querySelectorAll(s)
  this.root = this.$(root)
  this.init()
  this.dots = Array.from(this.$$(".carousel .actions .dots span"))  // 转为数组，后续才可以直接查找元素的索引 
  this.bindEvents()
}
Coursel.prototype.init = function () {
  // 动态生成圆点
  this.images = Array.from(this.$$(".carousel .panels img"))
  this.dotsWrapper = this.$(".carousel .actions .dots")
  for (let i = 0; i < this.images.length; i++) {
    let span = document.createElement("span")
    this.dotsWrapper.appendChild(span)
  }
  // 初始化第一张照片和圆点
  this.$(".carousel .actions .dots span:nth-child(1)").classList.add("active")
  this.$(".carousel .panels img:nth-child(1)").classList.add("active")
}
Coursel.prototype.bindEvents = function () {
  this.dotsWrapper.onclick = (e) => {
    if (e.target.tagName !== 'SPAN') return
    let index = this.dots.indexOf(e.target)
    this.setDot(index)
    this.setPanel(index)
  }
  pre.onclick = () => {
    let index = this.dots.indexOf(this.$(".carousel .actions .dots span.active"))
    index = (index - 1 + this.dots.length) % this.dots.length  // 关键！
    this.setDot(index)
    this.setPanel(index)
  }
  next.onclick = () => {
    let index = this.dots.indexOf(this.$(".carousel .actions .dots span.active"))
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
  console.log(this)
  this.images.forEach((dot) => dot.classList.remove("active"))
  this.images[index].classList.add("active")
}

new Coursel(".carousel")