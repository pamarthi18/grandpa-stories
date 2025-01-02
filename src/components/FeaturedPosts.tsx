import { BlogCard } from "./BlogCard";

const FEATURED_POSTS = [
  {
    title: "The Old Farm House",
    excerpt: "Memories of summer days spent at grandpa's farm, where every corner held a story waiting to be told.",
    author: "Grandpa Joe",
    date: "Mar 15, 2024",
    imageUrl: "https://images.unsplash.com/photo-1493962853295-0fd70327578a"
  },
  {
    title: "Tales from the Workshop",
    excerpt: "Life lessons learned while fixing old radios and tinkering with wooden toys in grandpa's workshop.",
    author: "Grandpa Mike",
    date: "Mar 14, 2024",
    imageUrl: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2"
  },
  {
    title: "Sunday Afternoon Stories",
    excerpt: "The cherished tradition of gathering on the porch for storytelling and lemonade.",
    author: "Grandpa William",
    date: "Mar 13, 2024",
    imageUrl: "https://images.unsplash.com/photo-1517022812141-23620dba5c23"
  }
];

export const FeaturedPosts = () => {
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl mb-8 text-text">Featured Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_POSTS.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};