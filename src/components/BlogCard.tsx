interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
}

export const BlogCard = ({ title, excerpt, author, date, imageUrl }: BlogCardProps) => {
  return (
    <article 
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 border-4 border-primary"
      onClick={() => window.location.href = `/post/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-'))}`}
    >
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
      </div>
      <div className="p-6">
        <h2 className="font-heading font-bold text-2xl mb-3 text-primary hover:text-primary-hover transition-colors">{title}</h2>
        <p className="text-text-light mb-4 text-lg leading-relaxed">{excerpt}</p>
        <div className="flex items-center justify-between text-sm">
          <span className="text-primary font-semibold">{author}</span>
          <span className="text-text-light">{date}</span>
        </div>
      </div>
    </article>
  );
};