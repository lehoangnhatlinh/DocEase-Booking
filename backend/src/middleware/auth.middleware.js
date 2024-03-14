
export const requireLogin = (req, res, next) => {
    if(!res.cookies.token) {
        return res.redirect('/login')
    }
    next()
}