import React, { useState } from "react"

const Auth = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onEmail = (e) => {
    setEmail(e.target.value)
  }
  const onPassword = (e) => {
    setPassword(e.target.value)
  }
  const onSb = (e) => {
    e.preventDefault()
    console.log(email)
    console.log(password)
  }
  return (
    <div>
      <form onSubmit={onSb}>
        <input
          name="email"
          type="email"
          placeholder="email"
          onChange={onEmail}
          value={email} //value onChange는 항상 함께 벨류값은 state값으로
          required
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={onPassword}
          value={password}
          required
        />
        <input type="submit" value="LonIn" />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with last commit</button>
      </div>
    </div>
  )
}
export default Auth
