type Props = {
  name: string,
  description: string,
  distance: string,
  travel: string
}

const Destination = (destination: Props) => {
  return (
    <article className="destination-info flow">
      <h2 className="fs-800 ff-serif uppercase">{destination.name}</h2>

      <p>
        {destination.description}
      </p>

      <div className="flex destination-meta">
        <div>
          <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
          <p className="ff-serif uppercase">{destination.distance}</p>
        </div>
        <div>
          <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
          <p className="ff-serif uppercase">{destination.travel}</p>
        </div>
      </div>

    </article>
  )
}

export default Destination