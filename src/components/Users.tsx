import axios from 'axios';


const Users = () => {


    const handleUsers = () => {
    
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNzIxNjkxNTQ5LCJleHAiOjE3MjE3MDU5NDl9.KhwM5vZHj1EszkFa5oiQIpZ924RqilduQt-q-12mYGA'; // Reemplaza con tu token
    

    axios.post(
        import.meta.env.VITE_BACKEND_URL,
      {
        query: `
          query Users {
            users {
              email
            }
          }
        `,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        // Maneja la respuesta (por ejemplo, muestra los correos electrónicos)
        console.log('Respuesta:', response.data);
      })
      .catch((error) => {
        // Maneja errores (por ejemplo, muestra un mensaje de error)
        console.error('Error:', error);
      });
  }

  return (
    <div className="card">
            <button onClick={handleUsers}>
                GetUsers
            </button>
        </div>
  )
}

export default Users