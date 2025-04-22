import { supabase } from "./lib/supabase";

async function testSupabaseConnection() {
  console.log("Testing Supabase connection...");

  try {
    // First, test the connection by checking if we can access the database
    const { data: testData, error: testError } = await supabase
      .from("contact_submissions")
      .select("count")
      .single();

    if (testError) {
      if (testError.code === "42P01") {
        console.log(
          "Table does not exist. Creating contact_submissions table..."
        );
        // Create the table if it doesn't exist
        const { error: createError } = await supabase.rpc(
          "create_contact_submissions_table"
        );
        if (createError) {
          throw new Error(`Failed to create table: ${createError.message}`);
        }
        console.log("Table created successfully!");
      } else {
        throw testError;
      }
    }

    // Test inserting a record
    const testSubmission = {
      name: "Test User",
      email: "test@example.com",
      phone: "1234567890",
      service: "Test Service",
      message: "This is a test message",
      status: "new",
    };

    console.log("Attempting to insert test record...");
    const { data: insertData, error: insertError } = await supabase
      .from("contact_submissions")
      .insert([testSubmission])
      .select()
      .single();

    if (insertError) {
      throw insertError;
    }

    console.log("✅ Successfully connected to Supabase!");
    console.log("✅ Test record inserted:", insertData);
  } catch (error) {
    console.error("❌ Error:", error.message);
    if (error.details) console.error("Details:", error.details);
    if (error.hint) console.error("Hint:", error.hint);
    process.exit(1);
  }
}

testSupabaseConnection();
