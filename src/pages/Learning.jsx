import { GoogleGenAI } from "@google/genai";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import LoadingAnimation from "../components/LoadingAnimation";
const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const ai = new GoogleGenAI({ apiKey });

const Learning = () => {
  const [userRequest, setUserRequest] = useState("");
  const [topic, setTopic] = useState("");
  const [messages, setMessages] = useState([]); // State to hold the chat history
  const [isLoading, setIsLoading] = useState(false);

  const handleRequest = async () => {
    setIsLoading(true);
    if (!topic) {
      setIsLoading(false);
      return console.log("Select topic first");
    }
    if (!userRequest || userRequest.trim() === "") {
      setIsLoading(false);
      return console.log("type your question");
    }

    localStorage.setItem("topic", JSON.stringify(topic));
    const currentRequest = userRequest.trim();

    // Add user message to chat immediately
    setMessages((prev) => [...prev, { role: "user", text: currentRequest }]);
    setUserRequest("");

    const prompt = `
You are an expert ${topic} educator with 10+ years of teaching experience.
Respond to this user request: "${currentRequest}"
If the user is making casual conversation or greeting, respond naturally and conversationally.
For educational requests, provide a clear, structured response following this exact format:

OUTPUT FORMAT REQUIREMENTS:
- Return ONLY valid JSON with no additional text outside the JSON structure.
- Output must be an array containing exactly 1 object.
- The object MUST strictly follow this schema:

{
  "summary": "A concise 4-word headline summary from user question if question is one or two word use your intellegence and make it 4 word",
  "answer": "Your complete response here following the three-part structure below"
}

RESPONSE RULES:
1. "summary" must always be a short, exactly 4-word headline that give user understand what the question is also you can add ... also .
   Example: "DOM and VDOM in javascript"
2. "answer" must always contain three labeled sections in plain text:

EXPLANATION:
Step-by-step breakdown with simple language, assuming no prior knowledge.

EXAMPLE:
A practical, working example with input/output. Use readable text without markdown.

SUMMARY:
A detailed overview covering:
- What (definition)
- When (use cases)
- Where (context/environment)
- Why (benefits/importance)
- How (key methods/approaches)

FORMATTING RULES:
- Use plain text only (no markdown symbols like **, ##, or \`\`\`).
- Separate sections with clear headings.
- Use line breaks for readability.
- Ensure the response directly answers "${currentRequest}".

Remember: The entire response must strictly follow the JSON schema with both "summary" and "answer".`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash", // Using a stable model name
        contents: prompt,
      });

      let cleanedResponse = response.text
        .replace(/```json\n?/g, "")
        .replace(/```\n?/g, "")
        .trim();

      const aiData = JSON.parse(cleanedResponse);
      const aiItem = Array.isArray(aiData) ? aiData[0] : aiData;

      // Add AI response to chat
      setMessages((prev) => [...prev, { role: "ai", data: aiItem }]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error, "Error to connect with AI");
    }
  };

  return (
    <div className="relative min-h-screen bg-[#020205] text-white flex flex-col overflow-hidden font-sans">
      {/* GALAXY & STAR BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(1px 1px at 25px 35px, #fff, rgba(0,0,0,0)), 
                                radial-gradient(1.5px 1.5px at 60px 120px, #ddd, rgba(0,0,0,0))`,
            backgroundSize: "150px 150px",
          }}
        ></div>
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-purple-900/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/10 blur-[120px]"></div>
      </div>

      <Navbar />

      <div className="relative z-10 flex-1 flex flex-col max-w-5xl mx-auto w-full p-4 md:p-6 overflow-hidden">
        {/* HEADER AREA: TOP RIGHT TOPIC SELECTION */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold tracking-tight text-zinc-300">
            Clean Your Doubt🙋‍♂️
          </h1>

          <div className="flex items-center gap-3">
            {topic && (
              <div className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                {topic}
              </div>
            )}
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="bg-zinc-900/80 border border-zinc-800 text-white text-xs rounded-xl px-3 py-2 focus:border-zinc-500 outline-none backdrop-blur-md"
            >
              <option value="" disabled>
                Change Subject
              </option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
              <option value="Python">Python</option>
              <option value="HTML/CSS">HTML/CSS</option>
              <option value="Machine Learning">Machine Learning</option>
            </select>
          </div>
        </div>

        {/* CHAT AREA: SCROLLABLE SECTION */}
        <div className="flex-1 overflow-y-auto space-y-6 mb-4 pr-2 custom-scrollbar">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-zinc-600 italic text-sm">
              <p>
                Choose a subject and ask your first question to start the
                session.
              </p>
            </div>
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-5 ${
                    msg.role === "user"
                      ? "bg-zinc-800/50 border border-zinc-700 text-zinc-200"
                      : "bg-zinc-900/40 border border-zinc-800 backdrop-blur-sm"
                  }`}
                >
                  {msg.role === "ai" ? (
                    <div>
                      <h4 className="text-purple-400 font-bold text-sm mb-3 uppercase tracking-wider underline decoration-purple-500/30 underline-offset-4">
                        {msg.data.summary}
                      </h4>
                      <pre className="whitespace-pre-wrap font-sans text-zinc-300 text-sm leading-relaxed">
                        {msg.data.answer}
                      </pre>
                    </div>
                  ) : (
                    <p className="text-sm">{msg.text}</p>
                  )}
                 
                </div>
                
              </div>
              
            ))
          )}
        </div>
 {isLoading && (
    <div className="flex justify-start">
      <div className="max-w-[85%] rounded-2xl p-5 bg-zinc-900/40 border border-zinc-800 backdrop-blur-sm">
        <LoadingAnimation />
      </div>
    </div>
  )}
        {/* INPUT AREA */}
        <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-3xl p-4 shadow-2xl">
          <div className="relative flex items-center gap-3">
            <textarea
              value={userRequest}
              onChange={(e) => setUserRequest(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                !e.shiftKey &&
                (e.preventDefault(), handleRequest())
              }
              placeholder="Message your technical guide..."
              rows={1}
              className="flex-1 bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-zinc-600 outline-none resize-none placeholder:text-zinc-600"
            />
            <button
              onClick={handleRequest}
              className="bg-white text-black h-[48px] px-6 rounded-xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition-all"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Learning;
