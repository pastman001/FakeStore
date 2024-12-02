import React from 'react';
import { Link } from 'react-router-dom';

export const Main = () => {
  return (
    <div className="mainC">
      <div>
        <div className="mainText">
          best online store of the year We don&apos;t do fashion, we are fashion{' '}
        </div>
        <Link to="/products">
          <button>shop now</button>
        </Link>
      </div>
      <div>
        <img className="imgMain" src="../src/assets/img/people.png" />
      </div>
    </div>
  );
};
