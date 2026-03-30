const { calculerTotal } = require('./fichier.js');

test('retourne le prix normal (50) si le prix est inférieur ou égal à 100', () => {
  const resultat = calculerTotal(50);
  expect(resultat).toBe(50);
});
test('applique une réduction de 20% si le prix est supérieur à 100', () => {
  const resultat = calculerTotal(200);
  expect(resultat).toBe(160);
});