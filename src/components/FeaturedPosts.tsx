import { BlogCard } from "./BlogCard";

const FEATURED_POSTS = [
  {
    title: "The Magical Garden Adventure",
    excerpt: "Join Tommy the Turtle and his friends as they discover a secret garden filled with rainbow flowers and talking butterflies!",
    author: "Grandpa Joe",
    date: "Mar 15, 2024",
    imageUrl: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
  },
  {
    title: "The Busy Bees' Big Day",
    excerpt: "Follow the story of Buzzy and his bee friends as they collect honey and learn about teamwork in their magical beehive!",
    author: "Grandpa Mike",
    date: "Mar 14, 2024",
    imageUrl: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937"
  },
  {
    title: "Monkey's Banana Adventure",
    excerpt: "Join Milo the Monkey on his exciting journey through the jungle to find the golden banana tree!",
    author: "Grandpa William",
    date: "Mar 13, 2024",
    imageUrl: "https://images.unsplash.com/photo-1501286353178-1ec881214838"
  }
];

export const FeaturedPosts = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl mb-8 text-primary animate-bounce">Magical Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_POSTS.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};