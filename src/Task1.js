import { useEffect, useState } from "react";

function Soal1() {
  const colors = ['red', 'yellow', 'green'];
  const [currentColor, setCurrentColor] = useState(0);

  useEffect(() => {
    const interval =  setInterval(() => {
      if (currentColor === 2) {
        setCurrentColor(0)
      } else {
        setCurrentColor(currentColor + 1)
      }
    }, 5000);
    return () => {
      clearInterval(interval)
    };
  }, [])


  return(
    <div style={{ width: 100, height: 100, backgroundColor: colors[currentColor]}}>
    </div>
  )
}

export default Soal1