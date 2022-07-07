const express = require("express");
const{ faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

const generateUser = () => ({
    _id: faker.datatype.uuid(),
    firstName:faker.name.firstName(),
    lastName: faker.name.lastName(),
    email:faker.internet.email(),
    password:faker.internet.password(),
    phoneNumber:faker.phone.number(),
})
const generateCompany = () => ({
    _id:faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    }
})

app.get("/api/users/new", (req,res) => {
    const users= generateUser();
    res.json(users);
})
app.get("/api/companies/new", (req,res) => {
    const company= generateCompany();
    res.json(company)
})
app.get("/api/user/company", (req,res) => {
    const newUser = generateUser();
    const newCompany = generateCompany();
    const responseObj = {
        user: newUser,
        company: newCompany
    }
    res.json(responseObj)
})
app.listen(port, () => console.log(`Listening on port: ${port}`));