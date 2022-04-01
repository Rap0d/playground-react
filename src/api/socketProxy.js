const {createProxyMiddleware} = require("http-proxy-middleware")

module.exports = (app) => {
    app.use(
        "/lunch",
        createProxyMiddleware({
            target: "http://localhost:9091",
            changeOrigin: true
        })
    )
    app.use(
        "/ws",
        createProxyMiddleware({
            target: "http://localhost:9091",
            ws: true
        })
    )
}