// importando o io do http
import { io } from "../http";
// importando o connectionsService
import { ConnectionsService } from "../services/ConnectionsService";
// listagem das conexões
io.on("connect", async socket => {
  const connectionsService = new ConnectionsService();

  const  allConnectionsWithoutAdmin = await connectionsService.findAllWithoutAdmin();
  // emite o evento de listagem de mensagens 
  io.emit("admin_list_all_users", allConnectionsWithoutAdmin)
})