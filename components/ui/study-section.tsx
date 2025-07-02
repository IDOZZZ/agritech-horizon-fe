
interface StudySectionProps {
  number: number
  title: string
  description: string
  categories: {
    id: string
    title: string
  }[]
}

export function StudySection({ number, title, description, categories }: StudySectionProps) {
  return (
    <div className="py-8 border-b border-gray-200 last:border-b-0">
      <h2 className="mb-4 text-xl font-bold text-gray-800">
        {number}. {title}
      </h2>
      <p className="mb-6 text-sm leading-relaxed text-[#000000]">{description}</p>
      <div className="space-y-3">
        {categories.map((category, index) => (
          <div key={category.id} className="flex items-center">
            <span className="text-gray-800 font-medium mr-2 min-w-[2.5rem] border border-gray-300 rounded px-2 py-1 flex items-center justify-center text-center">
              {number}.{index + 1}
            </span>
            <span className="text-sm font-medium text-[#0D0D12]">
              {category.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
