import { ComponentClass } from "react";
import Taro, { Component, Config } from "@tarojs/taro";
import { View, Button} from "@tarojs/components";
import { AtSearchBar } from "taro-ui";

type PageOwnProps = {};
type PageOwnState = {
  value: string;
};

type PageStateProps = {};
type PageDispatchProps = {};

type Props = PageOwnProps & PageStateProps & PageDispatchProps;
type States = PageOwnState;

class Rent extends Component<Props, States> {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  config: Config = {
    navigationBarTitleText: "租房"
  };

  render() {
    return (
      <View>
        <AtSearchBar
          value={this.state.value}
          onChange={e => this.setState({value: e})}
          onActionClick={() => console.log('action click')}
        ></AtSearchBar>
        <Button>dianji</Button>
      </View>
    );
  }
}

export default Rent as ComponentClass<Props, States>;
