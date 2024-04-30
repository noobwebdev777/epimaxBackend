function auth(req, res, next) {
    console.log('auth middleware has executed')
    next()
}

module.exports = auth