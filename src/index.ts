import { Elysia } from "elysia";
import appState from "./AppState";
import appConfig from "./AppConfig";
import { handleHealth } from "./api/health";
import { OvpnStatus, getOvpnStatus } from "./ovpnManager";
import { connect, returnOvpnStatus } from "./api/ovpn";

const initializeServer = async () => {
  setInterval(async () => {
    const openVpnStatus = await getOvpnStatus();
    appState.setOpenVpnStatus(openVpnStatus)

    if (openVpnStatus === OvpnStatus.UNAVAILABLE) {
      console.log("🔴 OpenVPN is unavailable.");
      return;
    }

    console.log(`${openVpnStatus === OvpnStatus.CONNECTED ? '🟢' : '🟠'} OpenVPN is ${openVpnStatus}.`);
  }, appConfig.getOvpnCheckInterval());
}

const startServer = () => {
  const PORT = appConfig.getPort();

  const app = new Elysia();
  

  app.get("/", handleHealth);
  app.get("/status", returnOvpnStatus)
  app.post("/connect", connect)
  app.onError(console.log);
  console.log('✅ Routes are registered.')
  app.listen(PORT);
  console.log(
    `✅ Server is running at ${app.server?.hostname}:${app.server?.port}`
  );

};

await initializeServer();
startServer();
