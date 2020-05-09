import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

type PageOwnProps = {};
type PageOwnState = {};

type PageStateProps = {};
type PageDispatchProps = {};

type Props = PageOwnProps & PageStateProps & PageDispatchProps;
type States = PageOwnState;

class Discuss extends Component{

    config: Config = {
        navigationBarTitleText: '交流'
    }

    render(){
        return (
            <View>交流</View>
        );
    }
}

export default Discuss as ComponentClass<Props, States>;