function changeSelected(e) {
  if (e.target.alt === "Sofá Azul" || e.target.id === "Sofá Azul") {
    // animações
    if(document.querySelector('#divider').classList.value.includes("red")) {
      //de vermelho para azul
      document.querySelector('#left-container').removeAttribute("class")
      document.querySelector('#left-container').classList.add("left-container", "rotate-container");

      document.querySelector('#main-bg').removeAttribute("class")
      document.querySelector('#main-bg').classList.add("main-bg", "red-to-blue");

      setTimeout(() => {  document.querySelector('#left-container').classList.remove("rotate-container"); }, 1501);
    }
    if(document.querySelector('#divider').classList.value.includes("yellow")) {
      //de amarelo para azul
      document.querySelector('#left-container').removeAttribute("class")
      document.querySelector('#left-container').classList.add("left-container", "rotate-container");

      document.querySelector('#main-bg').removeAttribute("class")
      document.querySelector('#main-bg').classList.add("main-bg", "yellow-to-blue");

      setTimeout(() => {  document.querySelector('#left-container').classList.remove("rotate-container"); }, 1501);
    }

    //troca o sofá principal para azul
    setTimeout(() => {
      document.querySelector('#couch-img').src = "images/001-sofa.png";
      document.querySelector('#couch-img').alt = "Sofá azul";
      document.querySelector('#couch-img').title = "Sofá azul";

      document.querySelector('#couch-img-2').src = "images/002-sofa-1.png";
      document.querySelector('#couch-img-2').alt = "Sofá amarelo";
      document.querySelector('#couch-img-2').title = "Sofá amarelo";

      // document.querySelector('#couch-img-3').src = "images/003-sofa-2.png";
      // document.querySelector('#couch-img-3').alt = "Sofá vermelho";
      // document.querySelector('#couch-img-3').title = "Sofá vermelho";
    }, 500);

    //troca os 3 sofás para azul
    document.querySelector('#couch-1').src = "images/001-sofa.png";
    document.querySelector('#couch-2').src = "images/001-sofa.png";
    document.querySelector('#couch-3').src = "images/001-sofa.png";

    //troca a cor principal para azul
    document.querySelector('#divider').removeAttribute("class");
    document.querySelector('#divider').classList.add("divider", "blue");

    //remove classe ativo de todas as cores e adiciona em azul
    document.querySelector('.blue-couch').classList.add("active");
    document.querySelector('.yellow-couch').classList.remove("active");
    document.querySelector('.red-couch').classList.remove("active");
  }
  if (e.target.alt === "Sofá Amarelo" || e.target.id === "Sofá Amarelo") {
    // animações
    if(document.querySelector('#divider').classList.value.includes("blue")) {
      //de azul para amarelo
      document.querySelector('#left-container').removeAttribute("class")
      document.querySelector('#left-container').classList.add("left-container", "rotate-container");

      document.querySelector('#main-bg').removeAttribute("class")
      document.querySelector('#main-bg').classList.add("main-bg", "blue-to-yellow");

      setTimeout(() => {  document.querySelector('#left-container').classList.remove("rotate-container"); }, 1501);
    }
    if(document.querySelector('#divider').classList.value.includes("red")) {
      //de vermelho para amarelo
      document.querySelector('#left-container').removeAttribute("class")
      document.querySelector('#left-container').classList.add("left-container", "rotate-container");

      document.querySelector('#main-bg').removeAttribute("class")
      document.querySelector('#main-bg').classList.add("main-bg", "red-to-yellow");

      setTimeout(() => {  document.querySelector('#left-container').classList.remove("rotate-container"); }, 1501);
    }

    //troca o sofá principal para amarelo
    setTimeout(() => {
      document.querySelector('#couch-img').src = "images/002-sofa-1.png";
      document.querySelector('#couch-img').alt = "Sofá amarelo";
      document.querySelector('#couch-img').title = "Sofá amarelo";

      document.querySelector('#couch-img-2').src = "images/003-sofa-2.png";
      document.querySelector('#couch-img-2').alt = "Sofá vermelho";
      document.querySelector('#couch-img-2').title = "Sofá vermelho";

      // document.querySelector('#couch-img-3').src = "images/001-sofa.png";
      // document.querySelector('#couch-img-3').alt = "Sofá azul";
      // document.querySelector('#couch-img-3').title = "Sofá azul";
    }, 500);
    
    //troca os 3 sofás para amarelo
    document.querySelector('#couch-1').src = "images/002-sofa-1.png";
    document.querySelector('#couch-2').src = "images/002-sofa-1.png";
    document.querySelector('#couch-3').src = "images/002-sofa-1.png";

    //troca a cor principal para amarelo
    document.querySelector('#divider').removeAttribute("class");
    document.querySelector('#divider').classList.add("divider", "yellow");

    //remove classe ativo de todas as cores e adiciona em amarelo
    document.querySelector('.blue-couch').classList.remove("active");
    document.querySelector('.yellow-couch').classList.add("active");
    document.querySelector('.red-couch').classList.remove("active");
  }
  if (e.target.alt === "Sofá Vermelho" || e.target.id === "Sofá Vermelho") {
    // animações
    if(document.querySelector('#divider').classList.value.includes("blue")) {
      //de azul para vermelho
      document.querySelector('#left-container').removeAttribute("class")
      document.querySelector('#left-container').classList.add("left-container", "rotate-container");

      document.querySelector('#main-bg').removeAttribute("class")
      document.querySelector('#main-bg').classList.add("main-bg", "blue-to-red");

      setTimeout(() => {  document.querySelector('#left-container').classList.remove("rotate-container"); }, 1501);
    }
    if(document.querySelector('#divider').classList.value.includes("yellow")) {
      //de azul para amarelo
      document.querySelector('#left-container').removeAttribute("class")
      document.querySelector('#left-container').classList.add("left-container", "rotate-container");

      document.querySelector('#main-bg').removeAttribute("class")
      document.querySelector('#main-bg').classList.add("main-bg", "yellow-to-red");

      setTimeout(() => {  document.querySelector('#left-container').classList.remove("rotate-container"); }, 1501);
    }

    //troca o sofá principal para vermelho
    setTimeout(() => {
      document.querySelector('#couch-img').src = "images/003-sofa-2.png";
      document.querySelector('#couch-img').alt = "Sofá vermelho";
      document.querySelector('#couch-img').title = "Sofá vermelho";

      document.querySelector('#couch-img-2').src = "images/001-sofa.png";
      document.querySelector('#couch-img-2').alt = "Sofá azul";
      document.querySelector('#couch-img-2').title = "Sofá azul";

      // document.querySelector('#couch-img-3').src = "images/002-sofa-1.png";
      // document.querySelector('#couch-img-3').alt = "Sofá amarelo";
      // document.querySelector('#couch-img-3').title = "Sofá amarelo";
    }, 500);

    //troca os 3 sofás para vermelho
    document.querySelector('#couch-1').src = "images/003-sofa-2.png";
    document.querySelector('#couch-2').src = "images/003-sofa-2.png";
    document.querySelector('#couch-3').src = "images/003-sofa-2.png";

    //troca a cor principal para vermelho
    document.querySelector('#divider').removeAttribute("class");
    document.querySelector('#divider').classList.add("divider", "red");

    //remove classe ativo de todas as cores e adiciona em vermelho
    document.querySelector('.blue-couch').classList.remove("active");
    document.querySelector('.yellow-couch').classList.remove("active");
    document.querySelector('.red-couch').classList.add("active");
  }
}