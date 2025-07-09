interface ProgressBarProps {
  current: number
  total: number
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100)

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <span className="text-sm text-gray-600 ml-3">{percentage}%</span>
      </div>
    </div>
  )
}
