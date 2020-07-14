 
import axios from 'axios';// importa-se a axios para fazer o link e as requisições http da nossa api
const api=axios.create({
baseURL:'http://192.168.0.101:3000',// criase o link apontando para o servidor que foi disponibilizado
timeout: 10000// timeout da api
});
export default api;