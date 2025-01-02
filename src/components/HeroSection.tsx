export const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center bg-gradient-to-r from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 text-text">
          Welcome to Grandpa Stories
        </h1>
        <p className="text-text-light text-lg md:text-xl max-w-2xl mx-auto mb-8">
          A collection of heartwarming tales, wisdom, and memories passed down through generations.
        </p>
        <Button className="bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-3 rounded-full transition-colors">
          Start Reading
        </Button>
      </div>
    </section>
  );
};