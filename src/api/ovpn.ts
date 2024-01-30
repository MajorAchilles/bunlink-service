import { as } from "elysia/dist/index-kJIc86qB";
import appState from "../AppState";
import { connectOpenVpn } from "../ovpnManager";

const returnOvpnStatus = async () => {
  return {
    ovpnStatus: appState.getOpenVpnStatus(),
  };
};


const connect = async () => {
  await connectOpenVpn();


  return {
    ovpnStatus: appState.getOpenVpnStatus(),
  };
}

export {
  connect,
  returnOvpnStatus,
}