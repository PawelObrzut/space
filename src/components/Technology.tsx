type Props = {
  name: string,
  description: string
}

const Technology = (technology: Props) => {
  return (
    <article className="technology-details flow">
      <header className="flow flow--space-small">
        <p className="fs-600 ff-serif uppercase text-accent">The terminology...</p>
        <h2 className="fs-700 uppercase ff-serif">{technology.name}</h2>
      </header>
      <p>{technology.description}</p>
    </article>
  )
}

export default Technology