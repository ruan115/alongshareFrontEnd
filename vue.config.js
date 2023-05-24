module.exports = {
    configureWebpack: {
        devServer: {
            proxy: {
                '/api': {
                    target: 'http://localhost:8082',//本地
                    // target: 'https://www.alongshare.com/',//线上
                    changeOrigin: true,
                    pathRewrite: {
                        '^/api': ''
                    }
                }
            },
            disableHostCheck: true,
        }
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    'primary-color': '#43D98E',
                    'link-color':'#43D98E',
                    'border-radius-base':'2px',
                    'layout-header-background':'#1A1A1A',
                    'menu-dark-submenu-bg':'#1c2532'
                },
                javascriptEnabled: true
            }
        }
    },
}
