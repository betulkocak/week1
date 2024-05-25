const express = require("express");

const app = express();
exports.app = app;

app.get("/api/:number1/:number2", (req, res) => {
    const number1 = parseInt(req.params.number1);
    const number2 = parseInt(req.params.number2);
    const result = number1 + number2;
    res.send(`Toplam: ${number}`);
});

app.get("/api/:number1/:number2", (req, res) => {
    const number1 = parseInt(req.params.number1);
    const number2 = parseInt(req.params.number2);
    const result = number1 * number2;
    res.send(`Çarpım: ${number}`);
});

app.get("/api/:number1/:number2", (req, res) => {
    const number1 = parseInt(req.params.number1);
    const number2 = parseInt(req.params.number2);
    if (number2 === 0) {
        res.send("Bu işlem yapılamaz.");
    } else {
        const result = number1 / number2;
        res.send(`Bölüm: ${number}`);
    }
});

app.get("/api/:number1/:number2", (req, res) => {
    const number1 = parseInt(req.params.number1);
    const number2 = parseInt(req.params.number2);
    if (number1 < number2) {
        res.send("Bu işlem yapılamaz.");
    } else {
        const result = number1 - number2;
        res.send(`Fark: ${number}`);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


