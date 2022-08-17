## 说明

vee-validate 是专门用来做表单验证的vue插件

**我们当前用的是2.x的版本**，最新的3.x版本使用比较麻烦

GitHub地址：https://github.com/logaretm/vee-validate

中文地址(**vue3要使用4.x版本**)：https://vee-validate.logaretm.com/v4/

vee-validate已经帮我们定义了一些内置的验证规则：https://github.com/logaretm/vee-validate/tree/v2/src/rules

## 使用

### 1. 引入

下载：npm install -S vee-validate@2.2.15

引入插件：

- import Vue from 'vue'
- import VeeValidate from 'vee-validate'
- Vue.use(VeeValidate)

### 2. 基本使用

```vue
// 表单内元素当中必须要使用name指定验证的字段名称
<input v-model="phone" name="phone" v-validate={required: true, regex: /^1\d{10}$/} :class="{invalid: errors.has('phone')}" >

// 获取phone字段验证错误的提示信息
<span class="error-msg">{{ errors.first('phone') }}</span>

// 对所有表单项进行验证
const success = await this.$validator.validateAll()
```

问题：提示文本默认都是英文的



### 3. 提示文本信息本地化

就是为了让报错是中文

```js
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN' // 引入中文message

VeeValidate.Validator.localize('zh_CN', {
  messages: {
    ...zh_CN.messages,
    // 修改内置规则的message
    is: (field) => `${field}必须与密码相同` 
  },
  // 给校验的field属性名映射中文名称
  attributes: {
    phone: '手机号',
    code: '验证码'
  }
})
```



### 4. 自定义校验规则

```js
VeeValidate.Validator.extend('agree', {
  validate: value => {
    return value
  },
  getMessage: field => field + '必须同意'
})
```













