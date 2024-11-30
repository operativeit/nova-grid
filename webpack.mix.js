let path = require('path');
let mix = require('laravel-mix');
let postcss = require('postcss-import');
let tailwindcss = require('tailwindcss');


mix.externals = {
  vue: 'Vue',
  'laravel-nova': 'LaravelNova',
  '@' : 'LaravelNovaUi'
}

mix
  .setPublicPath('dist')
  .js('resources/js/entry.js', 'js')
  .vue({ version: 3 })
  .webpackConfig({
    externals: {
      vue: 'Vue',
    },
    output: {
      uniqueName: 'outl1ne/nova-grid',
    },
  })
  .postCss('resources/css/entry.css', 'dist/css/', [postcss(), tailwindcss('tailwind.config.js')])
  .alias({
    '@' : path.join(__dirname, '../../vendor/laravel/nova/resources/js'),
  });
