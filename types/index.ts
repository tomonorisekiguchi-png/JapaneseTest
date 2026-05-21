export type JLPTLevel = "N5" | "N4" | "N3" | "N2" | "N1";
export type QuestionType = "vocabulary" | "grammar" | "reading" | "listening";

export interface Question {
  id: string;
  level: JLPTLevel;
  type: QuestionType;
  /** JLPT-style instruction shown above the question */
  instruction: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  /** Reading passage text */
  passage?: string;
  /** Group key — reading questions sharing a passage have the same passageId */
  passageId?: string;
  /** Text to be read aloud via TTS for listening questions */
  audioText?: string;
}

export interface TestResult {
  level: JLPTLevel;
  totalQuestions: number;
  correctAnswers: number;
  byType: Record<QuestionType, { correct: number; total: number }>;
  answers: { questionId: string; selectedIndex: number; correct: boolean }[];
  timeTakenSeconds: number;
}

export interface LevelInfo {
  level: JLPTLevel;
  description: string;
  vocabulary: string;
  kanji: string;
  color: string;
  bgColor: string;
  borderColor: string;
  examTime: string;
}
