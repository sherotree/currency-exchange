import React, { useState } from 'react'
import './Foo.css'

export function Exchange() {
  const [money, setMoney] = useState(100)

  function handleChange(e) {
    // console.log(e)
    setMoney(e.target.value)
  }
  return (
    <div className="wrapper">
      <h1>货币兑换</h1>
      {/* 你传下去的名字是onChange,注意看清楚自己传的时候叫什么名字 */}
      <div className="content">
        <RMB className="currency" handleChange={handleChange} money={money} />
        <Dollar
          className="currency"
          money={money}
          handleChange={handleChange}
        />
        <Yen className="currency" money={money} handleChange={handleChange} />
      </div>
    </div>
  )
}

function RMB(props) {
  const { money, handleChange } = props
  // function handleChange(e) {
  //   console.log(e)
  //   props.onChange(e)
  // }
  // 这个money拿不到的，因为你调用的时候没有传递
  return (
    <div>
      <span className="text">人民币</span>
      <input value={money} onChange={handleChange} />
    </div>
  )
}

function Dollar(props) {
  const { money, handleChange } = props
  function dollarChange() {
    // 这里如果传了money，那你调用的时候就要传money，不然拿到的是undefined
    // 这个money取的是props里拿到的，你就不要传参进来
    return (money * 0.14).toFixed(2)
  }
  return (
    <div>
      <span className="text">美元</span>
      <input value={dollarChange()} onChange={handleChange} disabled />
    </div>
  )
}

function Yen(props) {
  const { money, handleChange } = props
  function yenChange() {
    return (money * 15.5).toFixed(2)
  }
  return (
    <div>
      <span className="text">日元</span>
      {/* 这个yenChange是个方法，你给value需要执行返回值，不然就只是一个函数 */}
      {/* 接下来就是onChange要调用相应的方法才能使每个输入框起作用 */}
      <input value={yenChange()} onChange={handleChange} disabled />
    </div>
  )
}
