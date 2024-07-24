import { gql, useMutation } from '@apollo/client';

const CREATE_ITEM_MUTATION = gql`
  mutation CreateItem($createItemInput: CreateItemInput!) {
    createItem(createItemInput: $createItemInput) {
      name
    }
  }
`;

const AdItem = () => {

    const [createItem, { loading, error }] = useMutation(CREATE_ITEM_MUTATION);

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNzIxNjkxNTQ5LCJleHAiOjE3MjE3MDU5NDl9.KhwM5vZHj1EszkFa5oiQIpZ924RqilduQt-q-12mYGA"

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: Hubo un problema al conectar </p>;

    const handleAddItem = async () => {

        try {
            const { data } = await createItem({
                context: {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
                variables: {
                    createItemInput: {
                        name: 'PERA',
                        quantity: 1,
                        quantityUnits: 'lb'
                    },
                },
            });

            // Manejar la respuesta de la mutación
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="card">
            <button onClick={handleAddItem}>
                AddItem
            </button>
        </div>
    )
}

export default AdItem