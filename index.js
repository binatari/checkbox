const input =  document.querySelector('.input-range');
const quantity = document.querySelector('.pricing-quantity');
const price = document.querySelector('.pricing-amount');
const toggle = document.querySelector('.checkbox');
const discount = document.querySelector('.discount-indicator');


const loop = [
    { 
      id:1,
      amount: '10k pageviews', 
      cash: 8, 
      step:0
    },
    { 
        id:2,
        amount: '50k pageviews', 
        cash: 12,
        step:25
      },
      { 
        id:3,
        amount: '100k pageviews', 
        cash: 16,
        step:50
      },
      { 
        id:4,
        amount: '500k pageviews', 
        cash: 24,
        step:75
      },
      { 
        id:5,
        amount: '1M pageviews', 
        cash: 36,
        step:100
      },

]

input.addEventListener('input', ()=>{
  loop.forEach((item)=>{
      if(!toggle.checked && input.value == item.step ){
          quantity.innerHTML = item.amount
          price.innerHTML = `$${item.cash}.00`
      } else if (toggle.checked && input.value == item.step){
        quantity.innerHTML = item.amount
        price.innerHTML = `$${item.cash/4}.00`
      }
  })
})

toggle.addEventListener('click', ()=>{
  loop.forEach((item)=>{
      if(!toggle.checked && input.value == item.step ){
          quantity.innerHTML = item.amount
          price.innerHTML = `$${item.cash}.00`
      } else if (toggle.checked && input.value == item.step){
        quantity.innerHTML = item.amount
        price.innerHTML = `$${item.cash/4}.00`
      }
  })
})

window.addEventListener('resize', ()=>{
  window.innerWidth < 489 ? discount.innerHTML = '-25%' : discount.innerHTML= '25% discount'
})




