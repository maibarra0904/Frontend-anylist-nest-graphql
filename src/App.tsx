import './App.css'
import { gql, useMutation } from '@apollo/client';
import AdItem from './components/AdItem';
import Users from './components/Users';

const LOGIN_MUTATION = gql`
  mutation Login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    token
  }
}
`;


function App() {

  const [login, { loading, error, data }] = useMutation(LOGIN_MUTATION);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: Hubo un problema al conectar </p>;
  

  const handleSignup = async () => {

    const email = "mario@google.com";
    const password = "123456"

    try {
      const { data } = await login({
        variables: {
          loginInput: {
            email,
            password,
          },
        },
      });

      // Manejar la respuesta de la mutación
      console.log(data.login.token);
      localStorage.setItem("Token", JSON.stringify(data.login.token));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  

  return (
    <>
      <div className="card">
        <button onClick={handleSignup}>
          LogIn
        </button>
      </div>
      <AdItem />
      <Users />
    </>
  )
}

export default App
