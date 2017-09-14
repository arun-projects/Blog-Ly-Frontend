# Blog.Ly Frontend

In this lab we will be developing a frontend to represent the data coming from the backend created for you here.

- Download the Node project here and CD into the folder.
- Run `npm install` to install dependencies, and then run `node index.js` to run the frontend.
- Your job is to develop a frontend that uses the following endpoints:

### GET /posts

Response:

- Response Code: 200
- Response Body: Array of post objects in this format:

```json
[
    {
        "_id": "59baf81b4b08ecce0e3bc73e",
        "title": "My Title",
        "post_text": "My post text",
        "post_image": "image link here"
    }
]
```

### GET /posts/:id

Response:

- Response Code: 200
- Response Body: Object of single post in this format:

```json
{
    "_id": "59baf81b4b08ecce0e3bc73e",
    "title": "My Title",
    "post_text": "My post text",
    "post_image": "image link here"
}
```

### POST /posts

Response:

- Response Code: 201
- Response Body: Object of new post in this format:

```json
{
    "_id": "59baf81b4b08ecce0e3bc73e",
    "title": "My Title",
    "post_text": "My post text",
    "post_image": "image link here"
}
```

> Note: This backend uses MongoDB so you will have to install that before running this backend. Instructions can be found here: https://docs.mongodb.com/manual/installation

- A template you can use for this can be found here: https://github.com/arun-projects/Blog-Ly