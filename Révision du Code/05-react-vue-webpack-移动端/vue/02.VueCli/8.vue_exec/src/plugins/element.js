import Vue from "vue";
import {
  Button,
  Card,
  Table,
  TableColumn,
  Pagination,
  Loading,
  Form,
  FormItem,
  Input,
  Message,
} from "element-ui";

Vue.use(Button);
Vue.use(Card);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Loading);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);

Vue.prototype.$message = Message;
