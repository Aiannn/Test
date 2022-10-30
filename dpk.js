const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  let candidate

  if (event) {
    event.partitionKey ?
      candidate = event.partitionKey :
      candidate = crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
  }
  // just used ternary operator for more readability and removed declaring 
  //  'data' variable 

  if (candidate) {
    if (typeof candidate !== "string") (candidate = JSON.stringify(candidate)) //more readable version
  } else {
    candidate = "0"
  }

  if (candidate.length > 256) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate;
};