function calculerTotal(prix) {
  if (prix > 100) {
    return prix * 0.8; // ou prix - (prix * 0.20)
  }
  return prix;
}

module.exports = { calculerTotal };