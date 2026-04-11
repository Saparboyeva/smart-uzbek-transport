import { RegionKey } from "@/contexts/RegionContext";

// Bus data per region
export const regionBuses: Record<RegionKey, { id: string; name: string; from: string; to: string; eta: number; status: string }[]> = {
  toshkent: [
    { id: "35", name: "35-marshrut", from: "Chorsu", to: "Sergeli", eta: 3, status: "kelmoqda" },
    { id: "67", name: "67-marshrut", from: "Oybek", to: "Buyuk Ipak Yo'li", eta: 7, status: "yo'lda" },
    { id: "12", name: "12-marshrut", from: "Minor", to: "Yunusobod", eta: 1, status: "yaqin" },
    { id: "94", name: "94-marshrut", from: "Tinchlik", to: "Beruniy", eta: 12, status: "yo'lda" },
    { id: "51", name: "51-marshrut", from: "Hamid Olimjon", to: "Chilonzor", eta: 5, status: "kelmoqda" },
  ],
  samarqand: [
    { id: "1", name: "1-marshrut", from: "Registon", to: "Universitet", eta: 4, status: "kelmoqda" },
    { id: "5", name: "5-marshrut", from: "Siyob bozor", to: "Bog'ishamol", eta: 8, status: "yo'lda" },
    { id: "14", name: "14-marshrut", from: "Markaz", to: "Samarqand Darvoza", eta: 2, status: "yaqin" },
    { id: "22", name: "22-marshrut", from: "Avtovokzal", to: "Urgut yo'li", eta: 10, status: "yo'lda" },
  ],
  buxoro: [
    { id: "3", name: "3-marshrut", from: "Ark", to: "Kogon", eta: 5, status: "kelmoqda" },
    { id: "7", name: "7-marshrut", from: "Markaz", to: "Bozor", eta: 3, status: "yaqin" },
    { id: "11", name: "11-marshrut", from: "Lyabi Hovuz", to: "Vokzal", eta: 9, status: "yo'lda" },
  ],
  andijon: [
    { id: "2", name: "2-marshrut", from: "Bobur bog'i", to: "Markaz", eta: 4, status: "kelmoqda" },
    { id: "8", name: "8-marshrut", from: "Bozor", to: "Asaka", eta: 6, status: "yo'lda" },
    { id: "15", name: "15-marshrut", from: "Universitet", to: "Avtovokzal", eta: 2, status: "yaqin" },
  ],
  namangan: [
    { id: "4", name: "4-marshrut", from: "Markaz", to: "Chorsu", eta: 3, status: "kelmoqda" },
    { id: "9", name: "9-marshrut", from: "Pop yo'li", to: "Yangi shahar", eta: 7, status: "yo'lda" },
    { id: "18", name: "18-marshrut", from: "Bozor", to: "Vokzal", eta: 5, status: "kelmoqda" },
  ],
  fargona: [
    { id: "6", name: "6-marshrut", from: "Markaz", to: "Marg'ilon", eta: 6, status: "yo'lda" },
    { id: "10", name: "10-marshrut", from: "Bozor", to: "Yangi tuman", eta: 3, status: "yaqin" },
    { id: "20", name: "20-marshrut", from: "Al-Farg'oniy", to: "Avtovokzal", eta: 8, status: "yo'lda" },
  ],
  nukus: [
    { id: "1", name: "1-marshrut", from: "Markaz", to: "Bozor", eta: 4, status: "kelmoqda" },
    { id: "5", name: "5-marshrut", from: "Berdax", to: "Aeroport", eta: 10, status: "yo'lda" },
    { id: "8", name: "8-marshrut", from: "Vokzal", to: "Markaz", eta: 2, status: "yaqin" },
  ],
  xorazm: [
    { id: "3", name: "3-marshrut", from: "Urganch markaz", to: "Xiva", eta: 15, status: "yo'lda" },
    { id: "7", name: "7-marshrut", from: "Bozor", to: "Al-Xorazmiy", eta: 4, status: "kelmoqda" },
    { id: "12", name: "12-marshrut", from: "Vokzal", to: "Markaz", eta: 2, status: "yaqin" },
  ],
  qashqadaryo: [
    { id: "2", name: "2-marshrut", from: "Qarshi markaz", to: "Shahrisabz", eta: 20, status: "yo'lda" },
    { id: "6", name: "6-marshrut", from: "Nasaf", to: "Bozor", eta: 5, status: "kelmoqda" },
    { id: "10", name: "10-marshrut", from: "Avtovokzal", to: "Markaz", eta: 3, status: "yaqin" },
  ],
  surxondaryo: [
    { id: "1", name: "1-marshrut", from: "Termiz markaz", to: "Chegara", eta: 12, status: "yo'lda" },
    { id: "4", name: "4-marshrut", from: "Bozor", to: "Aeroport", eta: 6, status: "kelmoqda" },
    { id: "9", name: "9-marshrut", from: "Markaz", to: "Denov", eta: 18, status: "yo'lda" },
  ],
  jizzax: [
    { id: "3", name: "3-marshrut", from: "Markaz", to: "Zomin", eta: 15, status: "yo'lda" },
    { id: "7", name: "7-marshrut", from: "Bozor", to: "Avtovokzal", eta: 4, status: "kelmoqda" },
    { id: "11", name: "11-marshrut", from: "Vokzal", to: "Markaz", eta: 2, status: "yaqin" },
  ],
  sirdaryo: [
    { id: "2", name: "2-marshrut", from: "Guliston markaz", to: "Yangiyer", eta: 10, status: "yo'lda" },
    { id: "5", name: "5-marshrut", from: "Bozor", to: "Markaz", eta: 3, status: "yaqin" },
    { id: "8", name: "8-marshrut", from: "Ko'prik", to: "Vokzal", eta: 7, status: "kelmoqda" },
  ],
  navoiy: [
    { id: "1", name: "1-marshrut", from: "Markaz", to: "Zarafshon", eta: 20, status: "yo'lda" },
    { id: "4", name: "4-marshrut", from: "Sanoat zonasi", to: "Bozor", eta: 5, status: "kelmoqda" },
    { id: "7", name: "7-marshrut", from: "Vokzal", to: "Markaz", eta: 3, status: "yaqin" },
  ],
  toshkent_vil: [
    { id: "10", name: "10-marshrut", from: "Chirchiq", to: "Olmaliq", eta: 15, status: "yo'lda" },
    { id: "15", name: "15-marshrut", from: "Nurafshon", to: "Angren", eta: 8, status: "kelmoqda" },
    { id: "20", name: "20-marshrut", from: "Chirchiq markaz", to: "Vokzal", eta: 3, status: "yaqin" },
  ],
};

// Carpool rides per region
export const regionRides: Record<RegionKey, { driver: string; from: string; to: string; time: string; seats: number; rating: number; price: string }[]> = {
  toshkent: [
    { driver: "Alisher", from: "Yunusobod", to: "Sergeli", time: "08:30", seats: 2, rating: 4.8, price: "8,000" },
    { driver: "Nodira", from: "Chilonzor", to: "Chorsu", time: "09:00", seats: 3, rating: 4.9, price: "5,000" },
    { driver: "Bobur", from: "Minor", to: "Buyuk Ipak Yo'li", time: "07:45", seats: 1, rating: 4.7, price: "6,500" },
  ],
  samarqand: [
    { driver: "Jasur", from: "Registon", to: "Universitet", time: "08:00", seats: 2, rating: 4.6, price: "4,000" },
    { driver: "Malika", from: "Siyob", to: "Bog'ishamol", time: "09:30", seats: 3, rating: 4.8, price: "3,500" },
  ],
  buxoro: [
    { driver: "Sanjar", from: "Ark", to: "Kogon", time: "08:15", seats: 2, rating: 4.7, price: "5,000" },
    { driver: "Dilnoza", from: "Markaz", to: "Bozor", time: "07:30", seats: 3, rating: 4.9, price: "3,000" },
  ],
  andijon: [
    { driver: "Otabek", from: "Bobur bog'i", to: "Asaka", time: "08:00", seats: 2, rating: 4.5, price: "4,500" },
    { driver: "Zarina", from: "Markaz", to: "Universitet", time: "09:00", seats: 3, rating: 4.8, price: "3,000" },
  ],
  namangan: [
    { driver: "Rustam", from: "Markaz", to: "Chorsu", time: "08:30", seats: 2, rating: 4.6, price: "3,500" },
    { driver: "Gulnora", from: "Pop yo'li", to: "Yangi shahar", time: "09:15", seats: 3, rating: 4.7, price: "4,000" },
  ],
  fargona: [
    { driver: "Sherzod", from: "Markaz", to: "Marg'ilon", time: "08:00", seats: 2, rating: 4.8, price: "5,000" },
    { driver: "Nargiza", from: "Bozor", to: "Yangi tuman", time: "09:00", seats: 3, rating: 4.6, price: "3,000" },
  ],
  nukus: [
    { driver: "Aybek", from: "Markaz", to: "Bozor", time: "08:30", seats: 2, rating: 4.5, price: "3,000" },
    { driver: "Dilfuza", from: "Berdax", to: "Aeroport", time: "10:00", seats: 3, rating: 4.7, price: "5,000" },
  ],
  xorazm: [
    { driver: "Ulug'bek", from: "Urganch", to: "Xiva", time: "09:00", seats: 2, rating: 4.8, price: "8,000" },
    { driver: "Maftuna", from: "Bozor", to: "Markaz", time: "08:00", seats: 3, rating: 4.6, price: "3,000" },
  ],
  qashqadaryo: [
    { driver: "Bahrom", from: "Qarshi", to: "Shahrisabz", time: "08:00", seats: 2, rating: 4.7, price: "7,000" },
    { driver: "Sevara", from: "Nasaf", to: "Bozor", time: "09:30", seats: 3, rating: 4.5, price: "3,500" },
  ],
  surxondaryo: [
    { driver: "Komil", from: "Termiz", to: "Denov", time: "08:30", seats: 2, rating: 4.6, price: "6,000" },
    { driver: "Hilola", from: "Markaz", to: "Chegara", time: "09:00", seats: 3, rating: 4.8, price: "4,000" },
  ],
  jizzax: [
    { driver: "Sardor", from: "Markaz", to: "Zomin", time: "08:00", seats: 2, rating: 4.7, price: "6,000" },
    { driver: "Kamola", from: "Bozor", to: "Avtovokzal", time: "09:00", seats: 3, rating: 4.5, price: "3,000" },
  ],
  sirdaryo: [
    { driver: "Nodir", from: "Guliston", to: "Yangiyer", time: "08:30", seats: 2, rating: 4.6, price: "4,000" },
    { driver: "Feruza", from: "Bozor", to: "Markaz", time: "09:15", seats: 3, rating: 4.8, price: "2,500" },
  ],
  navoiy: [
    { driver: "Javlon", from: "Markaz", to: "Zarafshon", time: "08:00", seats: 2, rating: 4.7, price: "8,000" },
    { driver: "Shahlo", from: "Sanoat zonasi", to: "Bozor", time: "09:30", seats: 3, rating: 4.5, price: "3,500" },
  ],
  toshkent_vil: [
    { driver: "Dostonbek", from: "Chirchiq", to: "Olmaliq", time: "08:00", seats: 2, rating: 4.8, price: "7,000" },
    { driver: "Madina", from: "Nurafshon", to: "Angren", time: "09:00", seats: 3, rating: 4.6, price: "5,000" },
  ],
};

// Predictions per region
export const regionPredictions: Record<RegionKey, { id: number; route: string; from: string; to: string; time: string; level: "Yuqori" | "O'rtacha" | "Past"; message: string; suggestion: string; minutesUntil: number; confidence: number }[]> = {
  toshkent: [
    { id: 1, route: "Chilonzor → Yunusobod", from: "Chilonzor", to: "Yunusobod", time: "18:00", level: "Yuqori", minutesUntil: 30, confidence: 92, message: "30 daqiqadan keyin bu yo'l tiqilib ketadi", suggestion: "Buyuk Ipak Yo'li orqali boring — 15 daqiqa tezroq" },
    { id: 2, route: "Sergeli → Markaz", from: "Sergeli", to: "Markaz", time: "17:30", level: "O'rtacha", minutesUntil: 45, confidence: 78, message: "45 daqiqadan keyin o'rtacha tirbandlik kutilmoqda", suggestion: "Metro orqali boring" },
    { id: 3, route: "Olmazor → Yakkasaroy", from: "Olmazor", to: "Yakkasaroy", time: "08:15", level: "Yuqori", minutesUntil: 15, confidence: 95, message: "15 daqiqadan keyin kuchli tirbandlik", suggestion: "Hozir yo'lga chiqing yoki 09:30 gacha kuting" },
  ],
  samarqand: [
    { id: 1, route: "Registon → Universitet", from: "Registon", to: "Universitet", time: "08:30", level: "Yuqori", minutesUntil: 20, confidence: 88, message: "20 daqiqadan keyin Registon atrofida tirbandlik", suggestion: "Bog'ishamol orqali boring" },
    { id: 2, route: "Siyob → Markaz", from: "Siyob", to: "Markaz", time: "10:00", level: "O'rtacha", minutesUntil: 40, confidence: 72, message: "Bozor vaqtida o'rtacha tirbandlik", suggestion: "Ertalab yoki tushdan keyin boring" },
  ],
  buxoro: [
    { id: 1, route: "Ark → Kogon", from: "Ark", to: "Kogon", time: "09:00", level: "O'rtacha", minutesUntil: 35, confidence: 75, message: "Ertalab o'rtacha tirbandlik kutilmoqda", suggestion: "10:00 dan keyin yo'lga chiqing" },
    { id: 2, route: "Markaz → Bozor", from: "Markaz", to: "Bozor", time: "17:00", level: "Yuqori", minutesUntil: 25, confidence: 85, message: "Kechqurun bozor atrofida tirbandlik", suggestion: "Lyabi Hovuz orqali aylanib o'ting" },
  ],
  andijon: [
    { id: 1, route: "Bobur bog'i → Asaka", from: "Bobur bog'i", to: "Asaka", time: "08:00", level: "O'rtacha", minutesUntil: 30, confidence: 70, message: "Ertalab o'rtacha tirbandlik", suggestion: "Tezkor yo'l orqali boring" },
    { id: 2, route: "Markaz → Universitet", from: "Markaz", to: "Universitet", time: "17:30", level: "Yuqori", minutesUntil: 20, confidence: 82, message: "Kechqurun kuchli tirbandlik", suggestion: "18:30 dan keyin chiqing" },
  ],
  namangan: [
    { id: 1, route: "Markaz → Chorsu", from: "Markaz", to: "Chorsu", time: "09:00", level: "Yuqori", minutesUntil: 15, confidence: 87, message: "Bozor kunlari kuchli tirbandlik", suggestion: "Yangi shahar orqali boring" },
    { id: 2, route: "Pop yo'li → Markaz", from: "Pop yo'li", to: "Markaz", time: "17:00", level: "O'rtacha", minutesUntil: 40, confidence: 68, message: "Kechqurun o'rtacha tirbandlik", suggestion: "18:00 dan keyin chiqing" },
  ],
  fargona: [
    { id: 1, route: "Markaz → Marg'ilon", from: "Markaz", to: "Marg'ilon", time: "08:30", level: "O'rtacha", minutesUntil: 25, confidence: 74, message: "Ertalab o'rtacha tirbandlik", suggestion: "Tezkor yo'l orqali boring" },
    { id: 2, route: "Bozor → Yangi tuman", from: "Bozor", to: "Yangi tuman", time: "17:00", level: "Yuqori", minutesUntil: 30, confidence: 80, message: "Kechqurun bozor atrofida tirbandlik", suggestion: "Al-Farg'oniy ko'chasi orqali boring" },
  ],
  nukus: [
    { id: 1, route: "Markaz → Bozor", from: "Markaz", to: "Bozor", time: "09:00", level: "O'rtacha", minutesUntil: 30, confidence: 65, message: "Ertalab o'rtacha tirbandlik", suggestion: "Berdax ko'chasi orqali boring" },
    { id: 2, route: "Bozor → Aeroport", from: "Bozor", to: "Aeroport", time: "16:00", level: "Past", minutesUntil: 50, confidence: 60, message: "Tirbandlik kutilmaydi", suggestion: "Bemalol yo'lga chiqing" },
  ],
  xorazm: [
    { id: 1, route: "Urganch → Xiva", from: "Urganch", to: "Xiva", time: "09:00", level: "O'rtacha", minutesUntil: 35, confidence: 72, message: "Ertalab o'rtacha tirbandlik", suggestion: "Yangi yo'l orqali boring" },
    { id: 2, route: "Bozor → Markaz", from: "Bozor", to: "Markaz", time: "17:30", level: "Yuqori", minutesUntil: 20, confidence: 83, message: "Bozor atrofida kuchli tirbandlik", suggestion: "Al-Xorazmiy ko'chasi orqali boring" },
  ],
  qashqadaryo: [
    { id: 1, route: "Qarshi → Shahrisabz", from: "Qarshi", to: "Shahrisabz", time: "08:00", level: "Past", minutesUntil: 45, confidence: 60, message: "Yo'l bo'sh, tirbandlik kutilmaydi", suggestion: "Bemalol yo'lga chiqing" },
    { id: 2, route: "Nasaf → Bozor", from: "Nasaf", to: "Bozor", time: "17:00", level: "Yuqori", minutesUntil: 25, confidence: 85, message: "Kechqurun bozor atrofida tirbandlik", suggestion: "Shahrisabz yo'li orqali boring" },
  ],
  surxondaryo: [
    { id: 1, route: "Termiz → Denov", from: "Termiz", to: "Denov", time: "08:30", level: "O'rtacha", minutesUntil: 30, confidence: 68, message: "Ertalab o'rtacha tirbandlik", suggestion: "Tezkor yo'l orqali boring" },
    { id: 2, route: "Markaz → Chegara", from: "Markaz", to: "Chegara", time: "16:00", level: "Past", minutesUntil: 50, confidence: 55, message: "Yo'l bo'sh", suggestion: "Bemalol yo'lga chiqing" },
  ],
  jizzax: [
    { id: 1, route: "Markaz → Zomin", from: "Markaz", to: "Zomin", time: "08:00", level: "Past", minutesUntil: 40, confidence: 62, message: "Tirbandlik kutilmaydi", suggestion: "Bemalol yo'lga chiqing" },
    { id: 2, route: "Bozor → Avtovokzal", from: "Bozor", to: "Avtovokzal", time: "17:00", level: "Yuqori", minutesUntil: 20, confidence: 80, message: "Kechqurun bozor atrofida tirbandlik", suggestion: "Zomin yo'li orqali boring" },
  ],
  sirdaryo: [
    { id: 1, route: "Guliston → Yangiyer", from: "Guliston", to: "Yangiyer", time: "08:30", level: "O'rtacha", minutesUntil: 30, confidence: 65, message: "Ertalab o'rtacha tirbandlik", suggestion: "Ko'prik orqali boring" },
    { id: 2, route: "Bozor → Markaz", from: "Bozor", to: "Markaz", time: "17:00", level: "O'rtacha", minutesUntil: 35, confidence: 60, message: "Kechqurun o'rtacha tirbandlik", suggestion: "Yangiyer yo'li orqali boring" },
  ],
  navoiy: [
    { id: 1, route: "Markaz → Zarafshon", from: "Markaz", to: "Zarafshon", time: "08:00", level: "Past", minutesUntil: 45, confidence: 58, message: "Yo'l bo'sh", suggestion: "Bemalol yo'lga chiqing" },
    { id: 2, route: "Sanoat zonasi → Bozor", from: "Sanoat zonasi", to: "Bozor", time: "17:30", level: "Yuqori", minutesUntil: 20, confidence: 82, message: "Kechqurun sanoat zonasida tirbandlik", suggestion: "Zarafshon yo'li orqali boring" },
  ],
  toshkent_vil: [
    { id: 1, route: "Chirchiq → Olmaliq", from: "Chirchiq", to: "Olmaliq", time: "08:00", level: "O'rtacha", minutesUntil: 30, confidence: 70, message: "Ertalab o'rtacha tirbandlik", suggestion: "Angren yo'li orqali boring" },
    { id: 2, route: "Nurafshon → Markaz", from: "Nurafshon", to: "Markaz", time: "17:30", level: "Yuqori", minutesUntil: 20, confidence: 85, message: "Kechqurun Nurafshon ko'chasida tirbandlik", suggestion: "Chirchiq orqali boring" },
  ],
};

// Safety hazards per region
export const regionHazards: Record<RegionKey, { id: number; type: "accident" | "pothole" | "construction" | "other"; title: string; location: string; distance: string; severity: "Yuqori" | "O'rtacha" | "Past"; reportedBy: string; time: string }[]> = {
  toshkent: [
    { id: 1, type: "accident", title: "Avtohalokat", location: "Amir Temur ko'chasi", distance: "1.2 km", severity: "Yuqori", reportedBy: "3 foydalanuvchi", time: "5 daqiqa oldin" },
    { id: 2, type: "pothole", title: "Chuqur (yama)", location: "Shota Rustaveli ko'chasi", distance: "800 m", severity: "O'rtacha", reportedBy: "AI kamera", time: "15 daqiqa oldin" },
    { id: 3, type: "construction", title: "Ta'mir ishlari", location: "Buyuk Ipak Yo'li", distance: "2.5 km", severity: "O'rtacha", reportedBy: "Rasmiy", time: "1 soat oldin" },
    { id: 4, type: "pothole", title: "Yo'l buzilishi", location: "Nukus ko'chasi", distance: "500 m", severity: "Yuqori", reportedBy: "AI kamera", time: "2 daqiqa oldin" },
  ],
  samarqand: [
    { id: 1, type: "pothole", title: "Chuqur (yama)", location: "Registon atrofi", distance: "600 m", severity: "O'rtacha", reportedBy: "AI kamera", time: "10 daqiqa oldin" },
    { id: 2, type: "construction", title: "Ta'mir ishlari", location: "Universitet ko'chasi", distance: "1.5 km", severity: "O'rtacha", reportedBy: "Rasmiy", time: "2 soat oldin" },
    { id: 3, type: "accident", title: "Kichik to'qnashuv", location: "Siyob bozor atrofi", distance: "900 m", severity: "Past", reportedBy: "1 foydalanuvchi", time: "30 daqiqa oldin" },
  ],
  buxoro: [
    { id: 1, type: "construction", title: "Ta'mir ishlari", location: "Ark atrofi", distance: "400 m", severity: "O'rtacha", reportedBy: "Rasmiy", time: "3 soat oldin" },
    { id: 2, type: "pothole", title: "Yo'l buzilishi", location: "Kogon yo'li", distance: "2 km", severity: "Yuqori", reportedBy: "AI kamera", time: "5 daqiqa oldin" },
  ],
  andijon: [
    { id: 1, type: "accident", title: "Avtohalokat", location: "Asaka yo'li", distance: "3 km", severity: "Yuqori", reportedBy: "2 foydalanuvchi", time: "10 daqiqa oldin" },
    { id: 2, type: "pothole", title: "Chuqur", location: "Markaz bozori atrofi", distance: "500 m", severity: "O'rtacha", reportedBy: "AI kamera", time: "20 daqiqa oldin" },
  ],
  namangan: [
    { id: 1, type: "construction", title: "Ta'mir ishlari", location: "Chorsu bozori atrofi", distance: "700 m", severity: "O'rtacha", reportedBy: "Rasmiy", time: "1 soat oldin" },
    { id: 2, type: "pothole", title: "Yo'l buzilishi", location: "Pop yo'li", distance: "1.5 km", severity: "Past", reportedBy: "AI kamera", time: "45 daqiqa oldin" },
  ],
  fargona: [
    { id: 1, type: "accident", title: "Kichik to'qnashuv", location: "Marg'ilon yo'li", distance: "2 km", severity: "O'rtacha", reportedBy: "1 foydalanuvchi", time: "15 daqiqa oldin" },
    { id: 2, type: "construction", title: "Ta'mir ishlari", location: "Al-Farg'oniy ko'chasi", distance: "800 m", severity: "O'rtacha", reportedBy: "Rasmiy", time: "2 soat oldin" },
  ],
  nukus: [
    { id: 1, type: "pothole", title: "Yo'l buzilishi", location: "Berdax ko'chasi", distance: "600 m", severity: "O'rtacha", reportedBy: "AI kamera", time: "30 daqiqa oldin" },
    { id: 2, type: "construction", title: "Ta'mir ishlari", location: "Aeroport yo'li", distance: "3 km", severity: "Past", reportedBy: "Rasmiy", time: "4 soat oldin" },
  ],
  xorazm: [
    { id: 1, type: "pothole", title: "Chuqur", location: "Xiva yo'li", distance: "5 km", severity: "Yuqori", reportedBy: "AI kamera", time: "10 daqiqa oldin" },
    { id: 2, type: "accident", title: "Avtohalokat", location: "Bozor atrofi", distance: "800 m", severity: "Yuqori", reportedBy: "3 foydalanuvchi", time: "5 daqiqa oldin" },
  ],
  qashqadaryo: [
    { id: 1, type: "construction", title: "Ta'mir ishlari", location: "Shahrisabz yo'li", distance: "10 km", severity: "O'rtacha", reportedBy: "Rasmiy", time: "2 soat oldin" },
    { id: 2, type: "pothole", title: "Yo'l buzilishi", location: "Nasaf ko'chasi", distance: "1 km", severity: "Yuqori", reportedBy: "AI kamera", time: "8 daqiqa oldin" },
  ],
  surxondaryo: [
    { id: 1, type: "pothole", title: "Chuqur", location: "Chegara yo'li", distance: "4 km", severity: "O'rtacha", reportedBy: "AI kamera", time: "25 daqiqa oldin" },
    { id: 2, type: "construction", title: "Ta'mir ishlari", location: "Aeroport tomon", distance: "2 km", severity: "Past", reportedBy: "Rasmiy", time: "3 soat oldin" },
  ],
  jizzax: [
    { id: 1, type: "pothole", title: "Yo'l buzilishi", location: "Zomin yo'li", distance: "6 km", severity: "O'rtacha", reportedBy: "AI kamera", time: "20 daqiqa oldin" },
    { id: 2, type: "accident", title: "Kichik to'qnashuv", location: "Bozor atrofi", distance: "500 m", severity: "Past", reportedBy: "1 foydalanuvchi", time: "40 daqiqa oldin" },
  ],
  sirdaryo: [
    { id: 1, type: "construction", title: "Ta'mir ishlari", location: "Sirdaryo ko'prigi", distance: "3 km", severity: "O'rtacha", reportedBy: "Rasmiy", time: "1 soat oldin" },
    { id: 2, type: "pothole", title: "Chuqur", location: "Yangiyer yo'li", distance: "2 km", severity: "Past", reportedBy: "AI kamera", time: "50 daqiqa oldin" },
  ],
  navoiy: [
    { id: 1, type: "construction", title: "Ta'mir ishlari", location: "Sanoat zonasi", distance: "1.5 km", severity: "Yuqori", reportedBy: "Rasmiy", time: "30 daqiqa oldin" },
    { id: 2, type: "pothole", title: "Yo'l buzilishi", location: "Zarafshon yo'li", distance: "8 km", severity: "O'rtacha", reportedBy: "AI kamera", time: "15 daqiqa oldin" },
  ],
  toshkent_vil: [
    { id: 1, type: "accident", title: "Avtohalokat", location: "Olmaliq yo'li", distance: "5 km", severity: "Yuqori", reportedBy: "2 foydalanuvchi", time: "10 daqiqa oldin" },
    { id: 2, type: "construction", title: "Ta'mir ishlari", location: "Angren tomon", distance: "3 km", severity: "O'rtacha", reportedBy: "Rasmiy", time: "2 soat oldin" },
    { id: 3, type: "pothole", title: "Chuqur", location: "Nurafshon ko'chasi", distance: "1 km", severity: "O'rtacha", reportedBy: "AI kamera", time: "20 daqiqa oldin" },
  ],
};

// Voice commands per region
export const regionVoiceCommands: Record<RegionKey, { command: string; response: string; action: string }[]> = {
  toshkent: [
    { command: "Menga yaqin taksi top", response: "Eng yaqin taksi 3 daqiqada yetib keladi. Narxi: 15,000 so'm", action: "Taksi chaqirildi" },
    { command: "Uyga eng tez yo'l", response: "Metro orqali 25 daqiqa. Hozir tirbandlik bor, metro tavsiya etiladi", action: "Yo'nalish ko'rsatildi" },
    { command: "Chilonzorda tirbandlik bormi", response: "Ha, Chilonzor → Markaz yo'lida yuqori tirbandlik", action: "Tirbandlik tekshirildi" },
    { command: "Eng arzon transport", response: "Avtobus №67 — 1,500 so'm. 10 daqiqada keladi", action: "Avtobus topildi" },
  ],
  samarqand: [
    { command: "Menga yaqin taksi top", response: "Eng yaqin taksi 5 daqiqada yetib keladi. Narxi: 10,000 so'm", action: "Taksi chaqirildi" },
    { command: "Registonga qanday boraman", response: "2-marshrut avtobus 8 daqiqada keladi", action: "Yo'nalish ko'rsatildi" },
    { command: "Siyob bozorida tirbandlik bormi", response: "Ha, bozor atrofida yuqori tirbandlik", action: "Tirbandlik tekshirildi" },
  ],
  buxoro: [
    { command: "Menga yaqin taksi top", response: "Eng yaqin taksi 4 daqiqada. Narxi: 8,000 so'm", action: "Taksi chaqirildi" },
    { command: "Arkka qanday boraman", response: "3-marshrut avtobus 6 daqiqada keladi", action: "Yo'nalish ko'rsatildi" },
    { command: "Kogon yo'lida tirbandlik bormi", response: "Yo'q, yo'l bo'sh", action: "Tirbandlik tekshirildi" },
  ],
  andijon: [
    { command: "Menga yaqin taksi top", response: "Eng yaqin taksi 6 daqiqada. Narxi: 8,000 so'm", action: "Taksi chaqirildi" },
    { command: "Asakaga qanday boraman", response: "8-marshrut avtobus bilan 20 daqiqa", action: "Yo'nalish ko'rsatildi" },
    { command: "Markaz bozorida tirbandlik bormi", response: "Ha, yuqori tirbandlik", action: "Tirbandlik tekshirildi" },
  ],
  namangan: [
    { command: "Menga yaqin taksi top", response: "Eng yaqin taksi 5 daqiqada. Narxi: 7,000 so'm", action: "Taksi chaqirildi" },
    { command: "Chorsu bozoriga qanday boraman", response: "4-marshrut avtobus 5 daqiqada keladi", action: "Yo'nalish ko'rsatildi" },
  ],
  fargona: [
    { command: "Menga yaqin taksi top", response: "Eng yaqin taksi 5 daqiqada. Narxi: 8,000 so'm", action: "Taksi chaqirildi" },
    { command: "Marg'ilonga qanday boraman", response: "6-marshrut avtobus bilan 15 daqiqa", action: "Yo'nalish ko'rsatildi" },
  ],
  nukus: [
    { command: "Menga yaqin taksi top", response: "Eng yaqin taksi 7 daqiqada. Narxi: 6,000 so'm", action: "Taksi chaqirildi" },
    { command: "Aeroportga qanday boraman", response: "5-marshrut avtobus bilan 20 daqiqa", action: "Yo'nalish ko'rsatildi" },
  ],
  xorazm: [
    { command: "Menga yaqin taksi top", response: "Eng yaqin taksi 6 daqiqada. Narxi: 7,000 so'm", action: "Taksi chaqirildi" },
    { command: "Xivaga qanday boraman", response: "3-marshrut avtobus bilan 30 daqiqa", action: "Yo'nalish ko'rsatildi" },
  ],
  qashqadaryo: [
    { command: "Menga yaqin taksi top", response: "Eng yaqin taksi 5 daqiqada. Narxi: 7,000 so'm", action: "Taksi chaqirildi" },
    { command: "Shahrisabzga qanday boraman", response: "2-marshrut avtobus bilan 40 daqiqa", action: "Yo'nalish ko'rsatildi" },
  ],
  surxondaryo: [
    { command: "Menga yaqin taksi top", response: "Eng yaqin taksi 8 daqiqada. Narxi: 6,000 so'm", action: "Taksi chaqirildi" },
    { command: "Denovga qanday boraman", response: "9-marshrut avtobus bilan 35 daqiqa", action: "Yo'nalish ko'rsatildi" },
  ],
  jizzax: [
    { command: "Menga yaqin taksi top", response: "Eng yaqin taksi 6 daqiqada. Narxi: 6,000 so'm", action: "Taksi chaqirildi" },
    { command: "Zominga qanday boraman", response: "3-marshrut avtobus bilan 30 daqiqa", action: "Yo'nalish ko'rsatildi" },
  ],
  sirdaryo: [
    { command: "Menga yaqin taksi top", response: "Eng yaqin taksi 7 daqiqada. Narxi: 5,000 so'm", action: "Taksi chaqirildi" },
    { command: "Yangiyerga qanday boraman", response: "2-marshrut avtobus bilan 20 daqiqa", action: "Yo'nalish ko'rsatildi" },
  ],
  navoiy: [
    { command: "Menga yaqin taksi top", response: "Eng yaqin taksi 6 daqiqada. Narxi: 7,000 so'm", action: "Taksi chaqirildi" },
    { command: "Zarafshonga qanday boraman", response: "1-marshrut avtobus bilan 45 daqiqa", action: "Yo'nalish ko'rsatildi" },
  ],
  toshkent_vil: [
    { command: "Menga yaqin taksi top", response: "Eng yaqin taksi 8 daqiqada. Narxi: 10,000 so'm", action: "Taksi chaqirildi" },
    { command: "Olmaliqqa qanday boraman", response: "10-marshrut avtobus bilan 30 daqiqa", action: "Yo'nalish ko'rsatildi" },
  ],
};
