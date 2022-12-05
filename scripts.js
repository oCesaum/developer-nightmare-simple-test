function disableButtons(prop) {
  document.querySelector("#Sofá-Azul").disabled = prop
  document.querySelector("#Sofá-Amarelo").disabled = prop
  document.querySelector("#Sofá-Vermelho").disabled = prop
}

function changeSelected(e) {
  disableButtons(true)

  //adiciona transition aos elementos que serão animados
  document.querySelector('#main-bg').style.transition = '1.5s'
  document.querySelector('#circle-object-container-1').style.transition = '1.5s'
  document.querySelector('#circle-object-container-2').style.transition = '1.5s'
  document.querySelector('#couch-rotable-1').style.transition = '1.5s'
  document.querySelector('#couch-rotable-2').style.transition = '1.5s'
  document.querySelector('#couch-img-1').style.transition = '1.5s'
  document.querySelector('#couch-img-2').style.transition = '1.5s'
  
  //rotaciona o main-bg
  const mainBgRotation = document.querySelector("#main-bg").style.rotate
  if (mainBgRotation) {
    document.querySelector("#main-bg").style.rotate = (parseFloat(mainBgRotation) + 72) + "deg";
  } else {
    document.querySelector("#main-bg").style.rotate = "72deg";
  }

  document.querySelector('#divider').classList.add("divider");

  //rotaciona os círculos
  // const circleRotation = document.querySelector("#circle-object-container-1", "#circle-object-container-2").style.rotate
  // if (circleRotation) {
  //   document.querySelector("#circle-object-container-1", "#circle-object-container-2").style.rotate = (parseFloat(circleRotation) + 180) + "deg";
  // } else {
  //   document.querySelector("#circle-object-container-1", "#circle-object-container-2").style.rotate = "0deg";
  // }

  //rotaciona o sofá
  const notVisibleCouchRotation = document.querySelector(".notVisible").style.rotate
  if (notVisibleCouchRotation) {
    document.querySelector(".notVisible").style.rotate = (parseFloat(notVisibleCouchRotation) + 180) + "deg";
  } else {
    document.querySelector(".notVisible").style.rotate = "180deg";
  }
  const notVisibleCouchNegativeRotation = document.querySelector(".notVisible .couch-img").style.rotate
  if (notVisibleCouchNegativeRotation) {
    document.querySelector(".notVisible .couch-img").style.rotate = (parseFloat(notVisibleCouchNegativeRotation) + -180) + "deg";
  } else {
    document.querySelector(".notVisible .couch-img").style.rotate = "-180deg";
  }
  
  const visibleCouchRotation = document.querySelector(".visible").style.rotate
  if (visibleCouchRotation) {
    document.querySelector(".visible").style.rotate = (parseFloat(visibleCouchRotation) + 180) + "deg";
  } else {
    document.querySelector(".visible").style.rotate = "180deg";
  }
  const visibleCouchNegativeRotation = document.querySelector(".visible .couch-img").style.rotate
  if (visibleCouchNegativeRotation) {
    document.querySelector(".visible .couch-img").style.rotate = (parseFloat(visibleCouchNegativeRotation) + -180) + "deg";
  } else {
    document.querySelector(".visible .couch-img").style.rotate = "-180deg";
  }

  if (e.target.alt === "Sofá Azul" || e.target.id === "Sofá-Azul") {
    //troca o sofá para azul
    setTimeout(() => {
      document.querySelector('.visible .couch-img').src = "images/sofa-azul.png";
      document.querySelector('.visible .couch-img').alt = "Sofá azul";
      document.querySelector('.visible .couch-img').title = "Sofá azul";
    }, 150);

    //troca a cor principal para azul
    document.querySelector('#divider').classList.remove("yellow", "red");
    document.querySelector('#divider').classList.add("blue");

    //remove classe ativo de todas as cores e adiciona em azul
    document.querySelector('.blue-couch').classList.add("active");
    document.querySelector('.yellow-couch').classList.remove("active");
    document.querySelector('.red-couch').classList.remove("active");
  }

  if (e.target.alt === "Sofá Amarelo" || e.target.id === "Sofá-Amarelo") {
    //troca o sofá para amarelo
    setTimeout(() => {
      document.querySelector('.visible .couch-img').src = "images/sofa-amarelo.png";
      document.querySelector('.visible .couch-img').alt = "Sofá amarelo";
      document.querySelector('.visible .couch-img').title = "Sofá amarelo";
    }, 150);

    //troca a cor principal para amarelo
    document.querySelector('#divider').classList.remove("blue", "red");
    document.querySelector('#divider').classList.add("yellow");

    //remove classe ativo de todas as cores e adiciona em amarelo
    document.querySelector('.blue-couch').classList.remove("active");
    document.querySelector('.yellow-couch').classList.add("active");
    document.querySelector('.red-couch').classList.remove("active");
  }

  if (e.target.alt === "Sofá Vermelho" || e.target.id === "Sofá-Vermelho") {
    //troca o sofá para vermelho
    setTimeout(() => {
      document.querySelector('.visible .couch-img').src = "images/sofa-vermelho.png";
      document.querySelector('.visible .couch-img').alt = "Sofá vermelho";
      document.querySelector('.visible .couch-img').title = "Sofá vermelho";
    }, 150);

    //troca a cor principal para vermelho
    document.querySelector('#divider').classList.remove("blue", "yellow");
    document.querySelector('#divider').classList.add("red");

    //remove classe ativo de todas as cores e adiciona em vermelho
    document.querySelector('.blue-couch').classList.remove("active");
    document.querySelector('.yellow-couch').classList.remove("active");
    document.querySelector('.red-couch').classList.add("active");
  }

  setTimeout(() => {
    document.querySelector('#couch-rotable-1').classList.toggle("notVisible");
    document.querySelector('#couch-rotable-1').classList.toggle("visible");
    document.querySelector('#couch-rotable-2').classList.toggle("notVisible");
    document.querySelector('#couch-rotable-2').classList.toggle("visible");

    disableButtons(false)
  }, 1501);
}