import { Themes } from 'assets/themes';
import { StyledButton, StyledText, StyledTouchable } from 'components/base';
import AlertMessage from 'components/base/AlertMessage';
import { AUTHENTICATE_ROUTE } from 'navigation/config/routes';
import { navigate } from 'navigation/NavigationService';
import React, { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SendOTP: FunctionComponent = ({ route }: any) => {
    const [code, setCode] = useState('');
    const { t } = useTranslation();
    const { email, password } = route?.params;
    const onCodeFilled = (codeVer: string) => {
        setCode(codeVer);
    };

    const confirm = async () => {
        try {
            navigate(AUTHENTICATE_ROUTE.CHANGE_PASS, { email, code });
        } catch (error) {}
    };

    const resendOTP = async () => {
        try {
            AlertMessage(t('alert.success'));
        } catch (error) {
        }
    };

    return (
        <SafeAreaView style={styles.flex1}>
            <KeyboardAwareScrollView enableOnAndroid={true} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    {/* <CodeInput
                        keyboardType="numeric"
                        space={10}
                        size={30}
                        // activeColor={Themes.COLORS.black}
                        // containerStyle={styles.otpInput}
                        // codeInputStyle={styles.underlineStyleBase}
                        onFulfill={onCodeFilled}
                    /> */}
                    <StyledTouchable onPress={resendOTP} customStyle={styles.containerResend}>
                        <StyledText customStyle={styles.resend} i18nText="common.sendOTP.resend" />
                    </StyledTouchable>
                    <StyledButton
                        customStyle={styles.flex1}
                        title={
                            route?.params.register ? 'common.sendOTP.sendForgotPassword' : 'common.sendOTP.buttonNext'
                        }
                        onPress={confirm}
                    />
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignContent: 'center',
    },
    otpInput: {
        width: '100%',
        flex: 1,
        marginVertical: 10,
    },
    underlineStyleBase: {
        width: 45,
        height: 55,
        borderColor: Themes.COLORS.black,
        borderRadius: 15,
        color: Themes.COLORS.black,
        marginHorizontal: 20,
    },
    containerResend: {
        width: '100%',
        flex: 1,
        marginTop: 30,
    },
    resend: {
        textDecorationLine: 'underline',
        textDecorationColor: Themes.COLORS.black,
        color: Themes.COLORS.black,
        textAlign: 'right',
        width: '100%',
    },
    flex1: {
        flex: 1,
    },
});

export default SendOTP;
