function changeSelected(e) {
  if (e.target.alt === "Sofá Azul" || e.target.id === "Sofá Azul") {
    //troca o sofá principal para azul
    document.querySelector('#left-object-rotable-container').classList.toggle("blur-container");
    document.querySelector('.right-items-container').classList.toggle("light-blur-container");

    document.querySelector('#couch-rotable-1').removeAttribute("class")
    document.querySelector('#couch-rotable-1').classList.add("couch-rotable-1", "rotate-0");

    document.querySelector('#couch-rotable-2').classList.remove("rotate-0", "rotate-275")
    document.querySelector('#couch-rotable-2').classList.add("rotate-90")
    document.querySelector('#couch-rotable-3').classList.remove("rotate-0", "rotate-90")
    document.querySelector('#couch-rotable-3').classList.add("rotate-275")

    document.querySelector('#main-bg').removeAttribute("class")
    document.querySelector('#main-bg').classList.add("main-bg", "rotate-0");

    //troca a cor principal para azul
    document.querySelector('#divider').removeAttribute("class");
    document.querySelector('#divider').classList.add("divider", "blue");

    //remove classe ativo de todas as cores e adiciona em azul
    document.querySelector('.blue-couch').classList.add("active");
    document.querySelector('.yellow-couch').classList.remove("active");
    document.querySelector('.red-couch').classList.remove("active");

    setTimeout(() => {
      document.querySelector('#left-object-rotable-container').classList.remove("blur-container")
      document.querySelector('.right-items-container').classList.toggle("light-blur-container");
    }, 1500);
  }
  if (e.target.alt === "Sofá Amarelo" || e.target.id === "Sofá Amarelo") {
    //troca o sofá principal para amarelo
    document.querySelector('#left-object-rotable-container').classList.toggle("blur-container");
    document.querySelector('.right-items-container').classList.toggle("light-blur-container");

    document.querySelector('#couch-rotable-2').removeAttribute("class")
    document.querySelector('#couch-rotable-2').classList.add("couch-rotable-2", "rotate-0");

    document.querySelector('#couch-rotable-1').classList.remove("rotate-0", "rotate-90")
    document.querySelector('#couch-rotable-1').classList.add("rotate-275")
    document.querySelector('#couch-rotable-3').classList.remove("rotate-0", "rotate-275")
    document.querySelector('#couch-rotable-3').classList.add("rotate-90")

    document.querySelector('#main-bg').removeAttribute("class")

    document.querySelector('#main-bg').removeAttribute("class")
    document.querySelector('#main-bg').classList.add("main-bg", "rotate-135");

    //troca a cor principal para amarelo
    document.querySelector('#divider').removeAttribute("class");
    document.querySelector('#divider').classList.add("divider", "yellow");

    //remove classe ativo de todas as cores e adiciona em amarelo
    document.querySelector('.blue-couch').classList.remove("active");
    document.querySelector('.yellow-couch').classList.add("active");
    document.querySelector('.red-couch').classList.remove("active");

    setTimeout(() => {
      document.querySelector('#left-object-rotable-container').classList.remove("blur-container")
      document.querySelector('.right-items-container').classList.toggle("light-blur-container");
    }, 1500);
  }
  if (e.target.alt === "Sofá Vermelho" || e.target.id === "Sofá Vermelho") {
    //troca o sofá principal para vermelho
    document.querySelector('#left-object-rotable-container').classList.toggle("blur-container");
    document.querySelector('.right-items-container').classList.toggle("light-blur-container");

    document.querySelector('#couch-rotable-3').removeAttribute("class")
    document.querySelector('#couch-rotable-3').classList.add("couch-rotable-3", "rotate-0");

    document.querySelector('#couch-rotable-1').classList.remove("rotate-0", "rotate-275")
    document.querySelector('#couch-rotable-1').classList.add("rotate-90")
    document.querySelector('#couch-rotable-2').classList.remove("rotate-0", "rotate-90")
    document.querySelector('#couch-rotable-2').classList.add("rotate-275")

    document.querySelector('#main-bg').removeAttribute("class")
    document.querySelector('#main-bg').classList.add("main-bg", "rotate-0");

    document.querySelector('#main-bg').removeAttribute("class")
    document.querySelector('#main-bg').classList.add("main-bg", "rotate-255");

    //troca a cor principal para vermelho
    document.querySelector('#divider').removeAttribute("class");
    document.querySelector('#divider').classList.add("divider", "red");

    //remove classe ativo de todas as cores e adiciona em vermelho
    document.querySelector('.blue-couch').classList.remove("active");
    document.querySelector('.yellow-couch').classList.remove("active");
    document.querySelector('.red-couch').classList.add("active");

    setTimeout(() => {
      document.querySelector('#left-object-rotable-container').classList.remove("blur-container")
      document.querySelector('.right-items-container').classList.toggle("light-blur-container");
    }, 1500);
  }
}