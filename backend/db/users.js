const { v4: uuid } = require("uuid");

const userdata = {
    "users": [
        {
            id: uuid(),
            username: "anyname",
            password: "anypassword",
            emailId: "any@gmail.com",
        },
        {
            id: uuid(),
            username: "yourname",
            password: "name12345",
            emailId: "your@gmail.com",
        },
    ]
}

module.exports = userdata;