var mongoose = require('mongoose');
const User = require('./models/user.model')
const Book = require('./models/book.model')

let seed = async () => {

    User.collection.drop({}, (err, delOK) => {
        if (err) {
            console.log("User Collection is Empty")
            populateUsers();
        }
        if (delOK) {
            console.log("User Collection deleted");
            populateUsers();
        }
    })

    Book.collection.drop({}, (err, delOK) => {
        if (err) {
            console.log("Book Collection is Empty")
            populateBooks();
        }
        if (delOK) {
            console.log("Book Collection deleted");
            populateBooks();
        }
    })

};

populateUsers = function () {
    console.log("Recreating Users");
    let newUsers = [
        new User({
            _id: mongoose.Types.ObjectId("user00000001"),
            // mongoId = 757365723030303030303031
            username: "admin@library.com",
            password: "123456",
        })
    ]
    for (let i = 0; i < newUsers.length; i++) {
        newUsers[i].save(function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('Successful created new user.');
            }
        })
    }
}

populateBooks = function () {
    console.log("Recreating Books");
    Book.create([{
        userId: "757365723030303030303031",
        isbn: "ISBN-001-002-00003",
        title: "My First Book",
        author: "Me",
        publisher: "MESTUDIO",
    }])
}

module.exports = seed;