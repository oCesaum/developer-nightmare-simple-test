function disableButtons(prop) {
  document.querySelector("#Sofá-Azul").disabled = prop
  document.querySelector("#Sofá-Amarelo").disabled = prop
  document.querySelector("#Sofá-Vermelho").disabled = prop
}

function changeSelected(e) {
  disableButtons(true)
  //adiciona o efeito de blur e translate
  document.querySelector('#circle-object-container').classList.add("effect-translate");

  //rotaciona os círculos
  document.querySelector('#circle-object-container').classList.add("rotate-360");

  //rotaciona o sofá
  document.querySelector('#couch-rotable-1').classList.add("rotate-360");
  document.querySelector('#couch-img').classList.add("rotate-360-negative");

  if (e.target.alt === "Sofá Azul" || e.target.id === "Sofá-Azul") {
    //troca o sofá para azul
    setTimeout(() => {
      document.querySelector('#couch-img').src = "images/sofa-azul.png";
      document.querySelector('#couch-img').alt = "Sofá azul";
      document.querySelector('#couch-img').title = "Sofá azul";
    }, 550);

    //remove as classes do main-bg e volta para as classes padrões da cor
    document.querySelector('#main-bg').classList.remove("rotate-62", "rotate-134");
    document.querySelector('#main-bg').classList.add("main-bg", "rotate-10");

    //troca a cor principal para azul
    document.querySelector('#divider').classList.remove("yellow", "red");
    document.querySelector('#divider').classList.add("divider", "blue");

    //remove classe ativo de todas as cores e adiciona em azul
    document.querySelector('.blue-couch').classList.add("active");
    document.querySelector('.yellow-couch').classList.remove("active");
    document.querySelector('.red-couch').classList.remove("active");
  }

  if (e.target.alt === "Sofá Amarelo" || e.target.id === "Sofá-Amarelo") {
    //troca o sofá para amarelo
    setTimeout(() => {
      document.querySelector('#couch-img').src = "images/sofa-amarelo.png";
      document.querySelector('#couch-img').alt = "Sofá amarelo";
      document.querySelector('#couch-img').title = "Sofá amarelo";
    }, 550);

    //remove as classes do main-bg e volta para as classes padrões da cor
    document.querySelector('#main-bg').classList.remove("rotate-10", "rotate-134");
    document.querySelector('#main-bg').classList.add("main-bg", "rotate-62");

    //troca a cor principal para amarelo
    document.querySelector('#divider').classList.remove("blue", "red");
    document.querySelector('#divider').classList.add("divider", "yellow");

    //remove classe ativo de todas as cores e adiciona em amarelo
    document.querySelector('.blue-couch').classList.remove("active");
    document.querySelector('.yellow-couch').classList.add("active");
    document.querySelector('.red-couch').classList.remove("active");
  }

  if (e.target.alt === "Sofá Vermelho" || e.target.id === "Sofá-Vermelho") {
    //troca o sofá para vermelho
    setTimeout(() => {
      document.querySelector('#couch-img').src = "images/sofa-vermelho.png";
      document.querySelector('#couch-img').alt = "Sofá vermelho";
      document.querySelector('#couch-img').title = "Sofá vermelho";
    }, 550);

    //remove as classes do main-bg e volta para as classes padrões da cor
    document.querySelector('#main-bg').classList.remove("rotate-10", "rotate-62");
    document.querySelector('#main-bg').classList.add("main-bg", "rotate-134");

    //troca a cor principal para vermelho
    document.querySelector('#divider').classList.remove("blue", "yellow");
    document.querySelector('#divider').classList.add("divider", "red");

    //remove classe ativo de todas as cores e adiciona em vermelho
    document.querySelector('.blue-couch').classList.remove("active");
    document.querySelector('.yellow-couch').classList.remove("active");
    document.querySelector('.red-couch').classList.add("active");
  }

  //remove o efeito de blur e 360
  setTimeout(() => {
    document.querySelector('#circle-object-container').classList.remove("effect-translate")
    document.querySelector('#circle-object-container').classList.remove("rotate-360");
    document.querySelector('#couch-rotable-1').classList.remove("rotate-360");
    document.querySelector('#couch-img').classList.remove("rotate-360-negative");

    disableButtons(false)
  }, 2001);
}