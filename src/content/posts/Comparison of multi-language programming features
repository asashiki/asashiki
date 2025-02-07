---
title: 多语言编程特性对比
published: 2025-02-8
description: 'go、swift、javascript、python、ruby五门编程语言一起学'
image: ''
tags: [go,swift,javascript,python,ruby]
category: '学习'
draft: false 
lang: ''
---


# 多语言编程特性对比

(go、swift、javascript、python、ruby)

<details><summary>不重要的事</summary><p>
寒假闲得没事在b站刷到的五门编程语言一起学的[课程](https://space.bilibili.com/410555632/lists/4266400?type=season),刚好都是我不太熟悉的,想着一次学五门也太赚了就整理了一下笔记,还没更完之后可能还会补充,关于这五门语言我是这样记的:ruby(日本人的),python(荷兰人的/新东西),JavaScript(老东西),go(谷歌的),swift(苹果的)
</p></details>

---

## 变量

### 变量声明
```go
// Go（类型推断）
age := 32          
var name string = "John" 

// Swift（显式类型声明）
var name: String = "Swift"
var age = 32 // 类型推断
```

```javascript
// JavaScript
let name = "JS";
var age = 25;      // 旧式声明
const PI = 3.14;   // 常量
```

```python
# Python
name = "Python"    # 动态类型
age = 20           # 重新赋值不同类型
```

```ruby
# Ruby
name = "Ruby"
age = 30
```

### 变量类型特性
| 特性        | 语言                          |
|-----------|-----------------------------|
| 静态类型      | Go, Swift（编译时类型检查）          |
| 动态类型      | Python, Ruby, JavaScript（运行时类型）|

### 常量声明对比
```go
// Go
const PI = 3.1415
const (
    StatusOK = 200
    StatusNotFound = 404
)
```

```swift
// Swift
let maxAttempts = 3
let defaultColor = UIColor.red
```

```javascript
// JavaScript
const API_ENDPOINT = "https://api.example.com";
```

```python
# Python（约定式常量）
MAX_USERS = 1000  # 实际仍是变量，靠命名约定
```

```ruby
# Ruby
MAX_RETRIES = 3   # 常量首字母大写
```

## 条件语句与循环语句

### if语句对比
```go
// Go（必须布尔表达式）
if x > 10 {
    //...
} else if x > 5 {
    //...
} else {
    //...
}
```

```swift
// Swift（条件可省略括号）
if x > 10 {
    //...
} else if x > 5 {
    //...
}
```

```python
# Python（缩进敏感）
if x > 10:
    # ...
elif x > 5:
    # ...
else:
    # ...
```

```javascript
// JavaScript
if (x > 10) {
    //...
} else if (x > 5) {
    //...
}
```

```ruby
# Ruby（end结尾）
if x > 10
  # ...
elsif x > 5
  # ...
else
  # ...
end
```

### 循环语句对比
```go
// Go（只有for循环）
for i := 0; i < 10; i++ {
    //...
}

// 类似while
for x < 100 {
    x *= 2
}
```

```swift
// Swift
for i in 0..<10 {
    print(i)
}

while x < 100 {
    x *= 2
}
```

```python
# Python
for i in range(10):
    print(i)

while x < 100:
    x *= 2
```

```javascript
// JavaScript
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// for...of
for (const item of array) { /*...*/ }
```

```ruby
# Ruby
10.times do |i|
  puts i
end

(0..9).each { |i| puts i }
```

## 函数

### 参数传递语义
| 语言        | 值类型                         | 引用类型                     |
|-----------|-----------------------------|--------------------------|
| Go        | 基本类型、数组、结构体               | 切片、map、指针               |
| Swift     | 结构体、枚举、元组（值拷贝）           | 类实例（自动引用计数）             |
| Python    | 不可变对象（数字、字符串、元组）         | 可变对象（列表、字典）             |
| JavaScript| 基本类型（number, string等）       | 对象（Object, Array等）       |
| Ruby      | 不可变对象（数字、符号）              | 可变对象（数组、哈希）              |

### 参数修改示例
```go
// Go 指针示例
func modifyValue(p *int) {
    *p = 100
}

x := 10
modifyValue(&x)
```

```swift
// Swift inout参数
func modifyValue(_ num: inout Int) {
    num = 100
}

var x = 10
modifyValue(&x)
```

## 函数式编程

### 匿名函数与高阶函数
```python
# Python
numbers = [1,2,3,4]
even = list(filter(lambda x: x%2 == 0, numbers))
squares = [x**2 for x in numbers]  # 列表解析
```

```javascript
// JavaScript
const numbers = [1,2,3,4];
const even = numbers.filter(x => x%2 === 0); 
```

```ruby
# Ruby
numbers = [1,2,3,4]
even = numbers.select { |x| x.even? }
```

```swift
// Swift
let numbers = [1,2,3,4]
let even = numbers.filter { $0 % 2 == 0 }
```

```go
// Go
numbers := []int{1,2,3,4}
even := make([]int, 0)
for _, n := range numbers {
    if n%2 == 0 {
        even = append(even, n)
    }
}
```

### 闭包特性对比
```javascript
// JavaScript（词法作用域）
function createCounter() {
    let count = 0;
    return () => ++count;
}
```

```python
# Python（nonlocal声明）
def create_counter():
    count = 0
    def counter():
        nonlocal count
        count += 1
        return count
    return counter
```

```swift
// Swift（自动捕获）
func createCounter() -> () -> Int {
    var count = 0
    return {
        count += 1
        return count
    }
}
```







