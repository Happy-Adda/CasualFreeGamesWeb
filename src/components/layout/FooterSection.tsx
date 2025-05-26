import React from 'react';

interface FooterSectionProps {
  title: string;
  content: string;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ title, content }) => (
  <div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400">{content}</p>
  </div>
);