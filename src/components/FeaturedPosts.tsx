import { BlogCard } from "./BlogCard";

const FEATURED_POSTS = [
  {
    title: "The Future of Web Development",
    excerpt: "Exploring the latest trends and technologies shaping the web development landscape.",
    author: "John Doe",
    date: "Mar 15, 2024",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    title: "Mastering React Hooks",
    excerpt: "A comprehensive guide to using React Hooks effectively in your applications.",
    author: "Jane Smith",
    date: "Mar 14, 2024",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    title: "Design Systems in 2024",
    excerpt: "How modern design systems are evolving to meet the needs of growing organizations.",
    author: "Mike Johnson",
    date: "Mar 13, 2024",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  }
];

export const FeaturedPosts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl mb-8 text-text">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_POSTS.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};