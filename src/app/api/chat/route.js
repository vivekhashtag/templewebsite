// app/api/chat/route.js
import { templeData } from "./templeData";

export const dynamic = "force-dynamic"; // for Vercel edge function freshness

// Common polite closures to detect gratitude/farewell
const politeClosings = ["thank you", "thanks", "bye", "goodbye", "ok", "great"];

export async function POST(req) {
  try {
    const { query } = await req.json();

    if (!query || typeof query !== "string") {
      return new Response(
        JSON.stringify({
          response: "Please ask a valid question about the temple.",
        }),
        { headers: { "Content-Type": "application/json" }, status: 400 }
      );
    }

    const lowerQuery = query.toLowerCase().trim();

    // Graceful handling for thank yous, byes, etc.
    if (politeClosings.some((phrase) => lowerQuery.includes(phrase))) {
      return new Response(
        JSON.stringify({
          response:
            "You're most welcome! 🙏 May  Devi Sri Karumaari bless you always. Thaye Saranam! Devi Saranam! Thiruvadiye Saranam!",
        }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    // Default fallback response
    let response =
      "I can help with temple timings, history, location, festivals, poojas, and more. Please ask a specific question 🙏.";

    // Search templeData for a match
    for (const [section, { keywords, answer }] of Object.entries(templeData)) {
      if (keywords.some((kw) => lowerQuery.includes(kw))) {
        response = answer;
        break;
      }
    }

    return new Response(JSON.stringify({ response }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(
      JSON.stringify({
        response: "Sorry, I'm unable to process your request at the moment.",
      }),
      { headers: { "Content-Type": "application/json" }, status: 500 }
    );
  }
}
