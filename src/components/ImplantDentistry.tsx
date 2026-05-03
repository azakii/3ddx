import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function ImplantDentistry() {
  return (
    <section className="px-4 md:px-8 py-16 md:py-24 w-full bg-white dark:bg-[#0a0a0a] transition-colors duration-300 relative overflow-hidden">
      {/* Colorful background blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#188DBA]/10 via-transparent to-transparent pointer-events-none rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-lighten" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F2701D]/5 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-lighten" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-[1400px] mx-auto relative z-10"
      >
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-display font-bold leading-[1.05] tracking-tight mb-6 text-graphite dark:text-white uppercase transition-colors">
              {"Master the 3DDX".split(" ").map((word, index) => (
                <span key={index}>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
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
                viewport={{ once: false, margin: "-50px" }}
                transition={{ delay: 3 * 0.1, duration: 0.8 }}
                className="text-[#188DBA] relative inline-block"
              >
                Digital Workflow
              </motion.span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed transition-colors max-w-xl">
              Discover how digital workflows improve precision,
              efficiency, and patient satisfaction in modern implant dentistry.
            </p>
          </div>
          <div className="pb-2">
            <button className="bg-graphite dark:bg-white text-white dark:text-graphite py-4 px-8 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2 hover:shadow-xl shadow-graphite/10 dark:shadow-white/5">
              Start a Case <Play className="w-4 h-4 fill-current ml-1" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Large Video Card - Spans 2 cols on lg */}
          <div className="lg:col-span-2 relative rounded-[2.5rem] overflow-hidden aspect-[16/10] lg:aspect-auto h-full min-h-[400px] border border-gray-100 dark:border-gray-800 group hover:shadow-lg bg-[#0a0a0a]">
            <video 
              src="https://cdn-cf-east.streamable.com/video/mp4/d8v8m7.mp4?Expires=1778096955461&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=JmNVzD4p45lGtyWb2t4eW7W3B5r-Zdb9LlKlhlE344G44cojlTfaSQqnDHPDbSIPqlAKcR7RPyRyW2KN08I7JXemxSiF2cpiJ3CrHU4tixf-PBhwlbTzQJ8XLKC9bQSz5qZPvb7W4yfZg3t8sM1KSNdP~lDHIi1UElXKRUfJUoMUDPVtyzOUPEr5i42c6Ivjm5-gBxmuP89vfSpi2rs-cJ16kVe2SP-ReC8rmMAAm4dHcA~~ma5o3m166Tb2zQkNhLelq33sFHR9bozdsaBjZ5tD6HosVQZdBhMlwXM1ORzLMgZMIKlNNffPdlvvu5SpV0BDirgKboIHMq-XIipFBw__" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"
              autoPlay loop muted playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10 flex flex-col justify-end h-full">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 w-full mt-auto">
                <div>
                  <span className="inline-block px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-lg text-white text-xs font-bold mb-5 uppercase tracking-wider border border-white/20">Tutorial</span>
                  <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 tracking-tight leading-tight">See how it works</h3>
                  <p className="text-gray-300 max-w-md text-lg leading-relaxed">Jump right in — get an overview of the basics and see a full implant procedure from start to finish.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:col-span-1">
            {/* Step 1 */}
            <div className="rounded-[2.5rem] bg-gray-50 dark:bg-[#121212] border border-gray-100 dark:border-gray-800 p-8 flex flex-col justify-between group hover:border-[#188DBA]/30 transition-all hover:shadow-sm hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#1a1a1a] hover:shadow-sm text-[#188DBA] flex items-center justify-center text-xl font-bold font-display group-hover:bg-[#188DBA] group-hover:text-white transition-colors border border-gray-100 dark:border-gray-800">
                01
              </div>
              <div className="mt-8">
                <h3 className="text-xl md:text-2xl font-display font-bold text-graphite dark:text-white mb-3 uppercase tracking-tight">
                  SCAN & PLAN
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium transition-colors">
                  Capture accurate CBCT and intraoral scans to prepare your implant case with clinical precision.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-[2.5rem] bg-gray-50 dark:bg-[#121212] border border-gray-100 dark:border-gray-800 p-8 flex flex-col justify-between group hover:border-[#188DBA]/30 transition-all hover:shadow-sm hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#1a1a1a] hover:shadow-sm text-[#188DBA] flex items-center justify-center text-xl font-bold font-display group-hover:bg-[#188DBA] group-hover:text-white transition-colors border border-gray-100 dark:border-gray-800">
                02
              </div>
              <div className="mt-8">
                <h3 className="text-xl md:text-2xl font-display font-bold text-graphite dark:text-white mb-3 uppercase tracking-tight">
                  SURGICAL GUIDES
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium transition-colors">
                  Custom 3D-printed guides designed for precise, safe, and efficient implant surgery.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-[2.5rem] bg-gray-50 dark:bg-[#121212] border border-gray-100 dark:border-gray-800 p-8 flex flex-col justify-between group hover:border-[#188DBA]/30 transition-all hover:shadow-sm hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#1a1a1a] hover:shadow-sm text-[#188DBA] flex items-center justify-center text-xl font-bold font-display group-hover:bg-[#188DBA] group-hover:text-white transition-colors border border-gray-100 dark:border-gray-800">
                03
              </div>
              <div className="mt-8">
                <h3 className="text-xl md:text-2xl font-display font-bold text-graphite dark:text-white mb-3 uppercase tracking-tight">
                  PROSTHETICS
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium transition-colors">
                  Efficient delivery of prosthetics for predictable, aesthetically pleasing patient outcomes. From single crowns to full arches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
