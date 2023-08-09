const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Vue3-Composition-api-playground/' //* 儲存庫名稱
    : '/'
})
