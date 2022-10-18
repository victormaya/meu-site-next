import React from 'react'

import { theme } from '../../styles/theme'

const Pause: React.FC = () => {
  return (
    <svg
      className="pause"
      width="29"
      height="28"
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.88 0H3.02C1.87677 0 0.950001 0.926771 0.950001 2.07V25.93C0.950001 27.0732 1.87677 28 3.02 28H9.88C11.0232 28 11.95 27.0732 11.95 25.93V2.07C11.95 0.926771 11.0232 0 9.88 0Z"
        fill={theme.colors.greyText}
      />
      <path
        d="M26.88 0H20.02C18.8768 0 17.95 0.926771 17.95 2.07V25.93C17.95 27.0732 18.8768 28 20.02 28H26.88C28.0232 28 28.95 27.0732 28.95 25.93V2.07C28.95 0.926771 28.0232 0 26.88 0Z"
        fill={theme.colors.greyText}
      />
    </svg>
  )
}

export default Pause
