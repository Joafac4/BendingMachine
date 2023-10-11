const mqtt = require("mqtt");
var config = require("./config");

var mqttUri  = 'mongodb://127.0.0.1:27017';
const client = mqtt.connect(mqttUri);

client.on("connect", () => {
  client.subscribe("+", (err) => {
    if (!err) {
     console.log("Client connected");
    }
  });
});

client.on("message", (topic, message) => {
  // message is Buffer
  console.log(message.toString());
});
