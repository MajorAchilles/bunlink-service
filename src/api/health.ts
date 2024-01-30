import appState from "../AppState";

const handleHealth = async () => {
  return {
    status: "OK",
    message: "Elysia is running.",
    uptime: process.uptime(),
    timestamp: Date.now(),
    appState: appState.get(),
  };
};

export {
  handleHealth
};