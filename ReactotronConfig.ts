/* eslint-disable import/no-extraneous-dependencies */
import AsyncStorage from '@react-native-community/async-storage';
import { Platform } from 'react-native';
import Reactotron from 'reactotron-react-native';


export interface ReactotronConfig {
  /** The name of the app. */
  name?: string
  /** The host to connect to: default 'localhost'. */
  host?: string
  /** Should we use async storage */
  useAsyncStorage?: boolean
  /** Should we clear Reactotron when load? */
  clearOnLoad?: boolean
  /** Root state logging. */
  state?: {
    /** log the initial data that we put into the state on startup? */
    initial?: boolean
    /** log snapshot changes. */
    snapshots?: boolean
  }
}

export const DEFAULT_REACTOTRON_CONFIG: ReactotronConfig = {
  clearOnLoad: true,
  host: 'localhost',
  useAsyncStorage: true,
  state: {
    initial: true,
    snapshots: false,
  },
}

declare global {
    interface Console {
      tronLogImportant: typeof Reactotron.logImportant
      tronLog: typeof Reactotron.log
    }
  }
  
if (__DEV__) {
    console.tronLogImportant = Reactotron.logImportant
    console.tronLog = Reactotron.logImportant
}

Reactotron.configure()

const reactotron = Reactotron.setAsyncStorageHandler?.(AsyncStorage)
    .configure() 
    .useReactNative() 
    .connect(); 


export default reactotron;
