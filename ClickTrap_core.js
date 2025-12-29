function analyzeClickTrap(message) {
  message = message.toLowerCase();

  let traps = [];
  let score = 0;

  // Hope Trap
  if (
    message.includes("get money") ||
    message.includes("reward") ||
    message.includes("refund") ||
    message.includes("cashback")
  ) {
    traps.push("Hope Trap (fake money promise)");
    score += 2;
  }

  // Fear Trap
  if (
    message.includes("account blocked") ||
    message.includes("kyc failed") ||
    message.includes("suspended")
  ) {
    traps.push("Fear Trap (account threat)");
    score += 2;
  }

  // Urgency Trap
  if (
    message.includes("urgent") ||
    message.includes("act now") ||
    message.includes("limited time")
  ) {
    traps.push("Urgency Trap (pressure)");
    score += 1;
  }

  // Link detection
  if (message.includes("http")) {
    score += 1;
  }

  let risk;
  if (score >= 4) risk = "HIGH CLICK RISK";
  else if (score >= 2) risk = "MEDIUM CLICK RISK";
  else risk = "LOW CLICK RISK";

  return {
    risk,
    traps
  };
}

// Example test
console.log(
  analyzeClickTrap(
    "You will get money urgently. Account blocked. Click here http://fake.link"
  )
);
