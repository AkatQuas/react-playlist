import config from './config'
import path from 'path'
import sassMiddleware from 'node-sass-middleware'
// import fs from 'fs'
import apiRouter from './api'

import express from 'express'
import serverRender from './serverRender'

const server = express()

server.use(sassMiddleware({
    src: path.join(__dirname, 'scss'),
    dest: path.join(__dirname, 'public')
}))

server.set('view engine', 'ejs')

server.get('/', (req, res) => {
    serverRender().then(({ initialMarkup, initialData }) => {
        res.render('index', { initialMarkup, initialData })
    }).catch(err => {
        console.error(err)
    })
})

server.use('/api', apiRouter)
server.use(express.static('public'))

// server.get('/about.html', (req, res) => {
//     fs.readFile('./about.html', (err, data) => {
//         res.send(data.toString())
//     })
// })

server.listen(config.port, config.host, _ => {
    console.info('Express listening on port ', config.port)
})
