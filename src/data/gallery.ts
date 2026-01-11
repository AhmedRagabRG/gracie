// Gallery data - organized by folder structure
// Folders:
// - Who we are: Team photos with people
// - Quality work: Project showcase images
// - Gallery: All work/project images

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category?: string;
}

// ═══════════════════════════════════════════════════════════
// 👥 WHO WE ARE - Team Photos (for carousel in Who We Are section)
// ═══════════════════════════════════════════════════════════
export const TEAM_PHOTOS: GalleryImage[] = [
  {
    id: 1,
    src: "/images/Who we are/1.jpg",
    alt: "",
    category: "team",
  },
  {
    id: 2,
    src: "/images/Who we are/2.JPG",
    alt: "",
    category: "team",
  },
  {
    id: 3,
    src: "/images/Who we are/3.jpg",
    alt: "",
    category: "team",
  },
  {
    id: 4,
    src: "/images/Who we are/4.jpg",
    alt: "",
    category: "team",
  },
  {
    id: 5,
    src: "/images/Who we are/5.jpg",
    alt: "",
    category: "team",
  },
];

// ═══════════════════════════════════════════════════════════
// 🔧 QUALITY WORK - Project Showcase (for Project Showcase section)
// ═══════════════════════════════════════════════════════════
export const QUALITY_WORK_PHOTOS: GalleryImage[] = [
  {
    id: 101,
    src: "/images/Quality work/1.jpg",
    alt: "Professional irrigation installation",
    category: "showcase",
  },
  {
    id: 102,
    src: "/images/Quality work/2.jpg",
    alt: "Quality irrigation work",
    category: "showcase",
  },
  {
    id: 103,
    src: "/images/Quality work/3.jpg",
    alt: "Precision irrigation system",
    category: "showcase",
  },
  {
    id: 104,
    src: "/images/Quality work/4.jpg",
    alt: "Expert irrigation installation",
    category: "showcase",
  },
  {
    id: 105,
    src: "/images/Quality work/5.jpg",
    alt: "Professional irrigation repair",
    category: "showcase",
  },
  {
    id: 106,
    src: "/images/Quality work/6.jpg",
    alt: "Quality irrigation service",
    category: "showcase",
  },
];

// ═══════════════════════════════════════════════════════════
// 🖼️ GALLERY - All Work Photos (for Photo Gallery section)
// ═══════════════════════════════════════════════════════════
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 201,
    src: "/images/Gallery/A.JPG",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 202,
    src: "/images/Gallery/AA.JPG",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 203,
    src: "/images/Gallery/AAA.JPG",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 204,
    src: "/images/Gallery/att.wkLbatBa6-6eMcIapC-Z0yB4uKiklOfs2IV5srxl4MU.JPG",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 205,
    src: "/images/Gallery/C88636FA-6966-4444-9B1D-F465FC856A79.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 206,
    src: "/images/Gallery/IMG_0017.JPG",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 207,
    src: "/images/Gallery/IMG_0126.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 208,
    src: "/images/Gallery/IMG_0132.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 209,
    src: "/images/Gallery/IMG_0773.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 210,
    src: "/images/Gallery/IMG_0784.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 211,
    src: "/images/Gallery/IMG_0855.JPG",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 212,
    src: "/images/Gallery/IMG_0859.JPG",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 213,
    src: "/images/Gallery/IMG_0860.JPG",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 214,
    src: "/images/Gallery/IMG_1273.JPG",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 215,
    src: "/images/Gallery/IMG_1292.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 216,
    src: "/images/Gallery/IMG_1426.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 217,
    src: "/images/Gallery/IMG_2060.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 218,
    src: "/images/Gallery/IMG_2253.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 219,
    src: "/images/Gallery/IMG_2306.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 220,
    src: "/images/Gallery/IMG_3208.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 221,
    src: "/images/Gallery/IMG_4114.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 222,
    src: "/images/Gallery/IMG_4252.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 223,
    src: "/images/Gallery/IMG_4921.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 224,
    src: "/images/Gallery/IMG_4926.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 225,
    src: "/images/Gallery/IMG_4D9D3BF9-BBF3-43C1-B6E7-B1C099DE6D93.JPEG",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 226,
    src: "/images/Gallery/IMG_5431.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 227,
    src: "/images/Gallery/IMG_5718.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 228,
    src: "/images/Gallery/IMG_5987.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 229,
    src: "/images/Gallery/IMG_6129.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 230,
    src: "/images/Gallery/IMG_6130.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 231,
    src: "/images/Gallery/IMG_6928.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 232,
    src: "/images/Gallery/IMG_6952.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 233,
    src: "/images/Gallery/IMG_7046.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 234,
    src: "/images/Gallery/IMG_7274.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 235,
    src: "/images/Gallery/IMG_7361.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 236,
    src: "/images/Gallery/IMG_7575.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 237,
    src: "/images/Gallery/IMG_7707.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 238,
    src: "/images/Gallery/IMG_7709.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 239,
    src: "/images/Gallery/IMG_7747.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 240,
    src: "/images/Gallery/IMG_7869.jpg",
    alt: "Irrigation project",
    category: "project",
  },
  {
    id: 241,
    src: "/images/Gallery/IMG_8438.jpg",
    alt: "Irrigation project",
    category: "project",
  },
];

// ═══════════════════════════════════════════════════════════
// 🔧 WORK PHOTOS - All work photos (Quality Work + Gallery)
// Used for: Project Showcase fallback, general work display
// ═══════════════════════════════════════════════════════════
export const WORK_PHOTOS = [...QUALITY_WORK_PHOTOS, ...GALLERY_IMAGES];

// ═══════════════════════════════════════════════════════════
// 📊 Helper Functions
// ═══════════════════════════════════════════════════════════

// Helper function to get total image count
export const getTotalImages = () => GALLERY_IMAGES.length;

// Helper function to get images by category
export const getImagesByCategory = (category: string) =>
  GALLERY_IMAGES.filter((image) => image.category === category);
