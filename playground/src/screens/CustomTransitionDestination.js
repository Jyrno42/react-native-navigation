const React = require('react');
const { Component } = require('react');
const { View, TouchableOpacity, Image, Text } = require('react-native');
const { Navigation } = require('react-native-navigation');
import ViewOverflow from 'react-native-view-overflow';

class CustomTransitionDestination extends Component {
  constructor(props) {
    super(props);
    this.pop = this.pop.bind(this);
    this.push = this.push.bind(this);
    this.doHideModal = this.doHideModal.bind(this);

    Navigation.events().bindComponent(this);
  }

  static options() {
    return {
      topBar: {
        title: {
          text: 'Shared Element Transition',
          fontFamily: 'HelveticaNeue-Italic'
        },
        backButton: {
          transition: 'custom'
        },
        largeTitle: {
          visible: false
        }
      },
      animations: {
        pop: {
          content: {
            alpha: {
              from: 1,
              to: 0,
              duration: 250
            }
          }
        }
      }
    };
  }

  navigationButtonPressed({ buttonId }) {
    this.doHideModal();
  }

  push() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'navigation.playground.OptionsScreen'
      }
    });
  }
  pop() {
    Navigation.pop(this.props.componentId, {
      customTransition: {
        animations: [
          {
            type: 'sharedElement',
            toId: 'image1',
            fromId: 'customDestinationImage',
            startDelay: 0,
            springVelocity: 0,
            duration: 0.5,
            y: {
              from: 250,
              to: 64,
            },
            x: {
              from: 57,
              to: 0,
            },
          },
        ],
        duration: 0.8
      }
    });
  }
  doHideModal() {
    Navigation.dismissModal(this.props.componentId);
  }
  render() {
    return (
      <View style={styles.root}>
        <View>
          <Navigation.Element resizeMode={'contain'} elementId={'customDestinationImage'}>
            <Image resizeMode={'contain'} style={{ width: 300, height: 300 }} source={require('../../img/400.jpeg')} />
          </Navigation.Element>
          <TouchableOpacity onPress={this.doHideModal}>
            <Text style={{ color: 'blue' }}>hide</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
module.exports = CustomTransitionDestination;

const styles = {
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  },
  h1: {
    fontSize: 24,
    textAlign: 'left',
    margin: 10
  },
  p: {
    fontSize: 14,
    margin: 10,
    textAlign: 'left'
  },
  footer: {
    fontSize: 10,
    color: '#888',
    marginTop: 10
  }
};
