document.querySelector("#start_chat").addEventListener("click", (event) => {
  const socket = io();

  // oculta a primeira tela do chat
  const chat_help = document.getElementById("chat_help");
  chat_help.style.display = "none";
  // abre a tela de conversação com o atendente
  const chat_in_support = document.getElementById("chat_in_support");
  chat_in_support.style.display = "block";

  // pega os dados do input de email
  const email = document.getElementById("email").value;
  // pega os dados do input do textarea
  const text = document.getElementById("txt_help").value;

  socket.on("connect", () => {
    // criando os parâmetros de email e texto
    const params = {
      email,
      text,
    };
    
    socket.emit("client_first_acces", params, (call, err) => {
      if (err) {
        console.err(err);
      } else {
        console.log(call);
      }
    });
  });
});
