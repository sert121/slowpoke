'use client';

import React from 'react';

type SampleGridProps = {
  samples: Array<any>; // Replace `any` with the actual type of your dataset samples
  onSampleSelect: (sample: any) => void;
};

export const SampleGrid: React.FC<SampleGridProps> = ({ samples, onSampleSelect }) => {
  return (
    <div className="overflow-y-auto max-h-[200px] p-1 border rounded">
      <div
        className="grid"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(30px, 1fr))', // Compact grid layout
          gap: '0.2rem', // Minimal spacing between squares
        }}
      >
        {samples.map((sample, index) => (
          <div
            key={index}
            onClick={() => onSampleSelect(sample)}
            className="w-8 h-8 bg-gray-200 hover:bg-blue-300 cursor-pointer flex items-center justify-center"
          >
            <span className="text-xs text-gray-800">{index + 1}</span> {/* Display the number */}
          </div>
        ))}
      </div>
    </div>
  );
};
