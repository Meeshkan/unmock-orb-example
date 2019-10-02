import * as React from 'react';
import Repository from './Repository';

export default ({ repositories }) => (
  <div className="repositories">
    <div className="repositories__title">
      My GitHub repositories
    </div>
    <div className="repositories__content">
      { repositories.map((repo) => <Repository key={repo.name} repository={repo} />)}
    </div>
  </div>
);
