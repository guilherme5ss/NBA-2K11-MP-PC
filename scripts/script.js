document.addEventListener("DOMContentLoaded", function () {
  var configuracaoSubMenu = document.getElementById("configuracao-submenu");
  var configuracaoMenu = document.getElementById("configuracao-menu");

  // Adiciona um ouvinte de evento ao clicar no item de configuração
  configuracaoMenu.addEventListener("click", function (event) {
    // Impede que o clique no item de configuração propague para os elementos pai
    event.stopPropagation();

    // Alterna a visibilidade do submenu
    if (configuracaoSubMenu.style.display === "none") {
      configuracaoSubMenu.style.display = "block";
    } else {
      configuracaoSubMenu.style.display = "none";
    }
  });

  // Adiciona um ouvinte de evento para impedir o fechamento do submenu ao clicar nas opções do submenu
  configuracaoSubMenu.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});

function mudaModo() {
  document.body.classList.toggle("claro");
  // Obtém todos os elementos com a classe "fa-outdent" ou "fa-indent"
  var icons = document.querySelectorAll(
    ".darkerli i.fa-sun-o, .darkerli i.fa-moon-o"
  );

  // Chama a função genérica para alternar as classes
  alternarClasses(icons, "fa-sun-o", "fa-moon-o");
}

function alternarClasses(elementos, classeRemover, classeAdicionar) {
  elementos.forEach(function (elemento) {
    if (elemento.classList.contains(classeRemover)) {
      elemento.classList.remove(classeRemover);
      elemento.classList.add(classeAdicionar);
    } else {
      elemento.classList.remove(classeAdicionar);
      elemento.classList.add(classeRemover);
    }
  });
}

function mudaLado(element) {
  // Obtém a barra lateral
  var mainMenu = document.querySelector(".main-menu");

  // Alterna entre "left: 0" e "right: 0"
  if (mainMenu.style.left === "0px") {
    mainMenu.style.left = "";
    mainMenu.style.right = "0";
    // Muda o ícone e o texto
    element.querySelector("i").className = "fa fa-arrow-left fa-lg";
    element.querySelector(".nav-text").innerText = "Para esquerda"; //na Direita
  } else {
    mainMenu.style.left = "0";
    mainMenu.style.right = "";
    // Muda o ícone e o texto de volta
    element.querySelector("i").className = "fa fa-arrow-right fa-lg";
    element.querySelector(".nav-text").innerText = "Para direita"; //na Esquerda
  }

  // Checando margens
  var conteudo = document.getElementById("texto");
  if (
    conteudo.style.marginRight === "250px" ||
    conteudo.style.marginLeft === "250px"
  ) {
    if (conteudo.style.marginRight === "250px") {
      conteudo.style.marginLeft = "250px";
      conteudo.style.marginRight = "55px";
    } else {
      conteudo.style.marginLeft = "55px";
      conteudo.style.marginRight = "250px";
    }
  } else {
    conteudo.style.marginLeft = "55px";
    conteudo.style.marginRight = "55px";
  }
  // Mudança de ícone em "Margem"
  var icons = document.querySelectorAll(
    ".darkerli i.fa-outdent, .darkerli i.fa-indent"
  );
  alternarClasses(icons, "fa-outdent", "fa-indent");
}

function aumentaMargem() {
  var mainMenu = document.querySelector(".main-menu");
  var rect = mainMenu.getBoundingClientRect();
  var conteudo = document.getElementById("texto");

  if (rect.left === 0) {
    console.log("Menu à esquerda");
    if (conteudo.style.marginLeft === "250px") {
      conteudo.style.marginLeft = "55px";
    } else {
      conteudo.style.marginLeft = "250px";
    }
  } else {
    console.log("Menu à direita");
    if (conteudo.style.marginRight === "250px") {
      conteudo.style.marginRight = "55px";
    } else {
      conteudo.style.marginRight = "250px";
    }
  }

  // Obtém todos os elementos com a classe "fa-outdent" ou "fa-indent"
  var icons = document.querySelectorAll(
    ".darkerli i.fa-outdent, .darkerli i.fa-indent"
  );
  // Chama a função genérica para alternar as classes
  alternarClasses(icons, "fa-outdent", "fa-indent");
}

function comportamentoMenu() {
  // Verifica se a classe "expandido" está presente
  if (document.body.classList.contains("expandido")) {
    // Remove a classe "expandido" se estiver presente
    //document.body.classList.remove("expandido");
    document.body.classList.toggle("expandido");
  }
  document.body.classList.toggle("retraido");
  // Mudança de ícone em "Comportamento menu"
  var icons = document.querySelectorAll(
    ".darkerli i.fa-th-list, .darkerli i.fa-list"
  );
  alternarClasses(icons, "fa-th-list", "fa-list");
}

function expandirMenu() {
  // Verifica se a classe "expandido" está presente
  if (document.body.classList.contains("retraido")) {
    // Remove a classe "expandido" se estiver presente
    //document.body.classList.remove("retraido");
    document.body.classList.toggle("retraido");
  }
  document.body.classList.toggle("expandido");
}

document.addEventListener("DOMContentLoaded", function () {
  var elements = document.querySelectorAll("center"); // Selecione todas as tags <p>, você pode ajustar seletor conforme necessário

  elements.forEach(function (element) {
    var texto = element.textContent; // Obtém o texto dentro da tag <p>
    var novoTexto = ""; // Variável para armazenar o novo texto com caracteres coloridos

    // Percorre cada caractere do texto
    for (var i = 0; i < texto.length; i++) {
      switch (texto[i]) {
        case "=":
          novoTexto += '<span class="verde">=</span>';
          break;
        case "-":
          novoTexto += '<span class="vermelho">-</span>';
          break;
        case "+":
          novoTexto += '<span class="azul">+</span>';
          break;
        default:
          novoTexto += texto[i];
      }
    }

    // Substitui o texto original pelo novo texto com caracteres coloridos
    element.innerHTML = novoTexto;
  });
});

// Código javaScript para o botão e pop-up
var chatbotBtn = document.getElementById("chatbot-btn");
var popUpCard = document.getElementById("pop-up-card");
var popUpCardClose = document.getElementById("pop-up-card-close");

chatbotBtn.addEventListener("click", function () {
  popUpCard.style.display = "block";
});

popUpCardClose.addEventListener("click", function () {
  popUpCard.style.display = "none";
});

// Fecha ao clivar fora do pop-up
window.addEventListener("click", function (event) {
  if (event.target == popUpCard) {
    popUpCard.style.display = "none";
  }
});

// Fecha ao precionar Esc
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    popUpCard.style.display = "none";
  }
});