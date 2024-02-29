const phoneBook = [
  { name: "Сантехник", phone: 71234567890 },
  { name: "Бассейн для детей", phone: 74567890123 },
  { name: "Оля", phone: 77890123456 },
  { name: "Саня", phone: 71111002030 },
  { name: "Брат", phone: 73211020304 },
  { name: "Мама", phone: 75555050102 },
  { name: "Танцы", phone: 73752224896 },
  { name: "Доставка", phone: 74786263190 },
  { name: "Служба спасения", phone: 78183754321 },
  { name: "Школа Арта", phone: 78171000001 },
  { name: "Классный руководитель", phone: 75559095737 },
  { name: "Анастасия", phone: 75555050103 },
  { name: "Санта (Дед Мороз)", phone: 76549876543 },
  { name: "Володя", phone: 75555050110 },
  { name: "Английский", phone: 73752456513 },
  { name: "СТОшка", phone: 71231234567 },
  { name: "Работа", phone: 72223334455 },
  { name: "Заказ тортов", phone: 75158087060 },
  { name: "Санаторий", phone: 74241598426 },
];

const searchContacts = (contacts, pattern) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(pattern.toLowerCase()));
}

let result = searchContacts(phoneBook, "сан");

console.log(result); // Ожидаем получить 4 контакта (Сантехник, Саня, Санта (Дед Мороз), и Санаторий)

result = searchContacts(phoneBook, "л"); // Ожидаем получить 7 контактов
console.log(result);

result = searchContacts(phoneBook, "Глеб");
console.log(result); // Ожидаем получить 0 контактов
