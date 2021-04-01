import { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from './store';

// https://react-redux.js.org/using-react-redux/usage-with-typescript#inferring-the-connected-props-automatically

const mapState = ({ app }: RootState) => ({
  globalStatus: app.globalStatus
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface LayoutProps extends PropsFromRedux {
  demo: string;
}
class Layout extends Component<LayoutProps> {
  render() {
    const { demo } = this.props;
    return <div>{demo}ceshi</div>;
  }
}

export default connector(Layout);
