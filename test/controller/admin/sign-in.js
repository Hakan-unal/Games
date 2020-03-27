exports.display = (req, res) => {
    res.render('sign-in',{
        title:'SIGN-IN'
    });
}

exports.check = (req, res) => {
    console.log('sign-in');
}