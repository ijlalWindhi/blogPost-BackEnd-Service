//import
const express = require("express");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 2004;

//implementasi
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// endpoint user
const user = require("./routes/user");
app.use("/user", user);

// endpoint category
const category = require("./routes/post_category");
app.use("/category", category);

// endpoint post
const post = require("./routes/post");
app.use("/post", post);

// endpoint comments
const comments = require("./routes/post_comment");
app.use("/comments", comments);

//run server
app.listen(PORT, () => {
    console.log("server run on PORT " + PORT);
});
