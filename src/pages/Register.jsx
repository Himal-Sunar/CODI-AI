import React from 'react';
import { SignUp } from '@clerk/clerk-react'; 
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="relative min-h-screen bg-[#020205] text-white flex flex-col items-center justify-center px-4 overflow-hidden">
      
      {/* GALAXY & STAR BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Static Stars */}
        <div className="absolute inset-0 opacity-30" 
             style={{ 
               backgroundImage: `radial-gradient(1px 1px at 25px 35px, #fff, rgba(0,0,0,0)), 
                                radial-gradient(1.5px 1.5px at 60px 120px, #ddd, rgba(0,0,0,0)), 
                                radial-gradient(1px 1px at 150px 50px, #fff, rgba(0,0,0,0))`,
               backgroundSize: '150px 150px' 
             }}></div>
        
        {/* Nebula Glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-900/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/10 blur-[120px]"></div>
      </div>

      {/* Brand Header */}
      <div className="relative z-10 mb-8 text-center">
        <h1 className="text-2xl font-bold tracking-wide
  bg-gradient-to-br from-white via-slate-300 to-slate-500
  bg-clip-text text-transparent
  drop-shadow-[0_0_10px_rgba(200,200,255,0.6)]">
          CODI-AI
        </h1>
        <p className="text-zinc-500 text-sm mt-2">Join the next generation of Nepali developers.</p>
      </div>

      {/* REGISTER CARD */}
      <div className="relative z-10 w-full max-w-md">
        <SignUp
          signInUrl="/"
          redirectUrl="/home"
          appearance={{
            elements: {
              card: 'shadow-[0_0_40px_rgba(0,0,0,0.7)] rounded-2xl border border-zinc-800 bg-white',
              footerAction: { display: 'none' },
              headerTitle: 'text-zinc-900',
              headerSubtitle: 'text-zinc-600',
              socialButtonsBlockButton: 'border-zinc-200 hover:bg-zinc-50 transition-all',
              formButtonPrimary: 'bg-zinc-900 hover:bg-black transition-all',
            },
          }}
        />
      </div>

      {/* Login Link */}
      <div className="relative z-10 mt-8 text-center">
        <p className="text-zinc-400 text-sm">
          Already have an account?{' '}
          <Link to="/" className="text-red-500 font-semibold hover:text-red-400 transition-colors">
            Sign in here
          </Link>
        </p>
      </div>

      {/* Nepal Flag indicator */}
      <div className="relative z-10 mt-10 opacity-40 text-[10px] tracking-[0.2em] uppercase text-zinc-500">
        Proudly Nepali 
      </div>
    </div>
  );
}

export default Register;