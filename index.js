/****************************** DON'T ALTER ******************************/
function fadeOut(el) {
  el.classList.add("fade-up-out")
  setTimeout(() => {
    el.style.opacity = 0
    el.classList.remove("fade-up-out")
    el.style.pointerEvents = "none"
  }, FADEDURATION)
}

function fadeIn(el) {
  el.classList.add("fade-down-in")
  setTimeout(() => {
    el.style.opacity = 1
    el.classList.remove("fade-down-in")
    el.style.pointerEvents = "auto"
  }, FADEDURATION)
}

function transitionPage(el, groupOut, groupIn) {
  fadeAllOut(el, groupOut)
  setTimeout(() => {
    fadeAllIn(groupIn)
  }, LONGESTPOSSIBLE)
}
/*************************************************************************/

function delayedFadeOut(div, range, min = 0) {
  setTimeout(fadeOut, Math.random() * range + min, div);
}

function delayedFadeIn(div, range, min = 0) {
  setTimeout(fadeIn, Math.random() * range + min, div);
}

function fadeAllOut(el, group) {
  group.forEach(div => {
    if (div !== el) {
      delayedFadeOut(div, SHORTRANGE)
    }
    delayedFadeOut(el, LONGRANGE, MINDELAY);
  });
}

function fadeAllIn(group) {
  group.forEach(div => {
    delayedFadeIn(div, SHORTRANGE)
  })
}
