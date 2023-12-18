import React, { useEffect, useRef } from 'react';

const SemiCircularProgressBar = ({ progress = 0 }) => {
  const progressBar = useRef(null);

  useEffect(() => {
    import('progressbar.js').then((ProgressBar) => {
      const semiCircle = new ProgressBar.SemiCircle(progressBar.current, {
        strokeWidth: 6,
        color: '#FFEA82',  // Change color as needed
        trailColor: '#eee', // Change trail color as needed
        trailWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null, // Remove default styles
        text: {
          style: {
            color: '#999',
            position: 'absolute',
            right: '0',
            top: '30px',
            padding: 0,
            margin: 0,
            transform: null // Remove default transform
          },
          autoStyleContainer: false
        },
        from: { color: '#FFEA82' }, // Start color
        to: { color: '#ED6A5A' }, // End color
        step: (state, semiCircle) => {
          semiCircle.path.setAttribute('stroke', state.color);
          const value = Math.round(semiCircle.value() * 100);
          if (value === 0) {
            semiCircle.setText('');
          } else {
            semiCircle.setText(`${value}%`);
          }
        }
      });

      semiCircle.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      semiCircle.text.style.fontSize = '2rem';

      semiCircle.animate(progress); // Animate the progress

      // Optionally, you can save the semiCircle instance to manipulate it later
      // progressBar.current.semiCircle = semiCircle;
    });
  }, [progress]);

  return (
    <div ref={progressBar}></div>
  );
};

export default SemiCircularProgressBar;
