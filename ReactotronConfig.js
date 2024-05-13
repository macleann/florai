import Reactotron, { networking, asyncStorage } from "reactotron-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { reactotronRedux } from 'reactotron-redux'
  
export const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
.configure({
    name: "FlorAI",
})
.useReactNative()
.use(networking({
    ignoreContentTypes: /^(image)\/.*$/i,
    ignoreUrls: /\/(logs|symbolicate)$/,
  }))
.use(reactotronRedux())
.use(asyncStorage())
.connect();
