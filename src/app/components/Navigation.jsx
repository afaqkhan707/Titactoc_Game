import React from 'react'

const Navigation = ({title , path}) => {
  return (
    <>
            <li>
          <a href={path}>{title}</a>
            </li>
        </>
  );
}

export default Navigation
