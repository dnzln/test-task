window.onload = function() {
  const copter = document.querySelector('.copter-img'),
    textBlock = document.querySelector('.intro-text-block'),
    coptercontainer = document.querySelector('body'),
    copterCenterX = copter.offsetLeft + (copter.offsetWidth / 2),
    copterCenterY = copter.offsetTop + (copter.offsetHeight / 2);

  function getMousePos(xRef, yRef) {
    let panelRect = coptercontainer.getBoundingClientRect();
    return {
      x: Math.floor(xRef - panelRect.left) /(panelRect.right-panelRect.left)*coptercontainer.offsetWidth,
      y: Math.floor(yRef - panelRect.top) / (panelRect.bottom -panelRect.top) * coptercontainer.offsetHeight
    };
  }

  document.body.addEventListener('mousemove', function(e) {
    let mousePos = getMousePos(e.clientX, e.clientY),
      distX = mousePos.x - copterCenterX,
      distY = mousePos.y - copterCenterY;
    textBlock.style.transform = 'translate('+(-1*distX)/15+'px,'+(-1*distY)/15+'px)';
    copter.style.transform = 'translate('+(-1*distX)/20+'px,'+(-1*distY)/20+'px)';
  });

};
