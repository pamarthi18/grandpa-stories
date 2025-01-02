interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
}

export const BlogCard = ({ title, excerpt, author, date, imageUrl }: BlogCardProps) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="font-heading font-semibold text-xl mb-2 text-text">{title}</h2>
        <p className="text-text-light mb-4">{excerpt}</p>
        <div className="flex items-center justify-between text-sm text-text-light">
          <span>{author}</span>
          <span>{date}</span>
        </div>
      </div>
    </article>
  );
};