import React from 'react'

function ConditionalRendering() {
  let isPremium = false
  let isGraduated = true

  return (
    <div style={{ textAlign: 'left' }}>
      <h1>Vaishnavi</h1>
      <ul>
        <li>Email: <b>vaishnai@gmail.com</b></li>
        <li>Address: <b>XYZ Road, ABC City, DEF</b></li>
        {isPremium && <li>PREMIUM USER</li>}
        <li>Qualification:
          {isGraduated ? (
            <b>GRADUATED</b>
          ) : (
            <b>NOT GRADUATED</b>
          )}
        </li>
      </ul>
    </div>
  )
}

export default ConditionalRendering

/*
  # Conditional Rendering:
    - Based on conditions, display or hide a JSX element
    - Syntax:
      - If condition
        - {condition && <h1>Test</h1>}
        - {condition && (
            <h1>Test</h1>
          )}
      - If else condition
        - {condition ? <h1>Hello</h1> : <h1>Bye</h1>}
        - {condition ? (
            <h1>Hello</h1>
          ) : (
            <h1>Bye</h1>
          )}
*/