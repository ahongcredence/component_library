// src/stories/Typography.stories.jsx
import React from 'react';

export default {
  title: 'Design System/Typography',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const Headings = () => (
  <div className="p-6 space-y-6">
    <h1>H1 - Open Sans Bold 700 Font Size 11</h1>
    <div className="text-sm text-gray-500 mt-1">
      Font: Open Sans, Weight: var(--font-weight-bold), Size: var(--font-size-5xl)
    </div>
    
    <h2>H2 - Open Sans Regular 400 Font Size 10</h2>
    <div className="text-sm text-gray-500 mt-1">
      Font: Open Sans, Weight: var(--font-weight-normal), Size: var(--font-size-4xl)
    </div>
    
    <h3>H3 - Open Sans Regular 400 Font Size 9</h3>
    <div className="text-sm text-gray-500 mt-1">
      Font: Open Sans, Weight: var(--font-weight-normal), Size: var(--font-size-3xl)
    </div>
    
    <h4>H3 - Open Sans Regular 400 Font Size 8</h4>
    <div className="text-sm text-gray-500 mt-1">
      Font: Open Sans, Weight: var(--font-weight-normal), Size: var(--font-size-2xl)
    </div>
    
    <h5>H3 - Open Sans Regular 400 Font Size 7</h5>
    <div className="text-sm text-gray-500 mt-1">
      Font: Open Sans, Weight: var(--font-weight-normal), Size: var(--font-size-xl)
    </div>
    
    <h6>H3 - Open Sans Regular 400 Font Size 6</h6>
    <div className="text-sm text-gray-500 mt-1">
      Font: Open Sans, Weight: var(--font-weight-normal), Size: var(--font-size-lg)
    </div>
  </div>
);

export const Paragraphs = () => (
  <div className="p-6 space-y-6 max-w-lg">
    <div>
      <p>Curabitur est gravida et libero vitae dictum.
Tityre, tu patulae recubans sub tegmine fagi
dolor. Prima luce, cum quibus mons aliud
consensu ab eo. Lorem ipsum dolor sit amet,
consectetur adipisici elit, sed eiusmod tempor
incidunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud
exercitation. Mercedem aut nummos unde
unde extricat, amaras.</p>
      <div className="text-sm text-gray-500 mt-1">
        Font: Lato, Weight: Normal, Size: var(--font-size-base)
      </div>
    </div>
    
    <div>
      <p className="lead">Curabitur est gravida et libero vitae dictum.
Tityre, tu patulae recubans sub tegmine fagi
dolor. Prima luce, cum quibus mons aliud
consensu ab eo. Lorem ipsum dolor sit amet,
consectetur adipisici elit, sed eiusmod tempor
incidunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud
exercitation. Mercedem aut nummos unde
unde extricat, amaras.</p>
      <div className="text-sm text-gray-500 mt-1">
        Font: Lato, Weight: Normal, Size: var(--font-size-sm)
      </div>
    </div>
    
    <div>
      <p className="small">Curabitur est gravida et libero vitae dictum.
Tityre, tu patulae recubans sub tegmine fagi
dolor. Prima luce, cum quibus mons aliud
consensu ab eo. Lorem ipsum dolor sit amet,
consectetur adipisici elit, sed eiusmod tempor
incidunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud
exercitation. Mercedem aut nummos unde
unde extricat, amaras.</p>
      <div className="text-sm text-gray-500 mt-1">
        Font: Lato, Weight: Normal, Size: var(--font-size-xs)
      </div>
    </div>
  </div>
);