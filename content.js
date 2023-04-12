let marker = document.createElement("div");

marker.setAttribute("id", "marker");

let size = 60;

marker.style.background = "transparent";
marker.style.height = size + "px";
marker.style.width = size + "px";
marker.style.borderRadius = "50%";
marker.style.border = "4px solid red";
marker.style.position = "fixed";
marker.style.zIndex = "99999";
marker.style.pointerEvents = "none";

document.body.append(marker);

document.addEventListener('mousemove', function(e) {
    let marker = document.getElementById('marker');
    let left = e.clientX;
    let top = e.clientY;
    marker.style.left = left - (size / 2) + 'px';
    marker.style.top = top - (size / 2) + 'px';
  });

