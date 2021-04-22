// importando servidor client de http
import { io } from '../http';
// importando a regra de negócio para o client
import { ConnectionsService } from "../services/ConnectionsService";
// Importando a regra de negócio de users para o client
import { UsersService } from "../services/UsersService";
// importando a regra de negócio de messages para o client
import { MessagesService } from "../services/MessagesService";

interface IParams {
  text: string;
  email: string;
}

// criando um evento específico para o cliente do chat
io.on("connect", (socket) => {
  // instanciando um novo objeto de ConnectionsService
  const connectionsService = new ConnectionsService();
  // instanciando um novo objeto de UsersServise
  const usersService = new UsersService();

  const messagesService = new MessagesService();

  socket.on("client_first_acces", async (params) => {
    const socket_id = socket.id;

    const { text, email } = params as IParams;

    let user_id = null;

    const userExists = await usersService.findByEmail(email);

    if (!userExists) {

      const user = await usersService.create(email);
      
      await connectionsService.create({
        socket_id,
        user_id: user.id
      });

      user_id = user.id;

    } else {

      user_id = userExists.id;
      const connection = await connectionsService.findByUserId(userExists.id);

      if (!connection) {
        await connectionsService.create ({
          socket_id,
          user_id: userExists.id
        });
      } else {
        connection.socket_id = socket_id;
        await connectionsService.create(connection);
      }

    }

    // salvar a conexão com o socket_id, user_id
    await messagesService.create({
      text,
      user_id,
    });
  });
});