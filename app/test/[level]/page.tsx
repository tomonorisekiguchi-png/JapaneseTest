"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { questions as allQuestions } from "@/data/questions";
import { selectTestQuestions } from "@/lib/testUtils";
import { JLPTLevel, Question, TestResult, QuestionType } from "@/types";
import ListeningPlayer from "@/components/ListeningPlayer";

const LEVEL_COLORS: Record<JLPTLevel, string> = {
  N5: "text-rose-400", N4: "text-orange-400", N3: "text-yellow-400",
  N2: "text-emerald-400", N1: "text-blue-400",
};
const LEVEL_BAR: Record<JLPTLevel, string> = {
  N5: "bg-rose-500", N4: "bg-orange-500", N3: "bg-yellow-500",
  N2: "bg-emerald-500", N1: "bg-blue-500",
};
const LEVEL_BTN: Record<JLPTLevel, string> = {
  N5: "bg-rose-600 hover:bg-rose-500", N4: "bg-orange-600 hover:bg-orange-500",
  N3: "bg-yellow-600 hover:bg-yellow-500", N2: "bg-emerald-600 hover:bg-emerald-500",
  N1: "bg-blue-600 hover:bg-blue-500",
};

const SECTION_LABELS: Record<QuestionType, { ja: string; en: string; icon: string }> = {
  vocabulary: { ja: "言語知識（文字・語彙）", en: "Vocabulary", icon: "V" },
  grammar:    { ja: "言語知識（文法）",       en: "Grammar",    icon: "G" },
  reading:    { ja: "読解",                   en: "Reading",    icon: "R" },
  listening:  { ja: "聴解",                   en: "Listening",  icon: "L" },
};

export default function TestPage({ params }: { params: { level: string } }) {
  const { level } = params;
  const router = useRouter();
  const jlptLevel = level as JLPTLevel;

  const [questions, setQuestions]       = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx]     = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers]           = useState<{ questionId: string; selectedIndex: number; correct: boolean }[]>([]);
  const [confirmed, setConfirmed]       = useState(false);
  const [startTime]                     = useState(() => Date.now());
  const [elapsed, setElapsed]           = useState(0);

  useEffect(() => {
    const valid: JLPTLevel[] = ["N5", "N4", "N3", "N2", "N1"];
    if (!valid.includes(jlptLevel)) { router.replace("/"); return; }
    setQuestions(selectTestQuestions(allQuestions, jlptLevel));
  }, [jlptLevel, router]);

  useEffect(() => {
    const id = setInterval(() => setElapsed(Math.floor((Date.now() - startTime) / 1000)), 1000);
    return () => clearInterval(id);
  }, [startTime]);

  const q = questions[currentIdx];
  const isLast = currentIdx === questions.length - 1;
  const prevQ  = currentIdx > 0 ? questions[currentIdx - 1] : null;
  const sectionChanged = !prevQ || prevQ.type !== q?.type;

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  const handleConfirm = useCallback(() => {
    if (selectedAnswer === null || !q) return;
    setConfirmed(true);
    setAnswers(prev => [...prev, {
      questionId: q.id,
      selectedIndex: selectedAnswer,
      correct: selectedAnswer === q.correctIndex,
    }]);
  }, [selectedAnswer, q]);

  const handleNext = useCallback(() => {
    if (!confirmed) return;
    if (isLast) {
      const finalAnswers = answers;
      const byType: Record<QuestionType, { correct: number; total: number }> = {
        vocabulary: { correct: 0, total: 0 }, grammar: { correct: 0, total: 0 },
        reading:    { correct: 0, total: 0 }, listening: { correct: 0, total: 0 },
      };
      for (const question of questions) {
        const a = finalAnswers.find(x => x.questionId === question.id);
        if (a) { byType[question.type].total++; if (a.correct) byType[question.type].correct++; }
      }
      const result: TestResult = {
        level: jlptLevel,
        totalQuestions: questions.length,
        correctAnswers: finalAnswers.filter(a => a.correct).length,
        byType, answers: finalAnswers,
        timeTakenSeconds: elapsed,
      };
      sessionStorage.setItem("jlpt-result", JSON.stringify(result));
      router.push("/results");
    } else {
      setCurrentIdx(i => i + 1);
      setSelectedAnswer(null);
      setConfirmed(false);
    }
  }, [confirmed, isLast, answers, questions, jlptLevel, elapsed, router]);

  if (!q) return (
    <div className="min-h-screen flex items-center justify-center text-gray-400">Loading…</div>
  );

  const color  = LEVEL_COLORS[jlptLevel];
  const bar    = LEVEL_BAR[jlptLevel];
  const btn    = LEVEL_BTN[jlptLevel];
  const progress = ((currentIdx + (confirmed ? 1 : 0)) / questions.length) * 100;
  const section  = SECTION_LABELS[q.type];

  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      {/* ── Header ── */}
      <header className="sticky top-0 z-10 bg-gray-950/90 backdrop-blur border-b border-white/10 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className={`text-xl font-black ${color}`}>{jlptLevel}</span>
            <span className="text-xs text-gray-500">{currentIdx + 1} / {questions.length}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-gray-500">{formatTime(elapsed)}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-400">
              {section.icon} {section.en}
            </span>
          </div>
        </div>
        <div className="max-w-2xl mx-auto mt-2">
          <div className="h-1 rounded-full bg-white/10 overflow-hidden">
            <div className={`h-full rounded-full transition-all duration-500 ${bar}`}
              style={{ width: `${progress}%` }} />
          </div>
        </div>
      </header>

      {/* ── Body ── */}
      <main className="flex-1 py-10 px-4">
        <div className="max-w-2xl mx-auto space-y-5">

          {/* Section banner — shown when section changes */}
          {sectionChanged && (
            <div className="flex items-center gap-3 py-3 border-b border-white/10">
              <span className={`text-2xl font-black ${color}`}>{section.icon}</span>
              <div>
                <div className={`text-sm font-bold ${color}`}>{section.en}</div>
                <div className="text-xs text-gray-500">{section.ja}</div>
              </div>
            </div>
          )}

          {/* JLPT instruction */}
          <div className="text-xs text-gray-500 bg-white/5 rounded-lg px-4 py-2 border border-white/10 leading-relaxed">
            {q.instruction}
          </div>

          {/* Passage (reading) */}
          {q.passage && (
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">文章 / Passage</p>
              <p className="text-gray-200 leading-loose text-sm">{q.passage}</p>
            </div>
          )}

          {/* Listening player */}
          {q.type === "listening" && q.audioText && (
            <ListeningPlayer text={q.audioText} />
          )}

          {/* Question */}
          <p className="text-base font-medium text-white leading-relaxed">{q.question}</p>

          {/* Options */}
          <div className="space-y-3">
            {q.options.map((option, idx) => {
              let cls = "w-full text-left px-5 py-4 rounded-xl border text-sm transition-all duration-150 ";
              if (!confirmed) {
                cls += selectedAnswer === idx
                  ? "bg-white/10 border-white/40 text-white"
                  : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20";
              } else {
                if (idx === q.correctIndex)                             cls += "bg-emerald-500/20 border-emerald-500/60 text-emerald-300";
                else if (idx === selectedAnswer)                        cls += "bg-red-500/20 border-red-500/60 text-red-300";
                else                                                    cls += "bg-white/5 border-white/10 text-gray-500";
              }
              return (
                <button key={idx} onClick={() => !confirmed && setSelectedAnswer(idx)}
                  className={cls} disabled={confirmed}>
                  <span className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs font-bold">
                      {idx + 1}
                    </span>
                    <span>{option}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {confirmed && (
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-gray-400">
              <span className="text-gray-300 font-medium">解説 / Explanation: </span>
              {q.explanation}
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            {!confirmed ? (
              <button onClick={handleConfirm} disabled={selectedAnswer === null}
                className="flex-1 py-3 rounded-xl font-semibold text-sm bg-white text-gray-900 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all">
                回答を確定 / Confirm Answer
              </button>
            ) : (
              <button onClick={handleNext}
                className={`flex-1 py-3 rounded-xl font-semibold text-sm text-white transition-all ${btn}`}>
                {isLast ? "結果を見る / View Results" : "次の問題 / Next →"}
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
