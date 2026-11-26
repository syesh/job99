const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// 99 Top dream companies across Tech, AI, Cloud, Fintech, Hardware & Engineering
const companies = [
  "Google", "Apple", "Microsoft", "Amazon", "Meta",
  "Nvidia", "Netflix", "Tesla", "OpenAI", "Spotify",
  "Uber", "Airbnb", "Adobe", "Salesforce", "Stripe",
  "GitHub", "Intel", "AMD", "IBM", "Oracle",
  "Palantir", "Databricks", "Figma", "Notion", "Canva",
  "Cloudflare", "Atlassian", "Snowflake", "Reddit", "LinkedIn",
  "PayPal", "Twitter", "Pinterest", "Snapchat", "Dropbox",
  "Zoom", "Slack", "eBay", "TikTok", "Qualcomm",
  "Cisco", "Samsung", "Sony", "Dell", "HP",
  "Siemens", "Philips", "Panasonic", "Foxconn", "Alibaba",
  "Baidu", "Tencent", "Huawei", "ZTE", "Vivo",
  "Xiaomi", "LG", "Motorola", "Asus", "Lenovo",
  "Toshiba", "Anthropic", "SpaceX", "ByteDance", "Roblox",
  "DoorDash", "Instacart", "Coinbase", "Robinhood", "Square",
  "Shopify", "MongoDB", "Datadog", "Twilio", "ServiceNow",
  "CrowdStrike", "Splunk", "Unity", "Epic Games", "Electronic Arts",
  "Valve", "Riot Games", "Nintendo", "Blizzard", "Broadcom",
  "ASML", "TSMC", "Applied Materials", "Texas Instruments", "Arm",
  "Micron", "Western Digital", "Seagate", "Synopsys", "Cadence",
  "VMware", "Box", "HubSpot", "Zendesk"
];

// Serve static frontend files
app.use(express.static(path.join(__dirname, "public")));

// Endpoint to get companies
app.get("/api/companies", (req, res) => {
  res.json(companies);
});

// Endpoint to optionally register a custom company
app.post("/api/companies", (req, res) => {
  const { name } = req.body || {};
  if (!name || typeof name !== "string") {
    return res.status(400).json({ error: "Company name is required" });
  }
  const trimmed = name.trim();
  if (trimmed && !companies.includes(trimmed)) {
    companies.push(trimmed);
  }
  res.json({ success: true, name: trimmed, companies });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
