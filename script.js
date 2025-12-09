let texto = document.getElementById("texto");
let botao1 = document.getElementById("b1");
let botao2 = document.getElementById("b2");
let botao3 = document.getElementById("b3");

let sobre = "Tenho 20 anos e estudo Ciência da Computação na Cesar School. Eu gosto de aprender coisas novas de várias áreas, incluindo tanto linguagens de programação quanto línguas estrangeiras. Eu consigo programar em C, Python, HTML, CSS e JavaScript, entendo inglês fluentemente e também tenho um nível mais intermediário em russo.<br /><br />Eu me importo menos com a concepção de coisas novas e mais em ajudar os outros na implementação de suas ideias e em trazer mais visibilidade às coisas que eu gosto. Isso me trouxe um interesse maior pela parte de programação em gamedev e também pela transcrição de textos, desde documentos históricos a diálogos de jogos.<br /><br />No geral, eu também tenho interesse em jogos difíceis, visual novels, arte, música, observação do céu e astronomia no geral.";
let projetos = "Um projeto individual meu foi o desenvolvimento do jogo 'Ache o Norte' no Bitsy. Com o jogo exigindo um conhecimento robusto de observação do céu, meu foco foi implementar um gameplay simples, mas difícil e intrigante dentro de uma plataforma extremamente limitada.<br /><br />Eu também fui responsável pelo código em um projeto de desenvolvimento de um limpador de placa solar utilizando Arduíno.<br /><br />Como hobby, eu já desenvolvi códigos em Python que manipulavam o conteúdo de scripts de fangames para que eu pudesse transcrever seus diálogos facilmente.";
let estudo = "Os sites que mais me ajudaram na criação dos meus códigos foram:<br /><br />- W3Schools<br />- Stack Overflow<br /><br />Para aprender linguagens de programação, eu utilizo em maioria:<br /><br />- Youtube<br />- Cisco Networking Academy"

texto.innerHTML = sobre;

botao1.addEventListener("click", function(){
    botao1.style.backgroundColor = "grey";
    botao2.style.backgroundColor = "purple";
    botao3.style.backgroundColor = "purple";
    texto.innerHTML = sobre;
});

botao2.addEventListener("click", function(){
    botao1.style.backgroundColor = "purple";
    botao2.style.backgroundColor = "grey";
    botao3.style.backgroundColor = "purple";
    texto.innerHTML = projetos;
});

botao3.addEventListener("click", function(){
    botao1.style.backgroundColor = "purple";
    botao2.style.backgroundColor = "purple";
    botao3.style.backgroundColor = "grey";
    texto.innerHTML = estudo;
});