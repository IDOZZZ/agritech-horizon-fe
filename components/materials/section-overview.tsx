import React from 'react';
import { CircleIcon, CheckIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SubSection {
  id: string;
  title: string;
  completed: boolean;
  viewed: boolean;
}

interface Section {
  id: string;
  title: string;
  subtitle: string;
  subsections: SubSection[];
  completed: boolean;
}

interface SectionOverviewProps {
  sections: Section[];
}

export function SectionOverview({ sections }: SectionOverviewProps) {
  const totalSections = sections.length;
  const completedSections = sections.filter(section => section.completed).length;

  return (
    <div className="mb-6 p-4 rounded-lg bg-green-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-800">Media Hidroponik</h3>
        <span className="text-sm text-gray-600">3 of 4</span>
      </div>
      <div className="space-y-2">
        {sections.map((section) => (
          <div key={section.id} className="flex items-center space-x-2">
            {section.completed ? (
              <div className="relative flex items-center justify-center h-5 w-5">
                <CircleIcon className="h-5 w-5 text-green-500 fill-green-500" />
                <CheckIcon className="absolute h-3 w-3 text-white" />
              </div>
            ) : (
              <CircleIcon className="h-5 w-5 text-gray-400" />
            )}
            <span className="text-sm font-medium text-gray-700">{section.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
