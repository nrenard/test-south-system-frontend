import AxiosMockAdapter from 'axios-mock-adapter';
import api from '../services/api';

const apiMock = new AxiosMockAdapter(api);

export default apiMock;
