"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TestResult, JLPTLevel, QuestionType } from "@/types";

const LEVEL_COLORS: Record<JLPTLevel, string> = {
  N5: "text-rose-400",
  N4: "text-orange-400",
  N3: "text-yellow-400",
  N2: "text-emerald-400",
  N1: "text-blue-400",
};

const LEVEL_BG: Record<JLPTLevel, string> = {
  N5: "bg-rose-500",
  N4: "bg-orange-500",
  N3: "bg-yellow-500",
  N2: "bg-emerald-500",
  N1: "bg-blue-500",
};

const LEVEL_BADGE: Record<JLPTLevel, string> = {
  N5: "bg-rose-500/30 border-rose-500/50",
  N4: "bg-orange-500/30 border-orange-500/50",
  N3: "bg-yellow-500/30 border-yellow-500/50",
  N2: "bg-emerald-500/30 border-emerald-500/50",
  N1: "bg-blue-500/30 border-blue-500/50",
};

const TYPE_LABELS: Record<QuestionType, string> = {
  vocabulary: "Vocabulary",
  grammar: "Grammar",
  reading: "Reading",
  listening: "Listening",
};

function getVerdict(pct: number, level: JLPTLevel): { label: string; detail: string } {
  if (pct >= 80) {
    const next = { N5: "N4", N4: "N3", N3: "N2", N2: "N1", N1: "N1" }[level];
    return {
      label: level === "N1" ? "Excellent!" : `Ready for ${next}`,
      detail:
        level === "N1"
          ? "Outstanding performance! You have near-native mastery."
          : `You've demonstrated strong ${level} ability. Consider challenging the next level.`,
    };
  }
  if (pct >= 60) {
    return {
      label: `Solid ${level} Level`,
      detail: `Good performance. With a little more practice you should be ready to pass ${level}.`,
    };
  }
  if (pct >= 40) {
    return {
      label: `Developing ${level}`,
      detail: `You have some ${level} knowledge but need more study in the weaker areas below.`,
    };
  }
  const prev = { N5: "N5", N4: "N5", N3: "N4", N2: "N3", N1: "N2" }[level];
  return {
    label: level === "N5" ? "Keep Studying!" : `Focus on ${prev} First`,
    detail:
      level === "N5"
        ? "Keep practicing the basics. Review hiragana, katakana, and basic vocabulary."
        : `Consider strengthening your ${prev} foundation before tackling ${level}.`,
  };
}

function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}m ${sec}s`;
}

export default function ResultsPage() {
  const router = useRouter();
  const [result, setResult] = useState<TestResult | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("jlpt-result");
    if (!raw) {
      router.replace("/");
      return;
    }
    setResult(JSON.parse(raw));
  }, [router]);

  if (!result) return null;

  const pct = Math.round((result.correctAnswers / result.totalQuestions) * 100);
  const verdict = getVerdict(pct, result.level);
  const colorClass = LEVEL_COLORS[result.level];
  const bgClass = LEVEL_BG[result.level];
  const badgeClass = LEVEL_BADGE[result.level];

  const types: QuestionType[] = ["vocabulary", "grammar", "reading", "listening"];

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <div className="max-w-xl mx-auto space-y-6">
        {/* Header card */}
        <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
          <span className={`text-6xl font-black ${colorClass}`}>{result.level}</span>
          <div className="mt-4 text-5xl font-bold text-white">{pct}%</div>
          <div className="text-gray-400 mt-1 text-sm">
            {result.correctAnswers} / {result.totalQuestions} correct
          </div>
          <div className={`mt-6 inline-block px-4 py-2 rounded-full text-sm font-semibold text-white border ${badgeClass}`}>
            {verdict.label}
          </div>
          <p className="text-gray-400 text-sm mt-4 max-w-sm mx-auto">{verdict.detail}</p>
          <div className="mt-4 text-xs text-gray-600">Time: {formatTime(result.timeTakenSeconds)}</div>
        </div>

        {/* Score bar */}
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
          <div className="h-3 rounded-full bg-white/10 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${bgClass}`}
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>0%</span>
            <span className="text-yellow-600">60% pass</span>
            <span>100%</span>
          </div>
        </div>

        {/* By type */}
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-widest">
            Breakdown by Skill
          </h2>
          <div className="space-y-4">
            {types.map((t) => {
              const d = result.byType[t];
              if (d.total === 0) return null;
              const typePct = Math.round((d.correct / d.total) * 100);
              return (
                <div key={t}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">{TYPE_LABELS[t]}</span>
                    <span className="text-gray-400">
                      {d.correct}/{d.total} — {typePct}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        typePct >= 80
                          ? "bg-emerald-500"
                          : typePct >= 60
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                      style={{ width: `${typePct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Link
            href={`/test/${result.level}`}
            className="flex-1 py-3 text-center rounded-xl border border-white/20 text-sm font-medium text-gray-300 hover:bg-white/5 transition-all"
            onClick={() => sessionStorage.removeItem("jlpt-result")}
          >
            Retake Test
          </Link>
          <Link
            href="/"
            className="flex-1 py-3 text-center rounded-xl bg-white text-gray-900 text-sm font-semibold hover:bg-gray-100 transition-all"
          >
            Choose Another Level
          </Link>
        </div>
      </div>
    </div>
  );
}
