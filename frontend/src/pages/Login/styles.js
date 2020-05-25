import styled from 'styled-components/native'
import Constants from 'expo-constants'

export const Container = styled.View`
    flex: 1;
    background-color: #6A75C2;
    padding-top: ${Constants.statusBarHeight}px;
    justify-content: center;
`

export const LoginCard = styled.View`
    background: #FFF;
    margin: 0 20px;
    border-radius: 15px;
    padding: 20px;
    justify-content: space-between;
`

export const CardTitle = styled.Text`
    font-size: 32px;
    font-weight: bold;
    margin: 10px;
    margin-bottom: 0;
`

export const CardForm = styled.View``

export const UsernameInputText = styled.Text`
    background-color: #FFF;
    z-index: 5;
    padding-left: 5px;
    padding-right: 5px;
    position: absolute;
    left: 7%;
    top: 5%;
    color: #6A75C2;
`

export const UsernameInput = styled.TextInput`
    margin-top: 20px;
    padding: 5px;
    height: 50px;
    border-width: 2px;
    border-color: #6A75C2;
    border-radius: 5px;
`

export const PasswordInputText = styled.Text`
    background-color: #FFF;
    z-index: 5;
    padding-left: 5px;
    padding-right: 5px;
    position: absolute;
    left: 7%;
    top: 38%;
    color: #6A75C2;
`

export const PasswordInput = styled.TextInput`
    margin-top: 20px;
    margin-bottom: 20px;
    height: 50px;
    padding: 5px;
    border-width: 2px;
    border-color: #6A75C2;
    border-radius: 5px;
`

export const SubmitButton = styled.TouchableOpacity`
    background-color: #fda993;
    align-items: center;
    padding-top: 5px;
    height: 50px;
    padding-bottom: 5px;
    border-radius: 25px;
    justify-content: center;
`

export const RegisterContainer = styled.TouchableOpacity`
    flex-direction: row;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
`

export const RegisterText = styled.Text`
    margin-left: 10px;
    font-size: 15px;
    color: #6A75C2;
`
