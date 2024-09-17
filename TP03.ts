// Interface représentant un fruit
export interface Fruit {
  id: number;
  name: string;
  quantity: number;
}

// Ajouter un fruit au stock de manière immuable
export function addFruitToStock(stock: Fruit[], fruitName: string, quantity: number, nextId: number): [Fruit[], number] {
  const existingFruit = stock.find(f => f.name === fruitName);

  if (existingFruit) {
    // Si le fruit existe, on retourne un nouveau tableau avec la quantité mise à jour
    const updatedStock = stock.map(fruit =>
      fruit.name === fruitName ? { ...fruit, quantity: fruit.quantity + quantity } : fruit
    );
    return [updatedStock, nextId];
  } else {
    // Si le fruit n'existe pas, on l'ajoute à un nouveau tableau
    const newFruit = { id: nextId, name: fruitName, quantity };
    return [[...stock, newFruit], nextId + 1];
  }
}

// Obtenir les informations d'un fruit de manière pure
export function getFruitInfo(stock: Fruit[], identifier: string | number): string {
  const fruit = stock.find(f => f.name === identifier || f.id === identifier);
  return fruit
    ? `Fruit: ${fruit.name}, ID: ${fruit.id}, Quantité: ${fruit.quantity}`
    : `Aucun fruit trouvé pour l'identifiant: ${identifier}`;
}

// Vendre un fruit et retourner un nouveau stock
export function sellFruit(stock: Fruit[], fruitName: string, quantity: number): [Fruit[], string] {
  const fruit = stock.find(f => f.name === fruitName);

  if (fruit && fruit.quantity >= quantity) {
    const updatedStock = stock.map(f =>
      f.name === fruitName ? { ...f, quantity: f.quantity - quantity } : f
    );
    return [updatedStock, `Vente de ${quantity} unités de ${fruitName}. Quantité restante : ${fruit.quantity - quantity}`];
  } else {
    return [stock, `La vente n'est pas possible pour ${fruitName}. Quantité demandée : ${quantity}`];
  }
}

// Supprimer un fruit du stock de manière immuable
export function removeFruit(stock: Fruit[], fruitName: string): [Fruit[], string] {
  const updatedStock = stock.filter(f => f.name !== fruitName);
  if (updatedStock.length !== stock.length) {
    return [updatedStock, `${fruitName} a été retiré du stock.`];
  } else {
    return [stock, `${fruitName} n'est pas trouvé dans le stock.`];
  }
}

// Afficher le stock de manière pure (retourne une chaîne de caractères)
export function displayStock(stock: Fruit[]): string {
  if (stock.length === 0) {
    return 'Le stock est vide.';
  } else {
    return 'Stock actuel:\n' + stock.map(fruit => `${fruit.name} (ID: ${fruit.id}): ${fruit.quantity} unités`).join('\n');
  }
}
