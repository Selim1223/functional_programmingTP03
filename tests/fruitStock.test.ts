import { addFruitToStock, sellFruit, removeFruit, Fruit } from '../../TP03/TP03'; // Remplacez par le chemin correct

// Test unitaire pour l'ajout de fruit
test('Ajouter un fruit au stock', () => {
  let stock: Fruit[] = [];
  let nextId = 1;

  [stock, nextId] = addFruitToStock(stock, 'Banane', 10, nextId);
  expect(stock.length).toBe(1); // Vérifie que le stock contient un fruit
  expect(stock[0].name).toBe('Banane'); // Vérifie que le fruit ajouté est une banane
  expect(stock[0].quantity).toBe(10); // Vérifie que la quantité de bananes est de 10
});

// Test unitaire pour la vente de fruit
test('Vendre un fruit du stock', () => {
  let stock: Fruit[] = [{ id: 1, name: 'Pomme', quantity: 10 }];
  let message: string;

  [stock, message] = sellFruit(stock, 'Pomme', 5);
  expect(stock[0].quantity).toBe(5); // Vérifie que la quantité de pommes est réduite à 5 après la vente
  expect(message).toBe('Vente de 5 unités de Pomme. Quantité restante : 5'); // Vérifie que le message de vente est correct
});

// Test unitaire pour la suppression de fruit
test('Supprimer un fruit du stock', () => {
  let stock: Fruit[] = [{ id: 1, name: 'Pomme', quantity: 10 }];
  let message: string;

  [stock, message] = removeFruit(stock, 'Pomme');
  expect(stock.length).toBe(0); // Vérifie que le stock est vide après la suppression
  expect(message).toBe('Pomme a été retiré du stock.'); // Vérifie que le message de suppression est correct
});
