export const config = {
  runtime: "nodejs"
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  const {
    first_name,
    last_name,
    phone,
    location,
    service,
    message
  } = req.body;

  const text = `
📸 NEW BOOKING

👤 Name: ${first_name} ${last_name}
📞 Phone: ${phone}
📍 Location: ${location}
🎯 Service: ${service}

💬 Message:
${message}
`;

  try {
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text
        })
      }
    );

    const data = await telegramResponse.json();

    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
}