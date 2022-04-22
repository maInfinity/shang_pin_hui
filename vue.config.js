module.exports = {
    devServer: {
        proxy: {
            '/api': {// 匹配所有以 '/api'开头的请求路径
                target: 'http://39.98.123.211',// 代理目标的基础路径
                changeOrigin: true,
            },
        }
    }
}