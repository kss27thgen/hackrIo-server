const express = require("express");

const app = express();

app.get("/api/register", (req, res) => {
	res.json({
		data: "you hit register endpoint updated",
	});
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log(`App listening on port ${port}!`);
});
