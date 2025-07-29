console.log("DOM-Script geladen.")

let bodyElement = document.getElementsByTagName("body")[0];

//console.log("Inhalt des Body-Elements: ", bodyElement.innerHTML);

//bodyElement.innerHTML = "<p>Dieser Inhalt wurde von JavaScript ersetzt.</p>";

let allElements = document.getElementsByTagName("*");

console.log("Anzahl aller Elemente auf der Seite:", allElements.length);

for (let element of allElements) {
    if (element.id === "content_first") {
        element.innerHTML = "<p>Dieser Inhalt wurde mit getElementsByTagName gefunden und aktualisiert.</p>";
        break;
    }
}

let contentElements = document.getElementsByClassName("content");
console.log("Anzahle der Elemente mit der Klasse content:", contentElements.length);

for (let element of contentElements) {
    if (element.id === "content_second") {
        element.innerHTML = "<p>Dieser Inhalt des zweiten Bereichs wurde mit getElementsByClassName aktualisiert.</p>";
        break;
    }
}

let messageDiv = document.getElementById("message");
if (messageDiv) {
    messageDiv.innerHTML = "<p>Nachrichten Div-Inhalt wurde mit getElementById aktualisiert.</p>";
}

let firstContentParagraph = document.querySelector("#content_first p");
if (firstContentParagraph) {
    firstContentParagraph.textContent = "Der erste Absatz des ersten Bereichs mit querySelector aktualisiert.";
}

let allContentDivs = document.querySelectorAll(".content");
console.log("Alle Content-Divs vis querySelectorAll:", allContentDivs.length);