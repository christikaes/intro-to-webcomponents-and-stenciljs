// You can do things like import/export etc here

console.log("Hello from the Module!");

var shadowHost = document.getElementById("shadow-host");
var shadowRoot = shadowHost.attachShadow({ mode: "open" });
var shadowChild = document.getElementById("my-button").content.cloneNode(true);
shadowRoot.appendChild(shadowChild);
