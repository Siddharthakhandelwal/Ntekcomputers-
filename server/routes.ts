import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, service, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ 
          message: "Name, email and message are required" 
        });
      }
      
      // Would typically save to database or send email here
      // For now, just log the submission and return success
      console.log("Contact form submission:", {
        name,
        email,
        phone,
        service,
        message,
        timestamp: new Date().toISOString()
      });
      
      return res.status(200).json({ 
        message: "Message received successfully" 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ 
        message: "An error occurred while processing your request" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
