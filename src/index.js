
 /*
 * HeyUI JavaScript Library
 * https://heyui.top/
 *
 * Copyright (C) Lan 2018
 * Released under the MIT license
 *
 */
import Affix from './components/affix';
import BackTop from './components/backtop';
import Badge from './components/badge';
import Checkbox from './components/checkbox';
import Circle from './components/circle';
import Category from './components/category';
import Datetime from './components/datetime';
import Dropdown from './plugins/dropdown';
import DropdownCustom from './components/dropdowncustom';
import DropdownMenu from './components/dropdownmenu';
import Form from './components/form';
import Menu from './components/menu';
import modal from './components/modal';
import Pagination from './components/pagination';
import Poptip from './components/poptip';
import Progress from './components/progress';
import Radio from './components/radio';
import Rate from './components/rate';
import Slider from './components/slider';
import Loading from './components/loading';
import Steps from './components/steps';
import Search from './components/search';
import Select from './components/select';
import Switch from './components/switch';
import SwitchList from './components/switchlist';
import { Table, TableItem } from './components/table';
import Tabs from './components/tabs';
import Tag from './components/tag';
import TagInput from './components/taginput';
import Tree from './components/tree';
import TreePicker from './components/treepicker';
import NumberInput from './components/numberinput';
import Tooltip from './components/tooltip';
import Uploader from './components/uploader';
import AutoComplete from './components/autocomplete';
import {
  Row,
  Col
} from './components/layout';
import Timeline from './components/timeline';
import { Button, ButtonGroup } from './components/button';

import style from './directives/style';
import tooltip from './directives/tooltip';
import wordcount from './directives/wordcount';
import wordlimit from './directives/wordlimit';
import autosize from './directives/autosize';
import $Modal from './plugins/modal';
import $Confirm from './plugins/confirm';
import $Message from './plugins/message';
import $Notice from './plugins/notice';
import $Loading from './plugins/loading';
import $LoadingBar from './plugins/loadingBar';
import $ScrollIntoView from './plugins/scrollIntoView';

import filters from './filters';
import config from './utils/config';
import locale from './locale';


const components = {
  Affix,
  AutoComplete,
  BackTop,
  Badge,
  Button,
  hButton: Button,
  ButtonGroup,
  Category,
  Checkbox,
  hCircle: Circle,
  DatePicker: Datetime.DatePicker,
  DateRangePicker: Datetime.DateRangePicker,
  DateFullRangePicker: Datetime.DateFullRangePicker,
  DropdownCustom,
  DropdownMenu,
  hForm: Form,
  Form,
  FormItem: Form.Item,
  FormItemList: Form.ItemList,
  Menu,
  Modal: modal.Modal,
  ModalComponent: modal.ModalComponent,
  NumberInput,
  Pagination,
  Poptip,
  Progress,
  Radio,
  Rate,
  Row,
  Search,
  hSelect: Select,
  Select,
  Slider,
  Steps,
  hSwitch: Switch,
  SwitchList,
  hCol: Col,
  Col,
  Timeline,
  TimelineItem: Timeline.Item,
  Loading,
  TagInput,
  Table,
  TableItem,
  hTable: Table,
  Tabs,
  Tag,
  Tooltip,
  Tree,
  TreePicker,
  Uploader
};

const directives = {
  width: style.width,
  color: style.color,
  "bg-color": style.bgColor,
  height: style.height,
  padding: style.padding,
  margin: style.margin,
  font: style.font,
  autosize,
  tooltip,
  wordcount,
  wordlimit
}

let prototypes = {
  $Message,
  // $Modal,
  $Confirm,
  $Loading,
  $LoadingBar
}

const install = function (Vue, opts) {
  if (install.installed) return;
  if (opts) {
    if (opts.locale) {
      locale.use(opts.locale);
    }
    if (opts.i18n) {
      locale.i18n(opts.i18n);
    }
  }

  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key]);
  });

  Object.keys(filters).forEach((key) => {
    Vue.filter(key, filters[key]);
  });

  Object.keys(directives).forEach((key) => {
    Vue.directive(key, directives[key]);
    this[key] = directives[key];
  });

  Object.keys(prototypes).forEach((key) => {
    Vue.prototype[key] = prototypes[key];
  });

  this.$Modal = Vue.prototype.$Modal = $Modal(Vue);
  this.$Notice = Vue.prototype.$Notice = $Notice(Vue);
  this.$ScrollIntoView = Vue.prototype.$ScrollIntoView = $ScrollIntoView;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const HeyUI = Object.assign({}, components, {
  install
}, { $Modal: $Modal(), $Notice: $Notice(), locale: locale.use }, prototypes, config, { Dropdown }, filters);

module.exports = HeyUI;
