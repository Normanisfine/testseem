import React, { useState } from 'react';
import './TagSuggest.css';

export default function TagSuggest({ options, results, setResults }) {
  const handleToggleTag = (tag) => {
    if (results.includes(tag)) {
      setResults(results.filter((t) => t !== tag));
    } else {
      setResults([...results, tag]);
    }
  };

  return (
    <div className="tag-suggest">
      {options.map((tag, index) => (
        <button
          key={index}
          className={`tag-item ${results.includes(tag) ? 'selected' : ''}`}
          onClick={() => handleToggleTag(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}