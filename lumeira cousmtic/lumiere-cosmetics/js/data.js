/* Lumiere Cosmetics - Curated product catalog */

var PRODUCTS = [
  {
    id: 390187,
    name: "Bleu De Chanel L'Exclusif Parfum",
    latin: "Bleu De Chanel L'Exclusif Parfum",
    brand: "Chanel",
    price: 300000,
    priceText: "300,000 so'm",
    category: "Fragrance",
    image: "https://www.storeakmedia.com/storeak-erp/Storeas/326/images/items/135/115/d38741e1-1ff3-49f7-b44c-3c818133d5f4_View.jpeg",
    description: "An elegant aromatic fragrance for men.\nFragrance notes: Amber, woods, labdanum, and sandalwood.",
    descUr: "مردوں کے لیے ایک خوبصورت خوشبودار پرفیوم۔\nنوٹس: عنبر، لکڑی، لیبڈینم اور صندل کی لکڑی۔",
    rating: 4.7,
    reviewCount: 42,
    stock: 15,
    variants: [
      { label: "50 ml", price: 180000, stock: 8 },
      { label: "100 ml", price: 300000, stock: 15 },
      { label: "150 ml", price: 420000, stock: 5 }
    ],
    reviews: [
      { user: "Ahmad K.", rating: 5, date: "2026-08-15", text: "Absolutely stunning fragrance. Long lasting and elegant.", textUr: "بالکل شاندار خوشبو۔ بہت دیر تک رہتی ہے۔" },
      { user: "Sara M.", rating: 4, date: "2026-07-20", text: "Beautiful scent, great for evening wear.", textUr: "خوبصورت خوشبو، شام کے لیے بہترین۔" }
    ]
  },
  {
    id: 363406,
    name: "Bois Talisman EDP",
    latin: "Bois Talisman EDP 100 ml",
    brand: "Christian Dior",
    price: 435000,
    priceText: "435,000 so'm",
    category: "Fragrance",
    image: "https://www.storeakmedia.com/storeak-erp/Storeas/326/images/items/699/503/1be0b3ea-f0cd-450c-83ee-3aebcec6e680_View.png",
    description: "An oriental woody fragrance for both sexes. Top notes: Vanilla. Middle notes: Sugar. Base notes: Smoke and cedarwood.",
    descUr: "خواتین و حضرات کے لیے ایک اورینٹل ووڈی خوشبو۔",
    rating: 4.5,
    reviewCount: 28,
    stock: 10,
    variants: [
      { label: "50 ml", price: 260000, stock: 4 },
      { label: "100 ml", price: 435000, stock: 10 }
    ],
    reviews: [
      { user: "Ali R.", rating: 5, date: "2026-08-10", text: "Dior never disappoints. This is pure luxury.", textUr: "ڈیور ہمیشہ بہترین ہے۔ یہ خالص شاندار ہے۔" }
    ]
  },
  {
    id: 360905,
    name: "Guerlain L'Instant EDP",
    latin: "L'Instant EDP 100 ml",
    brand: "Guerlain",
    price: 150000,
    priceText: "150,000 so'm",
    category: "Fragrance",
    image: "https://www.storeakmedia.com/storeak-erp/Storeas/326/images/items/354/332/cd7c9c22-54de-4602-92f4-512dfc088029_View.jpeg",
    description: "A luxurious woody fragrance for women. Top notes: Bergamot, mandarin and red apple. Middle notes: Magnolia, ylang ylang, iris and jasmine sambac. Base notes: Vanilla, benzoin, amber, musk and white honey.",
    descUr: "خواتین کے لیے ایک شاندار ووڈی خوشبو۔",
    rating: 4.3,
    reviewCount: 19,
    stock: 8,
    variants: [
      { label: "50 ml", price: 100000, stock: 3 },
      { label: "100 ml", price: 150000, stock: 8 }
    ],
    reviews: [
      { user: "Nodira B.", rating: 4, date: "2026-06-22", text: "Very feminine and elegant. Perfect for special occasions.", textUr: "بہت خواتینانہ اور شاندار۔ خصوصی مواقع کے لیے مثالی۔" }
    ]
  },
  {
    id: 364162,
    name: "YSL Tuxedo EDP",
    latin: "Tuxedo Sharp Patchouli EDP 125 ml",
    brand: "Yves Saint Laurent",
    price: 413250,
    priceText: "413,250 so'm",
    category: "Fragrance",
    image: "https://www.storeakmedia.com/storeak-erp/Storeas/326/images/items/006/180/b14d699a-bda2-49ba-9ebd-26c48b40dd0c_View.jpeg",
    description: "An oriental spicy fragrance for both sexes. Top notes: violet leaf, coriander, and bergamot. Middle notes: rose, lily-of-the-valley, and black pepper. Base notes: patchouli, Bourbon vanilla, and ambergris.",
    descUr: "خواتین و حضرات کے لیے ایک اورینٹل مسالیدار خوشبو۔",
    rating: 4.8,
    reviewCount: 35,
    stock: 12,
    variants: [
      { label: "75 ml", price: 280000, stock: 5 },
      { label: "125 ml", price: 413250, stock: 12 }
    ],
    reviews: [
      { user: "Zafar H.", rating: 5, date: "2026-08-28", text: "The best fragrance I have ever owned. Absolutely worth every penny.", textUr: "میری زندگی کی بہترین خوشبو۔ ہر پائی کے قابل۔" },
      { user: "Lola S.", rating: 5, date: "2026-07-14", text: "Sophisticated and unique. Gets compliments everywhere.", textUr: "نفیس اور منفرد۔ ہر جگہ تعریف ملتی ہے۔" }
    ]
  },
  {
    id: 364533,
    name: "Clarins Double Serum Light Texture",
    latin: "Double Serum Light Texture 50 ml",
    brand: "Clarins",
    price: 255250,
    priceText: "255,250 so'm",
    category: "Skincare",
    image: "https://www.storeakmedia.com/storeak-erp/Storeas/326/images/items/470/107/d9ebdd11-986e-44f9-8a80-baa28dc31321_View.png",
    description: "An anti aging serum designed to rejuvenate and revitalize your skin, its fresh, lightweight texture absorbs quickly, ensuring your skin feels refreshed without any greasy residue. Powered by the power of 21 plant extracts, it delivers essential nutrients to visibly reduce the appearance of wrinkles and fine lines.",
    descUr: "جلد کو جوان اور تازہ رکھنے والا اینٹی ایجنگ سیرم۔",
    rating: 4.6,
    reviewCount: 51,
    stock: 20,
    variants: [
      { label: "30 ml", price: 165000, stock: 8 },
      { label: "50 ml", price: 255250, stock: 20 }
    ],
    reviews: [
      { user: "Dilnoza T.", rating: 5, date: "2026-09-01", text: "My skin looks so much younger after just 2 weeks! Amazing product.", textUr: "صرف 2 ہفتے میں میری جلد بہت جوان نظر آنے لگی۔ حیرت انگیز۔" },
      { user: "Mariam A.", rating: 4, date: "2026-08-05", text: "Lightweight and effective. Worth the price.", textUr: "ہلکی اور موثر۔ قیمت کے قابل۔" }
    ]
  },
  {
    id: 364534,
    name: "Clarins Total Eye Lift",
    latin: "Total Eye Lift 15 ml",
    brand: "Clarins",
    price: 163250,
    priceText: "163,250 so'm",
    category: "Skincare",
    image: "https://www.storeakmedia.com/storeak-erp/Storeas/326/images/items/865/840/478dc3c6-6f41-4516-a2a9-d4dcb58ad9a8_View.jpeg",
    description: "The perfect solution for a youthful appearance and open eyes, this innovative formula targets drooping eyelids, crow's feet, frown lines, dark circles, and loss of eye density, providing a lifting effect that rejuvenates the eye contour.",
    descUr: "آنکھوں کے گرد جوان نظر آنے والی جھریوں کے لیے اٹھانے والی کریم۔",
    rating: 4.4,
    reviewCount: 33,
    stock: 18,
    variants: [
      { label: "15 ml", price: 163250, stock: 18 }
    ],
    reviews: [
      { user: "Gulnara K.", rating: 5, date: "2026-07-30", text: "Dark circles visibly reduced in just one week!", textUr: "صرف ایک ہفتے میں گہرے گردے محسوس طور پر کم ہو گئے!" }
    ]
  },
  {
    id: 364500,
    name: "Huda Beauty Easy Blur Primer",
    latin: "Easy Blur Silicone-Free Smoothing & Pore Primer Bronze 30 ml",
    brand: "Huda Beauty",
    price: 50000,
    priceText: "50,000 so'm",
    category: "Makeup",
    image: "https://www.storeakmedia.com/storeak-erp/Storeas/326/images/items/288/568/27ab522a-2a44-465e-9a68-e9edd0db933f_View.jpeg",
    description: "A silicone free, pore minimizing, bronze tinted smoothing primer that instantly controls shine, minimizes pores, and smooths skin texture for a velvety smooth finish. Contains antioxidant rich milk thistle extract to calm oily skin.",
    descUr: "پورس کو کم کرنے والا اور جلد کو ہموار کرنے والا برونز پرائمر۔",
    rating: 4.2,
    reviewCount: 27,
    stock: 25,
    variants: [
      { label: "30 ml", price: 50000, stock: 25 }
    ],
    reviews: [
      { user: "Zarina P.", rating: 4, date: "2026-08-12", text: "Great primer for oily skin. Keeps makeup in place all day.", textUr: "چکنے جلد کے لیے بہترین پرائمر۔ پورا دن مک اپ برقرار رہتا ہے۔" }
    ]
  },
  {
    id: 357522,
    name: "Huda Beauty Faux Filler Lip Oil",
    latin: "Faux Filler Jelly Oil 3.9 ml",
    brand: "Huda Beauty",
    price: 42000,
    priceText: "42,000 so'm",
    category: "Makeup",
    image: "https://www.storeakmedia.com/storeak-erp/Storeas/326/images/items/164/922/a5cd6f43-5de1-4f22-8d75-6a197b0f7eb9_View.png",
    description: "A deeply moisturizing, smoothing tinted lip oil enriched with peptides and shea butter for ultra plump, glossy lips. It gives you a sheer finish with a hint of color and is infused with nourishing oils that leave lips soft.",
    descUr: "ہونٹوں کو نرم، موئسچرائز اور چمکدار رکھنے والا ٹنٹڈ لپ آئل۔",
    rating: 4.5,
    reviewCount: 38,
    stock: 30,
    variants: [
      { label: "3.9 ml", price: 42000, stock: 30 }
    ],
    reviews: [
      { user: "Malika J.", rating: 5, date: "2026-09-03", text: "Love this lip oil! So moisturizing and the color is beautiful.", textUr: "یہ لپ آئل بہت پسند آیا! بہت موئسچرائز اور رنگ خوبصورت ہے۔" }
    ]
  },
  {
    id: 362368,
    name: "Maybelline Superlock Brow Glue",
    latin: "Superlock Brow Glue 7 ml",
    brand: "Maybelline",
    price: 23250,
    priceText: "23,250 so'm",
    category: "Makeup",
    image: "https://www.storeakmedia.com/storeak-erp/Storeas/326/images/items/299/562/6420a30d-3142-44a4-b735-1f1effd97391_View.jpeg",
    description: "Brush on this brow gel for sculpted brows that stay put all day. Its lightweight, sheer formula holds brows in place for up to 24 hours, giving you a sheer, non sticky, flake resistant finish.",
    descUr: "ابرو کو سلیقے سے سیٹ رکھنے والا برو جیل۔",
    rating: 4.1,
    reviewCount: 15,
    stock: 40,
    variants: [
      { label: "7 ml", price: 23250, stock: 40 }
    ],
    reviews: [
      { user: "Nilufar D.", rating: 4, date: "2026-06-18", text: "Good brow gel, keeps brows in place.", textUr: "اچھا برو جیل، ابروں کو جگہ پر رکھتا ہے۔" }
    ]
  },
  {
    id: 390188,
    name: "Pupa Milano Pleasure Lip Oil",
    latin: "Pleasure Lip Oil 001, 5 ml",
    brand: "Pupa Milano",
    price: 25000,
    priceText: "25,000 so'm",
    category: "Makeup",
    image: "https://www.storeakmedia.com/storeak-erp/Storeas/326/images/items/928/017/2636c506-4526-4ea5-9725-ba5d5451d43d_View.png",
    description: "Nourishing lip oil that enhances lip shine with a 3D optical effect, rich and smooth yet light and non sticky. Watermelon flavor enriched with elasticity enhancing watermelon seed oil.",
    descUr: "ہونٹوں کو چمک اور 3D اثر دینے والا نرم و ہلکا لپ آئل۔",
    rating: 4.3,
    reviewCount: 22,
    stock: 35,
    variants: [
      { label: "5 ml", price: 25000, stock: 35 }
    ],
    reviews: [
      { user: "Sabina R.", rating: 4, date: "2026-07-08", text: "Nice texture and great shine. Love the watermelon scent.", textUr: "اچھی ٹیکسچر اور بہت اچھی چمک۔ تربوز کی خوشبو بہت اچھی ہے۔" }
    ]
  },
  {
    id: 364529,
    name: "Bourjois Liquid Foundation Glow",
    latin: "Liquid Foundation Healthy Mix Glow Tint Essence",
    brand: "Bourjois",
    price: 28750,
    priceText: "28,750 so'm",
    category: "Makeup",
    image: "https://www.storeakmedia.com/storeak-erp/Storeas/326/images/items/420/150/5a10f66e-0764-4f78-9c9e-cff773e0e43a_View.jpeg",
    description: "A foundation with an innovative formula that combines care and gentle makeup. Its light gel texture with pigment microcapsules provides a natural balance of skin tone and gentle radiance. 98% natural and certified vegan.",
    descUr: "جلد کو قدرتی چمک دینے والا ہلکا فاؤنڈیشن۔",
    rating: 4.0,
    reviewCount: 18,
    stock: 22,
    variants: [
      { label: "30 ml", price: 28750, stock: 22 }
    ],
    reviews: [
      { user: "Farida M.", rating: 4, date: "2026-08-20", text: "Natural finish, lightweight. Good for everyday use.", textUr: "قدرتی ختم، ہلکا۔ روزمرہ استعمال کے لیے اچھا۔" }
    ]
  },
  {
    id: 364522,
    name: "Bourjois Bronzer Poudre De Soleil",
    latin: "Bronzer Poudre De Soleil 002 Medium Deep",
    brand: "Bourjois",
    price: 26250,
    priceText: "26,250 so'm",
    category: "Makeup",
    image: "https://www.storeakmedia.com/storeak-erp/Storeas/326/images/items/174/644/ebcfb243-6bf8-45eb-b702-48c9214fdce7_View.jpeg",
    description: "Bronzer powder with a lightweight formula and velvety matte finish that doesn't weigh down the skin. Features ultra fine, milled pigments for perfect application, easy to blend and build. Doesn't oxidize or fade.",
    descUr: "جلد کو ہلکی گرم جھلک اور چہرے کی تعریف دینے والا برونزر۔",
    rating: 4.2,
    reviewCount: 14,
    stock: 18,
    variants: [
      { label: "Medium Deep", price: 26250, stock: 10 },
      { label: "Deep", price: 26250, stock: 8 }
    ],
    reviews: [
      { user: "Zukhra A.", rating: 4, date: "2026-07-25", text: "Beautiful bronzer, blends easily.", textUr: "خوبصورت برونزر، آسانی سے مل جاتا ہے۔" }
    ]
  },
  {
    id: 362779,
    name: "Victoria's Secret Bombshell Body Mist",
    latin: "Bombshell Intense Body Mist 75 ml",
    brand: "Victoria's Secret",
    price: 8000,
    priceText: "8,000 so'm",
    category: "Body",
    image: "https://www.storeakmedia.com/storeak-erp/Storeas/326/images/items/757/055/38304e46-65db-4eb7-8102-8629738e3f8e_View.png",
    description: "A travel sized body mist with a rich, intense fragrance. This luxurious blend of red peony and rich fruits is perfect for a long lasting fragrance.",
    descUr: "سرخ پیونی اور پھلوں کی مہک والا سفر کے لیے موزوں باڈی مسٹ۔",
    rating: 4.4,
    reviewCount: 45,
    stock: 50,
    variants: [
      { label: "75 ml", price: 8000, stock: 50 }
    ],
    reviews: [
      { user: "Svetlana V.", rating: 5, date: "2026-08-22", text: "My favorite body mist! Smells incredible.", textUr: "میرا پسندیدہ باڈی مسٹ! ناقابل یقین خوشبو۔" },
      { user: "Madina N.", rating: 4, date: "2026-07-11", text: "Fresh and fruity. Great for everyday.", textUr: "تازہ اور پھلوں جیسی۔ روزمرہ کے لیے بہترین۔" }
    ]
  },
  {
    id: 361990,
    name: "Victoria's Secret Sugar Petals Lotion",
    latin: "Sugar Petals Body Lotion 236 ml",
    brand: "Victoria's Secret",
    price: 18000,
    priceText: "18,000 so'm",
    category: "Body",
    image: "https://www.storeakmedia.com/storeak-erp/Storeas/326/images/items/306/771/5ee7decf-eae2-4d35-8afe-718c45152311_View.png",
    description: "Let the scent of aloe vera and magnolia musk fill the room and captivate your senses with this body lotion. Coordinate it with the sugar petals body mist of the same scent.",
    descUr: "ایلوا ویرا اور میگنولیا کی خوشبو والا جسم کی جلد کو نرم رکھنے والا لوشن۔",
    rating: 4.1,
    reviewCount: 20,
    stock: 30,
    variants: [
      { label: "236 ml", price: 18000, stock: 30 }
    ],
    reviews: [
      { user: "Oksana L.", rating: 4, date: "2026-06-28", text: "Moisturizing and smells great.", textUr: "موئسچرائزنگ اور بہت اچھی خوشبو۔" }
    ]
  },
  {
    id: 364831,
    name: "Biore Moisturizing Sunscreen SPF 50",
    latin: "Moisturizing Sunscreen SPF 50, 70 ml",
    brand: "Biore",
    price: 19000,
    priceText: "19,000 so'm",
    category: "Skincare",
    image: "https://www.storeakmedia.com/storeak-erp/Storeas/326/images/items/312/421/bf768a7d-27c1-4b4c-86e1-9ee5b2a19cde_View.jpeg",
    description: "A moisturizing sunscreen with high UV protection factor, water resistant formula, light, non sticky texture, can be used before makeup, suitable for all skin types.",
    descUr: "جلد کو سورج سے بچانے والا موئسچرائزنگ سن اسکرین۔",
    rating: 4.6,
    reviewCount: 37,
    stock: 45,
    variants: [
      { label: "70 ml", price: 19000, stock: 45 }
    ],
    reviews: [
      { user: "Anara B.", rating: 5, date: "2026-08-30", text: "Best sunscreen I have used! No white cast and very moisturizing.", textUr: "میں نے جو بہترین سن اسکرین استعمال کی ہے! کوئی سفید نشان نہیں اور بہت موئسچرائزنگ۔" }
    ]
  },
  {
    id: 364637,
    name: "Phyto Volumizing Shampoo",
    latin: "Volume Volumizing Shampoo 500 ml",
    brand: "Phyto",
    price: 39000,
    priceText: "39,000 so'm",
    category: "Hair",
    image: "https://www.storeakmedia.com/storeak-erp/Storeas/326/images/items/371/997/64410c21-ca0b-42fe-9cd6-c11c7bd743e5_View.png",
    description: "A volumizing shampoo enriched with bamboo extract, yarrow, and tormentil. It gives fine, flat hair instant, long lasting volume and bounce, restoring its natural shape and transforming it into silky smooth hair.",
    descUr: "باریک اور چپٹے بالوں کو جھاڑداری اور بھرپور نظر دینے والا شیمپو۔",
    rating: 4.3,
    reviewCount: 25,
    stock: 20,
    variants: [
      { label: "500 ml", price: 39000, stock: 20 }
    ],
    reviews: [
      { user: "Irina C.", rating: 4, date: "2026-07-15", text: "Hair feels so much thicker and fuller after using this.", textUr: "استعمال کے بعد بال بہت زیادہ موٹے اور بھرپور محسوس ہوتے ہیں۔" }
    ]
  },
  {
    id: 364342,
    name: "Celia Musk & Powder Shower Gel",
    latin: "Musk and Powder Shower Gel 500 ml",
    brand: "Celia",
    price: 8000,
    priceText: "8,000 so'm",
    category: "Body",
    image: "https://www.storeakmedia.com/storeak-erp/Storeas/326/images/items/483/844/b7e131df-51e6-4301-98a8-8fad5779c308_View.jpeg",
    description: "The perfect shower gel that gives you a soft, moisturized and radiant skin feeling all day long.",
    descUr: "جلد کو نرم اور تابناک رکھنے والا مثالی شاور جیل۔",
    rating: 4.0,
    reviewCount: 30,
    stock: 40,
    variants: [
      { label: "500 ml", price: 8000, stock: 40 }
    ],
    reviews: [
      { user: "Valentina P.", rating: 4, date: "2026-08-08", text: "Gentle on skin, nice musk scent.", textUr: "جلد پر نرم، اچھی مسک کی خوشبو۔" }
    ]
  },
  {
    id: 364334,
    name: "Anua Hyaluronic Acid Cream",
    latin: "Hyaluronic Acid 100+ Moisturizing Cream 60 ml",
    brand: "Anua",
    price: 30000,
    priceText: "30,000 so'm",
    category: "Skincare",
    image: "https://www.storeakmedia.com/storeak-erp/Storeas/326/images/items/849/616/566516fe-9fe1-4e77-ac86-7a5938906838_View.png",
    description: "An intensive moisturizing cream rich in acids that provides your skin with deep hydration, supports cell renewal to maintain its freshness and elasticity throughout the day. Light, fast-absorbing formula suitable for all skin types.",
    descUr: "جلد کو گہری ہائیڈریشن فراہم کرنے والی موئسچرائزنگ کریم۔",
    rating: 4.7,
    reviewCount: 44,
    stock: 28,
    variants: [
      { label: "60 ml", price: 30000, stock: 28 }
    ],
    reviews: [
      { user: "Yelena M.", rating: 5, date: "2026-09-02", text: "Holy grail moisturizer! Skin feels plump and hydrated all day.", textUr: "بہترین موئسچرائزر! جلد پورا دن بھری اور ہائیڈریٹڈ محسوس ہوتی ہے۔" }
    ]
  },
  {
    id: 390100,
    name: "Sol De Janeiro Cheirosa 59 Mist",
    latin: "Cheirosa 59 Perfume Mist",
    brand: "Sol De Janeiro",
    price: 45000,
    priceText: "45,000 so'm",
    category: "Fragrance",
    image: "https://www.storeakmedia.com/storeak-erp/Storeas/326/images/items/808/482/46608bc3-42bf-478f-b071-ed89dc8894f1_View.jpeg",
    description: "Fragrance notes: Top: velvety plum, candied violet. Middle: vanilla orchid, whipped amber. Base: transparent sandalwood, refreshing vetiver.",
    descUr: "بیر، ونیلا اور صندل کی خوشبو والا پرفیوم مسٹ۔",
    rating: 4.4,
    reviewCount: 20,
    stock: 22,
    variants: [
      { label: "240 ml", price: 45000, stock: 22 }
    ],
    reviews: [
      { user: "Kamola S.", rating: 5, date: "2026-08-18", text: "Dreamy fragrance! The plum and vanilla combo is incredible.", textUr: "خوابوں جیسی خوشبو! بیر اور ونیلا کا ملاپ ناقابل یقین ہے۔" }
    ]
  },
  {
    id: 390070,
    name: "Ibraheem Al Qurashi Brazilian Tobacco",
    latin: "Brazilian Tobacco Extrait de Parfum 100 ml",
    brand: "Ibraheem Al Qurashi",
    price: 75000,
    priceText: "75,000 so'm",
    category: "Fragrance",
    image: "https://www.storeakmedia.com/storeak-erp/Storeas/326/images/items/419/608/4c3bb722-0499-42d0-a8c6-086a4bd1a8b4_View.jpeg",
    description: "A luxurious and attractive unisex fragrance. Top notes: Bergamot, lavender, pink pepper, and chili pepper. Middle notes: Brazilian tobacco, oud, cherry, and cedarwood. Base notes: Leather, patchouli, and vetiver.",
    descUr: "تمباکو اور اود کی خوشبو والا یونی سیکس پرتعیش پرفیوم۔",
    rating: 4.6,
    reviewCount: 31,
    stock: 12,
    variants: [
      { label: "100 ml", price: 75000, stock: 12 }
    ],
    reviews: [
      { user: "Rustam E.", rating: 5, date: "2026-07-28", text: "Incredibly unique scent. The tobacco and oud blend is masterful.", textUr: "ناقابل یقین منفرد خوشبو۔ تمباکو اور اود کا ملاپ بہترین ہے۔" }
    ]
  },
  {
    id: 364745,
    name: "Amouage Perfume Decision",
    latin: "Perfume Decision EDP 100 ml",
    brand: "Amouage",
    price: 370000,
    priceText: "370,000 so'm",
    category: "Fragrance",
    image: "https://www.storeakmedia.com/storeak-erp/Storeas/326/images/items/651/750/5ff089f1-bff6-4f8d-b65c-0849ce8d5029_View.png",
    description: "A woody aromatic fragrance for both sexes. Top notes: Bergamot, cardamom and pink pepper. Middle notes: Frankincense, myrrh and juniper berries. Base notes: Vanilla, cedarwood and patchouli.",
    descUr: "خواتین و حضرات کے لیے ووڈی اروماٹک خوشبو۔",
    rating: 4.8,
    reviewCount: 26,
    stock: 8,
    variants: [
      { label: "100 ml", price: 370000, stock: 8 }
    ],
    reviews: [
      { user: "Timur K.", rating: 5, date: "2026-08-25", text: "Amouage never fails. This is a masterpiece.", textUr: "آموآج ہمیشہ بہترین ہے۔ یہ ایک شاہکار ہے۔" }
    ]
  },
  {
    id: 364517,
    name: "Clarins Wonder Volume Mascara",
    latin: "Wonder Volume Mascara XXL 02, 8 ml",
    brand: "Clarins",
    price: 71000,
    priceText: "71,000 so'm",
    category: "Makeup",
    image: "https://www.storeakmedia.com/storeak-erp/Storeas/326/images/items/802/195/908f9e38-07a4-4e07-9961-17f3bea25e0d_View.png",
    description: "A distinctive mascara for ultra thick lashes and superior hold that lasts for 12 hours. Its formula, rich in saturated black pigments, gives you thick and attractive lashes. Humidity resistant and smudge proof.",
    descUr: "پلکوں کو موٹا، گھنا اور زبردست گرفت دینے والا ماسکرا۔",
    rating: 4.3,
    reviewCount: 19,
    stock: 20,
    variants: [
      { label: "8 ml", price: 71000, stock: 20 }
    ],
    reviews: [
      { user: "Yuliya F.", rating: 4, date: "2026-07-05", text: "Great volume mascara. Doesn't clump.", textUr: "بہترین حجم والا ماسکرا۔ جم جاتا نہیں۔" }
    ]
  }
];

var CATEGORIES = [];
PRODUCTS.forEach(function(p) { if (CATEGORIES.indexOf(p.category) === -1) CATEGORIES.push(p.category); });
var BRANDS = [];
PRODUCTS.forEach(function(p) { if (BRANDS.indexOf(p.brand) === -1) BRANDS.push(p.brand); });

var COUPONS = {
  'WELCOME10': { type: 'percent', value: 10, minOrder: 50000, desc: '10% off' },
  'BEAUTY20': { type: 'percent', value: 20, minOrder: 100000, desc: '20% off' },
  'FREESHIP': { type: 'fixed', value: 0, minOrder: 30000, desc: 'Free shipping' },
  'SAVE50K': { type: 'fixed', value: 50000, minOrder: 200000, desc: "50,000 so'm off" }
};

function findProduct(id) {
  return PRODUCTS.find(function(p) { return String(p.id) === String(id); });
}

function formatPrice(price) {
  return price.toLocaleString('en-US') + " so'm";
}

function getAvgRating(productId) {
  var p = findProduct(productId);
  if (!p || !p.reviews || p.reviews.length === 0) return p ? (p.rating || 0) : 0;
  var sum = 0;
  p.reviews.forEach(function(r) { sum += r.rating; });
  return sum / p.reviews.length;
}

function renderStars(rating, size) {
  var s = size || 14;
  var full = Math.floor(rating);
  var half = rating - full >= 0.5;
  var html = '';
  for (var i = 0; i < 5; i++) {
    if (i < full) html += '<span style="color:#f5a623;font-size:' + s + 'px;">★</span>';
    else if (i === full && half) html += '<span style="color:#f5a623;font-size:' + s + 'px;">★</span>';
    else html += '<span style="color:#ccc;font-size:' + s + 'px;">★</span>';
  }
  return html;
}

function getReviews(productId) {
  var stored = [];
  try { stored = JSON.parse(localStorage.getItem('lumiere_reviews')) || []; } catch(e) {}
  var p = findProduct(productId);
  var base = (p && p.reviews) ? p.reviews.slice() : [];
  var custom = stored.filter(function(r) { return String(r.productId) === String(productId); });
  return base.concat(custom);
}

function addReview(productId, user, rating, text) {
  var stored = [];
  try { stored = JSON.parse(localStorage.getItem('lumiere_reviews')) || []; } catch(e) {}
  stored.push({
    productId: String(productId),
    user: user,
    rating: rating,
    text: text,
    date: new Date().toISOString().slice(0, 10)
  });
  localStorage.setItem('lumiere_reviews', JSON.stringify(stored));
}
