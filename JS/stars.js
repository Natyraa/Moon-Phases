const getStar = () => {
  const x = Math.round(Math.random() * 100)
  const y = Math.round(Math.random() * 100)

  return `
    radial-gradient(circle at ${x}% ${y}%, 
    rgba(255,255,255,1) 0%, 
    rgba(11,14,58,1) 3px, 
    rgba(11,14,58,0) 5px, 
    rgba(11,14,58,0) 100%) no-repeat border-box
    
    
  `
}
console.log('hello')
document.body.style.background = [...Array(100)].map(() => getStar()).join(', ')

