import { Elysia } from "elysia";
import appState from "./AppState";
import appConfig from "./AppConfig";
import { handleHealth } from "./api/health";
import { getOvpnStatus } from "./ovpnManager";

const initializeServer = async () => {
  setInterval(async () => {
    const openVpnStatus = await getOvpnStatus();
    appState.setOpenVpnStatus(openVpnStatus)
    appState.log();
  }, appConfig.getOvpnCheckInterval());
}

const startServer = () => {
  const PORT = appConfig.getPort();

  const app = new Elysia().listen(PORT);
  
  console.log(
    `Server is running at ${app.server?.hostname}:${app.server?.port} ✅`
  );

  app.get("/", handleHealth);
};

await initializeServer();
startServer();
