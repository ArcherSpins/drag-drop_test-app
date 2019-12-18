import React from 'react';


export default ({
  width = 50,
  height = 26,
  color = 'white'
}) => (
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M49.9216 18.9209C49.9216 24.7369 49.9216 30.5657 49.9216 36.3817C49.8568 36.8439 49.8179 37.3061 49.7272 37.7683C49.1568 40.9395 47.4068 43.289 44.6327 44.9067C41.2494 46.8838 37.879 48.8739 34.4827 50.8254C32.6809 51.8653 30.879 52.9309 28.9994 53.8296C28.0661 54.2662 26.9642 54.356 25.9531 54.6C25.5642 54.6 25.1753 54.6 24.7864 54.6C24.579 54.5614 24.3716 54.5101 24.1513 54.4844C22.842 54.2918 21.5846 53.9195 20.4309 53.2519C15.8161 50.5686 11.2142 47.8724 6.58645 45.2148C4.84941 44.2262 3.28089 43.045 2.34756 41.2733C1.72533 40.0921 1.3883 38.7826 0.921631 37.5244C0.921631 30.8482 0.921631 24.172 0.921631 17.4958C0.96052 17.3803 1.01237 17.2519 1.05126 17.1363C1.71237 14.0807 3.44941 11.8082 6.18459 10.2419C10.8901 7.54576 15.5568 4.77257 20.2624 2.07643C23.6068 0.163445 27.029 0.11209 30.3735 1.99939C35.2216 4.7469 40.0309 7.58427 44.8401 10.4088C47.5235 11.9751 49.1439 14.299 49.7013 17.3418C49.792 17.8682 49.8439 18.3945 49.9216 18.9209ZM26.7439 23.2861C28.805 23.2861 29.7772 23.0165 31.4235 22.0664C33.8476 20.667 36.2587 19.2419 38.7087 17.881C39.6679 17.3546 40.1864 16.6228 40.1605 15.57C40.1346 14.5429 39.642 13.7341 38.6957 13.2462C38.1642 12.9637 37.6457 12.6556 37.1142 12.3603C34.2105 10.7426 31.3327 9.09925 28.4161 7.53292C27.1457 6.85246 25.7327 6.4673 24.2939 6.87814C23.2568 7.17343 22.2198 7.53292 21.2864 8.04647C17.7216 10.0236 14.2087 12.065 10.6698 14.0935C9.67163 14.6713 9.67163 15.095 10.6698 15.6599C14.1568 17.6371 17.6568 19.6014 21.1179 21.6042C22.9198 22.6313 24.7605 23.3888 26.7439 23.2861ZM44.4642 27.4587C44.5031 27.4587 44.555 27.4587 44.5939 27.4587C44.5939 25.687 44.5939 23.9152 44.5939 22.1306C44.5939 20.8082 44.192 20.59 43.0383 21.2448C42.9994 21.2704 42.9605 21.2833 42.9216 21.309C40.0827 22.9266 37.2179 24.5315 34.392 26.162C32.6679 27.1634 30.8401 28.0236 29.492 29.5643C28.079 31.1692 27.1716 32.9794 27.1327 35.1235C27.0809 38.0507 27.1068 40.978 27.1198 43.9052C27.1327 46.1392 29.1031 47.346 31.0605 46.2547C34.4827 44.3546 37.8661 42.3774 41.2494 40.4002C43.3883 39.142 44.4253 37.2034 44.4513 34.7512C44.4901 32.3246 44.4642 29.8981 44.4642 27.4587ZM21.792 39.4373C21.792 37.4216 21.805 35.4188 21.779 33.4031C21.779 32.8125 21.7401 32.1963 21.6235 31.6185C21.105 29.1535 19.9642 27.0607 17.7346 25.7383C15.2198 24.2362 12.6531 22.8239 10.1124 21.3731C8.16793 20.269 6.24941 21.3475 6.24941 23.5557C6.23645 27.2276 6.24941 30.9124 6.24941 34.5843C6.26237 37.0236 7.1957 39.0008 9.36052 40.2719C13.0939 42.4673 16.8272 44.6371 20.5735 46.8068C21.4031 47.2818 21.779 47.0507 21.779 46.1007C21.792 43.8796 21.792 41.6585 21.792 39.4373Z" fill={color}/>
  </svg>
)
