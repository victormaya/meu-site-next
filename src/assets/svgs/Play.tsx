import React from 'react'

import { theme } from '../../styles/theme'

const Play: React.FC = () => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.16 12.08L2.94 0.47C2.62675 0.324868 2.28217 0.260389 1.93764 0.282432C1.59311 0.304475 1.25956 0.41234 0.967358 0.596208C0.675157 0.780076 0.433584 1.03411 0.264629 1.33518C0.0956743 1.63625 0.00470422 1.97479 -3.60633e-07 2.32V25.53C-0.00292573 25.8844 0.0856095 26.2335 0.257048 26.5436C0.428487 26.8537 0.677032 27.1144 0.978659 27.3004C1.28029 27.4864 1.62479 27.5915 1.97889 27.6054C2.33298 27.6194 2.68468 27.5417 3 27.38L26.16 15.77C26.5031 15.5978 26.7915 15.3336 26.993 15.0069C27.1946 14.6802 27.3013 14.3039 27.3013 13.92C27.3013 13.5361 27.1946 13.1598 26.993 12.8331C26.7915 12.5064 26.5031 12.2422 26.16 12.07V12.08Z"
        fill={theme.colors.greyText}
      />
    </svg>
  )
}

export default Play
