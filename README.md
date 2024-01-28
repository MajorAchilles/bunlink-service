# Elysia with Bun runtime

## Getting Started
To get started with this template, simply paste this command into your terminal:
```bash
bun create elysia ./elysia-example
```

## Development
To start the development server run:
```bash
bun run dev
```

## How the App Works

1. Server Starts Up
2. Register itself as a linux service
3. Check if Openvpn exists
4. If it doesn't, get sad and die
    1. Maybe throw a few errors in console, service status and API response
5. Else, 
    1. Time to get to work


### Notes to self on point 4

1. Have some sort of a global state that remembers if check failed
2. Have some sort of a interval to check for openvpn?

Open http://localhost:3000/ with your browser to see the result.