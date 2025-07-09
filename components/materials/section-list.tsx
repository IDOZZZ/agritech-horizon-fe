import React from 'react';
import { ChevronDownIcon, ChevronRightIcon, PlayCircleIcon, CheckCircleIcon } from 'lucide-react';
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
    <div className="mt-6 space-y-2">
      {sections.map((section) => (
        <div key={section.id} className="rounded-lg bg-white border border-gray-200"> {/* Changed background and added border */}
          <button
            className="flex w-full items-center justify-between p-4 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
            onClick={() => onToggleSection(section.id)}
          >
            <div className="flex items-center space-x-3">
              <PlayCircleIcon className="h-5 w-5 text-gray-500" />
              <span className="text-gray-900">{section.title}: {section.subtitle}</span> {/* Text color to black */}
            </div>
            <div className="flex items-center space-x-2">
              {section.completed && <CheckCircleIcon className="h-4 w-4 text-gray-400 fill-gray-400" />} {/* Checkmark icon to gray and filled */}
              {expandedSections[section.id] ? (
                <ChevronDownIcon className="h-4 w-4" />
              ) : (
                <ChevronRightIcon className="h-4 w-4" />
              )}
            </div>
          </button>
          {expandedSections[section.id] && (
            <div className="space-y-1 px-4 pb-4">
              {section.subsections.map((subsection) => (
                <SubsectionItem
                  key={subsection.id}
                  subsection={subsection}
                  isActive={activeSubsection === subsection.id}
                  onSelect={onSelectSubsection}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
