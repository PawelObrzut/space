import { useState } from 'react'

const useMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleManu = () => {
    setIsOpen(isOpen => !isOpen);
  } 
  return { isOpen, handleToggleManu }
}

export default useMenu