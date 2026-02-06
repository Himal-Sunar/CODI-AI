import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#020205] text-white flex flex-col overflow-hidden">
      
      {/* GALAXY & STAR BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Twinkling Stars Layer */}
        <div className="absolute inset-0 opacity-30" 
             style={{ 
               backgroundImage: `radial-gradient(1px 1px at 20px 30px, #eee, rgba(0,0,0,0)), 
                                radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)), 
                                radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)), 
                                radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0))`,
               backgroundSize: '200px 200px' 
             }}></div>
        
        {/* Animated Nebulas */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }}></div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        .animate-galaxy {
          animation: twinkle 5s ease-in-out infinite;
        }
      `}</style>

      <Navbar />

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          🚀 Your Personal AI Coding Assistant
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-4">
          Stop struggling with bugs. Ask questions, learn programming, and get instant AI-powered help —
          all in one place. 💻✨
        </p>
      </section>

      {/* FEATURE CARDS SECTION */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-900/60 backdrop-blur-md p-8 rounded-xl border border-zinc-800 hover:border-purple-500/50 transition-all duration-500">
            <h3 className="text-2xl font-semibold mb-3">📚 Learn Coding</h3>
            <p className="text-gray-400">
              Master logic faster. Understand complex concepts with clear explanations and real-world examples.
            </p>
          </div>

          <div className="bg-zinc-900/60 backdrop-blur-md p-8 rounded-xl border border-zinc-800 hover:border-blue-500/50 transition-all duration-500">
            <h3 className="text-2xl font-semibold mb-3">💬 Ask Anything</h3>
            <p className="text-gray-400">
              Stuck on a stubborn bug? Ask CODI-AI and get instant, accurate answers to keep you moving.
            </p>
          </div>

          <div className="bg-zinc-900/60 backdrop-blur-md p-8 rounded-xl border border-zinc-800 hover:border-purple-500/50 transition-all duration-500">
            <h3 className="text-2xl font-semibold mb-3">⚡ Build Faster</h3>
            <p className="text-gray-400">
              Ship projects in record time. Write cleaner, high-quality code with professional AI guidance.
            </p>
          </div>
        </div>

        {/* BUTTONS BELOW THE CARDS */}
        <div className="flex justify-center gap-6 mt-16">
          <Link to="/learning">
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              Get Started for Free
            </button>
          </Link>

          <Link to="/about">
            <button className="border border-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-zinc-900 transition-all hover:scale-105">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Powerful Features 🛠️
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-zinc-900/40 backdrop-blur-sm p-6 rounded-lg border border-zinc-800 hover:bg-zinc-800 transition">
            🤖 AI Chat
          </div>
          <div className="bg-zinc-900/40 backdrop-blur-sm p-6 rounded-lg border border-zinc-800 hover:bg-zinc-800 transition">
            🔍 Code Explanation
          </div>
          <div className="bg-zinc-900/40 backdrop-blur-sm p-6 rounded-lg border border-zinc-800 hover:bg-zinc-800 transition">
            🐞 Debugging Help
          </div>
          <div className="bg-zinc-900/40 backdrop-blur-sm p-6 rounded-lg border border-zinc-800 hover:bg-zinc-800 transition">
            📖 Learning Resources
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;