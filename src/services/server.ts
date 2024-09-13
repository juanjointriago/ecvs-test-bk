import express, { Express } from "express";
import path from "path";
import cors from "cors";
import { createServer, Server as HttpServer } from "http";

import contactRoutes from "../routes/contact.routes";

export class MainServer {
  //initialize
  private app: Express | null;
  private port: string;
  private server: HttpServer | null;
  private apiPaths = {
    contacts: "/api/contacts",
  };

  //constructor
  constructor() {
    this.app = express();
    this.port = process.env.PORT ?? "8095";
    this.middlewares();
    this.server = createServer(this.app);
  }

  middlewares(): void {
    this.app?.use(express.json());
    this.app?.use(express.static(path.join(__dirname, "public")));
    this.app?.use(cors());
  }

  //routes
  routes(): void {
    this.app?.use(this.apiPaths.contacts, contactRoutes);
  }

  //init server
  async execute() {
    this.routes();
    this.server?.listen(this.port, () => {
      console.log(`Server running on http://localhost:${this.port}`);
    });
  }
}
