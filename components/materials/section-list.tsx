import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SubsectionItem } from './subsection-item';

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

interface SectionListProps {
  sections: Section[];
  expandedSections: { [key: string]: boolean };
  activeSubsection: string;
  onToggleSection: (sectionKey: string) => void;
  onSelectSubsection: (subsectionId: string) => void;
}

export function SectionList({
  sections,
  expandedSections,
  activeSubsection,
  onToggleSection,
  onSelectSubsection,
}: SectionListProps) {
  return (
    <div className="mt-6 space-y-4">
      {sections.map((section, index) => (
        <div key={section.id} className="rounded-lg bg-green-50 p-4">
          <button
            className="flex w-full items-center justify-between text-left"
            onClick={() => onToggleSection(section.id)}
          >
            <div>
              <p className="text-lg font-bold text-gray-800">Section {index + 1}</p>
              <p className="text-gray-700">{section.title}</p>
            </div>
            {expandedSections[section.id] ? (
              <ChevronUpIcon className="h-6 w-6 text-gray-700" />
            ) : (
              <ChevronDownIcon className="h-6 w-6 text-gray-700" />
            )}
          </button>
          {expandedSections[section.id] && (
            <div className="mt-4 rounded-lg border border-gray-200 bg-white p-2">
              <div className="space-y-1">
                {section.subsections.map((subsection) => (
                  <SubsectionItem
                    key={subsection.id}
                    subsection={subsection}
                    isActive={activeSubsection === subsection.id}
                    onSelect={onSelectSubsection}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
