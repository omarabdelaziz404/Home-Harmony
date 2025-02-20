const sql = require("better-sqlite3");
const db = sql("meals.db");

const dummyMeals = [
  {
    title: "Home 1",
    slug: "Home1",
    image: "/images/interior2.jpg",
    summary: "living room, comfortable L-shaped sofa",
    instructions: `
      This bright and airy living room features a comfortable L-shaped sofa as the centerpiece, 
      complemented by a round coffee table and a striking architectural staircase. 
      The minimalist design and neutral color palette create a serene and sophisticated atmosphere.
    `,
    creator: "John Doe",
    creator_email: "johndoe@example.com",
  },
  {
    title: "Home 2",
    slug: "Home2",
    image: "/images/interior3.jpg",
    summary: "living room, vaulted-ceiling",
    instructions: `
      This sophisticated living room boasts a dramatic vaulted ceiling with exposed beams, creating a sense of spaciousness. 
      Two matching white sofas face each other, anchored by a dark wood coffee table and a textured rug. 
      The focal point of the room is a unique, sculptural fireplace and a centrally placed television. 
      The neutral color palette is accented with warm, earthy tones in the textiles and decorative objects. 
      Large windows flank the fireplace, filling the space with natural light.
    `,
    creator: "Max Schwarz",
    creator_email: "max@example.com",
  },
  {
    title: "Home 3",
    slug: "Home3",
    image: "/images/interior4.jpg",
    summary: "modern-living-room-textured-walls",
    instructions: `
      This contemporary living room showcases a harmonious blend of textures and patterns.  
      A comfortable gray sectional sofa is complemented by a round.
      tiered coffee table and a geometric-patterned rug. 
      The textured wallpaper adds visual interest. 
      the exposed brick wall creates an urban chic vibe. 
      A unique, circular chandelier hangs above, mirroring the shape of the coffee table.  
      The room is filled with natural light.
      highlighting the neutral color palette with pops of color in the throw pillows.
    `,
    creator: "Emily Chen",
    creator_email: "emilychen@example.com",
  },
  {
    title: "Home 4",
    slug: "Home4",
    image: "/images/interior5.jpg",
    summary: "eclectic-living-room-vibrant-rug",
    instructions: `
      This eclectic living room is a celebration of color and texture. 
      The focal point is a stunning, intricately patterned rug that anchors the space. 
      A small, light-colored sofa is paired with a mix of armchairs.
      creating a cozy seating arrangement.  
      The walls are adorned with an array of woven wall hangings.
      A variety of plants bring life and vibrancy to the room.
      while a unique, multi-tiered coffee table serves as a central gathering point.  
      Large windows provide ample natural light.
      highlighting the diverse textures and patterns within the space.
    `,
    creator: "Laura Smith",
    creator_email: "laurasmith@example.com",
  },
  {
    title: "Home 5",
    slug: "Home5",
    image: "/images/interior6.jpg",
    summary: "bright-airy-living-room",
    instructions: `
      This inviting living room is bathed in natural light.
      creating a warm and welcoming atmosphere.  
      A comfortable gray sofa is accented with rust-colored pillows.
      adding a pop of color to the neutral palette.  
      A glass-topped coffee table and a plush, textured rug anchor the space.
      while a variety of plants bring a touch of nature indoors.  
      The room features a mix of mid-century modern and contemporary elements.
      including a sleek floor lamp, a minimalist side table, and framed artwork.  
      Large windows offer a pleasant view of the outdoors, enhancing the bright and airy feel of the space.
    `,
    creator: "Mario Rossi",
    creator_email: "mariorossi@example.com",
  },
  {
    title: "Home 6",
    slug: "Home6",
    image: "/images/interior7.jpg",
    summary: "cozy-reading-room",
    instructions: `
      Escape the everyday in this warm and inviting reading room.
      Surrounded by bookshelves and bathed in soft light.
      it's the perfect spot to curl up with a good book and unwind.
 `,
    creator: "Franz Huber",
    creator_email: "franzhuber@example.com",
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();
