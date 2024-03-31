document.getElementById("que1").addEventListener("click", () => {
  if (
    document.getElementById("desc1").style.display == "block" &&
    document.getElementById("icon1").style.rotate == "45deg"
  ) {
    document.getElementById("desc1").style.display = "none";
    document.getElementById("icon1").style.rotate = "0deg";
  } else {
    document.getElementById("desc1").style.display = "block";
    document.getElementById("icon1").style.rotate = "45deg";
  }
});
function descp2() {
  if (
    document.getElementById("desc2").style.display == "block" &&
    document.getElementById("icon2").style.rotate == "45deg"
  ) {
    document.getElementById("desc2").style.display = "none";
    document.getElementById("icon2").style.rotate = "0deg";
  } else {
    document.getElementById("desc2").style.display = "block";
    document.getElementById("icon2").style.rotate = "45deg";
  }
}
function descp3() {
  if (
    document.getElementById("desc3").style.display == "block" &&
    document.getElementById("icon3").style.rotate == "45deg"
  ) {
    document.getElementById("desc3").style.display = "none";
    document.getElementById("icon3").style.rotate = "0deg";
  } else {
    document.getElementById("desc3").style.display = "block";
    document.getElementById("icon3").style.rotate = "45deg";
  }
}
function descp4() {
  if (
    document.getElementById("desc4").style.display == "block" &&
    document.getElementById("icon4").style.rotate == "45deg"
  ) {
    document.getElementById("desc4").style.display = "none";
    document.getElementById("icon4").style.rotate = "0deg";
  } else {
    document.getElementById("desc4").style.display = "block";
    document.getElementById("icon4").style.rotate = "45deg";
  }
}
function descp5() {
  if (
    document.getElementById("desc5").style.display == "block" &&
    document.getElementById("icon5").style.rotate == "45deg"
  ) {
    document.getElementById("desc5").style.display = "none";
    document.getElementById("icon5").style.rotate = "0deg";
  } else {
    document.getElementById("desc5").style.display = "block";
    document.getElementById("icon5").style.rotate = "45deg";
  }
}
function descp6() {
  if (
    document.getElementById("desc6").style.display == "block" &&
    document.getElementById("icon6").style.rotate == "45deg"
  ) {
    document.getElementById("desc6").style.display = "none";
    document.getElementById("icon6").style.rotate = "0deg";
  } else {
    document.getElementById("desc6").style.display = "block";
    document.getElementById("icon6").style.rotate = "45deg";
  }
}

document.getElementById("lang").addEventListener("click", () => {
  if (document.getElementById("options").style.display == "block") {
    document.getElementById("options").style.display = "none";
  } else {
    document.getElementById("options").style.display = "block";
  }
});

document.getElementById("lang2").addEventListener("click", () => {
  if (document.getElementById("options1").style.display == "block") {
    document.getElementById("options1").style.display = "none";
  } else {
    document.getElementById("options1").style.display = "block";
  }
});
document.getElementById("region").addEventListener("click", () => {
  if (document.getElementById("options2").style.display == "block") {
    document.getElementById("options2").style.display = "none";
  } else {
    document.getElementById("options2").style.display = "block";
  }
});
document.getElementById("genre-language").addEventListener("click", () => {
  if (document.getElementById("options3").style.display == "block") {
    document.getElementById("options3").style.display = "none";
  } else {
    document.getElementById("options3").style.display = "block";
  }
});

document.getElementById("right").addEventListener("click", () => {
  document.getElementById("trending-con").scrollBy(615, 0);
});
document.getElementById("left").addEventListener("click", () => {
  document.getElementById("trending-con").scrollBy(-615, 0);
});

document.getElementById("right1").addEventListener("click", () => {
  document.getElementById("trending-con1").scrollBy(615, 0);
});
document.getElementById("left1").addEventListener("click", () => {
  document.getElementById("trending-con1").scrollBy(-615, 0);
});
document.getElementById("right2").addEventListener("click", () => {
  document.getElementById("trending-con2").scrollBy(615, 0);
});
document.getElementById("left2").addEventListener("click", () => {
  document.getElementById("trending-con2").scrollBy(-615, 0);
});
document.getElementById("right3").addEventListener("click", () => {
  document.getElementById("trending-con3").scrollBy(615, 0);
});
document.getElementById("left3").addEventListener("click", () => {
  document.getElementById("trending-con3").scrollBy(-615, 0);
});

let x = window.matchMedia("(max-width: 660px)");
let y = window.matchMedia("(max-width: 510px)");
if (x.matches) {
  document.getElementById("right").addEventListener("click", () => {
    document.getElementById("trending-con").scrollBy(510, 0);
  });
  document.getElementById("left").addEventListener("click", () => {
    document.getElementById("trending-con").scrollBy(-510, 0);
  });

  document.getElementById("right1").addEventListener("click", () => {
    document.getElementById("trending-con1").scrollBy(510, 0);
  });
  document.getElementById("left1").addEventListener("click", () => {
    document.getElementById("trending-con1").scrollBy(-510, 0);
  });
  document.getElementById("right2").addEventListener("click", () => {
    document.getElementById("trending-con2").scrollBy(510, 0);
  });
  document.getElementById("left2").addEventListener("click", () => {
    document.getElementById("trending-con2").scrollBy(-510, 0);
  });
  document.getElementById("right3").addEventListener("click", () => {
    document.getElementById("trending-con3").scrollBy(510, 0);
  });
  document.getElementById("left3").addEventListener("click", () => {
    document.getElementById("trending-con3").scrollBy(-510, 0);
  });
} else if (y.matches) {
  document.getElementById("right").addEventListener("click", () => {
    document.getElementById("trending-con").scrollBy(340, 0);
  });
  document.getElementById("left").addEventListener("click", () => {
    document.getElementById("trending-con").scrollBy(-340, 0);
  });

  document.getElementById("right1").addEventListener("click", () => {
    document.getElementById("trending-con1").scrollBy(340, 0);
  });
  document.getElementById("left1").addEventListener("click", () => {
    document.getElementById("trending-con1").scrollBy(-340, 0);
  });
  document.getElementById("right2").addEventListener("click", () => {
    document.getElementById("trending-con2").scrollBy(340, 0);
  });
  document.getElementById("left2").addEventListener("click", () => {
    document.getElementById("trending-con2").scrollBy(-340, 0);
  });
  document.getElementById("right3").addEventListener("click", () => {
    document.getElementById("trending-con3").scrollBy(340, 0);
  });
  document.getElementById("left3").addEventListener("click", () => {
    document.getElementById("trending-con3").scrollBy(-340, 0);
  });
}

document.getElementById("movies").addEventListener("click", () => {
  document.getElementById("india-tv-shows").style.display = "none";
  document.getElementById("india-movies").style.display = "block";
});

document.getElementById("tv-shows").addEventListener("click", () => {
  document.getElementById("india-movies").style.display = "none";
  document.getElementById("india-tv-shows").style.display = "block";
});
document.getElementById("india").addEventListener("click", () => {
  document.getElementById("movies").addEventListener("click", () => {
    document.getElementById("india-tv-shows").style.display = "none";
    document.getElementById("india-movies").style.display = "block";
  });
});

document.getElementById("india").addEventListener("click", () => {
  document.getElementById("tv-shows").addEventListener("click", () => {
    document.getElementById("india-movies").style.display = "none";
    document.getElementById("india-tv-shows").style.display = "block";
  });
});

document.getElementById("global").addEventListener("click", () => {
  document.getElementById("india").addEventListener("click", () => {
    document.getElementById("movies").addEventListener("click", () => {
      document.getElementById("india-tv-shows").style.display = "none";
      document.getElementById("india-movies").style.display = "block";
      document.getElementById("global-tv-shows").style.display = "none";
      document.getElementById("global-movies").style.display = "none";
    });
  });
});
document.getElementById("global").addEventListener("click", () => {
  document.getElementById("india").addEventListener("click", () => {
    document.getElementById("tv-shows").addEventListener("click", () => {
      document.getElementById("india-movies").style.display = "none";
      document.getElementById("india-tv-shows").style.display = "block";
      document.getElementById("global-tv-shows").style.display = "none";
      document.getElementById("global-movies").style.display = "none";
    });
  });
});

document.getElementById("global").addEventListener("click", () => {
  document.getElementById("movies").addEventListener("click", () => {
    document.getElementById("india-tv-shows").style.display = "none";
    document.getElementById("india-movies").style.display = "none";
    document.getElementById("global-tv-shows").style.display = "none";
    document.getElementById("global-movies").style.display = "block";

    if (document.getElementById("global-movies").style.display == "none") {
      document.getElementById("global-movies").style.display = "block";
    }
    // else {
    //   document.getElementById("global-movies").style.display = "block";
    // }
  });
});

document.getElementById("global").addEventListener("click", () => {
  document.getElementById("tv-shows").addEventListener("click", () => {
    document.getElementById("india-tv-shows").style.display = "none";
    document.getElementById("india-movies").style.display = "none";
    document.getElementById("global-movies").style.display = "none";

    if (document.getElementById("global-tv-shows").style.display == "none") {
      document.getElementById("global-tv-shows").style.display = "block";
    }
    // else {
    //   document.getElementById("global-tv-shows").style.display = "block";
    // }
  });
});
