import appState from "../AppState";

const returnOvpnStatus = async () => {
  return {
    ovpnStatus: appState.getOpenVpnStatus(),
  };
};

export {
  returnOvpnStatus,
}