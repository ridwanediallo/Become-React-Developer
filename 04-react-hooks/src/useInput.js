import { useState } from "react";



export default function useInput(initialValue) {
    const [value, serValue] = useState(initialValue)
  return (

    [
        {
            value, onChange: (e) => serValue(e.target.value)
        },
        () => serValue(initialValue)
    ]
  )
}

