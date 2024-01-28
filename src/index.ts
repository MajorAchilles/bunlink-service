import { Elysia } from "elysia";
import { checkIfOpenVpnExists } from "./openvpn";

let PORT:number = 3000;

if (!Bun.env.PORT) {
  throw new Error(ERRORS.PORT_NOT_DEFINED);
}

let parsedPort = parseInt(Bun.env.PORT!);
if (isNaN(parsedPort)) {
  throw new Error(ERRORS.PORT_NOT_NUMBER);
}
PORT = parsedPort;

const app = new Elysia().get("/", () => "Hello Elysia").listen(PORT);

console.log(Bun.env.PORT);
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);


const initializeServer = async () => {
  const intervalId = setInterval(async () => {
    const isOpenVpnExisting = await checkIfOpenVpnExists();
    console.log(isOpenVpnExisting);
  }, 10000);
}