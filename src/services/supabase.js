import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ddvfwkqlzcbisndbewya.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkdmZ3a3FsemNiaXNuZGJld3lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk3NzIwODQsImV4cCI6MjAxNTM0ODA4NH0.ji8ut-6R2rY3ZkLtqbbxJHyv_M60XdLLn5HP2Tj_QjU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
