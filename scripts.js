function disableButtons(prop) {
  document.querySelector("#Sofá-Azul").disabled = prop
  document.querySelector("#Sofá-Amarelo").disabled = prop
  document.querySelector("#Sofá-Vermelho").disabled = prop
}

function changeSelected(e) {
  disableButtons(true)
  //adiciona o efeito de blur
  document.querySelector('#left-object-rotable-container').classList.add("blur-container");
  document.querySelector('.right-items-container').classList.add("light-blur-container");

  //rotaciona os círculos
  document.querySelector('#circle-object-container').classList.add("rotate-360");

  //rotaciona o sofá
  document.querySelector('#couch-rotable-1').classList.add("rotate-360");

  if (e.target.alt === "Sofá Azul" || e.target.id === "Sofá-Azul") {
    //troca o sofá para azul
    setTimeout(() => {
      document.querySelector('#couch-img').src = "images/sofa-azul.png";
      document.querySelector('#couch-img').alt = "Sofá azul";
      document.querySelector('#couch-img').title = "Sofá azul";
    }, 550);

    //remove as classes do main-bg e volta para as classes padrões da cor
    document.querySelector('#main-bg').classList.remove("rotate-135", "rotate-255");
    document.querySelector('#main-bg').classList.add("main-bg", "rotate-0");

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
    document.querySelector('#main-bg').classList.remove("rotate-0", "rotate-255");
    document.querySelector('#main-bg').classList.add("main-bg", "rotate-135");

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
    document.querySelector('#main-bg').classList.remove("rotate-0", "rotate-135");
    document.querySelector('#main-bg').classList.add("main-bg", "rotate-255");

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
    document.querySelector('#left-object-rotable-container').classList.remove("blur-container")
    document.querySelector('.right-items-container').classList.remove("light-blur-container");
    document.querySelector('#circle-object-container').classList.remove("rotate-360");
    document.querySelector('#couch-rotable-1').classList.remove("rotate-360");

    disableButtons(false)
  }, 1501);
}