import React, { useState } from 'react'

export function Exchange() {
  const [money, setMoney] = useState(100)

  function handleChange(e) {
    setMoney(e.target.value)
  }
  return (
    <div>
      <RMB onChange={handleChange} />
      <Dollar />
      <Yen />
    </div>
  )
}

function RMB(props) {
  const { money } = props
  return (
    <div>
      <span>人民币</span>
      <input value={money} onChange={props.handleChange} />
    </div>
  )
}

function Dollar(props) {
  const { money } = props
  function dollarChange(money) {
    return money * 0.14
  }
  return (
    <div>
      <span>美元</span>
      <input value={dollarChange} />
    </div>
  )
}

function Yen(props) {
  const { money } = props
  function yenChange(money) {
    return money * 15.5
  }
  return (
    <div>
      <span>日元</span>
      <input value={yenChange} />
    </div>
  )
}
