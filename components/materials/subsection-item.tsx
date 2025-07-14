import React from 'react';
import { cn } from '@/lib/utils';

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
  // Menambahkan nomor sub-bagian dari judul
  const subsectionNumber = subsection.title.split(' ')[0];
  const subsectionText = subsection.title.substring(subsectionNumber.length + 1);

  return (
    <button
      className={cn(
        "w-full rounded-lg p-2 text-left text-sm",
        isActive ? "text-green-700" : "text-gray-400 hover:bg-gray-50",
      )}
      onClick={() => onSelect(subsection.id)}
    >
      <span>
        <span className={cn("font-medium", isActive ? "text-green-600" : "text-gray-500")}>{subsectionNumber}</span>
        {' '}
        {subsectionText}
      </span>
    </button>
  );
}
