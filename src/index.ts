import { Elysia } from "elysia";
import { checkIfOpenVpnExists } from "./openvpn";
import appState from "./AppState";
import { handleHealth } from "./api/health";

const initializeServer = async () => {
  const appStateData = appState.get();
  console.log(appStateData)
}

const startServer = () => {
  let PORT:number = 3000;

  if (!Bun.env.PORT) {
    throw new Error(ERRORS.PORT_NOT_DEFINED);
  }
  
  let parsedPort = parseInt(Bun.env.PORT!);
  if (isNaN(parsedPort)) {
    throw new Error(ERRORS.PORT_NOT_NUMBER);
  }
  
  PORT = parsedPort;
  
  const app = new Elysia().get("/", handleHealth).listen(PORT);
  
  console.log(Bun.env.PORT);
  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  );
};

await initializeServer();
startServer();
