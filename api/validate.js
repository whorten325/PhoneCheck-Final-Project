import fetch from "node-fetch";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { phone } = req.body;

  const url = `http://apilayer.net/api/validate?access_key=${process.env.NUMVERIFY_API_KEY}&number=${phone}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.valid) {
    await supabase.from("searches").insert([{
      phone_number: data.international_format,
      country: data.country_name,
      carrier: data.carrier,
      line_type: data.line_type,
      valid: data.valid
    }]);
  }

  res.status(200).json(data);
}
