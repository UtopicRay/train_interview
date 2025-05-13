

export default function AuthForm() {
  return (
    <div className="card">
      <form className="flex flex-col">
        <label>Nombre</label>
        <input placeholder="User name"></input>
        <label>Email</label>
        <button>Sing IN</button>
      </form>
    </div>
  )
}
