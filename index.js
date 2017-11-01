var { Server } = require('node-static')

var fileServer = new Server('./build', { gzip: true })

require('http')
  .createServer(function (request, response) {
    request
      .addListener('end', function () {
        fileServer.serve(request, response)
      })
      .resume()
  })
  .listen(8080)
