import React from 'react';
import styled from 'styled-components';

export const SVGS = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .gear {
    position: relative;
    top: 3px;
    animation: rotate 2s linear infinite;
    transform-origin: 12px 43%;
    transform-box: fill-box;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;

function Gear() {
  return (
    <SVGS>
      <div>
        <svg
          width="208"
          height="4"
          viewBox="0 0 208 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="204.853"
            y="0.547974"
            width="2.51045"
            height="2.51045"
            fill="url(#paint0_linear_9_6)"
          />
          <rect
            x="198.576"
            y="0.547974"
            width="3.76567"
            height="2.51045"
            fill="url(#paint1_linear_9_6)"
          />
          <rect
            x="190.543"
            y="0.547974"
            width="5.52299"
            height="2.51045"
            fill="url(#paint2_linear_9_6)"
          />
          <rect
            x="179.748"
            y="0.547974"
            width="8.28448"
            height="2.51045"
            fill="url(#paint3_linear_9_6)"
          />
          <rect
            x="164.685"
            y="0.547974"
            width="12.5522"
            height="2.51045"
            fill="url(#paint4_linear_9_6)"
          />
          <rect
            x="143.347"
            y="0.547974"
            width="18.8284"
            height="2.51045"
            fill="url(#paint5_linear_9_6)"
          />
          <rect
            x="112.217"
            y="0.547974"
            width="28.6191"
            height="2.51045"
            fill="url(#paint6_linear_9_6)"
          />
          <rect
            x="66.7779"
            y="0.547974"
            width="42.9287"
            height="2.51045"
            fill="url(#paint7_linear_9_6)"
          />
          <rect
            y="0.547974"
            width="64.2675"
            height="2.51045"
            fill="url(#paint8_linear_9_6)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_9_6"
              x1="-1.5075e-05"
              y1="1.80326"
              x2="207.363"
              y2="1.80314"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C5FE60" />
              <stop offset="1" stop-color="#C21D92" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_9_6"
              x1="-8.19322e-06"
              y1="1.80316"
              x2="207.363"
              y2="1.80306"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C5FE60" />
              <stop offset="1" stop-color="#C21D92" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_9_6"
              x1="-2.32934e-06"
              y1="1.80313"
              x2="207.363"
              y2="1.80318"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C5FE60" />
              <stop offset="1" stop-color="#C21D92" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_9_6"
              x1="-4.29892e-06"
              y1="1.80317"
              x2="207.363"
              y2="1.80321"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C5FE60" />
              <stop offset="1" stop-color="#C21D92" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_9_6"
              x1="2.56211e-05"
              y1="1.80321"
              x2="207.363"
              y2="1.80324"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C5FE60" />
              <stop offset="1" stop-color="#C21D92" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_9_6"
              x1="-4.14821e-05"
              y1="1.80321"
              x2="207.363"
              y2="1.8032"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C5FE60" />
              <stop offset="1" stop-color="#C21D92" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_9_6"
              x1="-2.15059e-05"
              y1="1.80319"
              x2="207.363"
              y2="1.8032"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C5FE60" />
              <stop offset="1" stop-color="#C21D92" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_9_6"
              x1="-4.31455e-06"
              y1="1.80319"
              x2="207.363"
              y2="1.80322"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C5FE60" />
              <stop offset="1" stop-color="#C21D92" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_9_6"
              x1="-7.46464e-09"
              y1="1.80308"
              x2="207.74"
              y2="1.80314"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C5FE60" />
              <stop offset="1" stop-color="#C21D92" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="gear">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.0509 13.725C22.1023 13.325 22.1408 12.925 22.1408 12.5C22.1408 12.075 22.1023 11.675 22.0509 11.275L24.7624 9.2125C25.0065 9.025 25.0708 8.6875 24.9166 8.4125L22.3464 4.0875C22.1922 3.8125 21.8453 3.7125 21.5626 3.8125L18.3627 5.0625C17.6945 4.5625 16.9749 4.15 16.191 3.8375L15.7027 0.525C15.6641 0.225 15.3942 0 15.073 0H9.9327C9.61144 0 9.34157 0.225 9.30302 0.525L8.8147 3.8375C8.03081 4.15 7.31117 4.575 6.64293 5.0625L3.44312 3.8125C3.14755 3.7 2.81344 3.8125 2.65923 4.0875L0.0890957 8.4125C-0.077963 8.6875 -0.000858813 9.025 0.243304 9.2125L2.95479 11.275C2.90339 11.675 2.86484 12.0875 2.86484 12.5C2.86484 12.9125 2.90339 13.325 2.95479 13.725L0.243304 15.7875C-0.000858813 15.975 -0.0651123 16.3125 0.0890957 16.5875L2.65923 20.9125C2.81344 21.1875 3.1604 21.2875 3.44312 21.1875L6.64293 19.9375C7.31117 20.4375 8.03081 20.85 8.8147 21.1625L9.30302 24.475C9.34157 24.775 9.61144 25 9.9327 25H15.073C15.3942 25 15.6641 24.775 15.7027 24.475L16.191 21.1625C16.9749 20.85 17.6945 20.425 18.3627 19.9375L21.5626 21.1875C21.8581 21.3 22.1922 21.1875 22.3464 20.9125L24.9166 16.5875C25.0708 16.3125 25.0065 15.975 24.7624 15.7875L22.0509 13.725V13.725ZM12.5028 16.875C10.0227 16.875 8.00511 14.9125 8.00511 12.5C8.00511 10.0875 10.0227 8.125 12.5028 8.125C14.983 8.125 17.0006 10.0875 17.0006 12.5C17.0006 14.9125 14.983 16.875 12.5028 16.875Z"
            fill="#C21D92"
          />
        </svg>
      </div>
    </SVGS>
  );
}

export default Gear;
