import React from "react";

export default function Blog() {
  return (
    <div className='mainCls'>
      <ul>
        <li key='angular' className='liCls'>
          Angular
        </li>
        <li key='node' className='liCls'>
          node
        </li>
        <li key='react' className='liCls'>
          react
        </li>
      </ul>
      <div className='number'>
        <span>one</span>
        <span>two</span>
      </div>
      <div>
        <button className='my-button disabled btn-primary'>Submit</button>
      </div>
      <div className='some-class'></div>
    </div>
  );
}
