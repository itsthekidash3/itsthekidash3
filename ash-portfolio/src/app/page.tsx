import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-32 max-w-6xl mx-auto px-6">
      <section className="min-h-[80vh] flex flex-col justify-center">
        <h1 className="text-5xl font-bold leading-tight">
          Full-Stack & ML Engineer
        </h1>
        <p className="mt-6 max-w-xl text-gray-400">
          Computer Science graduate passionate about building scalable
          full-stack applications and AI-powered systems.
        </p>
        <p className="mt-4 text-gray-400">
          Interested in full-stack, backend, and machine learning roles.
        </p>
      </section>
      
      <section id="projects" className="py-24">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>

        <div className="border border-dashed border-white/20 rounded-xl p-12 text-center text-gray-400">
          Projects coming soon.
        </div>
      </section>

      <section id="skills" className="py-24">
        <h2 className="text-3xl font-semibold mb-8">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-300">
          <div>
            <h3 className="font-medium mb-2">Languages</h3>
            <p>Python, JavaScript, Java, SQL</p>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Frontend</h3>
            <p>React, Next.js, HTML, CSS</p>
          </div>
    
          <div>
            <h3 className="font-medium mb-2">Backend</h3>
            <p>Node.js, FastAPI, Flask</p>
          </div>
        </div>
      </section>
      <section className="py-24">
        <a
          href="/Akshanth_Resume_1.pdf"
          className="inline-block border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10"
          >
          Download Resume
        </a>
      </section>
      <section id="contact" className="py-24 text-gray-400">
        <p>Email: akshanth.mamidala3@gmail.com</p>
        <p>
          <a href="https://github.com/itsthekidash3">GitHub</a> ·{" "}
          <a href="https://linkedin.com/in/akshanthm">LinkedIn</a>
        </p>
      </section>


    </main>
  );
}



