import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUS = () => {
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
      `}</style>

      <Navbar />

      {/* HERO */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          ✨ Building the Future of Coding with AI
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          CODI-AI is built to empower developers, students, and creators by
          making programming simple, fast, and accessible. 🚀
        </p>
      </section>

      {/* IMAGE + STORY */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <img
            src="src/pages/Image/AboutUS.png"
            alt="About Us"
            className="relative rounded-xl border border-zinc-800 bg-black"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4 text-purple-400">Our Story</h2>
          <p className="text-gray-400 leading-relaxed">
            CODI-AI was founded with a clear vision — to remove complexity from
            coding and make learning programming intuitive. From concept to
            execution, our focus has always been on empowering users with
            intelligent tools that enhance productivity and understanding.
            <br /><br />
            We believe AI should assist, not replace creativity — and that’s
            the principle behind everything we build. 
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Core Values 🛠️
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-900/60 backdrop-blur-md p-6 rounded-xl border border-zinc-800 hover:border-purple-500/50 transition-all duration-500">
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-gray-400">
              Continuously improving through intelligent and modern solutions.
            </p>
          </div>

          <div className="bg-zinc-900/60 backdrop-blur-md p-6 rounded-xl border border-zinc-800 hover:border-blue-500/50 transition-all duration-500">
            <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
            <p className="text-gray-400">
              Making programming understandable for everyone.
            </p>
          </div>

          <div className="bg-zinc-900/60 backdrop-blur-md p-6 rounded-xl border border-zinc-800 hover:border-purple-500/50 transition-all duration-500">
            <h3 className="text-xl font-semibold mb-3">Quality</h3>
            <p className="text-gray-400">
              Delivering clean design, reliable tools, and scalable systems.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div className="bg-zinc-900/40 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 hover:bg-zinc-800/50 transition">
          <h3 className="text-3xl font-bold text-purple-400">24/7</h3>
          <p className="text-gray-400">AI Support</p>
        </div>
        <div className="bg-zinc-900/40 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 hover:bg-zinc-800/50 transition">
          <h3 className="text-3xl font-bold text-blue-400">100+</h3>
          <p className="text-gray-400">Learning Resources</p>
        </div>
        <div className="bg-zinc-900/40 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 hover:bg-zinc-800/50 transition">
          <h3 className="text-3xl font-bold text-purple-400">Fast</h3>
          <p className="text-gray-400">Code Assistance</p>
        </div>
        <div className="bg-zinc-900/40 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 hover:bg-zinc-800/50 transition">
          <h3 className="text-3xl font-bold text-blue-400">Modern</h3>
          <p className="text-gray-400">Bright Future with AI</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUS;