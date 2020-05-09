import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

type PageOwnProps = {};
type PageOwnState = {};

type PageStateProps = {};
type PageDispatchProps = {};

type Props = PageOwnProps & PageStateProps & PageDispatchProps;
type States = PageOwnState;

class Interv extends Component{

    config: Config = {
        navigationBarTitleText: '面经'
    }

    render(){
        return (
            <View>interview</View>
        );
    }
}

export default Interv as ComponentClass<Props, States>;