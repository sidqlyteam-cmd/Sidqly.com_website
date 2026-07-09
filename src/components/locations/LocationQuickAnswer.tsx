import React from 'react';

interface LocationQuickAnswerProps {
  answer: string;
}

const LocationQuickAnswer: React.FC<LocationQuickAnswerProps> = ({ answer }) => {
  if (!answer) return null;

  return (
    <section className="py-12 bg-sidqly-green-deep/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-3xl border-l-4 border-sidqly-green-emerald shadow-sm">
          <h2 className="text-xl font-bold text-sidqly-navy mb-4">Quick Answer</h2>
          <p className="text-gray-700 leading-relaxed font-medium text-lg">
            {answer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationQuickAnswer;
