type Props = {
  label: string,
  selected: boolean,
  onClick: () => void
}

const DotButton = ({label, selected, onClick}: Props) => {
  return (
    <button aria-selected={selected} onClick={onClick}>
      <span className="sr-only">{label}</span>
    </button>
  )
}

export default DotButton