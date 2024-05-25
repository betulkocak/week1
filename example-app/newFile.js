const { app } = require("./api-express");

app.get("api/:name", (req, res) => {
    res.send('Hello, ${req.params.name}');
});
