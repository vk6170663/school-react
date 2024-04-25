import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://nqaqeyntwlnvgnglqheh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xYXFleW50d2xudmduZ2xxaGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4NjEwNzksImV4cCI6MjAyOTQzNzA3OX0._7_52PSA60WEjlKnIz7hriUWF24i5ugqf_6bLvz_Q3w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
