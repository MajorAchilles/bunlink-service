import { Elysia } from "elysia";
import { checkIfOpenVpnExists } from "./openvpn";

let PORT:number = 3000;

if (!Bun.env.PORT) {
  throw new Error("PORT is not defined");
}

let parsedPort = parseInt(Bun.env.PORT!);
if (isNaN(parsedPort)) {
  throw new Error("PORT is not a number");
}
PORT = parsedPort;

const app = new Elysia().get("/", () => "Hello Elysia").listen(PORT);

console.log(Bun.env.PORT);
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
