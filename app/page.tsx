import Link from "next/link";
import { LevelInfo } from "@/types";

const levels: LevelInfo[] = [
  {
    level: "N5",
    description: "Beginner — can understand basic Japanese in everyday situations",
    vocabulary: "~800 words",
    kanji: "~100 kanji",
    color: "text-rose-400",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/40",
    examTime: "~25 min",
  },
  {
    level: "N4",
    description: "Elementary — can understand basic Japanese used in familiar situations",
    vocabulary: "~1,500 words",
    kanji: "~300 kanji",
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/40",
    examTime: "~30 min",
  },
  {
    level: "N3",
    description: "Intermediate — can understand Japanese in everyday situations to some degree",
    vocabulary: "~3,750 words",
    kanji: "~650 kanji",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/40",
    examTime: "~35 min",
  },
  {
    level: "N2",
    description: "Upper-intermediate — can understand Japanese in a wide range of situations",
    vocabulary: "~6,000 words",
    kanji: "~1,000 kanji",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/40",
    examTime: "~40 min",
  },
  {
    level: "N1",
    description: "Advanced — can understand Japanese in a wide variety of situations",
    vocabulary: "~10,000+ words",
    kanji: "~2,000 kanji",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/40",
    examTime: "~45 min",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-white/10 text-gray-300 border border-white/10">
            JLPT Practice Test
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Test Your Japanese
          </h1>
          <p className="text-xl text-gray-400 mb-2">日本語能力テスト</p>
          <p className="text-gray-500 max-w-xl mx-auto mt-4">
            Choose a level below to take a practice test covering vocabulary, grammar, reading, and
            listening. Find out where you stand on the JLPT scale.
          </p>
        </div>
      </section>

      {/* Level cards */}
      <section className="flex-1 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-gray-500 mb-10">
            Select Your Level
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {levels.map((l) => (
              <Link
                key={l.level}
                href={`/test/${l.level}`}
                className={`group relative flex flex-col p-6 rounded-2xl border ${l.bgColor} ${l.borderColor} hover:scale-[1.02] transition-all duration-200 hover:shadow-lg hover:shadow-black/40`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-4xl font-black ${l.color}`}>{l.level}</span>
                  <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full">
                    {l.examTime}
                  </span>
                </div>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">{l.description}</p>
                <div className="mt-auto pt-4 border-t border-white/10 flex gap-4 text-xs text-gray-500">
                  <span>{l.vocabulary}</span>
                  <span>{l.kanji}</span>
                </div>
                <div
                  className={`absolute bottom-4 right-4 text-xs font-medium ${l.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                >
                  Start Test →
                </div>
              </Link>
            ))}
          </div>

          {/* Info */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center text-sm text-gray-500">
            <div className="p-4 rounded-xl bg-white/5">
              <div className="text-2xl mb-1">20</div>
              <div>Questions per level</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5">
              <div className="text-2xl mb-1">4</div>
              <div>Skill areas tested</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5">
              <div className="text-2xl mb-1">Free</div>
              <div>No registration needed</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-xs text-gray-600 border-t border-white/5">
        JLPT Practice Test — Not affiliated with JLCT or the Japan Foundation
      </footer>
    </main>
  );
}
