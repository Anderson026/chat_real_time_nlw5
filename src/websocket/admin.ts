// importando o io do http
import { io } from "../http";
// importando o connectionsService
import { ConnectionsService } from "../services/ConnectionsService";
// importando o messagesService
import { MessagesService } from "../services/MessagesService";


// listagem das conexões
io.on("connect", async socket => {
  const connectionsService = new ConnectionsService();
  const messagesService = new MessagesService();

  const  allConnectionsWithoutAdmin = await connectionsService.findAllWithoutAdmin();
  // emite o evento de listagem de mensagens 
  io.emit("admin_list_all_users", allConnectionsWithoutAdmin)

  // criando o evento que vai mostrar todas as mensagens do usuário
  socket.on("admin_list_messages_by_user", async (params, callback) => {
    const { user_id } = params;

    const allMessages = await messagesService.listByUser(user_id)

    callback(allMessages);
  });
  // evento para enviar a mensagem para o usuário
  socket.on("admin_send_message", async params => {
    const { user_id, text } = params;

    await messagesService.create({
      text,
      user_id,
      admin_id: socket.id
    });

    const { socket_id } = await connectionsService.findByUserId(user_id);

    // emitir a mensagem para o usuário
    io.to(socket_id).emit("admin_send_to_client", {
      text,
      socket_id: socket.id
    });
  });

  // criando um evento para pegar um admin e adicionar ao usuário e a solicitação
  // de atendimento sair da fila de espera
  socket.on("admin_user_in_support", async params => {
    const { user_id } = params;
    await connectionsService.updateAdminID(user_id, socket.id);

    const  allConnectionsWithoutAdmin = await connectionsService.findAllWithoutAdmin();
    // emite o evento de listagem de mensagens 
    io.emit("admin_list_all_users", allConnectionsWithoutAdmin);

    // atualizar a lista da fila de espera
  })
});