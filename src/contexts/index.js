import api from '../data'
import {createContext} from 'react'
api.initialize();
export const AppContext = createContext([api.state, () => {}])