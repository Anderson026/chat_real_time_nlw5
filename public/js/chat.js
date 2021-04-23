
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
  // evento para receber as mensagens
  socket.on("client_list_all_messages", messages => {
    
    var template_client = document.getElementById("message-user-template").innerHTML;
    var template_admin = document.getElementById("admin-template").innerHTML;

    // retorna um array com as mensagens
    messages.forEach(message => {
      // verifica se o admin está nulo
      if (message.admin_id === null) {
        const rendered = Mustache.render(template_client, {
          message: message.text,
          email
        })

        document.getElementById("messages").innerHTML += rendered;
      } else {
        // retorna as mensagens do adim
        const rendered = Mustache.render(template_admin, {
          message_admin: message.text
        })

        document.getElementById("messages").innerHTML += rendered;

      }
    });
  });

  // evento que vai receber as mensagens do admin
  socket.on("admin_send_to_client", message => {
    console.log(message);
  });

});
