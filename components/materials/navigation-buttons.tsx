"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationButtonsProps {
  canGoPrevious: boolean
  canGoNext: boolean
  isLastSubsection: boolean
  onPrevious: () => void
  onNext: () => void
  onNextModule: () => void
}

export function NavigationButtons({
  canGoPrevious,
  canGoNext,
  isLastSubsection,
  onPrevious,
  onNext,
  onNextModule,
}: NavigationButtonsProps) {
  const handleNext = () => {
    if (isLastSubsection) {
      onNextModule()
    } else {
      onNext()
    }
  }

  return (
    <div className="flex justify-between">
      <Button variant="outline" className="flex items-center gap-2" onClick={onPrevious} disabled={!canGoPrevious}>
        <ChevronLeft className="w-4 h-4" />
        Previous
      </Button>
      <Button
        className="flex items-center gap-2 bg-black hover:bg-gray-800"
        onClick={handleNext}
        disabled={!canGoNext && !isLastSubsection}
      >
        {isLastSubsection ? "Next Module" : "Next"}
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  )
}
