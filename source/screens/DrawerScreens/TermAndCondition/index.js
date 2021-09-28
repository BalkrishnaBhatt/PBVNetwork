import React from 'react';
import {ScrollView, Text, View, Dimensions} from 'react-native';
import CustomSafeAreaView from '../../../components/CustomSafeAreaView';
import CustomHeader from '../../../components/CustomHeader';
import {Colors} from '../../../utils/colors';
import Styles from './style';

const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const TermAndCondition = ({navigation, route, ...props}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);
  return (
    <>
      <CustomSafeAreaView backgroundColor={'#000'} barStyle={'light-content'} />

      <View
        style={{
          backgroundColor: Colors.white,
          flex: 1,
          // height: screen_height,
          // width: screen_width,
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CustomHeader navigation={navigation} {...props}></CustomHeader>
          <Text style={Styles.text_home}>Term & Condition</Text>
          <Text style={Styles.text_term}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            tristique nisl nec viverra congue. Fusce id dapibus odio. Aenean
            turpis est, ultrices eu tempor at, egestas eget ex. Donec semper in
            turpis non pharetra. Aenean a arcu magna. Etiam rhoncus facilisis
            tristique. Quisque sit amet varius ipsum. Aenean non ipsum velit.
            Morbi non arcu nec sem elementum varius nec imperdiet ex. Ut non
            ligula laoreet, egestas justo a, iaculis lectus. Vivamus sagittis
            mauris vel vehicula tristique. Integer vitae viverra nisl.
            Pellentesque facilisis massa nec erat blandit, vel volutpat nunc
            vehicula. In tincidunt neque ante, id accumsan lacus commodo sit
            amet.
          </Text>
          <Text style={Styles.text_term}>
            <Text style={{color: Colors.primary_color}}>
              Fusce sed faucibus nisi.
            </Text>
            Duis sem augue, sollicitudin pellentesque est consectetur,
            condimentum varius arcu. Maecenas tincidunt porttitor augue, id
            hendrerit velit imperdiet nec. Curabitur posuere erat nec neque
            malesuada porta. Nulla eleifend vestibulum turpis et commodo. Ut at
            fermentum nisl. Donec feugiat, est sodales pretium consequat, ligula
            magna elementum erat, quis vehicula odio nisl vitae orci. Aenean
            eleifend imperdiet faucibus.
          </Text>

          <Text style={Styles.text_term}>
            Vestibulum eu odio id urna pretium iaculis ac non sem. Donec
            interdum sapien a tortor ultricies, vel convallis massa ultrices.
            Mauris porttitor sodales facilisis. Proin ut ex at dolor lacinia
            feugiat. Duis quis porttitor justo. In turpis neque, fringilla at
            facilisis vel, porta eu felis. Nulla facilisi. Maecenas lobortis
            posuere ligula, ac scelerisque ipsum hendrerit id. Nam accumsan enim
            in eleifend pellentesque. Sed ut ex est. Aenean scelerisque risus
            sodales, feugiat ante vel, maximus dui. Fusce ac urna quis lacus
            feugiat consequat. Praesent eu tincidunt odio. Nam ac elit quam.
            <Text style={{color: Colors.primary_color}}>
              Fusce sed faucibus nisi.
            </Text>
            Duis turpis odio, pretium in urna sed, convallis vehicula ex. Etiam
            at mauris rutrum, pretium metus ut, pretium lacus.
          </Text>
        </ScrollView>
      </View>
    </>
  );
};
export default TermAndCondition;
