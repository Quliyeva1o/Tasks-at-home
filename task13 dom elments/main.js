var heading = document.createElement("h1");
heading.textContent = "960*360";
heading.style.color = "white";
heading.style.fontSize = "36px";
heading.style.textAlign = "center";


var container = document.createElement("div");
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.marginTop = "20px";

var bigDiv = document.createElement("div");
bigDiv.style.width = "960px";
bigDiv.style.height = "360px";
bigDiv.style.backgroundColor = "black";
bigDiv.style.display = "flex";
bigDiv.style.justifyContent = "center";
bigDiv.style.alignItems = "center";
bigDiv.appendChild(heading);
container.appendChild(bigDiv)

var containerDiv = document.createElement("div");
containerDiv.style.display = "flex";
containerDiv.style.justifyContent = "center";
containerDiv.style.marginTop = "20px";
containerDiv.style.columnGap = "45px";

for (var i = 0; i < 3; i++) {
    var smallDiv = document.createElement("div");
    smallDiv.style.width = "290px";
    smallDiv.style.height = "180px";
    smallDiv.style.backgroundColor = "black";
    smallDiv.style.display = "flex";
    smallDiv.style.justifyContent = "center";
    smallDiv.style.alignItems = "center";

    var text = document.createElement("h2");
    text.textContent = "290*180";
    text.style.color = "white";
    text.style.fontSize = "24px";

    smallDiv.appendChild(text);
    containerDiv.appendChild(smallDiv);



}


var textDiv = document.createElement("div");
textDiv.style.display = "flex";
textDiv.style.justifyContent = "center";
textDiv.style.columnGap = "45px";
textDiv.style.flexDirection = "45px";

for (var i = 0; i < 3; i++) {
    const textSmallDiv = document.createElement("div");
    textSmallDiv.style.width = "290px";
    textSmallDiv.style.display = "flex";
    textSmallDiv.style.flexDirection = "column";
    textSmallDiv.style.position = "relative";

    const h3 = document.createElement("h3");
    h3.textContent = "Indonectetus facilisdk";
    h3.style.color = "gray";
    h3.style.fontSize = "20px";
    h3.style.margin = "5px 0";
    h3.style.fontStyle = "italic";

    const p = document.createElement("p");
    p.textContent = "Nullamlacus dui ipsum cdodmdsdk lodcsbbvf non elfdkvgd morbi penas dapsbbnd orna";
    p.style.color = "gray";
    p.style.fontSize = "14px";
    p.style.height = "70px";
    p.style.margin = "5px 0";



    const a = document.createElement("a");
    a.textContent = "Read More";
    a.style.color = "red";
    a.style.fontSize = "16px";
    a.style.margin = "5px 0";
    a.style.bottom = "0";
    a.style.right = "0";
    a.style.position = "absolute";
    a.href = "#"
    textSmallDiv.append(h3, p, a);
    textDiv.appendChild(textSmallDiv);

}

document.body.append(container, containerDiv, textDiv);



