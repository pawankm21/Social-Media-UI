import { useEffect, useState } from 'react'

function useDark() {
    const [dark, setDark] = useState(false);
    useEffect(() => {
      if (dark) {
        const root = window.document.documentElement;
        root.classList.add("dark");
      } else {
        const root = window.document.documentElement;
        root.classList.remove("dark");
       
      }
    });
    return [dark, setDark];

}

export default useDark
