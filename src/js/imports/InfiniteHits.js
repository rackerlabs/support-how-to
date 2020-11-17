import React, { Component } from 'react';
import { connectInfiniteHits, Configure, connectStats } from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import Hit from './Hit';

const Stats = ({ nbHits }) => (
  <p className="statsLine">
    {nbHits} search results found
  </p>
);

const CustomStats = connectStats(Stats);
class InfiniteHits extends Component {
  static propTypes = {
    hits: PropTypes.arrayOf(PropTypes.object).isRequired,
    hasMore: PropTypes.bool.isRequired,
    refine: PropTypes.func.isRequired,
  };

  sentinel = null;

  onSentinelIntersection = entries => {
    const { hasMore, refine } = this.props;

    entries.forEach(entry => {
      if (entry.isIntersecting && hasMore) {
        refine();
      }
    });
  };

  componentDidMount() {
    this.observer = new IntersectionObserver(this.onSentinelIntersection);
    this.observer.observe(this.sentinel);
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  render() {
    const { hits } = this.props;

    return (
      <div className="hits">
        <Configure attributesToSnippet={['title', 'content:80']} />
        <CustomStats />
        <ul>
          {hits.map(hit => (
            <li key={hit.objectID} className="hit-item-single">
              <Hit hit={hit} />
            </li>
          ))}
          <li
            className="ais-InfiniteHits-sentinel"
            ref={c => (this.sentinel = c)}
          />
        </ul>
      </div>
    );
  }
}

export default connectInfiniteHits(InfiniteHits);
