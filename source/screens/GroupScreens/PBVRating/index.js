import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  BackHandler,
  FlatList,
} from 'react-native';
import CustomSafeAreaView from '../../../components/CustomSafeAreaView';
import {
  HomeTabSymbol,
  NewsTabSymbol,
  MemberTabSymbol,
  ChartTabSymbol,
  ManageTabSymbol,
  PowerButtonSymbol,
} from '../../../utils/svg';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import {NAVIGATION} from '../../../constant';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Fonts} from '../../../utils/fonts';
const Tab = createMaterialTopTabNavigator();
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;
import {Rating, AirbnbRating} from 'react-native-ratings';
const PBVRating = ({navigation, route, ...props}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);
  const [name, setName] = useState('');
  const [category, setCategory] = useState([
    {
      name: 'Communication Skills',
      description:
        'The indicator measures the ability to convey information to another effectively and efficiently.',
      rating: 3,
    },
    {
      name: 'Effectiveness',
      description:
        'The indicator measures the degree to which objectives are achieved and the extent to which targeted problems are solved.',
      rating: 4,
    },
    {
      name: 'Technical skills',
      description:
        'The indicator measures knowledge of, and skill in the exercise of, practices required for successful accomplishment of a business, job, or task.',
      rating: 2,
    },
    {
      name: 'Perceived Added Value',
      description:
        'The indicator measures the evaluation of the difference between the cost of the tax / legal counsel and the contribution of the professional to achieve the business objectives of the matter.',
      rating: 1,
    },
    {
      name: 'Efficiency',
      description:
        'The indicator measures the comparison of what is actually performed with what can be achieved with the same consumption of resources.',
      rating: 3,
    },
  ]);
  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);
  // const backAction = () => {
  //   navigation.navigate(NAVIGATION.GROUP_DETAIL);
  // };
  const renderCategoy = ({item}) => {
    return (
      <View
        style={{
          alignItems: 'center',
          borderBottomWidth: 1,
          borderColor: Colors.border_color,
          marginTop: 15,
          paddingBottom: 5,
        }}>
        <Text
          style={{
            fontFamily: Fonts.Regular_font,
            fontSize: 16,
            fontWeight: '700',
            color: Colors.black,
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            fontFamily: Fonts.Regular_font,
            fontSize: 12,
            fontWeight: '300',
            marginTop: 10,
            color: Colors.black,
          }}>
          {item.description}
        </Text>
        <AirbnbRating
          count={5}
          reviewSize={14}
          isDisabled={true}
          reviews={[
            'Below expectation',
            'Meet expectation',
            'Meet expectation',
            'Meet expectation',
            'Exceed expectation',
          ]}
          defaultRating={item.rating}
          size={14}
        />
      </View>
    );
  };
  return (
    <>
      <View style={Styles.View_Main}>
        <FlatList
          // style={{marginVertical: 5, marginLeft: 20}}
          showsVerticalScrollIndicator={false}
          data={category}
          showsHorizontalScrollIndicator={false}
          renderItem={renderCategoy}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};
export default PBVRating;
