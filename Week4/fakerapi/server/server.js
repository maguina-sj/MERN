const express = require("express");
const{ faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

const users = [{
    _id: faker.datatype.uuid(),
    firstName:faker.name.firstName(),
    lastName: faker.name.lastName(),
    email:faker.internet.email(),
    password:faker.internet.password(),
    phoneNumber:faker.phone.number(),
}]
const company = [{
    _id:faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    }
}]
app.get("/api", (req, res) => {
    res.json({ message: "Hello World"});
})
app.get("/api/users", (req,res) => {
    res.json(users);
})
app.get("/api/company", (req,res) => {
    res.json(company)
})
app.listen(port, () => console.log(`Listening on port: ${port}`));