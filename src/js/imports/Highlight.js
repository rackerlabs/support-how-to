import React from 'react';
import { connectHighlight } from 'react-instantsearch-dom';
import { decode } from 'html-entities';

const entities = new Entities();

const Highlight = ({ highlight, attribute, hit }) => {
  const parsedHit = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit,
  });

  return (
    <span>
      {parsedHit.map(
        (part, index) =>
          part.isHighlighted ? (
            <mark key={index}>{decode(part.value)}</mark>
          ) : (
            <span key={index}>{decode(part.value)}</span>
          )
      )}
    </span>
  );
};

export default connectHighlight(Highlight);