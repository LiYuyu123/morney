/*eslint-disable */
const path=require('path')

module.exports = {
  lintOnSave: false,
  chainWebpack:config=>{
    const dir = path.resolve(__dirname, 'src/assets/icons')

    config.module
        .rule('svg-sprite') //添加一个规则
        .test(/\.svg$/)   //规则的特点
        .include.add(dir).end() // 这个规则只包含 icons 目录
        .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract:false}).end() //使用哪些loader extracr:false是不要把它解析出文件
        .use('svgo-loader').loader('svgo-loader')
        .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]})).end() //解决了svg自带fill属性的问题
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir) // 其他 svg loader 排除 icons 目录
  }
}
