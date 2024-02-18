'use strict'

const autocannon = require('autocannon')
const {writeFile} = require('node:fs/promises')
const {resolve, join} = require('node:path')

async function main () {
  const result = await autocannon({
    url: 'http://server:8080',
    connections: 100, //default
    pipelining: 1, // default
    duration: 60 // default
  })
  await writeFile(resolve(join('/results', Date.now() + '.json')), JSON.stringify(result, null, 2), {
    encoding: 'utf8'
  })
  console.log(result)
}

main()