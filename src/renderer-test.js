const serverBundle = require('../dist/vue-ssr-server-bundle.json')
const clientManifest = require('../dist/vue-ssr-client-manifest.json')
const express = require('express')
const fs = require('fs')
const path = require('path')

const renderer = require('vue-server-renderer').createBundleRenderer(serverBundle, {
    template: fs.readFileSync("public/index.template.html", "utf-8"),
    clientManifest
})
const server = express()

server.use(express.static(path.join("dist")));
server.get("*", (request, response)=>{
    renderer.renderToString({url: request.url}).then(html => {
        response.send(html)
    }).catch(err => {
        console.error(err)
        response.status(500).send("Internal Server Error")
    })
})

server.listen(8080)
