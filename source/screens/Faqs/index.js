import React, {
  useEffect,
  useLayoutEffect,
  useState,
  useContext,
  useRef,
} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  AppState,
  Modal,
  Platform,
  ImageBackground,
  Alert,
  ToastAndroid,
  Switch,
  Share,
  TextInput,
} from 'react-native';
import Common_styles from '../../utils/commonStyle';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import CustomTextInput from '../../components/CustomTextInput';
import CustomHeader from '../../components/CustomHeader';
import {
  LoginTopCurve,
  LoginBottomCurve,
  NextRoundArrowSymbol,
  DownArrowSymbol,
  SearchSymbol,
  CloseSymbol,
} from '../../utils/svg';
import Images from '../../utils/images';
import {Colors} from '../../utils/colors';
import {console_log} from '../../utils/loggers';
import Styles from './style';
import {NAVIGATION} from '../../constant';
import {Fonts} from '../../utils/fonts';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const Faqs = ({navigation, route, ...props}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);

  const [selected, setSelected] = useState(1);
  // const [collapseOpen, setCollapseOpen] = useState(0);
  const [comment, setComment] = useState('');
  const [questionList, setQuestionList] = useState([
    {
      header_text: 'Can I customize the header?',
      body_text:
        'Appropriately grow covalent benefits whereas emerging leadership. Appropriately network goal-oriented core competencies vis-a-vis corporate services. Quickly foster front-end quality vectors without bleeding-edge intellectual capital. Interactively enhance multifunctional web services vis-a-vis bleeding-edge convergence. Professionally pontificate standards compliant e-commerce without robust solutions.',
    },
    {
      header_text: 'Can I customize the header?',
      body_text:
        'Appropriately grow covalent benefits whereas emerging leadership. Appropriately network goal-oriented core competencies vis-a-vis corporate services. Quickly foster front-end quality vectors without bleeding-edge intellectual capital. Interactively enhance multifunctional web services vis-a-vis bleeding-edge convergence. Professionally pontificate standards compliant e-commerce without robust solutions.',
    },
    {
      header_text: 'Can I customize the header?',
      body_text:
        'Appropriately grow covalent benefits whereas emerging leadership. Appropriately network goal-oriented core competencies vis-a-vis corporate services. Quickly foster front-end quality vectors without bleeding-edge intellectual capital. Interactively enhance multifunctional web services vis-a-vis bleeding-edge convergence. Professionally pontificate standards compliant e-commerce without robust solutions.',
    },
    {
      header_text: 'Can I customize the header?',
      body_text:
        'Appropriately grow covalent benefits whereas emerging leadership. Appropriately network goal-oriented core competencies vis-a-vis corporate services. Quickly foster front-end quality vectors without bleeding-edge intellectual capital. Interactively enhance multifunctional web services vis-a-vis bleeding-edge convergence. Professionally pontificate standards compliant e-commerce without robust solutions.',
    },
  ]);

  const renderQuestion = ({item, index}) => {
    return (
      <Collapse
      // isCollapsed={index == collapseOpen}
      // onToggle={isCollapsed => {
      //   if (isCollapsed === true) {
      //     setCollapseOpen(index);
      //   } else {
      //     setCollapseOpen(0);
      //   }
      // }}
      >
        <CollapseHeader>
          <View
            style={{
              // backgroundColor: collapseOpen == index ? '#FAFAFA' : '#F2F2F2',
              backgroundColor: '#F2F2F2',
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 15,
              marginBottom: 10,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: Fonts.Regular_font,
                fontWeight: '400',
              }}>
              {item.header_text}
            </Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <View
            style={{
              // backgroundColor: collapseOpen == index ? '#FAFAFA' : '#F2F2F2',
              backgroundColor: '#FAFAFA',
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 15,
              marginBottom: 10,
              marginTop: -10,
            }}>
            <Text
              style={{
                fontSize: 12,
                color: '#A5A5A5',
                fontFamily: Fonts.Regular_font,
                fontWeight: '300',
              }}>
              {item.body_text}
            </Text>
          </View>
        </CollapseBody>
      </Collapse>
    );
  };
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
          <Text style={Styles.text_home}>FAQs</Text>
          <View style={{flexDirection: 'row', marginHorizontal: 20}}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                Styles.selected_header,
                {
                  borderColor:
                    selected == 1 ? Colors.primary_color : Colors.transparant,
                },
              ]}
              onPress={() => {
                setSelected(1);
              }}>
              <Text
                style={[
                  Styles.selected_header_text,
                  {
                    color: selected == 1 ? Colors.primary_color : '#a5a5a5',
                  },
                ]}>
                SITE QUESTIONS
              </Text>
            </TouchableOpacity>
            <View style={Styles.view_gap} />
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                Styles.selected_header,
                {
                  borderColor:
                    selected == 2 ? Colors.primary_color : Colors.transparant,
                },
              ]}
              onPress={() => {
                setSelected(2);
              }}>
              <Text
                style={[
                  Styles.selected_header_text,
                  {
                    color: selected == 2 ? Colors.primary_color : '#a5a5a5',
                  },
                ]}>
                CONTENT QUESTIONS
              </Text>
            </TouchableOpacity>
            <View style={Styles.view_gap} />
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                Styles.selected_header,
                {
                  borderColor:
                    selected == 3 ? Colors.primary_color : Colors.transparant,
                },
              ]}
              onPress={() => {
                setSelected(3);
              }}>
              <Text
                style={[
                  Styles.selected_header_text,
                  {
                    color: selected == 3 ? Colors.primary_color : '#a5a5a5',
                  },
                ]}>
                Leave a Reply
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            style={{margin: 20}}
            showsVerticalScrollIndicator={false}
            data={questionList}
            renderItem={renderQuestion}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={selected == 3}
        onRequestClose={() => {
          setSelected(1);
        }}>
        <TouchableOpacity
          // activeOpacity={1}
          onPress={() => {
            setSelected(1);
          }}
          style={Styles.view_main_modal}>
          <TouchableOpacity activeOpacity={1} style={Styles.modal_white_back}>
            <TouchableOpacity
              onPress={() =>
                //  props.navigation.dispatch(DrawerActions.closeDrawer())
                // DrawerActions.closeDrawer()
                setSelected(1)
              }
              activeOpacity={0.8}
              style={Styles.view_close}>
              <CloseSymbol style={{height: 10, width: 10}}></CloseSymbol>
            </TouchableOpacity>
            <Text style={Styles.text_modal_title}>Leave a Reply</Text>
            <Text style={{fontWeight: '300', fontSize: 14}}>
              Logged in as{' '}
              <Text style={{color: Colors.primary_color}}>
                {' '}
                PBVNetwork. Log out?
              </Text>
            </Text>
            <TextInput
              value={comment}
              onChangeText={text => {
                setComment(text);
              }}
              placeholder="Comment"
              multiline={true}
              style={Styles.TextInput}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                // navigation.navigate(label);
              }}
              style={Styles.view_load_more}>
              <Text style={Styles.text_load_more}>POST COMMENT</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </>
  );
};
export default Faqs;
