import React from 'react';

const ChildComponent = () => <div>Child</div>;

export default class ParentComponent extends React.Component {

  render() {

    return (
      <div>
        <ChildComponent />
      </div>
    );
  }
}

ParentComponent.propTypes = {};