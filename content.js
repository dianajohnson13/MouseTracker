let tail = document.createElement("div");

tail.setAttribute("id", "tail");

let size = 60;

tail.style.background = "transparent";
tail.style.height = size + "px";
tail.style.width = size + "px";
tail.style.borderRadius = "50%";
tail.style.border = "4px solid red";
tail.style.position = "fixed";
tail.style.zIndex = "1000";
tail.style.pointerEvents = "none";

document.body.append(tail);

document.addEventListener('mousemove', function(e) {
    let tail = document.getElementById('tail');
    let left = e.clientX;
    let top = e.clientY;
    tail.style.left = left - (size / 2) + 'px';
    tail.style.top = top - (size / 2) + 'px';
  });

