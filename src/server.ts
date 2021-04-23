// importando o protocolo http para poder iniciar os dois servidores
import { http } from "./http";
// importando o servidor client do socket io
import "./websocket/client";
// importando o servidor admin 
import "./websocket/admin";

// define a porta que irá rodar o servidor
http.listen(3333, () => console.log("Server is running on port 3333"));



