import React, { useState } from 'react'

export function Exchange() {
  const [money, setMoney] = useState(100)

  function handleChange(e) {
    // console.log(e)
    setMoney(e.target.value)
  }
  return (
    <div>
      {/* 你传下去的名字是onChange,注意看清楚自己传的时候叫什么名字 */}
      <RMB onChange={handleChange} money={money} />
      <Dollar money={money} />
      <Yen money={money} />
    </div>
  )
}

function RMB(props) {
  function handleChange(e) {
    console.log(e)
    props.onChange(e)
  }
  // 这个money拿不到的，因为你调用的时候没有传递
  return (
    <div>
      <span>人民币</span>
      <input value={props.money} onChange={handleChange} />
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
