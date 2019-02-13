const React = require('react');
const { Component } = require('react');
const { Platform, View, Switch, Text, Image, TouchableOpacity } = require('react-native');
const { Navigation } = require('react-native-navigation');
import ViewOverflow from 'react-native-view-overflow';
class CustomTransitionOrigin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enableDeck: false,
    };

    this.onClickNavigationIcon = this.onClickNavigationIcon.bind(this);
    this.onToggleSwitch = this.onToggleSwitch.bind(this);
  }
  static options() {
    return {
      topBar: {
        title: {
          fontFamily: 'HelveticaNeue-Italic',
          fontSize: 16
        },
        largeTitle: {
          visible: false
        },
        background: {
          translucent: true
        }
      }
    };
  }
  render() {
    const { enableDeck } = this.state;
    return (
      <View style={styles.root}>
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
          <TouchableOpacity testID='shared_image1' activeOpacity={0.5} onPress={this.onClickNavigationIcon}>
            <Navigation.Element resizeMode='cover' elementId='image1'>
              <Image resizeMode='cover' style={styles.gyroImage} source={require('../../img/400.jpeg')} />
            </Navigation.Element>
          </TouchableOpacity>
          <Text>Deck animation:</Text>
          <Switch
            value={enableDeck}
            onValueChange={this.onToggleSwitch}
          />
        </View>
      </View>
    );
  }
  onClickNavigationIcon() {
    const { enableDeck } = this.state;

    Navigation.showModal({
      component: {
        name: 'navigation.playground.CustomTransitionDestination',
        options: {
          deck: {
            enabled: enableDeck,
            swipeToDismiss: false, // default: true
            // Unit: Seconds
            presentDuration: 0.4, // default: 0.3
            dismissDuration: 0.4 // default: 0.3
          },
          animations: {
            push: {
              waitForRender: true,
              content: {
                alpha: {
                  from: 0,
                  to: 1,
                }
              }
            }
          },
          customTransition: {
            animations: [
              {
                type: 'sharedElement', fromId: 'image1', toId: 'customDestinationImage', startDelay: 0, springVelocity: 0.9,
                springDamping: 0.9, duration: 0.8, interactivePop: true,
                ...Platform.select({
                  ios: {
                    x: { from: 0, to: 57 },
                    y: { from: 64, to: 250 },
                  },
                  android: {
                    x: { from: 0, to: 0 },
                    y: { from: 0, to: 0 },
                  }
                })
              },
            ],
            duration: 0.8
          }
        }
      }
    });
  }
  onToggleSwitch(value) {
    this.setState({
      enableDeck: value
    });
  }
}
module.exports = CustomTransitionOrigin;

const styles = {
  root: {
    alignItems: 'center',
    flexGrow: 1,
    backgroundColor: '#f5fcff'
  },
  h1: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 100
  },
  footer: {
    fontSize: 10,
    color: '#888',
    marginTop: 10
  },
  gyroImage: {
    marginTop: 10,
    width: 100,
    height: 100
  }
};
