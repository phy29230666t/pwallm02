const express = require("express");
const app = express();

app.use(express.static(__dirname)); // 정적 파일 제공

app.listen(3000, () => {
    console.log("PWA running at http://localhost:3000");
});
