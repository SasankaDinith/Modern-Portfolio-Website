import {
  ArrowRight,
  CalendarDays,
  Clock3,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import type { BlogArticle } from "./blogs.types";

interface BlogCardProps {
  article: BlogArticle;
  index: number;
}

export function BlogCard({
  article,
  index,
}: BlogCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 30,
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -7,
              scale: 1.012,
            }
      }
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-slate-300
        bg-white
        shadow-[0_12px_35px_rgba(15,23,42,0.06)]
        transition-colors
        duration-500
        hover:border-blue-400

        dark:border-blue-400/30
        dark:bg-slate-950/60
        dark:shadow-[0_20px_70px_rgba(2,6,23,0.5)]
        dark:hover:border-cyan-300/60
      "
    >
      {/* Cover image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-900">
        <motion.img
          src={article.coverImage}
          alt={`${article.title} article cover`}
          width={1200}
          height={675}
          loading="lazy"
          className="h-full w-full object-cover"
          whileHover={
            reduceMotion
              ? undefined
              : {
                  scale: 1.045,
                }
          }
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* Image overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-900/25
            via-transparent
            to-transparent

            dark:from-slate-950/65
          "
          aria-hidden="true"
        />

        {/* Reading time */}
        <span
          className="
            absolute
            right-4
            top-4
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-slate-200
            bg-white/90
            px-3
            py-1.5
            text-xs
            font-medium
            text-slate-800
            shadow-sm
            backdrop-blur-xl

            dark:border-slate-600/70
            dark:bg-slate-950/85
            dark:text-slate-100
          "
        >
          <Clock3 size={14} />
          {article.readingTime}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <CalendarDays
            size={17}
            className="text-blue-600 dark:text-blue-400"
            aria-hidden="true"
          />

          <span>{article.publishedDate}</span>
        </div>

        {/* Title */}
        <h3 className="mt-4 line-clamp-2 text-xl font-bold leading-8 text-slate-950 dark:text-white">
          {article.title}
        </h3>

        {/* Description */}
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
          {article.description}
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border
                border-blue-200
                bg-blue-50
                px-3
                py-1
                text-xs
                font-medium
                text-blue-700

                dark:border-cyan-400/25
                dark:bg-cyan-400/10
                dark:text-cyan-300
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read Article */}
        <div className="mt-auto pt-7">
          <a
            href={article.articleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              cursor-pointer
              items-center
              gap-2
              text-sm
              font-semibold
              text-blue-600
              transition-all
              duration-300

              hover:gap-3
              hover:text-cyan-600

              dark:text-blue-400
              dark:hover:text-cyan-300
            "
            aria-label={`Read ${article.title} on Medium`}
          >
            Read Article
            <ArrowRight size={17} />
          </a>
        </div>
      </div>

      {/* Bottom hover line */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-10
          bottom-0
          h-px
          scale-x-0
          bg-gradient-to-r
          from-transparent
          via-blue-500
          to-transparent
          transition-transform
          duration-500
          group-hover:scale-x-100

          dark:via-cyan-400
        "
        aria-hidden="true"
      />
    </motion.article>
  );
}