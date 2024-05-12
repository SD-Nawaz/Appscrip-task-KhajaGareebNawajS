import React, {useEffect, useRef} from 'react'

const Recommended = ({setRecommended, setRecommBy}) => {
  const Recommref = useRef(null)

  useEffect(() => {
    const handleclick = e => {
      if (e.target != Recommref.current) {
        setRecommBy(e.target.innerText)
        setRecommended(false)
      }
    }
    Recommref.current.addEventListener('click', handleclick)
  }, [])
  return (
    <div className='recomm-container' ref={Recommref}>
      <p className='recomm-list-name'>RECOMMENDED</p>
      <p className='recomm-list-name'>NEWEST FIRST</p>
      <p className='recomm-list-name'>POPULAR</p>
      <p className='recomm-list-name'>PRICE: HIGH TO LOW</p>
      <p className='recomm-list-name'>PRICE: LOW TO HIGH</p>
    </div>
  )
}

export default Recommended
