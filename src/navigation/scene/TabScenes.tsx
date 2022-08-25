import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Images from 'assets/images';
// Screen
import StyledTabBar from 'navigation/components/StyledTabBar';
import navigationConfigs, { tabScreenOptions } from 'navigation/config/options';
import { TAB_NAVIGATION_ROOT } from 'navigation/config/routes';
import React from 'react';
import { useTranslation } from 'react-i18next';

const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const HomeStack = () => (
    <MainStack.Navigator screenOptions={navigationConfigs}>
        {/* <MainStack.Screen name={TAB_NAVIGATION_ROOT.HOME_ROUTE.HOME} component={HomeScreen} /> */}
        {/* <MainStack.Screen name={TAB_NAVIGATION_ROOT.HOME_ROUTE.HOME_DETAIL} component={HomeDetailScreen} /> */}
        {/* <MainStack.Screen name={TAB_NAVIGATION_ROOT.HOME_ROUTE.WEB_VIEW} component={HomeDetailScreen} /> */}
        {/* <MainStack.Screen name={TAB_NAVIGATION_ROOT.HOME_ROUTE.HOME_DATA} component={HomeDataScreen} /> */}
        {/* <MainStack.Screen name={TAB_NAVIGATION_ROOT.HOME_ROUTE.HOME_USER_LIST} component={HomeUserListScreen} /> */}
    </MainStack.Navigator>
);

const MainTabContainer = () => {
    const { t } = useTranslation();
    const ArrayTabs = [
        {
            name: TAB_NAVIGATION_ROOT.HOME_ROUTE.ROOT,
            title: t('tab.home'),
            component: HomeStack,
            icon: Images.icons.tab.home,
        },
    ];
    return (
        <MainTab.Navigator
            screenOptions={tabScreenOptions}
            tabBar={(props: BottomTabBarProps) => <StyledTabBar {...props} />}
        >
            {ArrayTabs.map((item, index) => (
                <MainTab.Screen key={`${index}`} options={{ ...item }} {...item} />
            ))}
        </MainTab.Navigator>
    );
};

export default MainTabContainer;
