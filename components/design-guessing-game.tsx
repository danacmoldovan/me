"use client"

import { useState } from "react"
import { BentoCard } from "./bento-card"
import { cn } from "@/lib/utils"
import { CheckCircle2, XCircle } from "lucide-react"

interface DesignQuestion {
  id: number
  question: string
  optionA: {
    label: string
    description: string
  }
  optionB: {
    label: string
    description: string
  }
  correctAnswer: "A" | "B"
  explanation: string
}

const designQuestions: DesignQuestion[] = [
  {
    id: 1,
    question: "Which approach works better for an empty state?",
    optionA: {
      label: "Decorative",
      description: "Illustration-heavy with minimal text and a generic 'Get started' button",
    },
    optionB: {
      label: "Educational",
      description: "Context-first explaining why it's empty and specific next action",
    },
    correctAnswer: "B",
    explanation: "Empty states are opportunities to guide users. Educational approaches reduce confusion by explaining context before asking for action. Users need to understand 'why' before they commit to 'what'.",
  },
  {
    id: 2,
    question: "For a complex data table, which filtering pattern is better?",
    optionA: {
      label: "Inline filters",
      description: "Filters directly above the table, always visible and immediately applicable",
    },
    optionB: {
      label: "Side panel",
      description: "Collapsible filter panel on the side with 'Apply' button",
    },
    correctAnswer: "A",
    explanation: "For frequently used filters, inline placement reduces cognitive load and interaction cost. Side panels work for occasional, complex filtering but add friction for everyday use. Context matters—this is about matching interaction frequency to UI prominence.",
  },
  {
    id: 3,
    question: "When showing AI-generated content, which approach builds more trust?",
    optionA: {
      label: "Confident",
      description: "Present AI output as final, polished content ready to use",
    },
    optionB: {
      label: "Transparent",
      description: "Show confidence levels, sources, and easy edit affordances",
    },
    correctAnswer: "B",
    explanation: "AI trust is built through transparency, not false confidence. Users who understand limitations become collaborators. Hiding uncertainty leads to frustration when AI makes mistakes—and it will.",
  },
]

export function DesignGuessingGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<"A" | "B" | null>(null)
  const [score, setScore] = useState(0)

  const question = designQuestions[currentQuestion]
  const isCorrect = selectedAnswer === question.correctAnswer
  const hasAnswered = selectedAnswer !== null

  const handleSelect = (answer: "A" | "B") => {
    if (hasAnswered) return
    setSelectedAnswer(answer)
    if (answer === question.correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < designQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
  }

  const isLastQuestion = currentQuestion === designQuestions.length - 1

  return (
    <BentoCard className="p-0 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Question + Options (takes 2 columns) */}
        <div className="lg:col-span-2 p-6 lg:p-8">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Design Judgment
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              {currentQuestion + 1} / {designQuestions.length} · Score: {score}
            </span>
          </div>

          {/* Question */}
          <h3 className="mb-8 text-xl font-medium text-foreground lg:text-2xl">
            {question.question}
          </h3>

          {/* Options */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Option A */}
            <button
              onClick={() => handleSelect("A")}
              disabled={hasAnswered}
              className={cn(
                "group relative rounded-xl border-2 p-5 text-left transition-all",
                hasAnswered && selectedAnswer === "A" && isCorrect && "border-accent bg-accent/5",
                hasAnswered && selectedAnswer === "A" && !isCorrect && "border-destructive bg-destructive/5",
                hasAnswered && question.correctAnswer === "A" && selectedAnswer !== "A" && "border-accent/50",
                !hasAnswered && "border-border hover:border-foreground/30 cursor-pointer",
                hasAnswered && "cursor-default"
              )}
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted font-mono text-xs">
                  A
                </span>
                <span className="font-medium text-foreground">{question.optionA.label}</span>
              </div>
              <p className="text-sm text-muted-foreground">{question.optionA.description}</p>
              
              {hasAnswered && selectedAnswer === "A" && (
                <div className="absolute -top-2 -right-2">
                  {isCorrect ? (
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  ) : (
                    <XCircle className="h-5 w-5 text-destructive" />
                  )}
                </div>
              )}
            </button>

            {/* Option B */}
            <button
              onClick={() => handleSelect("B")}
              disabled={hasAnswered}
              className={cn(
                "group relative rounded-xl border-2 p-5 text-left transition-all",
                hasAnswered && selectedAnswer === "B" && isCorrect && "border-accent bg-accent/5",
                hasAnswered && selectedAnswer === "B" && !isCorrect && "border-destructive bg-destructive/5",
                hasAnswered && question.correctAnswer === "B" && selectedAnswer !== "B" && "border-accent/50",
                !hasAnswered && "border-border hover:border-foreground/30 cursor-pointer",
                hasAnswered && "cursor-default"
              )}
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted font-mono text-xs">
                  B
                </span>
                <span className="font-medium text-foreground">{question.optionB.label}</span>
              </div>
              <p className="text-sm text-muted-foreground">{question.optionB.description}</p>
              
              {hasAnswered && selectedAnswer === "B" && (
                <div className="absolute -top-2 -right-2">
                  {isCorrect ? (
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  ) : (
                    <XCircle className="h-5 w-5 text-destructive" />
                  )}
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Explanation Panel (3rd column) */}
        <div className={cn(
          "flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border bg-muted/30 p-6 lg:p-8 transition-opacity",
          hasAnswered ? "opacity-100" : "opacity-50"
        )}>
          {hasAnswered ? (
            <>
              <div>
                <div className="mb-4 flex items-center gap-2">
                  {isCorrect ? (
                    <>
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span className="font-mono text-sm text-accent">Correct!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-5 w-5 text-destructive" />
                      <span className="font-mono text-sm text-destructive">Not quite</span>
                    </>
                  )}
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  {question.explanation}
                </p>
              </div>

              <div className="mt-6">
                {isLastQuestion ? (
                  <button
                    onClick={handleReset}
                    className="w-full rounded-full bg-primary px-4 py-2 font-mono text-sm text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Play again ({score}/{designQuestions.length})
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="w-full rounded-full bg-primary px-4 py-2 font-mono text-sm text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Next question
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="flex h-full items-center justify-center">
              <p className="text-center font-mono text-sm text-muted-foreground">
                Select an option to reveal the answer
              </p>
            </div>
          )}
        </div>
      </div>
    </BentoCard>
  )
}
