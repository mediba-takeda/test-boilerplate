export function UsersItem (dataArray) {
  let string = ''
  dataArray.map((user)=>{
    string += `
      <dl>
        <dt>${user.username}(${user.name})</dt>
        <dd>${user.email}</dd>
      </dl>
    `
  })
  return string
}