const request = require("supertest");
const expect = require("chai").expect;

const app = require("../index");
const Post = require("../models/post");

describe("Posts", () => {
  let post;

  before((done) => {
    const testPost = new Post({
      title: "Test Post",
      post_text: "Testing post body",
      post_image: "image here"
    });

    testPost.save((err, newPost) => {
      if (err) {
        return done(err);
      }

      post = newPost;
      done();
    });
  });

  it("GET /posts should return 200 and be an array", (done) => {
    request(app)
    .get("/posts")
    .end((err, result) => {
      expect(result.statusCode).to.equal(200);
      expect(result.body).to.be.an("array");
      done();
    });
  });

  it("GET /posts/:id should return 200 and be an object", (done) => {
    request(app)
    .get(`/posts/${post._id}`)
    .end((err, result) => {
      expect(result.statusCode).to.equal(200);
      expect(result.body).to.be.an("object");
      done();
    });
  });

  it("POST /posts should return 201 and be an object", (done) => {
    request(app)
    .post("/posts")
    .send({
      "post": {
        "title": "Testing post",
        "post_text": "Testing post body",
        "post_image": "Testing post image"
      }
    })
    .end((err, result) => {
      expect(result.statusCode).to.equal(201);
      expect(result.body).to.be.an("object");
      done();
    });
  });
});
