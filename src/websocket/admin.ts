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
  })
});