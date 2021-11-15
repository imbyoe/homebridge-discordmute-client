const app = require("express")();
var robot = require("robotjs");
const config = require("./config.json");
app.get("/toggleMute", function (req, res) {
robot.keyTap(config.mute_key);
res.send("OK");
})
app.get("/toggleDeafen", function (req, res) {
robot.keyTap(config.deafen_key);
res.send("OK");
})
app.listen(config.port);
