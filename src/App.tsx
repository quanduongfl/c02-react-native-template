import React, { FunctionComponent, useEffect } from 'react';
import { ActivityIndicator, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { loadLocaleLanguage } from 'utilities/i18next';
import { navigationRef } from 'navigation/NavigationService';
import Navigation from 'navigation/scene/RootScenes';
import { RootSiblingParent } from 'react-native-root-siblings';
import { addMenuClearAsyncStorage, getCodePushInfo } from 'utilities/helper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { onlineManager, QueryClientProvider } from 'react-query'
import QueryClientSetup from 'api/react-query-client'

LogBox.ignoreLogs(['Require cycle:', 'ViewPropTypes']);

if (__DEV__) {
    import('../ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const App: FunctionComponent = () => {

  const queryClient = QueryClientSetup.getInstance()

    const onBeforeLift = () => {
        loadLocaleLanguage();
    };
    useEffect(() => {
        addMenuClearAsyncStorage();
        getCodePushInfo();
    }, []);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <QueryClientProvider client={queryClient}>
            <RootSiblingParent>
                <NavigationContainer ref={navigationRef}>
                    <Navigation />
                </NavigationContainer>
            </RootSiblingParent>
            </QueryClientProvider>
        </GestureHandlerRootView>
    );
};

export default App;
