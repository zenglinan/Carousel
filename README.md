## 使用方法
1. HTML
```
<div class="carousel" id="carousel1">
    <div class="panels">
    <img src="xxx">
  </div>
  <div class="actions">
    <span class="pre">上一页</span>
    <div class="dots">
    </div>
    <span class="next">下一页</span>
  </div>
</div>
```
2. JS
```
new Coursel("#carousel1")
```
**注：carousel作为公有类，不能通过".carousel"绑定元素**
