//trong che do PRODUCTION thieu no se nhan duoc yeu cau dang cho phan hoi
module.exports = func => (req, res, next) => {
    Promise.resolve(func(req, res, next)).catch(next)
}
