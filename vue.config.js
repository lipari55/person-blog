const webpack = require('webpack');
module.exports = {
    // 基本路径
    publicPath:"./",
    configureWebpack:{
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
              })
        ]
    }
}

 

 