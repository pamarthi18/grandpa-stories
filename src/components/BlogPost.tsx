import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { 
  FacebookIcon, 
  TwitterIcon, 
  LinkedinIcon, 
  MessageSquare,
  MessageCircle,
  Send
} from "lucide-react";

interface Comment {
  author: string;
  content: string;
  date: string;
}

const BLOG_POSTS = {
  "the-magical-garden-adventure": {
    title: "The Magical Garden Adventure",
    content: `Once upon a time, in a garden filled with wonder and magic, there lived a very special turtle named Tommy. Tommy wasn't like other turtles – he wore a tiny backpack and loved to go on adventures!

    One sunny morning, Tommy woke up to find something extraordinary: rainbow-colored flowers had sprouted overnight! But these weren't just any flowers – they sparkled and twinkled like stars.

    As Tommy approached the flowers, he heard tiny giggles. To his amazement, a group of talking butterflies emerged from behind the petals! They had wings that shimmered with all the colors of the rainbow.

    "Welcome to our magical garden!" the butterflies sang in unison. "Would you like to join us for a special adventure?"

    Tommy's eyes lit up with excitement. "Oh yes, please!" he replied, adjusting his little backpack.

    Together with his new butterfly friends, Tommy discovered secret pathways made of moonbeams, played hide-and-seek with friendly clouds, and even had a tea party with a wise old owl who told the most wonderful stories.

    As the day came to an end, the butterflies sprinkled some magical dust over Tommy, giving him the ability to visit them whenever he wanted. From that day on, Tommy's garden became the most magical place in the world, where every day brought new adventures and wonderful friends.`,
    author: "Grandpa Joe",
    date: "Mar 15, 2024",
    imageUrl: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
  },
  "the-busy-bees-big-day": {
    title: "The Busy Bees' Big Day",
    content: `In a beautiful beehive nestled in an old oak tree, lived a young bee named Buzzy. Buzzy was always excited to help collect honey, but today was extra special – it was his first day of Bee School!

    At Bee School, Buzzy learned all about teamwork from the wise teacher, Mrs. Honeycomb. She showed the young bees how to dance to tell others where the best flowers were, how to collect nectar, and most importantly, how to work together.

    During their first assignment, Buzzy and his new friends had to collect nectar from a field of sunflowers. At first, it seemed too difficult for one little bee, but then Buzzy remembered Mrs. Honeycomb's lessons about teamwork.

    He called his classmates together, and they made a plan. Some bees would search for the sweetest flowers, others would collect the nectar, and the rest would carry it back to the hive. Working together made everything easier and more fun!

    By the end of the day, Buzzy and his friends had collected more nectar than any other class in Bee School history! Mrs. Honeycomb was so proud, she gave everyone a special golden star sticker for their antennae.

    That night, as Buzzy snuggled into his cozy honeycomb bed, he smiled, thinking about all the wonderful things he could achieve with his friends by his side. He couldn't wait for another busy day of learning and working together in their magical beehive!`,
    author: "Grandpa Mike",
    date: "Mar 14, 2024",
    imageUrl: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937"
  },
  "monkeys-banana-adventure": {
    title: "Monkey's Banana Adventure",
    content: `Deep in the heart of the Giggling Jungle lived a curious little monkey named Milo. Milo had heard stories about a magical golden banana tree that grew the most delicious bananas in the world, and he decided to go on an adventure to find it!

    Early one morning, Milo packed his favorite spotted handkerchief with some snacks and set off into the jungle. Along the way, he met many new friends who helped him on his journey.

    First, he met Paula the Parrot, who flew high above the trees to help spot the path ahead. Then came Oliver the Orangutan, who helped Milo swing across wide rivers using vines. Even Ellie the Elephant joined in, carrying Milo through thick patches of jungle grass on her back!

    As they traveled deeper into the jungle, they followed clues left by ancient monkey explorers: golden banana peels that sparkled in the sunlight, mysterious arrow-shaped leaves pointing the way, and sweet banana-scented breezes.

    Finally, after crossing a bridge made of butterfly wings and climbing the tallest tree in the jungle, they found it – the legendary golden banana tree! Its branches were filled with perfectly ripe, glowing bananas that seemed to sing a happy song.

    But the best part wasn't just finding the magical bananas – it was sharing them with all his new friends! Together, they had the most wonderful banana feast ever, and Milo learned that adventures are much more fun when you have friends to share them with.

    From that day on, Milo and his friends would meet at the golden banana tree every week for picnics and storytelling, making the Giggling Jungle an even happier place!`,
    author: "Grandpa William",
    date: "Mar 13, 2024",
    imageUrl: "https://images.unsplash.com/photo-1501286353178-1ec881214838"
  }
};

export const BlogPost = () => {
  const { slug } = useParams();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({ author: '', content: '' });

  const post = BLOG_POSTS[slug as keyof typeof BLOG_POSTS];

  if (!post) {
    return <div className="text-center py-10">Story not found!</div>;
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.author.trim() && newComment.content.trim()) {
      setComments([
        ...comments,
        {
          ...newComment,
          date: new Date().toLocaleDateString()
        }
      ]);
      setNewComment({ author: '', content: '' });
    }
  };

  const shareUrl = window.location.href;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="bg-white rounded-3xl overflow-hidden shadow-lg border-4 border-primary mb-8 transform hover:scale-[1.01] transition-all duration-300">
        <div className="relative">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        </div>
        
        <div className="p-8">
          <h1 className="font-heading text-4xl mb-4 text-primary">{post.title}</h1>
          <div className="flex items-center justify-between mb-6 text-text-light">
            <span className="font-semibold text-primary">{post.author}</span>
            <span>{post.date}</span>
          </div>
          
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-lg leading-relaxed text-text">
                {paragraph.trim()}
              </p>
            ))}
          </div>

          <div className="mt-8 border-t pt-6">
            <h3 className="font-heading text-2xl mb-4 text-primary">Share this story</h3>
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                onClick={() => window.open(`https://facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank')}
                className="hover:bg-blue-100"
              >
                <FacebookIcon className="w-5 h-5 text-blue-600" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}`, '_blank')}
                className="hover:bg-blue-100"
              >
                <TwitterIcon className="w-5 h-5 text-blue-400" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.open(`https://linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank')}
                className="hover:bg-blue-100"
              >
                <LinkedinIcon className="w-5 h-5 text-blue-700" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(`Check out this story: ${shareUrl}`)}`, '_blank')}
                className="hover:bg-green-100"
              >
                <MessageSquare className="w-5 h-5 text-green-500" />
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <h3 className="font-heading text-2xl mb-6 text-primary flex items-center gap-2">
            <MessageCircle className="w-6 h-6" />
            Comments
          </h3>
          
          <form onSubmit={handleCommentSubmit} className="mb-8">
            <div className="mb-4">
              <Input
                placeholder="Your name"
                value={newComment.author}
                onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
                className="mb-2"
              />
              <Textarea
                placeholder="Share your thoughts..."
                value={newComment.content}
                onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                className="min-h-[100px]"
              />
            </div>
            <Button type="submit" className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              Post Comment
            </Button>
          </form>

          <div className="space-y-4">
            {comments.map((comment, index) => (
              <div key={index} className="border-b pb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-primary">{comment.author}</span>
                  <span className="text-text-light text-sm">{comment.date}</span>
                </div>
                <p className="text-text">{comment.content}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
