import { Question, JLPTLevel, QuestionType } from "@/types";

/** Fisher-Yates shuffle — returns a new array */
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Randomly selects 20 questions per test:
 *  • 5 vocabulary  (random from pool)
 *  • 5 grammar     (random from pool)
 *  • 5 reading     (all questions from 1 randomly chosen passage)
 *  • 5 listening   (random from pool)
 *
 * Questions are ordered: vocab → grammar → reading → listening
 */
export function selectTestQuestions(bank: Question[], level: JLPTLevel): Question[] {
  const pool = bank.filter((q) => q.level === level);

  const pick = (type: QuestionType, count: number) =>
    shuffle(pool.filter((q) => q.type === type)).slice(0, count);

  // Vocabulary
  const vocab = pick("vocabulary", 5);

  // Grammar
  const grammar = pick("grammar", 5);

  // Reading — pick one passage at random, take up to 5 of its questions
  const readingAll = pool.filter((q) => q.type === "reading");
  const passageIds = [...new Set(readingAll.map((q) => q.passageId).filter(Boolean) as string[])];
  const chosenPassage = shuffle(passageIds)[0];
  const reading = readingAll.filter((q) => q.passageId === chosenPassage).slice(0, 5);

  // Listening
  const listening = pick("listening", 5);

  return [...vocab, ...grammar, ...reading, ...listening];
}
