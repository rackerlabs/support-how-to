import React from 'react';
import Highlight from './Highlight';
import PropTypes from 'prop-types';
import Snippet from './Snippet';


const Hit = ({ hit }) => {
  if (hit.product_url != null && hit.created_by != null && hit.created_by != '' && hit.created_date != null && hit.permalink != null && hit.permalink != '' && !hit.permalink.includes('all-articles')) {
    return (
      <div className="row">
        <div className="col-sm-12">
          <a className="search-type-link" href="/support/how-to/">How-To</a>&nbsp;&gt;&nbsp;
          <a href={`/support/how-to/${hit.product_url}`} className="search-type-link">{hit.product}</a>
          <h2>
            <a className="search-title-link" href={`/support/how-to/${hit.permalink}`}>
              <Highlight attribute="title" hit={hit} />
            </a>
          </h2>
          <a className="search-summary-link" href={`/support/how-to/${hit.permalink}`}>
            <p className="search-summary"><Snippet hit={hit} attribute="content" tagName="mark"/></p>
          </a>
          <span className="search-author" > By &nbsp; <a className="search-author-link"><Highlight attribute="created_by" hit={hit}/></a></span>
          <span className="search-date">{hit.last_modified_date}</span>
        </div>
      </div>
    );
  } else {
    return (<span></span>);
  }
};

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Hit;
