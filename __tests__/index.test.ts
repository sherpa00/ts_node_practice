
import request from "supertest";
import app from "../src/index";


describe("Testing the main route", () => {

    test("GET / should return message success", async () => {
        let resData = await request(app)
            .get("/")
        expect(resData.status).toEqual(200);
        expect(resData.body.message).toEqual("Success");
    });
})