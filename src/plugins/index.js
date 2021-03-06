import Vue from 'vue'

import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-pro-solid'
import light from '@fortawesome/fontawesome-pro-light'
import brands from '@fortawesome/fontawesome-free-brands'
import regular from '@fortawesome/fontawesome-pro-regular'

if (process.env.FA_PRO) fontawesome.library.add(solid, light, brands, regular)

const requireModule = require.context('.', true, /^((?!\.unit\.).)*\.js$/)
requireModule.keys().forEach(fileName => {
  // Skip this file, as it's not a plugin
  if (fileName === './index.js') return

  const pluginName = fileName
    .replace(/^\.\//, '')
    .replace(/\.\w+$/, '')

  const plugin = require('./' + pluginName)
  Vue.use(plugin.install)

  if (plugin.default) {
    // export default (?)
  }
})

export { default as http } from './http'
