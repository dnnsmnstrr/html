const left = document.currentScript.getAttribute('left');
const home = document.currentScript.getAttribute('home') || 'Home';
const right = document.currentScript.getAttribute('right');

const redirect = document.currentScript.getAttribute('redirect');
if (redirect) {
  window.location.assign("./" + redirect + ".html")
}
document.onkeydown = checkKey;

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

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

    const goLeft = () => {
      if (left) {
        window.location.assign("./" + left + ".html")
      }
    }

    const goRight = () => {
      if (right) {
        window.location.assign("./" + right + ".html")
      }
    }

    switch (event.key) {
      case "ArrowUp":
      case "ArrowLeft":
        goLeft()
        break;
      case "ArrowDown":
      case "ArrowRight":
        goRight()
        break;
      case "?":
        window.alert('Diese Seite kann mithilfe der Tastatur navigiert werden. \n Versuchen Sie es mit den Pfeiltasten oder einem der Anfangsbuchstaben der Seiten ("b", "l", "t", "p") \n Mit "h" gelangen Sie zurück auf die Hauptseite.')
        break;
      case "h":
        //go home
        window.location.assign("./index.html")
        break;
      case "f":
        openFullscreen()
        break;
      case "Escape":
        closeFullscreen()
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
