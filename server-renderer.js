const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const express = require('express')
const fs = require('fs')
const path = require('path')

const renderer = require('vue-server-renderer').createBundleRenderer(serverBundle, {
    template: fs.readFileSync("public/index.template.html", "utf-8"),
    clientManifest,
    runInNewContext: false,
    inject: true,
    baseDir: path.resolve("dist")
})
const server = express()

//注意，服务渲染需要把index.html删掉
server.use(express.static(path.join("dist")));
server.get("*", (request, response)=>{
    renderer.renderToString({url: request.url}).then(html => {
        response.send(html)
    }).catch(err => {
        console.error(err)
        response.status(500).send("Internal Server Error")
    })
});

server.listen(8080)
