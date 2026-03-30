module.exports = {
  // Les options de base que nous avions déjà
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  
  // La nouvelle règle de sécurité pour la Mission 5
  coverageThreshold: {
    global: {
      lines: 80
    }
  }
};