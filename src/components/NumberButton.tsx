type Props = {
  selected: boolean,
  label: number,
  onClick: () => void
}

const NumberButton = ({selected, label, onClick}: Props) => {
  return (
    <button 
      aria-selected={selected}
      className="bg-dark text-white ff-serif fs-600"
      onClick={onClick}
    >
        {label}
    </button>
  )
}

export default NumberButton