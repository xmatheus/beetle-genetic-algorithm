const pasteSvg = (bettle) => {
	for (let i = 0; i < 5; i++) {
		let svg = document.createElement("svg");
		svg.innerHTML = `<svg version="1.1" id="bettle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		width="585.296px" height="585.296px" viewBox="0 0 585.296 585.296" style="enable-background:new 0 0 585.296 585.296;"
		xml:space="preserve">
   <g>
	   <g>
		   <path d="M482.401,346.965c-4.044-5.202-8.915-12.089-8.613-17.952c1.836-35.423-21.094-54.285-47.12-69.397
			   c-14.022-8.144-31.33-10.641-53.432-17.687c46.806-28.581,61.017-70.637,69.233-116.497c0.009-0.016,0.017-0.032,0.021-0.049
			   c3.656-7.952,7.707-15.471,8.021-24.374c0.102-2.868-3.64-5.39-6.141-3.521c-6.038,4.508-12.077,9.021-18.115,13.529
			   c-0.726,0.331-1.399,0.641-1.999,0.914c-13.774-30.918-26.81-60.172-40.747-91.449c-0.126,0.139-0.249,0.27-0.371,0.4
			   c-0.918-1.501-1.901-2.982-3.027-4.423c-6.798-8.69-18.728-12.648-28.699-16.202c-4.969-1.771-7.087,6.116-2.17,7.866
			   c0.249,0.09,0.497,0.18,0.746,0.27c0.429,0.535,0.992,0.996,1.742,1.301c0.069,0.029,0.139,0.057,0.208,0.086
			   c0.396,0.277,0.849,0.518,1.424,0.648c0.229,0.053,0.425,0.147,0.649,0.212c1.163,0.485,2.313,0.983,3.46,1.493
			   c4.238,2.615,6.482,7.397,5.524,12.767c-0.914,5.12-1.519,9.298,1.578,13.423c0.045,0.062,0.086,0.119,0.135,0.176
			   c0.212,0.273,0.392,0.546,0.637,0.82c0.722,0.804,1.534,1.15,2.342,1.216c5.304,3.725,10.221,7.883,14.803,12.412
			   c14.79,17.98,16.577,41.399,21.599,65.879c7.336,35.725-20.954,53.036-24.035,89.161c-16.267-29.262-28.592-51.441-40.673-73.171
			   c4.271-0.91,8.511-1.816,12.766-2.721c10.629-0.743,22.746-0.086,33.036-2.677c10.049-2.529,18.768-12.158,9.421-21.208
			   c-1.914-1.852-4.329-1.281-5.77,0.2c-0.294,0.102-0.583,0.229-0.853,0.424c-5.847,4.309-11.693,8.617-17.54,12.921
			   c-0.298,0.22-0.542,0.465-0.759,0.718c-0.204,0.065-0.388,0.11-0.592,0.176c-0.33,0.028-0.579,0.045-0.652,0.053
			   c-5.618,0.42-11.236,0.841-16.854,1.261c-5.504,0.412-11.008,0.824-16.512,1.236c-1.86-0.673-3.64-1.559-5.374-2.624
			   c-5.785-4.618-9.861-10.795-11.93-18.038c-0.061-0.265-0.122-0.518-0.232-0.763c-0.028-0.106-0.069-0.208-0.098-0.318
			   c-1.212-4.77-8.087-3.146-7.915,1.261c-0.996,1.848-1.991,3.696-2.987,5.545c-4.557,4.586-9.176,9.233-13.822,13.908
			   c-0.021-0.02-0.041-0.041-0.062-0.061c-0.021,0.021-0.041,0.041-0.062,0.061c-4.651-4.68-9.266-9.323-13.823-13.908
			   c-0.996-1.849-1.991-3.697-2.987-5.545c0.171-4.406-6.703-6.034-7.915-1.261c-0.028,0.106-0.069,0.208-0.098,0.318
			   c-0.11,0.245-0.171,0.498-0.233,0.763c-2.068,7.242-6.145,13.419-11.93,18.038c-1.734,1.065-3.513,1.951-5.374,2.624
			   c-5.504-0.412-11.008-0.824-16.512-1.236c-5.618-0.42-11.236-0.84-16.854-1.261c-0.073-0.004-0.322-0.024-0.653-0.053
			   c-0.204-0.062-0.383-0.11-0.591-0.176c-0.216-0.253-0.461-0.498-0.759-0.718c-5.847-4.309-11.693-8.617-17.54-12.921
			   c-0.27-0.2-0.559-0.327-0.853-0.424c-1.436-1.485-3.852-2.052-5.769-0.2c-9.347,9.045-0.628,18.679,9.421,21.208
			   c10.293,2.591,22.407,1.934,33.036,2.677c4.255,0.905,8.495,1.812,12.766,2.721c-12.081,21.73-24.406,43.909-40.673,73.17
			   c-3.081-36.124-31.371-53.436-24.035-89.16c5.026-24.48,6.813-47.895,21.599-65.879c4.582-4.525,9.499-8.687,14.802-12.412
			   c0.808-0.069,1.62-0.416,2.342-1.216c0.249-0.273,0.424-0.547,0.636-0.82c0.049-0.057,0.094-0.114,0.135-0.176
			   c3.097-4.125,2.493-8.303,1.579-13.423c-0.959-5.369,1.285-10.151,5.524-12.766c1.146-0.51,2.301-1.008,3.46-1.493
			   c0.221-0.061,0.42-0.159,0.649-0.212c0.575-0.13,1.028-0.371,1.424-0.648c0.069-0.029,0.139-0.057,0.208-0.086
			   c0.751-0.306,1.314-0.767,1.742-1.301c0.249-0.09,0.494-0.18,0.747-0.27c4.92-1.754,2.799-9.641-2.17-7.866
			   c-9.972,3.554-21.901,7.516-28.699,16.202c-1.126,1.44-2.109,2.921-3.027,4.423c-0.123-0.135-0.245-0.265-0.379-0.412
			   c-13.933,31.277-26.969,60.531-40.747,91.449c-0.596-0.273-1.273-0.583-1.999-0.914c-6.039-4.508-12.077-9.021-18.115-13.529
			   c-2.501-1.869-6.243,0.657-6.141,3.521c0.314,8.903,4.366,16.422,8.021,24.374c0.008,0.016,0.016,0.033,0.021,0.049
			   c8.217,45.859,22.428,87.92,69.233,116.497c-22.105,7.046-39.409,9.543-53.432,17.687c-26.026,15.112-48.956,33.975-47.12,69.396
			   c0.306,5.863-4.569,12.755-8.613,17.952c-16.92,21.767-17.776,45.361-8.315,71.494c-2.905-60.025,60.347-79.561,74.852-128.985
			   c3.301,34.17,10.318,68.577-26.895,90.001c-4.933,2.84-6.357,11.849-9.315,18.046c-9.71,20.347-19.376,40.661-28.609,60.058
			   c-2.53,1.615-5.022,3.26-7.213,5.271c-7.936,7.278-4.272,14.957,3.484,19.828c8.637,22.347,17.038,45.419,27.352,67.602
			   c1.044,2.248,2.342,4.374,3.754,6.451c5.63,11.954,13.729,23.329,24.276,28.058c3.737,1.677,11.285-0.8,10.788-5.944
			   c-0.845-8.687-10.996-13.647-17.507-18.54c-9.478-17.222-18.968-34.463-28.548-51.86c46.859-21.489,6.944-67.137,35.439-96.749
			   c14.423,76.125,42.46,138.54,132.229,138.455c1.354,0,2.66-0.058,3.994-0.086c1.335,0.024,2.64,0.081,3.994,0.086
			   c89.769,0.085,117.811-62.33,132.229-138.455c28.498,29.612-11.42,75.264,35.438,96.749c-9.58,17.401-19.07,34.644-28.548,51.86
			   c-6.512,4.893-16.662,9.854-17.507,18.54c-0.498,5.145,7.05,7.617,10.787,5.944c10.543-4.729,18.642-16.104,24.276-28.058
			   c1.411-2.077,2.709-4.203,3.753-6.451c10.311-22.187,18.716-45.259,27.353-67.602c7.752-4.871,11.42-12.55,3.484-19.828
			   c-2.19-2.012-4.684-3.656-7.213-5.271c-9.233-19.396-18.903-39.715-28.609-60.058c-2.958-6.197-4.378-15.206-9.314-18.046
			   c-37.214-21.424-30.196-55.831-26.896-90.001c14.509,49.426,77.761,68.96,74.831,128.997
			   C500.177,392.326,499.32,368.731,482.401,346.965z"/>
	   </g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   </svg>
  `;
		const { R, G, B } = bettle;
		svg.style.fill = `rgb(${R},${G},${B})`;
		svg.title = `${bettle.generation}  ${bettle.FFvalue}`;
		svg.addEventListener("click", () => {
			alert(`R:${R}, G:${G}, B:${B}`);
		});
		document.querySelector(".wrapper").appendChild(svg);
	}
};

const getBettle = async () => {
	document.querySelector(".wrapper").innerHTML = "";
	fetch(`${window.location.href}gen/0.88`).then((response) => {
		response.json().then((data) => {
			console.log(data);
			data.map((bettle) => {
				pasteSvg(bettle);
			});
		});
	});
	// const result = await response.json();
};

window.onload = getBettle();