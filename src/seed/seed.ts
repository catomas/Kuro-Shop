import bcryptjs from "bcryptjs";

interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes?: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
  gender?: "men" | "women" | "unisex";
  category: ValidCategories;
}

type ValidCategories = "men" | "women" | "poster" | "unisex";
type ValidSizes = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
type ValidTypes = "shirts" | "pants" | "hoodies" | "posters" | "body";

interface SeedUser {
  email: string;
  password: string;
  name: string;
  role: "ADMIN" | "USER";
}

interface Category {
  name: string;
  label: string;
}

interface SeedData {
  users: SeedUser[];
  products: SeedProduct[];
  categories: Category[];
  secondaryCategories: Category[];
}
export const initialData: SeedData = {
  users: [
    {
      email: "juan@gmail.com",
      name: "Juan",
      password: bcryptjs.hashSync("123456", 10),
      role: "ADMIN",
    },
    {
      email: "rober@gmail.com",
      name: "Roberto",
      password: bcryptjs.hashSync("123456", 10),
      role: "USER",
    },
    {
      email: "test@gmail.com",
      name: "Melisa Betancur",
      password: bcryptjs.hashSync("123456", 10),
      role: "USER",
    },
  ],

  categories: [
    { name: "men", label: "Hombres" },
    {
      name: "women",
      label: "Mujeres",
    },
    { name: "poster", label: "Posters" },
    { name: "unisex", label: "Unisex" },
  ],
  secondaryCategories: [
    {
      name: "shirts",
      label: "Camisetas",
    },
    {
      name: "pants",
      label: "Pantalones",
    },
    {
      name: "hoodies",
      label: "Buzos",
    },
    {
      name: "posters",
      label: "Posters",
    },
    {
      name: "body",
      label: "Body",
    },
  ],
  products: [
    {
      description:
        "Desplazamiento volumétrico con manga larga y línea plana de la abertura. Hecho de algodón de alta calidad con una subclase de lana. El cuello y los puños elásticos hechos de tejido blando de estiramiento garantizan un ajuste perfecto y un calcetín cómodo. Impresión basada en anime Berserk.",
      images: ["SWEAT-REBIRTH.webp", "SWEAT-REBIRTH-back.webp"],
      inStock: 7,
      price: 75,
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      slug: "sudadera_renacimiento",
      type: "hoodies",
      tags: ["sweatshirt", "hoodie"],
      title: "Sudadera Rebirth Berserk",
      gender: "men",
      category: "men",
    },
    {
      description:
        "Hoodie con capucha gruesa y cómoda para el cuerpo con fornitura metálica con logotipo en la manga. Un ajuste holgado y un material de alta calidad le permitirán mantenerse activo incluso en climas fríos. La sudadera con capucha se lava a una temperatura que no exceda los 40 grados en modo delicado o manual. Está prohibido el uso de quitamanchas.",
      images: ["DARK-KNIGHT-back.webp", "DARK-KNIGHT.webp"],
      inStock: 5,
      price: 200,
      sizes: ["XS", "S", "M", "XL", "XXL"],
      slug: "hoodie_dark_knight_berserk",
      type: "hoodies",
      tags: ["hoodie", "buzo"],
      title: "Hoodie Dark Knight Berserk",
      gender: "men",
      category: "men",
    },

    {
      description:
        "Hoodie con capucha gruesa y cómoda para el cuerpo con fornitura metálica con logotipo en la manga. Un ajuste holgado y un material de alta calidad le permitirán mantenerse activo incluso en climas fríos. La sudadera con capucha se lava a una temperatura que no exceda los 40 grados en modo delicado o manual. Está prohibido el uso de quitamanchas.",
      images: ["SKULL-KNIGHT-back.webp", "SKULL-KNIGHT.webp"],
      inStock: 10,
      price: 130,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "hoodie_skull_knight_berserk",
      type: "hoodies",
      tags: ["hoodie", "buzo"],
      title: "Hoodie Skull Knight Berserk",
      gender: "men",
      category: "men",
    },

    {
      description:
        "Sudadera cálida y cómoda confeccionada en algodón de alta calidad con forro polar. El espacioso bolsillo principal esconde varios bolsillos pequeños para monedas, llaves o el teléfono. El ajuste holgado y el material de calidad le permitirán mantenerse activo incluso en climas fríos. La impresión representa al personaje Muzan del anime Demon Slayer.",
      images: ["MUZAN.webp", "MUZAN-back.webp"],
      inStock: 50,
      price: 45,
      sizes: ["XS", "S", "M", "L"],
      slug: "hoodie_muzan_demon_slayer",
      type: "hoodies",
      tags: ["hoodie", "sweatshirt", "buzo"],
      title: "Hoodie Muzan Demon Slayer",
      gender: "men",
      category: "men",
    },
    {
      description:
        "Chaqueta suave al cuerpo confeccionada en algodón de alta calidad. El espacioso bolsillo principal esconde en su interior varios bolsillos pequeños para guardar monedas, llaves o el teléfono.",
      images: ["WATER-BREATHING.jpeg", "WATER-BREATHING-back.jpeg"],
      inStock: 50,
      price: 40,
      sizes: ["M", "L", "XL", "XXL"],
      slug: "jacket_water_breathing_demon_slayer",
      type: "hoodies",
      tags: ["hoodie", "jacket", "buzo"],
      title: "Chaqueta Water Breathing Demon Slayer",
      gender: "men",
      category: "men",
    },
    {
      description:
        "Camiseta ligera unisex confeccionada en algodón fino de alta calidad con la adición de lycra, que proporciona un ajuste ideal y cómodo no solo durante las actividades diarias, sino también durante los deportes y cualquier tipo de actividad.",
      images: ["WIND-FUJI.jpeg", "WIND-FUJI-back.jpeg"],
      inStock: 0,
      price: 35,
      sizes: ["M", "L", "XL", "XXL"],
      slug: "camiseta_wind_fuji_jojos",
      type: "shirts",
      tags: ["shirt", "t-shirt"],
      title: "Camiseta Wind Fuji Jojos",
      gender: "men",
      category: "men",
    },
    {
      description:
        "Chaqueta Nerds Club es suave al cuerpo y está confeccionada con algodón de alta calidad. El espacioso bolsillo principal esconde en su interior varios bolsillos pequeños para guardar monedas, llaves o el teléfono.",
      images: ["NERDS-CLUB-back.jpg", "NERDS-CLUB.webp"],
      inStock: 15,
      price: 35,
      sizes: ["S", "M", "L", "XL"],
      slug: "chaqueta_nerds_club",
      type: "hoodies",
      tags: ["hoodie", "jacket"],
      title: "Chaqueta Nerds Club",
      gender: "men",
      category: "men",
    },
    {
      description:
        "Sudadera suave al cuerpo confeccionada en algodón de alta calidad. El espacioso bolsillo principal esconde en su interior varios bolsillos pequeños para guardar monedas, llaves o el teléfono. El ajuste holgado te permite mantenerte activo incluso en climas fríos.",
      images: ["DRACULA.jpeg", "DRACULA-back.jpeg"],
      inStock: 17,
      price: 35,
      sizes: ["XS", "S", "XL", "XXL"],
      slug: "chaqueta_dracula",
      type: "hoodies",
      tags: ["hoodie", "sweatshirt", "jacket"],
      title: "Chaqueta Dracula",
      gender: "men",
      category: "men",
    },
    {
      description:
        "Sudadera suave al cuerpo confeccionada en algodón de alta calidad. El espacioso bolsillo principal esconde en su interior varios bolsillos pequeños para guardar monedas, llaves o el teléfono. El ajuste holgado te permite mantenerte activo incluso en climas fríos. Impresión basada en el anime Dorohedoro.",
      images: ["THE-GODFATHER.webp", "THE-GODFATHER-back.webp"],
      inStock: 12,
      price: 35,
      sizes: ["XS", "S", "M"],
      slug: "hoodie_the_godfather",
      type: "hoodies",
      tags: ["hoodie", "sweatshirt"],
      title: "Hoodie The Godfather Dorohedoro",
      gender: "men",
      category: "men",
    },
    {
      description:
        "Fuji rojo - unisex manga larga con cuello elástico. El algodón de alta calidad, que transpira bien y se estira bien, te permite permanecer activo en cualquier clima y en cualquier tipo de actividad. El color blanco.",
      images: ["RED-FUJI.jpeg", "RED-FUJI-back.jpeg"],
      inStock: 5,
      price: 35,
      sizes: ["XS", "S"],
      slug: "camiseta_red_fuji_jojos",
      type: "shirts",
      tags: ["shirt", "t-shirt"],
      title: "Camiseta Red Fuji Jojos",
      gender: "men",
      category: "men",
    },
    {
      description:
        "La sudadera Killer Queen edo es suave al cuerpo y está confeccionada con algodón de alta calidad. El espacioso bolsillo principal esconde en su interior varios bolsillos pequeños para guardar monedas, llaves o el teléfono.",
      images: ["KILLER-QUEEN.webp", "KILLER-QUEEN-back.webp"],
      inStock: 2,
      price: 35,
      sizes: ["XS", "S", "M"],
      slug: "killer_queen_jojos",
      type: "hoodies",
      tags: ["hoodie", "sweatshirt", "jacket"],
      title: "Chaqueta Killer Queen Jojos",
      gender: "men",
      category: "men",
    },
    {
      description:
        "Chaqueta Death Note es suave al cuerpo y está confeccionada con algodón de alta calidad. El espacioso bolsillo principal esconde en su interior varios bolsillos pequeños para guardar monedas, llaves o el teléfono.",
      images: ["DEATH-NOTE.jpeg", "DEATH-NOTE-back.jpg"],
      inStock: 82,
      price: 35,
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      slug: "chaqueta_death_note",
      type: "hoodies",
      tags: ["hoodie", "sweatshirt", "jacket"],
      title: "Chaqueta Death Note",
      gender: "men",
      category: "men",
    },
    {
      description:
        "Chaqueta Chainsaw man es suave al cuerpo y está confeccionada con algodón de alta calidad. El espacioso bolsillo principal esconde en su interior varios bolsillos pequeños para guardar monedas, llaves o el teléfono.",
      images: ["DENJI.jpeg", "DENJI-back.webp"],
      inStock: 24,
      price: 35,
      sizes: ["XL", "XXL"],
      slug: "chaqueta_denji_chainsaw_man",
      type: "hoodies",
      tags: ["hoodie", "sweatshirt", "jacket"],
      title: "Chaqueta Denji Chainsaw man",
      gender: "men",
      category: "men",
    },
    {
      description:
        "Manga larga unisex con cuello elástico. El algodón de alta calidad, que transpira bien y se estira bien, te permite permanecer activo en cualquier clima y en cualquier tipo de actividad. El color blanco. Imprimir Primavera de los muertos, anime Escuela de los Muertos.",
      images: ["SPRING-OF-THE-DEAD-back.webp", "SPRING-OF-THE-DEAD.webp"],
      inStock: 5,
      price: 30,
      sizes: ["XS", "S", "XXL"],
      slug: "camibuzo_spring_of_the_dead",
      type: "shirts",
      tags: ["shirt"],
      title: "Camibuzo Spring of the Dead",
      gender: "unisex",
      category: "unisex",
    },
    {
      description:
        "Inspirada en el Cybertruck, la camiseta Cybertruck Bulletproof está diseñada para la comodidad y el estilo. Hecha de 100% algodón peruano y con el logotipo de Tesla en el pecho, la camiseta exclusiva conmemorará su pedido durante años.",
      images: ["SAYA.webp", "SAYA-back.webp"],
      inStock: 150,
      price: 30,
      sizes: ["M", "L"],
      slug: "camiseta_cybertruck_bulletproof",
      type: "shirts",
      tags: ["shirt", "t-shirt"],
      title: "Camiseta Saya Cybertruck",
      gender: "men",
      category: "men",
    },
    {
      description:
        "Cálida y cómoda sudadera con capucha confeccionada en algodón de alta calidad con forro polar. El espacioso bolsillo principal contiene varios bolsillos pequeños para guardar monedas, llaves o el teléfono. Un ajuste holgado y un material de alta calidad le permitirán mantenerse activo incluso en climas fríos.",
      images: ["DIO-back.jpeg", "DIO.jpeg"],
      inStock: 10,
      price: 35,
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      slug: "hoodie_dio_jojos",
      type: "hoodies",
      tags: ["hoodie", "sweatshirt"],
      title: "Hoodie Dio jojos",
      gender: "men",
      category: "men",
    },
    {
      description:
        "Camiseta de manga corta con cuello elástico. El algodón de alta calidad, que transpira bien y se estira bien, te permite permanecer activo en cualquier clima y en cualquier tipo de actividad. El color blanco.",
      images: ["PROLOGUE-back.webp", "PROLOGUE.webp"],
      inStock: 34,
      price: 35,
      sizes: ["XS", "S", "M", "L"],
      slug: "prologue_berserk_tee",
      type: "shirts",
      tags: ["shirt", "t-shirt"],
      title: "Camiseta Prologue Berserk",
      gender: "men",
      category: "men",
    },
    {
      description:
        "Sudadera con capucha de manga larga con cuello elástico y ajuste holgado. Hecho de algodón de alta calidad con una subclase de lana. El cuello y los puños elásticos hechos de tejido blando de estiramiento garantizan un ajuste perfecto y un calcetín cómodo. Impresión basada en anime Berserk.",
      images: ["BERSERK-BLK.jpeg", "BERSERK-BLK-back.jpeg"],
      inStock: 12,
      price: 40,
      sizes: ["XS", "XXL"],
      slug: "berserk_BLK",
      type: "hoodies",
      tags: ["hoodie", "sweatshirt"],
      title: "Hoodie Berserk BLK",
      gender: "men",
      category: "men",
    },
    {
      description:
        "Sudadera con capucha de manga larga con cuello elástico y ajuste holgado. Hecho de algodón de alta calidad con una subclase de lana. El cuello y los puños elásticos hechos de tejido blando de estiramiento garantizan un ajuste perfecto y un calcetín cómodo. Impresión basada en anime Berserk.",
      images: ["GAROU.webp", "GAROU-back.webp"],
      inStock: 10,
      price: 115,
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      slug: "garou_one_punch_man",
      type: "hoodies",
      tags: ["hoodie"],
      title: "Hoodie Garou One Punch Man",
      gender: "men",
      category: "men",
    },
    {
      description:
        "Camiseta de manga corta con cuello elástico. El algodón de alta calidad, que transpira bien y se estira bien, te permite permanecer activo en cualquier clima y en cualquier tipo de actividad. El color blanco.",
      images: ["GALACTIC-back.webp", "GALACTIC.webp"],
      inStock: 10,
      price: 130,
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      slug: "galactic_tee",
      type: "shirts",
      tags: ["shirt", "t-shirt"],
      title: "Camiseta Galactic",
      gender: "men",
      category: "men",
    },
    {
      description:
        "Sudadera con capucha de manga larga con cuello elástico y ajuste holgado. Hecho de algodón de alta calidad con una subclase de lana. El cuello y los puños elásticos hechos de tejido blando de estiramiento garantizan un ajuste perfecto y un calcetín cómodo. Impresión basada en anime Berserk.",
      images: ["OTAKU-BLK.jpeg", "OTAKU-BLK-back.jpeg"],
      inStock: 100,
      price: 85,
      sizes: ["XS", "L", "XL", "XXL"],
      slug: "university_otaku_hoodie",
      type: "hoodies",
      tags: ["hoodie", "sweatshirt"],
      title: "Hoodie University Otaku Black",
      gender: "unisex",
      category: "unisex",
    },
    {
      description:
        "Sudadera con capucha de manga larga con cuello elástico y ajuste holgado. Hecho de algodón de alta calidad con una subclase de lana. El cuello y los puños elásticos hechos de tejido blando de estiramiento garantizan un ajuste perfecto y un calcetín cómodo. Impresión basada en anime Berserk.",
      images: ["OTAKU-BEIGE.webp", "OTAKU-BEIGE-back.webp"],
      inStock: 100,
      price: 85,
      sizes: ["XS", "L", "XL", "XXL"],
      slug: "university_otaku_hoodie_beige",
      type: "hoodies",
      tags: ["hoodie", "sweatshirt"],
      title: "Hoodie University Otaku Beige",
      gender: "unisex",
      category: "unisex",
    },
    {
      description:
        "Camiseta de manga corta con cuello elástico. El algodón de alta calidad, que transpira bien y se estira bien, te permite permanecer activo en cualquier clima y en cualquier tipo de actividad. El color blanco.",
      images: ["DARKNESS-BERSERK.jpeg", "DARKNESS-BERSERK-back.jpeg"],
      inStock: 15,
      price: 85,
      sizes: ["XS", "S", "M", "L"],
      slug: "darkness_berserk_tee",
      type: "shirts",
      tags: ["shirt", "t-shirt"],
      title: "Camiseta Darkness Berserk",
      gender: "unisex",
      category: "unisex",
    },
    {
      description:
        "Joggers anchos sin cepillar con puños de cashcorse. Cintura elástica con cordón para un ajuste cómodo. Este modelo tiene bolsillos laterales profundos, así como un bolsillo trasero cosido, diseñado específicamente para los tamaños actuales de varios dispositivos. La impresión está basada en el anime Berserk.",
      images: ["BERSERK-JOGGERS.jpeg", "BERSERK-JOGGERS-back.jpeg"],
      inStock: 15,
      price: 70,
      sizes: ["XS", "S", "XL", "XXL"],
      slug: "pantalones_black_knight_berserk",
      type: "pants",
      tags: ["pants"],
      title: "Jogger Black Knight Berserk",
      gender: "unisex",
      category: "unisex",
    },
    {
      description:
        "Camisa de manga corta con cuello elástico. El algodón de alta calidad, que transpira bien y se estira bien, te permite permanecer activo en cualquier clima y en cualquier tipo de actividad. El color blanco.",
      images: ["SUMMER-PINK.png", "SUMMER-PINK.png"],
      inStock: 13,
      price: 60,
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      slug: "summer_pink",
      type: "shirts",
      tags: ["shirt", "t-shirt"],
      title: "Camisa Summer Pink",
      gender: "unisex",
      category: "unisex",
    },
    {
      description:
        "Pantaloneta con cintura elástica y cordón ajustable. Bolsillos laterales y traseros. Hecho de algodón de alta calidad con una subclase de lana. El cuello y los puños elásticos hechos de tejido blando de estiramiento garantizan un ajuste perfecto y un calcetín cómodo. Impresión basada en anime Berserk.",
      images: ["GOD-OF-SHINOBI.jpeg", "GOD-OF-SHINOBI-back.jpeg"],
      inStock: 11,
      price: 30,
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      slug: "pants_god_of_shinobi",
      type: "pants",
      tags: ["pants"],
      title: "Pantaloeta God of Shinobi",
      gender: "unisex",
      category: "unisex",
    },
    {
      description:
        "Camiseta de manga corta con cuello elástico. El algodón de alta calidad, que transpira bien y se estira bien, te permite permanecer activo en cualquier clima y en cualquier tipo de actividad. El color blanco.",
      images: [
        "KILLUA-HUNTER-X-HUNTER.jpeg",
        "KILLUA-HUNTER-X-HUNTER-back.jpeg",
      ],
      inStock: 13,
      price: 35,
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      slug: "killua_hunter_x_hunter",
      type: "shirts",
      tags: ["shirt", "t-shirt"],
      title: "Camiseta Killua Hunter x Hunter",
      gender: "unisex",
      category: "unisex",
    },
    {
      description:
        "Camiseta de manga corta con cuello elástico. El algodón de alta calidad, que transpira bien y se estira bien, te permite permanecer activo en cualquier clima y en cualquier tipo de actividad. El color blanco.",
      images: ["VINTAGE-T-SHIRT.jpeg", "VINTAGE-T-SHIRT-back.jpeg"],
      inStock: 85,
      price: 225,
      sizes: ["XS", "S", "M"],
      slug: "cc_vintage_tee",
      type: "shirts",
      tags: ["shirt", "t-shirt"],
      title: "Camiseta C.C Vintage",
      gender: "unisex",
      category: "unisex",
    },
    {
      description:
        "Body confeccionado en punto suave y elástico con manga larga y botones ocultos en el bajo. Estampado de loto. Utilizamos productos químicos profesionales para pintar las cosas, sin embargo, esta tecnología no es industrial y se realiza de forma manual. Esto está asociado con restricciones en el cuidado del producto. La sudadera con capucha se lava a 30 grados en modo delicado o manual.",
      images: ["LOTUS.jpeg", "LOTUS-back.jpeg"],
      inStock: 10,
      price: 130,
      sizes: ["XS", "S", "M", "XXL"],
      slug: "body_lotus",
      type: "body",
      tags: ["body", "t-shirt", "shirt"],
      title: "Body Lotus",
      gender: "women",
      category: "women",
    },
    {
      description:
        "Croptop confeccionado en punto suave y elástico con manga larga y botones ocultos en el bajo. Estampado de loto. Utilizamos productos químicos profesionales para pintar las cosas, sin embargo, esta tecnología no es industrial y se realiza de forma manual. Esto está asociado con restricciones en el cuidado del producto. La sudadera con capucha se lava a 30 grados en modo delicado o manual.",
      images: ["CROPTOP-DEATH.jpeg", "CROPTOP-DEATH-back.jpeg"],
      inStock: 9,
      price: 110,
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      slug: "croptop_death_note",
      type: "shirts",
      tags: ["shirt", "t-shirt"],
      title: "Croptop Death Note",
      gender: "women",
      category: "women",
    },
    {
      description:
        "Body confeccionado en punto suave y elástico con manga larga y botones ocultos en el bajo. Estampado de loto. Utilizamos productos químicos profesionales para pintar las cosas, sin embargo, esta tecnología no es industrial y se realiza de forma manual. Esto está asociado con restricciones en el cuidado del producto. La sudadera con capucha se lava a 30 grados en modo delicado o manual.",
      images: ["BODY-KILLER.jpeg", "BODY-KILLER-back.jpeg"],
      inStock: 10,
      price: 45,
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      slug: "body_killer",
      type: "body",
      tags: ["body", "t-shirt", "shirt"],
      title: "Body Killers",
      gender: "women",
      category: "women",
    },
    {
      description:
        "Body confeccionado en punto suave y elástico con manga larga y botones ocultos en el bajo. Estampado de loto. Utilizamos productos químicos profesionales para pintar las cosas, sin embargo, esta tecnología no es industrial y se realiza de forma manual. Esto está asociado con restricciones en el cuidado del producto. La sudadera con capucha se lava a 30 grados en modo delicado o manual.",
      images: ["BODY-EVA01.jpeg", "BODY-EVA01-back.jpeg"],
      inStock: 0,
      price: 40,
      sizes: ["XS", "S"],
      slug: "body_eva_01_evangelion",
      type: "body",
      tags: ["body", "t-shirt", "shirt"],
      title: "Body Eva 01 Evangelion",
      gender: "women",
      category: "women",
    },
    {
      description:
        "Body confeccionado en punto suave y elástico con manga larga y botones ocultos en el bajo. Estampado de loto. Utilizamos productos químicos profesionales para pintar las cosas, sin embargo, esta tecnología no es industrial y se realiza de forma manual. Esto está asociado con restricciones en el cuidado del producto. La sudadera con capucha se lava a 30 grados en modo delicado o manual.",
      images: ["BODY-CHAINS.jpeg", "BODY-CHAINS-back.jpeg"],
      inStock: 30,
      price: 35,
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      slug: "body_chainsaw_man",
      type: "body",
      tags: ["body", "t-shirt", "shirt"],
      title: "Body Chainsaw man",
      gender: "women",
      category: "women",
    },
    {
      description:
        "Body confeccionado en punto suave y elástico con manga larga y botones ocultos en el bajo. Estampado de loto. Utilizamos productos químicos profesionales para pintar las cosas, sin embargo, esta tecnología no es industrial y se realiza de forma manual. Esto está asociado con restricciones en el cuidado del producto. La sudadera con capucha se lava a 30 grados en modo delicado o manual.",
      images: ["BODY-EVA00.jpeg", "BODY-EVA00-back.jpeg"],
      inStock: 16,
      price: 40,
      sizes: ["XS", "S", "L", "XL", "XXL"],
      slug: "body_eva_00_evangelion",
      type: "body",
      tags: ["body", "t-shirt", "shirt"],
      title: "Body Eva 00 Evangelion",
      gender: "women",
      category: "women",
    },
    {
      description:
        "Top confeccionado en punto suave y elástico con manga larga y botones ocultos en el bajo. Estampado de loto. Utilizamos productos químicos profesionales para pintar las cosas, sin embargo, esta tecnología no es industrial y se realiza de forma manual. Esto está asociado con restricciones en el cuidado del producto. La sudadera con capucha se lava a 30 grados en modo delicado o manual.",
      images: ["TOP-L.jpeg", "TOP-L-back.jpeg"],
      inStock: 18,
      price: 35,
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      slug: "top_L_death_note",
      type: "shirts",
      tags: ["shirt"],
      title: "Top L Death Note",
      gender: "women",
      category: "women",
    },
    {
      description:
        "Top confeccionado en punto suave y elástico con manga larga y botones ocultos en el bajo. Estampado de loto. Utilizamos productos químicos profesionales para pintar las cosas, sin embargo, esta tecnología no es industrial y se realiza de forma manual. Esto está asociado con restricciones en el cuidado del producto. La sudadera con capucha se lava a 30 grados en modo delicado o manual.",
      images: ["TOP-HUNTER.jpeg", "TOP-HUNTER-back.jpeg"],
      inStock: 5,
      price: 35,
      sizes: ["XL", "XXL"],
      slug: "top_hunter_x_hunter",
      type: "shirts",
      tags: ["shirt"],
      title: "Top Hunter x Hunter",
      gender: "women",
      category: "women",
    },
    {
      description: "Poster hecho de alta calidad con un diseño único.",
      images: ["HAREM-MULTIVERSE.jpeg"],
      inStock: 16,
      price: 35,
      slug: "poster_harem_multiverse",
      type: "posters",
      tags: ["poster"],
      title: "Poster Harem Multiverse",
      category: "poster",
    },
    {
      description: "Poster hecho de alta calidad con un diseño único.",
      images: ["KILLUA-MELANCHOLY.jpeg"],
      inStock: 16,
      price: 35,
      slug: "poster_killua_melancholy",
      type: "posters",
      tags: ["poster"],
      title: "Poster Killua Melancholy",
      category: "poster",
    },
    {
      description: "Poster hecho de alta calidad con un diseño único.",
      images: ["ZOLDYCK-CLAN.jpeg"],
      inStock: 16,
      price: 35,
      slug: "poster_zoldyck_family",
      type: "posters",
      tags: ["poster"],
      title: "Poster Zoldyck Family",
      category: "poster",
    },
    {
      description: "Poster hecho de alta calidad con un diseño único.",
      images: ["MAKIMA-SILENCE.jpeg"],
      inStock: 16,
      price: 35,
      slug: "poster_makima_silence",
      type: "posters",
      tags: ["poster"],
      title: "Poster Makima Silence",
      category: "poster",
    },
    {
      description: "Poster hecho de alta calidad con un diseño único.",
      images: ["DAKI.jpeg"],
      inStock: 16,
      price: 35,
      slug: "poster_daki",
      type: "posters",
      tags: ["poster"],
      title: "Poster Daki",
      category: "poster",
    },
    {
      description: "Poster hecho de alta calidad con un diseño único.",
      images: ["BERSERK.jpeg"],
      inStock: 16,
      price: 35,
      slug: "poster_berserk",
      type: "posters",
      tags: ["poster"],
      title: "Poster Berserk",
      category: "poster",
    },
    {
      description: "Poster hecho de alta calidad con un diseño único.",
      images: ["SNINING.jpeg"],
      inStock: 16,
      price: 35,
      slug: "poster_snining",
      type: "posters",
      tags: ["poster"],
      title: "Poster Snining",
      category: "poster",
    },
    {
      description: "Poster hecho de alta calidad con un diseño único.",
      images: ["JOTARO.jpeg"],
      inStock: 16,
      price: 35,
      slug: "poster_jotaro_jojo",
      type: "posters",
      tags: ["poster"],
      title: "Poster Jotaro jojo",
      category: "poster",
    },
    {
      description: "Poster hecho de alta calidad con un diseño único.",
      images: ["NEZUDEMON.jpeg"],
      inStock: 16,
      price: 35,
      slug: "poster_nezu_demon",
      type: "posters",
      tags: ["poster"],
      title: "Poster Nezu Demon",
      category: "poster",
    },
    {
      description: "Poster hecho de alta calidad con un diseño único.",
      images: ["MISATO.jpeg"],
      inStock: 16,
      price: 35,
      slug: "poster_misato",
      type: "posters",
      tags: ["poster"],
      title: "Poster Misato",
      category: "poster",
    },
    {
      description: "Poster hecho de alta calidad con un diseño único.",
      images: ["NEZUKO.jpeg"],
      inStock: 16,
      price: 35,
      slug: "poster_nezuko",
      type: "posters",
      tags: ["poster"],
      title: "Poster Nezuco",
      category: "poster",
    },
    {
      description: "Poster hecho de alta calidad con un diseño único.",
      images: ["REI.jpeg"],
      inStock: 16,
      price: 35,
      slug: "poster_rei",
      type: "posters",
      tags: ["poster"],
      title: "Poster Rei",
      category: "poster",
    },
    {
      description: "Poster hecho de alta calidad con un diseño único.",
      images: ["THIRD-CHILD.jpeg"],
      inStock: 16,
      price: 35,
      slug: "poster_third_child",
      type: "posters",
      tags: ["poster"],
      title: "Poster Third Child",
      category: "poster",
    },
    {
      description: "Poster hecho de alta calidad con un diseño único.",
      images: ["HIMIKO.jpg"],
      inStock: 16,
      price: 35,
      slug: "poster_himiko_toga",
      type: "posters",
      tags: ["poster"],
      title: "Poster Himiko Toga",
      category: "poster",
    },
  ],
};
