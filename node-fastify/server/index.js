'use strict';

const Fastify = require('fastify')
const fastify = Fastify({
    logger: false
})

const resp = {
    test: 'test'
}

fastify.get('/', function (request, reply) {
    reply.send(resp)
})

// Run the server!
fastify.listen({ port: 3000, host: '0.0.0.0' }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})