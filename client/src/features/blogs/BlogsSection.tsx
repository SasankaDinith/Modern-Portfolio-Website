import { BookOpen } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { BlogCard } from "./BlogCard";
import { blogArticles } from "./blogs.data";

const MEDIUM_PROFILE_URL =
  "https://medium.com/@sasankad101";

export function BlogsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="blogs"
      className="
        relative
        
        bg-transparent
        pb-8
        pt-10
        text-slate-950
        dark:text-white

        sm:pb-10
        sm:pt-16
      "
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 24,
                }
          }
          whileInView={
            reduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-12 max-w-4xl text-center"
        >
          {/* Badge */}
          <div
            className="
              mx-auto
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-300
              bg-white/75
              px-5
              py-2
              text-sm
              font-medium
              text-slate-800
              shadow-sm
              backdrop-blur-xl

              dark:border-cyan-400/35
              dark:bg-slate-950/60
              dark:text-slate-200
              dark:shadow-[0_0_28px_rgba(34,211,238,0.1)]
            "
          >
            Insights
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            Latest{" "}
            <span className="text-[#168BFF]">
              Blog Posts
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg">
            Thoughts on Cloud, DevOps, infrastructure, artificial
            intelligence, cybersecurity, technical writing, and software
            engineering research.
          </p>
        </motion.div>

        {/* Blog cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogArticles.slice(0, 3).map((article, index) => (
            <BlogCard
              key={article.id}
              article={article}
              index={index}
            />
          ))}
        </div>

        {/* View All Articles */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          whileInView={
            reduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-8 flex justify-center"
        >
          <motion.a
            href={MEDIUM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={
              reduceMotion
                ? undefined
                : {
                    scale: 1.03,
                    y: -3,
                  }
            }
            whileTap={{
              scale: 0.97,
            }}
            className="
              inline-flex
              min-h-[52px]
              cursor-pointer
              items-center
              justify-center
              gap-3
              rounded-xl
              border
              border-blue-500/20
              bg-gradient-to-r
              from-blue-600
              via-indigo-500
              to-purple-600
              px-8
              py-3.5
              font-semibold
              text-white
              shadow-[0_8px_25px_rgba(59,130,246,0.18)]
              transition-all
              duration-300

              hover:shadow-[0_10px_30px_rgba(59,130,246,0.28)]

              dark:border-blue-400/20
              dark:text-white
            "
            aria-label="View all articles on Medium"
          >
            <BookOpen size={20} />

            View All Articles
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}