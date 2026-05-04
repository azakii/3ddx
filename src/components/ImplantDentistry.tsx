import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';

export default function ImplantDentistry() {
  return (
    <section className="px-4 md:px-8 py-16 md:py-32 w-full bg-white dark:bg-[#0a0a0a] transition-colors duration-300 relative overflow-clip">
      {/* Colorful background blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#188DBA]/10 via-transparent to-transparent pointer-events-none rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-lighten" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F2701D]/5 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-lighten" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start relative lg:gap-16 w-full">
          
          {/* Left Column (Sticky Header & Video) - Locked to viewport height on large screens */}
          <div className="w-full lg:w-[50%] lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center gap-8 lg:gap-10 mb-8 lg:mb-0">
            {/* Header */}
            <div className="flex flex-col gap-4">
              <div className="max-w-xl">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.05] tracking-tight text-graphite dark:text-white uppercase transition-colors mb-6">
                  {"Master the 3DDX".split(" ").map((word, index) => (
                    <span key={index}>
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                        className="inline-block"
                      >
                        {word}
                      </motion.span>
                      {" "}
                    </span>
                  ))}
                  <br className="hidden md:block" />
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 3 * 0.1, duration: 0.8 }}
                    className="text-[#188DBA] relative inline-block mt-2"
                  >
                    Digital Workflow
                  </motion.span>
                </h2>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed transition-colors font-medium"
                >
                  Discover how digital workflows improve precision,
                  efficiency, and patient satisfaction in modern implant dentistry.
                </motion.p>
              </div>
            </div>

            {/* Video */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative rounded-[2.5rem] overflow-hidden w-full h-[350px] md:h-[400px] border border-gray-100 dark:border-gray-800 shadow-xl bg-[#0a0a0a]"
            >
              <video 
                src="https://cdn-cf-east.streamable.com/video/mp4/d8v8m7.mp4?Expires=1778096955461&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=JmNVzD4p45lGtyWb2t4eW7W3B5r-Zdb9LlKlhlE344G44cojlTfaSQqnDHPDbSIPqlAKcR7RPyRyW2KN08I7JXemxSiF2cpiJ3CrHU4tixf-PBhwlbTzQJ8XLKC9bQSz5qZPvb7W4yfZg3t8sM1KSNdP~lDHIi1UElXKRUfJUoMUDPVtyzOUPEr5i42c6Ivjm5-gBxmuP89vfSpi2rs-cJ16kVe2SP-ReC8rmMAAm4dHcA~~ma5o3m166Tb2zQkNhLelq33sFHR9bozdsaBjZ5tD6HosVQZdBhMlwXM1ORzLMgZMIKlNNffPdlvvu5SpV0BDirgKboIHMq-XIipFBw__" 
                className="absolute inset-0 w-full h-full object-cover opacity-90"
                autoPlay loop muted playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 z-10 flex flex-col justify-end h-full">
                <div className="flex flex-col justify-end gap-3 w-full mt-auto">
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg text-white text-[10px] font-bold mb-3 uppercase tracking-wider border border-white/20">Tutorial</span>
                    <h3 className="text-white text-2xl md:text-3xl font-display font-bold mb-2 tracking-tight leading-tight">See how it works</h3>
                    <p className="text-gray-300 max-w-sm text-sm leading-relaxed">Jump right in — get an overview of the basics and see a full implant procedure from start to finish.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column (Scrollable Cards) */}
          <div className="w-full lg:w-[50%] flex flex-col gap-6 lg:py-[15vh]">
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="rounded-[2.5rem] bg-gray-50 dark:bg-[#121212] border border-gray-100 dark:border-gray-800 p-8 md:p-12 flex flex-col group hover:border-[#188DBA]/30 transition-all hover:shadow-sm hover:translate-y-[-4px]"
            >
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#1a1a1a] hover:shadow-sm text-[#188DBA] flex items-center justify-center text-xl font-bold font-display group-hover:bg-[#188DBA] group-hover:text-white transition-colors border border-gray-100 dark:border-gray-800">
                01
              </div>
              <div className="mt-8">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-graphite dark:text-white mb-4 uppercase tracking-tight">
                  SCAN & PLAN
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-medium transition-colors">
                  Capture accurate CBCT and intraoral scans to prepare your implant case with clinical precision.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="rounded-[2.5rem] bg-gray-50 dark:bg-[#121212] border border-gray-100 dark:border-gray-800 p-8 md:p-12 flex flex-col group hover:border-[#188DBA]/30 transition-all hover:shadow-sm hover:translate-y-[-4px]"
            >
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#1a1a1a] hover:shadow-sm text-[#188DBA] flex items-center justify-center text-xl font-bold font-display group-hover:bg-[#188DBA] group-hover:text-white transition-colors border border-gray-100 dark:border-gray-800">
                02
              </div>
              <div className="mt-8">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-graphite dark:text-white mb-4 uppercase tracking-tight">
                  SURGICAL GUIDES
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-medium transition-colors">
                  Custom 3D-printed guides designed for precise, safe, and efficient implant surgery.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="rounded-[2.5rem] bg-gray-50 dark:bg-[#121212] border border-gray-100 dark:border-gray-800 p-8 md:p-12 flex flex-col group hover:border-[#188DBA]/30 transition-all hover:shadow-sm hover:translate-y-[-4px]"
            >
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#1a1a1a] hover:shadow-sm text-[#188DBA] flex items-center justify-center text-xl font-bold font-display group-hover:bg-[#188DBA] group-hover:text-white transition-colors border border-gray-100 dark:border-gray-800">
                03
              </div>
              <div className="mt-8">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-graphite dark:text-white mb-4 uppercase tracking-tight">
                  PROSTHETICS
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-medium transition-colors">
                  Efficient delivery of prosthetics for predictable, aesthetically pleasing patient outcomes. From single crowns to full arches.
                </p>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="rounded-[2.5rem] bg-[#188DBA] p-8 md:p-12 flex flex-col group hover:bg-[#167a9f] transition-all hover:shadow-xl hover:translate-y-[-4px] cursor-pointer relative overflow-hidden h-full"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-white text-[#188DBA] flex items-center justify-center font-bold group-hover:scale-105 transition-transform shadow-md">
                <ArrowRight className="w-6 h-6" />
              </div>
              <div className="relative z-10 mt-8 flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 uppercase tracking-tight">
                    READY TO BEGIN?
                  </h3>
                  <p className="text-blue-100 text-lg leading-relaxed font-medium transition-colors">
                    Start your first case today and experience the difference in precision and quality.
                  </p>
                </div>
                <button className="bg-white text-[#188DBA] font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 group-hover:scale-[1.02] transition-transform self-start shadow-sm mt-2">
                  Start a Case <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
