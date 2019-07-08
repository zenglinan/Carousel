#### 要点
1. index = (index - 1 + dots.length) % dots.length  // 圆点循环算法
2. 查找元素在同级元素中的位置
```
const dots = Array.from($$(".carousel .actions .dots span"))
let index = dots.indexOf(dot)
```