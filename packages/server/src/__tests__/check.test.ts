import mongoose from "mongoose";
import { dbConnection } from "../config/db/mongo.db";
import { app, server } from "..";
import request from "supertest";

describe("Express application", async () => {
  beforeAll(async () => {
    await dbConnection();
  });

  afterAll(async () => {
    await mongoose.disconnect(); // Disconnect the database
    server.close();
  });

  test("404 routes", async () => {
    const response = await request(app).get("/unknown");
    expect(response.status).toBe(404)
  })

  test("Get Listing", async () => {
    const response = await request(app).get("/listing");
    if (response.status !== 200) {
      console.error("Listing Test Failed:", response.body);
    }
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/)
  });

  test("Get User", async () => {
    const response = await request(app).get("/user");
    if (response.status !== 200) {
      console.error("User Test Failed:", response.body);
    }
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/)
  });
});
