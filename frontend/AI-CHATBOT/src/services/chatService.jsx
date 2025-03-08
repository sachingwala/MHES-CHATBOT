export const fetchChatResponse = async (message) => {
  try {
    const response = await fetch("/api/chat/respond", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch chat response");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching chat response:", error);
    return { message: "Error fetching response" };
  }
};
