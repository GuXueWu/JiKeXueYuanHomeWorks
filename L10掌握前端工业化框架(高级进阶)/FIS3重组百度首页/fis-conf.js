//自动css处理合并生成雪碧图
fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

// 对js，css，png，jpg文件使用哈希
fis.match('*.{js,css,png,jpg}', {
  useHash: true
});

//js 压缩
fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

//css 压缩
fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});

//图片压缩
fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

//html压缩
fis.match('*.html', {
  optimizer: fis.plugin('html-minifier')
});