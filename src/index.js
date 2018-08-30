// Automatically generated by './build/bin/build-entry.js'

import Button from '../components/button/index.js'
import Switch from '../components/switch/index.js'
import Slider from '../components/slider/index.js'
import TextBox from '../components/text-box/index.js'
import Dialog from '../components/dialog/index.js'
import Dropdown from '../components/dropdown/index.js'
import AutoSuggestBox from '../components/auto-suggest-box/index.js'
import Icon from '../components/icon/index.js'

const components = [
  Button,
  Switch,
  Slider,
  TextBox,
  Dialog,
  Dropdown,
  AutoSuggestBox,
  Icon,
]

const install = (Vue, opts = {}) => {
  components.map(component => {
    Vue.component(component.name, component)
  });

  Vue.prototype.$VUEUWP = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  }

}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  Button,
  Switch,
  Slider,
  TextBox,
  Dialog,
  Dropdown,
  AutoSuggestBox,
  Icon
}

