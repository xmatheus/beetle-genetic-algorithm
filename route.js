// inicia as rotas
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors"); // permitir acesso de determinado dominio
const path = require("path");

const main = require("./index");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

app.get("/gen/:breakPoint", (req, res) => {
	const { breakPoint } = req.params;
	console.log(breakPoint);
	try {
		const fn = main(100, parseFloat(breakPoint));
		let result = fn.start();
		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(400).send({ error: "sorry" });
	}
});

app.use(express.static(path.join(__dirname, "public")));

const porta = process.env.PORT || 3001;
console.log(`[D]Porta: ${porta}`);
app.listen(porta);
