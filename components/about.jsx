// components/About.jsx
export default function About() {
    return (
        <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
            {/* sticky heading wrapper */}
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-custom-primary/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-custom-text lg:sr-only">
                    About Me
                </h2>
            </div>

            <div>
                <p className="mb-4 text-custom-text">
                    I began coding in grade 11 and have since mastered languages like Python, Java, JavaScript, HTML, MySQL, C, BASIC, R, and MIPS Assembly. Through internships and personal projects, I’ve designed and built full-stack web applications from the ground up and developed a keen eye for problem-solving and user-centered design.
                </p>
                <p className="text-custom-text">
                    As an aspiring newly graduated full-stack developer, I leverage AI and LLM technologies—fine-tuning language models and building custom RAG pipelines—to automate workflows and deliver intelligent web experiences. My strong foundation in statistical modeling and machine learning enables me to tackle complex data challenges and build scalable solutions.
                </p>
            </div>
        </section>
    );
}
