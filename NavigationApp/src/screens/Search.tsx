import * as React from 'react';
import {
  Image,
  ScrollView,
  Dimensions,
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,

} from 'react-native';

const { width, height } = Dimensions.get('window');
import { Navigator } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Events } from './fakeData';

const fakedata = [{
  id: 1,
  name: 'Event 1',
  img: 'https://dummyimage.com/600x400/000000/fff.png&text=E1'
}, {
  id: 2,
  name: 'Event 2',
  img: 'https://dummyimage.com/600x400/000000/fff.png&text=E2'
}, {
  id: 3,
  name: 'Event 3',
  img: 'https://dummyimage.com/600x400/000000/fff.png&text=E3'
}, {
  id: 4,
  name: 'Event 4',
  img: 'https://dummyimage.com/600x400/000000/fff.png&text=E4'
}, {
  id: 5,
  name: 'Event 5',
  img: 'https://dummyimage.com/600x400/000000/fff.png&text=E5'
}, {
  id: 6,
  name: 'Event 6',
  img: 'https://dummyimage.com/600x400/000000/fff.png&text=E6'
}, {
  id: 7,
  name: 'Event 7',
  img: 'https://dummyimage.com/600x400/000000/fff.png&text=E7'
}, {
  id: 8,
  name: 'Event 8',
  img: 'https://dummyimage.com/600x400/000000/fff.png&text=E8'
}, {
  id: 9,
  name: 'Event 9',
  img: 'https://dummyimage.com/600x400/000000/fff.png&text=E9'
}, {
  id: 10,
  name: 'Event 10',
  img: 'https://dummyimage.com/600x400/000000/fff.png&text=E10'
}, {
  id: 11,
  name: 'Event 11',
  img: 'https://dummyimage.com/600x400/000000/fff.png&text=E11'
}, {
  id: 12,
  name: 'Event 12',
  img: 'https://dummyimage.com/600x400/000000/fff.png&text=E12'
}, {
  id: 13,
  name: 'Event 13',
  img: 'https://dummyimage.com/600x400/000000/fff.png&text=E13'
}]


interface ISearchProps {
  navigator: Navigator;
};

interface ISearchState {
  text: string,
  data: any,
}

export default class Search extends React.Component<ISearchProps, ISearchState> {
  constructor(props: ISearchProps) {
    super(props);

    this.state = {
      text: '',
      data: fakedata,
    }
  }

  public filter(text) {
    const newData = fakedata.filter(function (item) {
      const itemData = item.name.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
    });

    this.setState({
      data: newData,
      text: text,
    });
  };

  public deleteData() {
    this.setState({
      text: '',
      data: fakedata,
    });
  };

  public renderItem(item) {
    return (
      <TouchableWithoutFeedback onPress={() => {
        this.props.navigator.push({
          screen: 'EventsTabScreen',
          title: item.name,
          passProps: {
            selectedItem: item.item
          }
        })
      }}>
        <View>
          <Image style={styles.image} source={{ uri: item.img }} />
          <Text style={{ color: 'white', margin: 20 }}>{item.name}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            name='search'
            color='grey'
            size={18}
            style={styles.searchIcon}
          />
          <TextInput
            value={this.state.text}
            onChangeText={(text) => this.filter(text)}
            style={styles.input}
            placeholder='Search'
            keyboardAppearance='dark'
            autoFocus={false}
          />
          {this.state.text ?
            <TouchableWithoutFeedback onPress={() => this.deleteData()}>
              <Icon
                name='times-circle'
                color='grey'
                size={18}
                style={styles.iconInputClose}
              />
            </TouchableWithoutFeedback>
            : null}

          <TouchableOpacity onPress={() => this.deleteData()}>
            {/* <TouchableOpacity onPress={() => this.props.navigator.switchToTab({
            tabIndex: 1
          })}> */}
            <View>
              <Text style={styles.cancelButtonText} >Cancel</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <FlatList
            style={styles.flatstyle}
            data={this.state.data}
            renderItem={({ item }) => this.renderItem(item)}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818'
  },
  header: {
    height: 40,
    backgroundColor: '#181818',
    borderBottomWidth: 1,
    borderColor: '#3a3a3a',
    paddingBottom: 5,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative'
  },
  searchIcon: {
    position: 'absolute',
    top: 5,
    left: 15,
    zIndex: 1,
    backgroundColor: 'transparent'
  },
  iconInputClose: {
    position: 'absolute',
    top: 5,
    right: 90,
    backgroundColor: 'transparent',
    zIndex: 1
  },
  input: {
    width: width - (width / 4),
    height: 40,
    backgroundColor: '#323232',
    marginHorizontal: 10,
    paddingLeft: 30,
    borderRadius: 3,
    color: 'grey'
  },
  cancelButtonText: {
    color: 'white'
  },
  image: {
    marginRight: 5,
    width: width,
    height: 170
  },
  flatstyle: {
    marginHorizontal: 10,
  }
});
