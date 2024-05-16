import React from 'react'

type Props = {
  role: string,
  name: string,
  bio: string
}

const Crew = (crew: Props) => {
  return (
    <article className="crew-details flow">
      <header className="flow flow--space-small">
        <h2 className="fs-600 ff-serif uppercase">{crew.role}</h2>
        <p className="fs-700 uppercase ff-serif">{crew.name}</p>
      </header>
      <p>{crew.bio}</p>
    </article>
  )
}

export default Crew