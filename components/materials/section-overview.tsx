import React from 'react';
import { BookOpen, CheckCircle } from '@phosphor-icons/react';
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
    <div className="mb-6 rounded-lg bg-green-50 p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">Media Hidroponik</h3>
        <span className="text-sm font-semibold text-gray-600">{`${completedSections} of ${totalSections}`}</span>
      </div>
      <div className="space-y-3">
        {sections.map((section, index) => (
          <div key={section.id} className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm">
            <div className="flex items-center space-x-3">
              <BookOpen size={24} className="text-gray-500" />
              <div>
                <p className="font-bold text-gray-800">Section {index + 1}</p>
                <p className="text-sm text-gray-600">{section.title}</p>
              </div>
            </div>
            {section.completed && (
              <CheckCircle size={24} weight="fill" className="text-gray-400" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
