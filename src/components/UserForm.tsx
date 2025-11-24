import React from 'react'
type UserProps = {
  data: {
    name: string,
    email: string
  },
  updateFielHandler : (key: string, value: string) => void
}
 
const UserForm = ({data, updateFielHandler}: UserProps) => {
  return (
    <div>
      <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite o seu nome"
          required
          value={data.name || ""}
          onChange={(e) => updateFielHandler("name", e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="name">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite o seu e-mail"
          required
          value={data.email || ""}
          onChange={(e) => updateFielHandler("email", e.target.value)}
        />
      </div>
    </div>
    </div>
  )
}

export default UserForm