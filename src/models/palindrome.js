//Palindrome function isPalindrome


exports.isPalindrome = async (req, res) => {
    const string = req.params.pal.toLowerCase();
    if (string == string.split('').reverse().join('')) {
        res.status(200).send({
            success: 'Թռու',
            message: 'Այո Այո :-D',
          });
    }
    else {
        res.status(200).send({
            success: 'ֆոլս',
            message: 'Չկպավ :-D',
          });
    }
};
