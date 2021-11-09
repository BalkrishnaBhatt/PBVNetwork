import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Modal,
  TextInput,
} from 'react-native';
import {CloseSymbol} from '../../../utils/svg';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import {Fonts} from '../../../utils/fonts';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import {useSelector, useDispatch} from 'react-redux';
import {console_log} from '../../../utils/loggers';
import {getFaqs} from '../../../redux/actions';
import {
  ContentLoader,
  CustomHeader,
  CustomSafeAreaView,
} from '../../../components';
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const Faqs = ({navigation, route, ...props}) => {
  const dispatch = useDispatch();
  let InfoReducer = useSelector(state => state.InfoReducer);
  useEffect(() => {
    if (
      InfoReducer !== undefined &&
      InfoReducer.faqList !== undefined &&
      InfoReducer.faqList.length > 0
    ) {
      let data_to_set = [];
      data_to_set = InfoReducer;
      // let obj = {
      //   category_name: 'Leave a Reply',
      //   faqs: [],
      // };
      data_to_set = InfoReducer.faqList;
      // data_to_set.push(obj);
      setFaqList(data_to_set);
      // setSelected(InfoReducer.faqList[0].category_name);
      console_log(
        'InfoReducer.faqList: ',
        JSON.stringify(data_to_set, null, 2),
      );
      setSelectedIndex(0);
      setQuestionList(InfoReducer.faqList[0].faqs);
      setIsLoading(InfoReducer.isLoading);
    }
  }, [InfoReducer]);
  useEffect(() => {
    dispatch(getFaqs(navigation));
  }, []);
  const [isLoading, setIsLoading] = useState(true);
  // const [selected, setSelected] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  // const [collapseOpen, setCollapseOpen] = useState(0);
  const [comment, setComment] = useState('');
  const [faqList, setFaqList] = useState([]);
  const [commentErrorText, setCommentErrorText] = useState('');
  const [questionList, setQuestionList] = useState([
    // {
    //   header_text: 'Can I customize the header?',
    //   body_text:
    //     'Appropriately grow covalent benefits whereas emerging leadership. Appropriately network goal-oriented core competencies vis-a-vis corporate services. Quickly foster front-end quality vectors without bleeding-edge intellectual capital. Interactively enhance multifunctional web services vis-a-vis bleeding-edge convergence. Professionally pontificate standards compliant e-commerce without robust solutions.',
    // },
    // {
    //   header_text: 'Can I customize the header?',
    //   body_text:
    //     'Appropriately grow covalent benefits whereas emerging leadership. Appropriately network goal-oriented core competencies vis-a-vis corporate services. Quickly foster front-end quality vectors without bleeding-edge intellectual capital. Interactively enhance multifunctional web services vis-a-vis bleeding-edge convergence. Professionally pontificate standards compliant e-commerce without robust solutions.',
    // },
    // {
    //   header_text: 'Can I customize the header?',
    //   body_text:
    //     'Appropriately grow covalent benefits whereas emerging leadership. Appropriately network goal-oriented core competencies vis-a-vis corporate services. Quickly foster front-end quality vectors without bleeding-edge intellectual capital. Interactively enhance multifunctional web services vis-a-vis bleeding-edge convergence. Professionally pontificate standards compliant e-commerce without robust solutions.',
    // },
    // {
    //   header_text: 'Can I customize the header?',
    //   body_text:
    //     'Appropriately grow covalent benefits whereas emerging leadership. Appropriately network goal-oriented core competencies vis-a-vis corporate services. Quickly foster front-end quality vectors without bleeding-edge intellectual capital. Interactively enhance multifunctional web services vis-a-vis bleeding-edge convergence. Professionally pontificate standards compliant e-commerce without robust solutions.',
    // },
  ]);

  const renderTabsHeader = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          Styles.selected_header,
          {
            borderColor:
              selectedIndex == index
                ? Colors.primary_color
                : Colors.transparant,
          },
        ]}
        onPress={() => {
          setSelectedIndex(index);
          // setSelected(item.category_name);
          setQuestionList(item.faqs);
        }}>
        <Text
          style={[
            Styles.selected_header_text,
            {
              color: selectedIndex == index ? Colors.primary_color : '#a5a5a5',
            },
          ]}>
          {item.category_name}
        </Text>
      </TouchableOpacity>
    );
  };
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
              {item.title}
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
              {item.description
                .replace('<p>', '')
                .replace('</p>', '')
                .replace('<p>', '')
                .replace('</p>', '')
                .replace('<p>', '')
                .replace('</p>', '')
                .replace('<p>', '')
                .replace('</p>', '')}
            </Text>
          </View>
        </CollapseBody>
      </Collapse>
    );
  };

  const validateComment = () => {
    let error_flag = true;
    if (comment == '') {
      setCommentErrorText('Please Enter Comment');
      error_flag = false;
    }
    if (error_flag) {
      setDefaultTab();
    }
  };
  const setDefaultTab = () => {
    // setSelected(faqList[0].category_name);
    setQuestionList(faqList[0].faqs);
    setSelectedIndex(0);
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
        {isLoading ? (
          <ContentLoader />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <CustomHeader navigation={navigation} {...props}></CustomHeader>
            <Text style={Styles.text_home}>FAQs</Text>

            <FlatList
              style={{margin: 20, flex: 1, width: '100%'}}
              showsVerticalScrollIndicator={false}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => {
                return <View style={Styles.view_gap} />;
              }}
              data={faqList}
              renderItem={renderTabsHeader}
              keyExtractor={item => item.id}
            />
            <FlatList
              style={{margin: 20}}
              showsVerticalScrollIndicator={false}
              data={questionList}
              renderItem={renderQuestion}
              keyExtractor={item => item.id}
            />
          </ScrollView>
        )}
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        // visible={selected == 'Leave a Reply'}
        visible={false}
        onRequestClose={() => {
          setDefaultTab();
        }}>
        <TouchableOpacity
          // activeOpacity={1}
          onPress={() => {
            setDefaultTab();
          }}
          style={Styles.view_main_modal}>
          <TouchableOpacity activeOpacity={1} style={Styles.modal_white_back}>
            <TouchableOpacity
              onPress={() =>
                //  props.navigation.dispatch(DrawerActions.closeDrawer())
                // DrawerActions.closeDrawer()
                setDefaultTab()
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
                setCommentErrorText('');
              }}
              placeholder="Comment"
              multiline={true}
              style={Styles.TextInput}
            />
            {commentErrorText == '' ? null : (
              <Text
                style={{
                  color: Colors.red,
                  fontSize: 14,
                  fontFamily: Fonts.Regular_font,
                  marginTop: -10,
                }}>
                {commentErrorText}
              </Text>
            )}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                // navigation.navigate(label);
                validateComment();
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
