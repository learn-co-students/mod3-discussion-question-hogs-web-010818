const FADEDURATION = 700  // this needs to match our css fade animation duration
const MINDELAY = 250      // the minimum delay until the animation begins
const SHORTRANGE = 200    // the delay range until non-selected elements begin their animation
const LONGRANGE = 400    // the delay range until the selected element begins its animation
const LONGESTPOSSIBLE = FADEDURATION + MINDELAY + LONGRANGE // used when transitioning to a new page -- ensures all animations are complete before this one begins
const HOMEGROUP = Array.from(document.getElementsByClassName("home-group"))
const MUDBLOODGROUP = Array.from(document.getElementsByClassName("mudblood-group"))
const PIGGYSMALLSGROUP = Array.from(document.getElementsByClassName("piggy-smalls-group"))
const TRUFFLESHUFFLEGROUP = Array.from(document.getElementsByClassName("truffleshuffle-group"))
const RAINBOWDASHGROUP = Array.from(document.getElementsByClassName("rainbowdash-group"))
