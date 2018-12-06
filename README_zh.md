[English](https://github.com/HandsomeWalker/handsome-exception/blob/master/README.md) | 中文
# handsome-exception
简单对象链式调用异常处理器
# 安装
```
npm install --save handsome-exception
```
# 用法
```
import handler from 'handsome-exception';

let obj = handler({name: 'jack'}, 'exception!');
console.log(obj.name()); // jack
console.log(obj.e.r.r.o.r()); // exception!
```
# 模板语法使用(vue)

```
<template>
  <div id="handsome">
    {{obj.name()}} <!-- jack -->
    {{obj.e.r.r.o.r()}} <!-- 出错啦! -->
  </div>
</template>

<script>
import handler from 'handsome-exceptions';
export default {
  name: 'handsome',
  data() {
    return {
      obj: null
    }
  },
  created() {
    this.obj = handler({name: 'jack'}, '出错啦!');
  },
  methods: {

  }
}
</script>
<style scoped>
</style>
```