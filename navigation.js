const left = document.currentScript.getAttribute('left');
const home = document.currentScript.getAttribute('home') || 'Home';
const right = document.currentScript.getAttribute('right');

document.onkeydown = checkKey;

const dict = {
  b: 'image',
  i: 'image',
  l: 'list',
  t: 'table',
  p: 'text'
}

function checkKey(e) {

    const event = e || window.event;

    const matchLetterPress = (key) => {
      const foundMatch = dict[key]
      if (foundMatch) {
        window.location.assign("./" + foundMatch + ".html")
      }
    }
    switch (event.key) {
      case "ArrowLeft":
        window.location.assign("./" + left + ".html")
        break;
      case "ArrowRight":
        window.location.assign("./" + right + ".html")
        break;
      case "ArrowUp":
        window.location.assign("./" + left + ".html")
        break;
      case "ArrowDown":
        window.location.assign("./" + right + ".html")
        break;
      case "h":
        //go home
        window.location.assign("./index.html")
        break;
      default: matchLetterPress(event.key)
    }

}
if (left && right) {
  document.write(`
    <div class="navigation">
    <a href="./${left}.html"><-</a>
    <a href="./index.html" style="padding:0 5px">${home}</a>
    <a href="./text.html">-></a>
    </div>
    `);
}
