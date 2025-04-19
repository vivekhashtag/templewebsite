// app/api/chat/route.js
export const dynamic = "force-dynamic"; // Ensure real-time responses

const knowledgeBase = {
  timings:
    "🕉️ Temple Timings:\n\n• Opens: 6:00 AM\n• Morning Pooja: 7:00 AM\n• Closes: 8:30 PM\n• Evening Pooja: 6:30 PM\n\n*Special days may have different timings",
  history:
    "📜 Thiruvadisoolam Temple was established in 1952 by... (add your historical details here)",
  donations:
    "💰 Donation Options:\n\n• UPI: temple@upi\n• Bank Transfer:\n  Account Name: Thiruvadisoolam Temple\n  Account Number: XXXX XXXX XXXX\n  IFSC: XXXX\n• Cash donations accepted at temple office",
  contact:
    "📞 Contact Us:\n\n• Phone: +91 XXXX XXX XXX\n• Email: contact@thiruvadisoolam.org\n• Address: [Full Temple Address]",
  events:
    "📅 Upcoming Events:\n\n• [Event 1] - Date\n• [Event 2] - Date\n\nCheck our notice board for updates",
  // Add more topics as needed
};

// Common synonyms and questions
const synonyms = {
  timing: "timings",
  time: "timings",
  open: "timings",
  close: "timings",
  history: "history",
  about: "history",
  donate: "donations",
  contribute: "donations",
  money: "donations",
  contact: "contact",
  phone: "contact",
  email: "contact",
  address: "contact",
  event: "events",
  festival: "events",
  program: "events",
};

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

    const lowerQuery = query.toLowerCase();
    let response =
      "I can help with temple timings, history, donations, and more. Please ask specifically.";

    // Check direct matches first
    const directMatch = Object.keys(knowledgeBase).find((key) =>
      lowerQuery.includes(key)
    );

    // Check synonyms if no direct match
    const matchedSynonym = Object.keys(synonyms).find((key) =>
      lowerQuery.includes(key)
    );

    if (directMatch) {
      response = knowledgeBase[directMatch];
    } else if (matchedSynonym) {
      response = knowledgeBase[synonyms[matchedSynonym]];
    }

    return new Response(JSON.stringify({ response }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        response: "Sorry, I'm unable to process your request at the moment.",
      }),
      { headers: { "Content-Type": "application/json" }, status: 500 }
    );
  }
}
