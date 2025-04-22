import type { Express } from "express";
import { createServer, type Server } from "http";
import { supabase, type ContactFormData } from "./lib/supabase";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all contact form submissions
  app.get("/api/contact", async (_req, res) => {
    try {
      const { data, error } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching submissions:", error);
        return res.status(500).json({
          message: "Failed to fetch submissions",
        });
      }

      return res.status(200).json(data);
    } catch (error) {
      console.error("Error processing request:", error);
      return res.status(500).json({
        message: "An error occurred while processing your request",
      });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, service, message } = req.body;

      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({
          message: "Name, email and message are required",
        });
      }

      // Create contact form submission in Supabase
      const contactData: ContactFormData = {
        name,
        email,
        phone,
        service,
        message,
        status: "new",
      };

      const { data, error } = await supabase
        .from("contact_submissions")
        .insert([contactData])
        .select()
        .single();

      if (error) {
        console.error("Error saving to Supabase:", error);
        return res.status(500).json({
          message: "An error occurred while saving your message",
        });
      }

      return res.status(200).json({
        message: "Message received successfully",
        data,
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({
        message: "An error occurred while processing your request",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
