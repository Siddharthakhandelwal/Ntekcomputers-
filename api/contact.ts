import { createClient } from "@supabase/supabase-js";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(supabaseUrl, supabaseKey);

interface ContactFormData {
  id?: number;
  created_at?: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  status?: "new" | "contacted" | "closed";
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Handle OPTIONS request
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method === "POST") {
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
  } else if (req.method === "GET") {
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
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
