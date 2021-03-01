const express = require('express')
require('dotenv').config()

const jwt = require("express-jwt")  // Validate JWT and set req.user
const jwksRsa = require("jwks-rsa") // retrieve RSA keys from a JSON Web Key set (JWKS) endpoint


const checkJwt = jwt({

    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/.well-known/jwks.json`
    }),

    // validate audience and issuer
    audience: process.env.REACT_APP_AUTH0_AUDIENCE,
    issuer: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/`,

    // this must match the algo selected in the Auth0 dashboard under your apps adv settings
    algorithms: ["RS256"]
})


const app = express()

app.get('/public', function(req, res) {
    res.json({
        message: "Hello from a public API"
    })

    // return res
} )


app.get('/private', checkJwt, function(req, res) {
    console.log('request', req)
    res.json({
        message: "Hello from a PRIVATE API"
    })

    // return res
} )


app.listen(3001)
// console.log("Api server listening on " + process.env.REACT_APP_AUTH0_AUDIENCE)
console.log("Api server listening on " + process.env.REACT_APP_API_URL)