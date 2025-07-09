import Image from "next/image"
import { ProgressBar } from "./progress-bar"
import { NavigationButtons } from "./navigation-buttons"
import React from "react"

interface ContentAreaProps {
  sectionTitle: string
  sectionSubtitle: string
  contentTitle: string
  contentBody: string // Changed type to string
  currentProgress: number
  totalProgress: number
  canGoPrevious: boolean
  canGoNext: boolean
  isLastSubsection: boolean
  onPrevious: () => void
  onNext: () => void
  onNextModule: () => void
}

export function ContentArea({
  sectionTitle,
  sectionSubtitle,
  contentTitle,
  contentBody,
  currentProgress,
  totalProgress,
  canGoPrevious,
  canGoNext,
  isLastSubsection,
  onPrevious,
  onNext,
  onNextModule,
}: ContentAreaProps) {
  return (
    <div className="flex-1 p-8">
      <div className="max-w-4xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{sectionTitle}</h1>
          <p className="text-gray-600">{sectionSubtitle}</p>
        </div>

        {/* Hero Image */}
        <div className="mb-6">
          <Image
            src="/hydroponic-plants.png"
            alt="Hydroponic plants being handled with gloves"
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        <ProgressBar current={currentProgress} total={totalProgress} />

        {/* Dynamic Content */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{contentTitle}</h2>
          <div dangerouslySetInnerHTML={{ __html: contentBody }} /> {/* Render HTML string */}
        </div>

        <NavigationButtons
          canGoPrevious={canGoPrevious}
          canGoNext={canGoNext}
          isLastSubsection={isLastSubsection}
          onPrevious={onPrevious}
          onNext={onNext}
          onNextModule={onNextModule}
        />
      </div>
    </div>
  )
}
