import React from 'react';
import { CheckCircleIcon, CircleIcon } from 'lucide-react'; // Assuming lucide-react is installed
import { cn } from '@/lib/utils'; // Assuming cn utility is available

interface SubSection {
  id: string;
  title: string;
  completed: boolean;
  viewed: boolean;
}

interface SubsectionItemProps {
  subsection: SubSection;
  isActive: boolean;
  onSelect: (subsectionId: string) => void;
}

export function SubsectionItem({ subsection, isActive, onSelect }: SubsectionItemProps) {
  return (
    <button
      className={cn(
        "flex w-full items-center space-x-2 rounded-lg p-2 text-left text-sm",
        isActive ? "bg-green-50 text-green-700" : "bg-white text-gray-600 hover:bg-gray-100", // Adjusted active background to green, default to white
        subsection.viewed && "font-medium",
      )}
      onClick={() => onSelect(subsection.id)}
    >
      {subsection.completed ? (
        <CheckCircleIcon className={cn("h-4 w-4", isActive ? "text-green-500" : "text-gray-400")} /> // Green when active, gray otherwise
      ) : (
        <CircleIcon className="h-4 w-4 text-gray-400" />
      )}
      <span className={cn(isActive && "text-green-700")}> {/* Apply active text color to green */}
        {subsection.title}
      </span>
    </button>
  );
}
