```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      // 数据代理 --- obj2 代理 obj1 --- 最终obj2中有obj1的属性，并且obj2还可以拥有自己的属性
      obj1 = {
        a: 10,
      }
      obj2 = {
        b: 20,
      }

      Object.defineProperty(obj2, 'a', {
        get() {
          return obj1.a
        },
        set(value) {
          obj1.a = value
        },
      })
    </script>
  </body>
</html>
```

