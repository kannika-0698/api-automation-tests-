import supertest from 'supertest';
import {expect} from "chai"
import { faker } from '@faker-js/faker';

const request = supertest("https://reqres.in/");
const passId = 1

describe("API Automation Test", () => {
  let getuserID: number;
  it("Verify that the API returns of all the users 'First Name' and 'Email' by filtering when the user requested to get the first name and email from the users list", async () => {
    const response = await request.get("api/users?page=1")
    const getData = response.body.data;
    console.log("getData", getData);
    expect(response.body.data).to.not.be.empty;
    const filterDataByNameAndEmail = getData.map((name: any) => ({
      firstName: name.first_name,
      email: name.email,
    }));
    expect(response.status).to.equal(200)
    expect(filterDataByNameAndEmail).to.be.an('array');
    console.log(filterDataByNameAndEmail);
    console.log("response status", response.status);
  });

  it("Verify that the API returns the users details from the given ID when the user requested for the user details corresponded to the given ID" , async () => {
    const getAPIresponse = await request.get(`api/users/${passId}`)
    const getData = getAPIresponse.body.data;
    console.log("getData", getData);
    expect(getAPIresponse.status).to.equal(200);
    expect(getData.id).to.equals(passId);
    expect(getData.first_name).to.eql('George');
    expect(getData.last_name).to.eql('Bluth');
    expect(getData.email).to.eql('george.bluth@reqres.in');
    expect(getData.avatar).to.eql('https://reqres.in/img/faces/1-image.jpg');
  });

  it("Verify that the API creates the new user by given data when the user requested to create a user", async () => { 
    const data = {
      First_name : "Kannika",
      Last_name : "TK",
      Email : faker.internet.email()
    }
    const getresponse = await request.post("api/users?page=1").send(data)
    const getData = getresponse.body;
    console.log("getData", getData);
    expect(getresponse.status).to.equal(201);
    expect(getData.First_name).to.eql(data.First_name);
    expect(getData.Last_name).to.eql(data.Last_name);
    expect(getData.Email).to.eql(data.Email);
    getuserID = getData.id;
    console.log("getuserID", getuserID);
  });

  it("Verify that the API returns updated/edited data for the specified user using an ID when the user requested to update/edit the user details", async () => {
    const data = {
      First_name : "EditedFirstName",
      Last_name : "EditedTK",
      Email : faker.internet.email()
    }
    const getPutResponse = await request.put(`api/users/${getuserID}`).send(data)
    const getData = getPutResponse.body;
    console.log("getData", getData);
    expect(getPutResponse.status).to.equal(200);
    expect(getData.First_name).to.eql(data.First_name);
    expect(getData.Last_name).to.eql(data.Last_name);
    expect(getData.Email).to.eql(data.Email);
  });
});

