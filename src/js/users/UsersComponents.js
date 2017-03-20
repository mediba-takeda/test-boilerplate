export function UsersItem (dataArray) {
  let string = ''
  dataArray.map((user, i)=>{
    string += `
      <dl>
        <dt>${user.username}(${user.name})</dt>
        <dd>${user.email}</dd>
      </dl>
    `
  })
  return string
}