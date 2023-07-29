"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const chai_1 = require("chai");
const faker_1 = require("@faker-js/faker");
const request = (0, supertest_1.default)("https://reqres.in/");
const getToken = "4d774d50a0e803173dcd27ea84be05600051f8ae8a27c950bcf539a2d4cb2950";
const passId = 1;
describe("API Automation Test", () => {
    let getuserID;
    it("Verify that the API returns of all the users 'First Name' and 'Email' by filtering when the user requested to get the first name and email from the users list", async () => {
        const response = await request.get("api/users?page=1").query({ token: getToken });
        const getData = response.body.data;
        console.log("getData", getData);
        (0, chai_1.expect)(response.body.data).to.not.be.empty;
        const filterDataByNameAndEmail = getData.map((name) => ({
            firstName: name.first_name,
            email: name.email,
        }));
        (0, chai_1.expect)(response.status).to.equal(200);
        (0, chai_1.expect)(filterDataByNameAndEmail).to.be.an('array');
        console.log(filterDataByNameAndEmail);
        console.log("response status", response.status);
    });
    it("Verify that the API returns the users details from the given ID when the user requested for the user details corresponded to the given ID", async () => {
        const getAPIresponse = await request.get(`api/users/${passId}`).query({ token: getToken });
        const getData = getAPIresponse.body.data;
        console.log("getData", getData);
        (0, chai_1.expect)(getAPIresponse.status).to.equal(200);
        (0, chai_1.expect)(getData.id).to.equals(passId);
        (0, chai_1.expect)(getData.first_name).to.eql('George');
        (0, chai_1.expect)(getData.last_name).to.eql('Bluth');
        (0, chai_1.expect)(getData.email).to.eql('george.bluth@reqres.in');
        (0, chai_1.expect)(getData.avatar).to.eql('https://reqres.in/img/faces/1-image.jpg');
    });
    it("Verify that the API creates the new user by given data when the user requested to create a user", async () => {
        const data = {
            First_name: "Kannika",
            Last_name: "TK",
            Email: faker_1.faker.internet.email()
        };
        const getresponse = await request.post("api/users?page=1").send(data);
        const getData = getresponse.body;
        console.log("getData", getData);
        (0, chai_1.expect)(getresponse.status).to.equal(201);
        (0, chai_1.expect)(getData.First_name).to.eql(data.First_name);
        (0, chai_1.expect)(getData.Last_name).to.eql(data.Last_name);
        (0, chai_1.expect)(getData.Email).to.eql(data.Email);
        getuserID = getData.id;
        console.log("getuserID", getuserID);
    });
    it("Verify that the API returns updated/edited data for the specified user using an ID when the user requested to update/edit the user details", async () => {
        const data = {
            First_name: "EditedFirstName",
            Last_name: "EditedTK",
            Email: faker_1.faker.internet.email()
        };
        const getPutResponse = await request.put(`api/users/${getuserID}`).send(data);
        const getData = getPutResponse.body;
        console.log("getData", getData);
        (0, chai_1.expect)(getPutResponse.status).to.equal(200);
        (0, chai_1.expect)(getData.First_name).to.eql(data.First_name);
        (0, chai_1.expect)(getData.Last_name).to.eql(data.Last_name);
        (0, chai_1.expect)(getData.Email).to.eql(data.Email);
    });
});
