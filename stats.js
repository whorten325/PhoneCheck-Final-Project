import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  const { data } = await supabase.from("searches").select("valid");

  const valid = data.filter(d => d.valid).length;
  const invalid = data.length - valid;

  res.status(200).json({ valid, invalid });
}
