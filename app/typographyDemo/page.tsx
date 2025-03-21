import React, { JSX } from 'react'

export default function TypographyDemo() {
  return (
    <div>
      <h1>H1 - Open Sans Bold 700 Font Size 11</h1>
      <h2>H2 - Open Sans Regular 400 Font Size 10
      </h2>
      <h3>H3 - Open Sans Regular 400 Font Size 9
      </h3>
      <h4>H4 - Open Sans Regular 400 Font Size 8
      </h4>
      <h5>H5 - Open Sans Regular 400 Font Size 7 </h5>
      <h6>H6 - Open Sans Regular 400 Font Size 6
      </h6>
      <div className="flex flex-row gap-2 p-4 max-w-xl">
        <p>Curabitur est gravida et libero vitae dictum.
          Tityre, tu patulae recubans sub tegmine fagi
          dolor. Prima luce, cum quibus mons aliud
          consensu ab eo. Lorem ipsum dolor sit amet,
          consectetur adipisici elit, sed eiusmod tempor
          incidunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud
          exercitation. Mercedem aut nummos unde
          unde extricat, amaras.</p>
        <p className="lead">Curabitur est gravida et libero vitae dictum.
          Tityre, tu patulae recubans sub tegmine fagi
          dolor. Prima luce, cum quibus mons aliud
          consensu ab eo. Lorem ipsum dolor sit amet,
          consectetur adipisici elit, sed eiusmod tempor
          incidunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud
          exercitation. Mercedem aut nummos unde
          unde extricat, amaras.</p>
        <p className="small">Curabitur est gravida et libero vitae dictum.
          Tityre, tu patulae recubans sub tegmine fagi
          dolor. Prima luce, cum quibus mons aliud
          consensu ab eo. Lorem ipsum dolor sit amet,
          consectetur adipisici elit, sed eiusmod tempor
          incidunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud
          exercitation. Mercedem aut nummos unde
          unde extricat, amaras.</p>
      </div>
    </div>
  )
}
