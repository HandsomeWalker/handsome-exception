English | [中文](https://github.com/HandsomeWalker/handsome-exception/blob/master/README_zh.md)
# handsome-exception
simple exceptions handler for error when chained calling from object
# Install
```
npm install --save handsome-exception
```
# Usage
```
import handler from 'handsome-exception';

let obj = handler({name: 'jack'}, 'exception!');
console.log(obj.name()); // jack
console.log(obj.name.a.b.c.d()); // exception!
```
# Template syntax(vue)
```
<template>
  <div id="handsome">
    {{obj.name()}} <!-- jack -->
    {{obj.e.r.r.o.r()}} <!-- exception! -->
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
    this.obj = handler({name: 'jack'}, 'exception!');
  },
  methods: {

  }
}
</script>
<style scoped>
</style>
```