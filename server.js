// Root endpoint
app.get("/", (req, res) => {
  res.json({ 
    message: "Vini AI Backend", 
    version: "1.0.0",
    endpoints: {
      health: "/health",
      chat: "/api/chat",
      models: "/api/models",
      agents: "/api/agents",
      tools: "/api/tools"
    }
  });
});
