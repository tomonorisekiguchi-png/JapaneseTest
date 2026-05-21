"use client";

import { use, useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { questions as allQuestions } from "@/data/questions";
import { JLPTLevel, Question, TestResult, QuestionType } from "@/types";
import ListeningPlayer from "@/components/ListeningPlayer";

const LEVEL_COLORS: Record<JLPTLevel, string> = {
  N5: "text-rose-400",
  N4: "text-orange-400",
  N3: "text-yellow-400",
  N2: "text-emerald-400",
  N1: "text-blue-400",
};

const TYPE_LABELS: Record<QuestionType, string> = {
  vocabulary: "Vocabulary",
  grammar: "Grammar",
  reading: "Reading",
  listening: "Listening",
};

const TYPE_ICONS: Record<QuestionType, string> = {
  vocabulary: "V",
  grammar: "G",
  reading: "R",
  listening: "L",
};

export default function TestPage({ params }: { params: Promise<{ level: string }> }) {
  const { level } = use(params);
  const router = useRouter();
  const jlptLevel = level as JLPTLevel;

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<{ questionId: string; selectedIndex: number; correct: boolean }[]>([]);
  const [confirmed, setConfirmed] = useState(false);
  const [startTime] = useState(() => Date.now());
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const valid: JLPTLevel[] = ["N5", "N4", "N3", "N2", "N1"];
    if (!valid.includes(jlptLevel)) {
      router.replace("/");
      return;
    }
    const levelQuestions = allQuestions.filter((q) => q.level === jlptLevel);
    setQuestions(levelQuestions);
  }, [jlptLevel, router]);

  useEffect(() => {
    const id = setInterval(() => setElapsed(Math.floor((Date.now() - startTime) / 1000)), 1000);
    return () => clearInterval(id);
  }, [startTime]);

  const currentQuestion = questions[currentIdx];
  const isLast = currentIdx === questions.length - 1;

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const handleConfirm = useCallback(() => {
    if (selectedAnswer === null) return;
    setConfirmed(true);
    setAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        selectedIndex: selectedAnswer,
        correct: selectedAnswer === currentQuestion.correctIndex,
      },
    ]);
  }, [selectedAnswer, currentQuestion]);

  const handleNext = useCallback(() => {
    if (!confirmed) return;

    if (isLast) {
      const finalAnswers = [
        ...answers,
      ];
      const byType: Record<QuestionType, { correct: number; total: number }> = {
        vocabulary: { correct: 0, total: 0 },
        grammar: { correct: 0, total: 0 },
        reading: { correct: 0, total: 0 },
        listening: { correct: 0, total: 0 },
      };
      for (const q of questions) {
        const a = finalAnswers.find((ans) => ans.questionId === q.id);
        if (a) {
          byType[q.type].total++;
          if (a.correct) byType[q.type].correct++;
        }
      }
      const result: TestResult = {
        level: jlptLevel,
        totalQuestions: questions.length,
        correctAnswers: finalAnswers.filter((a) => a.correct).length,
        byType,
        answers: finalAnswers,
        timeTakenSeconds: elapsed,
      };
      sessionStorage.setItem("jlpt-result", JSON.stringify(result));
      router.push("/results");
    } else {
      setCurrentIdx((i) => i + 1);
      setSelectedAnswer(null);
      setConfirmed(false);
    }
  }, [confirmed, isLast, answers, questions, jlptLevel, elapsed, router]);

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">Loading…</div>
    );
  }

  const progress = ((currentIdx + (confirmed ? 1 : 0)) / questions.length) * 100;
  const colorClass = LEVEL_COLORS[jlptLevel];

  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-gray-950/90 backdrop-blur border-b border-white/10 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className={`text-xl font-black ${colorClass}`}>{jlptLevel}</span>
            <span className="text-xs text-gray-500">
              {currentIdx + 1} / {questions.length}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500 font-mono">{formatTime(elapsed)}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-400">
              {TYPE_ICONS[currentQuestion.type]} {TYPE_LABELS[currentQuestion.type]}
            </span>
          </div>
        </div>
        {/* Progress bar */}
        <div className="max-w-2xl mx-auto mt-2">
          <div className="h-1 rounded-full bg-white/10 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                jlptLevel === "N5" ? "bg-rose-500" :
                jlptLevel === "N4" ? "bg-orange-500" :
                jlptLevel === "N3" ? "bg-yellow-500" :
                jlptLevel === "N2" ? "bg-emerald-500" : "bg-blue-500"
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </header>

      {/* Question */}
      <main className="flex-1 py-10 px-4">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Passage */}
          {currentQuestion.passage && (
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Reading passage</p>
              <p className="text-gray-200 leading-relaxed">{currentQuestion.passage}</p>
            </div>
          )}

          {/* Listening player */}
          {currentQuestion.type === "listening" && currentQuestion.audioText && (
            <ListeningPlayer text={currentQuestion.audioText} />
          )}

          {/* Question text */}
          <div>
            <p className="text-lg font-medium text-white leading-relaxed">
              {currentQuestion.question}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => {
              let style =
                "w-full text-left px-5 py-4 rounded-xl border text-sm transition-all duration-150 ";
              if (!confirmed) {
                style +=
                  selectedAnswer === idx
                    ? "bg-white/10 border-white/40 text-white"
                    : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20";
              } else {
                if (idx === currentQuestion.correctIndex) {
                  style += "bg-emerald-500/20 border-emerald-500/60 text-emerald-300";
                } else if (idx === selectedAnswer && idx !== currentQuestion.correctIndex) {
                  style += "bg-red-500/20 border-red-500/60 text-red-300";
                } else {
                  style += "bg-white/5 border-white/10 text-gray-500";
                }
              }
              return (
                <button
                  key={idx}
                  onClick={() => !confirmed && setSelectedAnswer(idx)}
                  className={style}
                  disabled={confirmed}
                >
                  <span className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs font-bold">
                      {String.fromCharCode(65 + idx)}
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
              <span className="text-gray-300 font-medium">Explanation: </span>
              {currentQuestion.explanation}
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            {!confirmed ? (
              <button
                onClick={handleConfirm}
                disabled={selectedAnswer === null}
                className="flex-1 py-3 rounded-xl font-semibold text-sm transition-all bg-white text-gray-900 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Confirm Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-all text-white ${
                  jlptLevel === "N5" ? "bg-rose-600 hover:bg-rose-500" :
                  jlptLevel === "N4" ? "bg-orange-600 hover:bg-orange-500" :
                  jlptLevel === "N3" ? "bg-yellow-600 hover:bg-yellow-500" :
                  jlptLevel === "N2" ? "bg-emerald-600 hover:bg-emerald-500" :
                  "bg-blue-600 hover:bg-blue-500"
                }`}
              >
                {isLast ? "View Results" : "Next Question →"}
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
