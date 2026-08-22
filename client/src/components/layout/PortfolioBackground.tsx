export function PortfolioBackground() {
  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        -z-50
        overflow-hidden

        bg-[radial-gradient(circle_at_10%_20%,rgba(191,219,254,0.45),transparent_35%),radial-gradient(circle_at_90%_70%,rgba(221,214,254,0.38),transparent_38%),linear-gradient(180deg,#ffffff_0%,#fbfdff_45%,#f8f7ff_100%)]

        transition-colors
        duration-500

        dark:bg-[#020617]
      "
      aria-hidden="true"
    >
      {/* Dark mode blue glow */}
      <div className="absolute -left-[22rem] top-[-10rem] hidden h-[58rem] w-[58rem] rounded-full bg-blue-600/25 blur-[190px] dark:block" />

      {/* Dark mode purple glow */}
      <div className="absolute -right-[24rem] top-[8rem] hidden h-[60rem] w-[60rem] rounded-full bg-purple-600/25 blur-[200px] dark:block" />

      {/* Dark mode bottom glow */}
      <div className="absolute bottom-[-26rem] left-1/2 hidden h-[58rem] w-[80rem] -translate-x-1/2 rounded-full bg-indigo-600/15 blur-[210px] dark:block" />

      {/* Dark mode depth */}
      <div className="absolute inset-0 hidden bg-gradient-to-b from-transparent via-slate-950/10 to-slate-950/45 dark:block" />
    </div>
  );
}