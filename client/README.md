# Quiz Game Client

A web frontend for a multiplayer quiz game built with React, TypeScript, and Colyseus.js.

## Prerequisites

- Node.js (>= 14.0.0)
- npm or yarn

## Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

## Development

To start the development server:

```bash
npm start
# or
yarn start
```

This will run the app in development mode. Open [http://localhost:](http://localhost:) to view it in the browser.

## Building for Production

To build the app for production:

```bash
npm run build
# or
yarn build
```

This will create a `dist` folder with all the optimized and bundled files ready for deployment.

## Project Structure

- `src/components`: React components
- `src/network`: Network-related classes for Colyseus.js connection
- `src/proto`: Protocol buffer definitions
- `src/services`: Game service and other business logic
- `src/styles`: CSS stylesheets
- `src/util`: Utility functions

## Features

- Real-time multiplayer quiz game
- WebSocket connection using Colyseus.js
- Beautiful UI with React
- TypeScript for type safety
