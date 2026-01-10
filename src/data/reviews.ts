// Reviews data - automatically generated from Reviews folder
// To add new reviews: 
// 1. Add images to /public/images/Reviews/
// 2. Run: node scripts/generate-reviews.js
// 3. The reviews will automatically appear on the website

export interface Review {
  id: number;
  image: string;
  alt: string;
  platform?: string; // e.g., "Facebook", "Google", etc.
}

// Auto-generated from /public/images/Reviews/
export const REVIEWS: Review[] = [
  {
    id: 1,
    image: "/images/Reviews/Screen Shot 2026-01-10 at 7.44.10 pm.png",
    alt: "Customer review 1",
    platform: "Facebook",
  },
  {
    id: 2,
    image: "/images/Reviews/Screen Shot 2026-01-10 at 7.44.22 pm.png",
    alt: "Customer review 2",
    platform: "Facebook",
  },
  {
    id: 3,
    image: "/images/Reviews/Screen Shot 2026-01-10 at 7.44.42 pm.png",
    alt: "Customer review 3",
    platform: "Facebook",
  },
  {
    id: 4,
    image: "/images/Reviews/Screen Shot 2026-01-10 at 7.44.48 pm.png",
    alt: "Customer review 4",
    platform: "Facebook",
  },
  {
    id: 5,
    image: "/images/Reviews/Screen Shot 2026-01-10 at 7.45.13 pm.png",
    alt: "Customer review 5",
    platform: "Facebook",
  },
  {
    id: 6,
    image: "/images/Reviews/Screen Shot 2026-01-10 at 7.45.18 pm.png",
    alt: "Customer review 6",
    platform: "Facebook",
  },
  {
    id: 7,
    image: "/images/Reviews/Screen Shot 2026-01-10 at 7.45.22 pm.png",
    alt: "Customer review 7",
    platform: "Facebook",
  },
  {
    id: 8,
    image: "/images/Reviews/Screen Shot 2026-01-10 at 7.45.27 pm.png",
    alt: "Customer review 8",
    platform: "Facebook",
  },
  {
    id: 9,
    image: "/images/Reviews/Screen Shot 2026-01-10 at 7.45.32 pm.png",
    alt: "Customer review 9",
    platform: "Facebook",
  },
  {
    id: 10,
    image: "/images/Reviews/Screen Shot 2026-01-10 at 7.45.37 pm.png",
    alt: "Customer review 10",
    platform: "Facebook",
  },
  {
    id: 11,
    image: "/images/Reviews/Screen Shot 2026-01-10 at 7.45.41 pm.png",
    alt: "Customer review 11",
    platform: "Facebook",
  },
  {
    id: 12,
    image: "/images/Reviews/Screen Shot 2026-01-10 at 7.45.46 pm.png",
    alt: "Customer review 12",
    platform: "Facebook",
  }
];

// Helper function to get total review count
export const getTotalReviews = () => REVIEWS.length;

// Helper function to get reviews by platform
export const getReviewsByPlatform = (platform: string) =>
  REVIEWS.filter((review) => review.platform === platform);
