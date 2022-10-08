import axios from 'axios';
import { EventDTO } from '../constants/DTO';
import { mapToEventViewModel } from './dtoMapper';

const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 10000,
  timeoutErrorMessage: 'TIMEOUT! Server is taking too long to respond',
  responseType: 'json',
});

export const getEvents = async (endpoint: string) => {
  const res = await axiosInstance.get(endpoint);
  const mappedData = res.data.data.map((item: EventDTO) => mapToEventViewModel(item));
  return mappedData;
}