type Props = {
  label: string,
  selected: boolean,
  onClick: () => void
}

const TabButton = ({label, selected, onClick}: Props) => {
  return (
    <button
      role="tab"
      onClick={onClick}
      aria-selected={selected}
      className="uppercase ff-sans-cond text-accent letter-spacing-2"
    >
      {label}
    </button>
  )
}

export default TabButton