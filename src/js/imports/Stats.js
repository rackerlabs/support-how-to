import { connectStats } from 'react-instantsearch-dom';

const Stats = ({ processingTimeMS, nbHits }) => (
  <p>
    Found {nbHits} results in {processingTimeMS}
    ms
  </p>
);

export default CustomStats = connectStats(Stats);