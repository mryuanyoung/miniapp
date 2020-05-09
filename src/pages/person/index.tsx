import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'

type PageOwnProps = {};
type PageOwnState = {};

type PageStateProps = {};
type PageDispatchProps = {};

type Props = PageOwnProps & PageStateProps & PageDispatchProps;
type States = PageOwnState;

class Person extends Component{

    config: Config = {
        navigationBarTitleText: '个人'
    }

    render(){
        return (
            <View>person</View>
        );
    }
}

export default Person as ComponentClass<Props, States>;