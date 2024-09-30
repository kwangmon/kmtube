import express from 'express';
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const handleHome = (req, res) => {
    return res.send("hello world!");
};

const handleLogin = (req, res) => {
    return res.send("Login here.");
};


app.use(logger);

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => console.log("app listening on port: " + PORT);

app.listen(PORT, handleListening);