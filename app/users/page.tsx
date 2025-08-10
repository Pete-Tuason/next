import React from 'react'

export interface User {
  id: number,
  name: string,
  email: string,
}

const UsersPage = async () => {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/users`
    //, { cache: `no-store`}
  );
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>)
          }
        </tbody>
      </table>
    </>
  )
}

export default UsersPage