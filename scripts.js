function changeSelected(e) {
  if (e.target.alt === "Sofá Azul" || e.target.id === "Sofá Azul") {
    //adiciona o efeito de blur
    document.querySelector('#left-object-rotable-container').classList.add("blur-container");
    document.querySelector('.right-items-container').classList.add("light-blur-container");

    //rotaciona as bolinhas
    document.querySelector('#circle-object-container').classList.add("rotate-360");

    //muda as classes que rotacionam os sofás
    document.querySelector('#couch-rotable-1').removeAttribute("class")
    document.querySelector('#couch-rotable-1').classList.add("couch-rotable-1", "rotate-0");
    document.querySelector('#couch-rotable-2').classList.remove("rotate-0", "rotate-275")
    document.querySelector('#couch-rotable-2').classList.add("rotate-90")
    document.querySelector('#couch-rotable-3').classList.remove("rotate-0", "rotate-90")
    document.querySelector('#couch-rotable-3').classList.add("rotate-275")

    //remove as classes do main-bg e volta para as classes padrões
    document.querySelector('#main-bg').removeAttribute("class")
    document.querySelector('#main-bg').classList.add("main-bg", "rotate-0");

    //troca a cor principal para azul
    document.querySelector('#divider').removeAttribute("class");
    document.querySelector('#divider').classList.add("divider", "blue");

    //remove classe ativo de todas as cores e adiciona em azul
    document.querySelector('.blue-couch').classList.add("active");
    document.querySelector('.yellow-couch').classList.remove("active");
    document.querySelector('.red-couch').classList.remove("active");

    //remove o efeito de blur
    setTimeout(() => {
      document.querySelector('#left-object-rotable-container').classList.remove("blur-container")
      document.querySelector('.right-items-container').classList.remove("light-blur-container");
      document.querySelector('#circle-object-container').classList.remove("rotate-360");
    }, 1500);
  }
  if (e.target.alt === "Sofá Amarelo" || e.target.id === "Sofá Amarelo") {
    //adiciona o efeito de blurelo
    document.querySelector('#left-object-rotable-container').classList.add("blur-container");
    document.querySelector('.right-items-container').classList.add("light-blur-container");

    //rotaciona as bolinhas
    document.querySelector('#circle-object-container').classList.add("rotate-360");

    //muda as classes que rotacionam os sofás
    document.querySelector('#couch-rotable-2').removeAttribute("class")
    document.querySelector('#couch-rotable-2').classList.add("couch-rotable-2", "rotate-0");
    document.querySelector('#couch-rotable-1').classList.remove("rotate-0", "rotate-90")
    document.querySelector('#couch-rotable-1').classList.add("rotate-275")
    document.querySelector('#couch-rotable-3').classList.remove("rotate-0", "rotate-275")
    document.querySelector('#couch-rotable-3').classList.add("rotate-90")

    //remove as classes do main-bg e volta para as classes padrões
    document.querySelector('#main-bg').removeAttribute("class")
    document.querySelector('#main-bg').classList.add("main-bg", "rotate-135");

    //troca a cor principal para amarelo
    document.querySelector('#divider').removeAttribute("class");
    document.querySelector('#divider').classList.add("divider", "yellow");

    //remove classe ativo de todas as cores e adiciona em amarelo
    document.querySelector('.blue-couch').classList.remove("active");
    document.querySelector('.yellow-couch').classList.add("active");
    document.querySelector('.red-couch').classList.remove("active");

    //remove o efeito de blur
    setTimeout(() => {
      document.querySelector('#left-object-rotable-container').classList.remove("blur-container")
      document.querySelector('.right-items-container').classList.remove("light-blur-container");
      document.querySelector('#circle-object-container').classList.remove("rotate-360");
    }, 1500);
  }
  if (e.target.alt === "Sofá Vermelho" || e.target.id === "Sofá Vermelho") {
    //adiciona o efeito de blurelho
    document.querySelector('#left-object-rotable-container').classList.add("blur-container");
    document.querySelector('.right-items-container').classList.add("light-blur-container");

    //rotaciona as bolinhas
    document.querySelector('#circle-object-container').classList.add("rotate-360");

    //muda as classes que rotacionam os sofás
    document.querySelector('#couch-rotable-3').removeAttribute("class")
    document.querySelector('#couch-rotable-3').classList.add("couch-rotable-3", "rotate-0");
    document.querySelector('#couch-rotable-1').classList.remove("rotate-0", "rotate-275")
    document.querySelector('#couch-rotable-1').classList.add("rotate-90")
    document.querySelector('#couch-rotable-2').classList.remove("rotate-0", "rotate-90")
    document.querySelector('#couch-rotable-2').classList.add("rotate-275")

    //remove as classes do main-bg e volta para as classes padrões
    document.querySelector('#main-bg').removeAttribute("class")
    document.querySelector('#main-bg').classList.add("main-bg", "rotate-255");

    //troca a cor principal para vermelho
    document.querySelector('#divider').removeAttribute("class");
    document.querySelector('#divider').classList.add("divider", "red");

    //remove classe ativo de todas as cores e adiciona em vermelho
    document.querySelector('.blue-couch').classList.remove("active");
    document.querySelector('.yellow-couch').classList.remove("active");
    document.querySelector('.red-couch').classList.add("active");

    //remove o efeito de blur
    setTimeout(() => {
      document.querySelector('#left-object-rotable-container').classList.remove("blur-container")
      document.querySelector('.right-items-container').classList.remove("light-blur-container");
      document.querySelector('#circle-object-container').classList.remove("rotate-360");
    }, 1500);
  }
}