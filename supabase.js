
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://edunetx.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkbGFmbWFycnl0aXhqZ2Vma2hzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE3NzM3OTksImV4cCI6MjA2NzM0OTc5OX0.baDfihnD_fstSU7MkdAIiVSQKmTbrX3HvSuRKZs5bIA";
export const supabase = createClient(supabaseUrl, supabaseKey);
