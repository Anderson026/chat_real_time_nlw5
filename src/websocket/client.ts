// importando servidor client de http
import { io } from '../http';
// criando um evento específico para o cliente do chat
io.on("connect", (socket) => {
  socket.on("client_first_acces", (params) => {
    console.log(params);
    // salvar a conexão com o socket_id, user_id
  });
});