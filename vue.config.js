module.exports = {
    lintOnSave: false,
    devServer: {
        open: true,
        proxy: {
            '/api': {
                target: 'http://101.34.82.37:8081',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                  }            
            }
        }
    },

}