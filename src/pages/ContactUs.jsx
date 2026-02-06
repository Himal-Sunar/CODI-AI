import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
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
        
        {/* Static Nebulas */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[120px]"></div>
      </div>

      <Navbar />

      {/* HERO */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          Contact Us ✨
        </h1>
        <p className="text-gray-400 text-lg">
          Have questions, feedback, or ideas? We’d love to hear from you.
        </p>
      </section>

      {/* CONTACT CONTENT */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* CONTACT INFO */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-4 text-purple-400">Get in Touch</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Reach out anytime. Our team usually responds within 24 hours.
          </p>

          <div className="space-y-6 text-gray-300">
            <div className="flex items-center gap-4 bg-zinc-900/40 backdrop-blur-sm p-4 rounded-lg border border-zinc-800">
              <span className="text-2xl">📧</span>
              <span>codi-ainepal2082@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 bg-zinc-900/40 backdrop-blur-sm p-4 rounded-lg border border-zinc-800">
              <span className="text-2xl">🤖</span>
              <span>Making Nepali Students One-Step Close to Future of Tech</span>
            </div>
            <div className="flex items-center gap-4 bg-zinc-900/40 backdrop-blur-sm p-4 rounded-lg border border-zinc-800">
              <span className="text-2xl">⏱</span>
              <span>24/7 Global Support</span>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <form className="bg-zinc-900/60 backdrop-blur-md p-8 rounded-xl border border-zinc-800 space-y-6 shadow-2xl">
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Send Message 
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;