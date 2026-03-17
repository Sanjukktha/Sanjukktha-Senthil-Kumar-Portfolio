import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#fff5f7' }}>
      <Navigation />
      <HeroSection />

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>Sanjukktha Senthil Kumar</p>
          <p>Built with Next.js</p>
        </div>
      </footer>
    </main>
  );
}
