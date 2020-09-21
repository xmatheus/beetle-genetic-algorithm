var tinycolor = require("tinycolor2");

function getBeetle(R = null, G = null, B = null) {
	return (beetle = {
		R,
		G,
		B,
		FFvalue: 0,
		generation: 0,
	});
}

function randomRGB() {
	let beetle = getBeetle();
	beetle.R = Math.floor(Math.random() * 255);
	beetle.G = Math.floor(Math.random() * 255);
	beetle.B = Math.floor(Math.random() * 255);
	return beetle;
}

function main(total, breakPoint = 0.8) {
	const idvTotal = total;
	const breakFFValue = breakPoint;
	let filtred = {
		0.45: [],
		"0.30": [],
		0.15: [],
		0.08: [],
		0.02: [],
	};
	let individuos = new Array(idvTotal);
	let beetleFiltred = new Array(idvTotal);
	let bettlesMolten = [];

	function start() {
		let i = 0;
		while (averageFitnessFunction() < breakFFValue) {
			console.log(
				`avg = ${averageFitnessFunction().toFixed(2)}, gen = ${i}`
			);
			populate(bettlesMolten.length, idvTotal, i);
			sort();
			filter();
			selection();
			crossOver(0.9);
			mutationBettle(0.8);

			i += 1;
		}
		console.log(`avg = ${averageFitnessFunction().toFixed(2)}, gen = ${i}`);
		return individuos;

		// show();
	}

	function populate(start = 0, end, generation) {
		individuos = [];

		for (let i = start; i < end; i++) {
			individuos[i] = randomRGB();
			individuos[i].generation = generation;
			individuos[i].FFvalue = FitnessFunction(individuos[i]);
		}

		// console.log(bettlesMolten);

		individuos = individuos.filter((e) => {
			return e;
		});

		if (bettlesMolten.length > 0) {
			individuos = [...bettlesMolten, ...individuos];
		}

		individuos = individuos.filter((e) => {
			return e;
		});
		// console.log(individuos);
		// console.log(individuos.length);
		// console.log(bettlesMolten.length);
	}

	function FitnessFunction({ R, G, B }) {
		let value = tinycolor(`rgb (${R},${G},${B})`).getLuminance().toFixed(2);
		return (1 - value).toFixed(2);
	}

	function sort() {
		individuos.sort(function (a, b) {
			return b.FFvalue - a.FFvalue;
		});
	}

	function filter() {
		filtred = {
			0.45: [],
			"0.30": [],
			0.15: [],
			0.08: [],
			0.02: [],
		};
		individuos.map((idv) => {
			const { FFvalue } = idv;
			if (FFvalue > 0.8) {
				// 0.81 - 1
				filtred["0.45"].push(idv);
			} else if (FFvalue > 0.6) {
				// 0.62 - 0.80
				filtred["0.30"].push(idv);
			} else if (FFvalue > 0.4) {
				// 0.41 - 0.60
				filtred["0.15"].push(idv);
			} else if (FFvalue > 0.2) {
				// 0.21 - 0.40
				filtred["0.08"].push(idv);
			} else {
				// 0- 0.30
				filtred["0.02"].push(idv);
			}
		});
	}

	function selection() {
		//divide os grupos
		beetleFiltred = new Array(idvTotal);
		bettlesMolten = [];
		const indicesTotal = {};

		indicesTotal["0.45"] = idvTotal * 0.45;
		indicesTotal["0.30"] = idvTotal * 0.3;
		indicesTotal["0.15"] = idvTotal * 0.15;
		indicesTotal["0.08"] = idvTotal * 0.08;
		indicesTotal["0.02"] = idvTotal * 0.02;

		for (let i = 0; i < indicesTotal["0.45"]; i++) {
			beetleFiltred[i] =
				filtred["0.45"][
					Math.floor(Math.random() * filtred["0.45"].length)
				];
		}
		let i = indicesTotal["0.45"];
		let total = i + indicesTotal["0.30"];

		for (i; i < total; i++) {
			beetleFiltred[i] =
				filtred["0.30"][
					Math.floor(Math.random() * filtred["0.30"].length)
				];
		}
		i = total;
		total += indicesTotal["0.15"];

		for (i; i < total; i++) {
			beetleFiltred[i] =
				filtred["0.15"][
					Math.floor(Math.random() * filtred["0.15"].length)
				];
		}
		i = total;
		total += indicesTotal["0.08"];

		for (i; i < total; i++) {
			beetleFiltred[i] =
				filtred["0.08"][
					Math.floor(Math.random() * filtred["0.08"].length)
				];
		}
		i = total;
		total += indicesTotal["0.02"];

		for (i; i < total; i++) {
			beetleFiltred[i] =
				filtred["0.02"][
					Math.floor(Math.random() * filtred["0.02"].length - 1)
				];
		}

		beetleFiltred = beetleFiltred.filter((item) => {
			return item;
		});
	}

	function crossOver(porcentagem) {
		const total = idvTotal * porcentagem;

		for (let i = 0; i < total; i++) {
			let fisrtselected =
				beetleFiltred[Math.floor(Math.random() * beetleFiltred.length)];
			let secondselected =
				beetleFiltred[Math.floor(Math.random() * beetleFiltred.length)];

			let bettleMolten = fusionTwoBettle(fisrtselected, secondselected);
			bettleMolten.FFvalue = FitnessFunction(bettleMolten);
			bettleMolten.generation = "cross-over";
			bettlesMolten.push(bettleMolten);
		}
	}

	function fusionTwoBettle(fBettle, sBettle) {
		// f = first, s = second

		let selectedColor = {
			R: null,
			G: null,
			B: null,
		};
		let colors = ["R", "G", "B"];

		let fvalue = Math.floor(Math.random() * 2) + 1;
		let svalue = 3 - fvalue;

		//seleciona as cores do primeiro besouro
		try {
			for (let i = 0; i < fvalue; i++) {
				let indice = Math.floor(Math.random() * colors.length);
				selectedColor[colors[indice]] = fBettle[colors[indice]];
				colors = colors.filter(function (item) {
					return item !== colors[indice];
				});
			}

			//seleciona as cores do segundo besouro
			for (let i = 0; i < svalue; i++) {
				let indice = Math.floor(Math.random() * colors.length);
				selectedColor[colors[indice]] = sBettle[colors[indice]];
				colors = colors.filter(function (item) {
					return item !== colors[indice];
				});
			}
		} catch (error) {
			// console.log(error);
			// console.log(sBettle);
			// console.log(colors);
			throw Error("Erro no cross-over");
		}

		let { R, G, B } = selectedColor;

		// console.log(fBettle);
		// console.log(sBettle);
		// console.log(`fvalue = ${fvalue} svalue = ${svalue}`);
		// console.log(`${R} ${G} ${B}`);

		return getBeetle(R, G, B);
	}

	function mutationBettle(porcentagem) {
		const total = porcentagem * idvTotal;

		for (let i = 0; i < total; i++) {
			let index = Math.floor(Math.random() * bettlesMolten.length);
			let selectedBettle = bettlesMolten[index];

			let colors = ["R", "G", "B"];
			const selectedColor =
				colors[Math.floor(Math.random() * colors.length)];

			selectedBettle[selectedColor] = Math.floor(Math.random() * 20);
			selectedBettle.generation = "mutation";
			selectedBettle.FFvalue = FitnessFunction(selectedBettle);
			bettlesMolten[index] = selectedBettle;
		}
	}

	function averageFitnessFunction() {
		let average = individuos.reduce((avg, value, _, { length }) => {
			return avg + value.FFvalue / length;
		}, 0);

		return average;
	}

	function show() {
		console.log(individuos);
	}

	return { start };
}

module.exports = main;

// let fn = main(100);

// fn.start();
