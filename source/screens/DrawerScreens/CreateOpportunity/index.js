import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import CustomSafeAreaView from '../../../components/CustomSafeAreaView';
import CustomHeader from '../../../components/CustomHeader';
import {DownArrowSymbol} from '../../../utils/svg';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import DropDownPicker from 'react-native-dropdown-picker';

const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const CreateOpportunity = ({navigation, route, ...props}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);

  const [opportunityTitle, setOpportunityTitle] = useState('');
  const [opportunityDesc, setOpportunityDesc] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const [isOpen, setIsOpen] = useState(0);

  const [valueJurisdiction, setValueJurisdiction] = useState(null);
  const [valueAreaPractice, setValueAreaPractice] = useState(null);
  const [valueTown, setValueTown] = useState(null);
  const [valueIndustry, setValueIndustry] = useState(null);

  const [itemsJurisdiction, setItemsJurisdiction] = useState([
    {label: 'INDIA', value: 'INDIA'},
    {label: 'UNITED STATES', value: 'UNITED STATES'},
    {label: 'UNITED ARAB EMIRATES', value: 'UNITED ARAB EMIRATES'},
    {label: 'BELGIUM', value: 'BELGIUM'},
    {label: 'SPAIN', value: 'SPAIN'},
    {label: 'ESTONIA', value: 'ESTONIA'},
  ]);
  const [itemsAreaPractice, setItemsAreaPractice] = useState([
    {label: 'Finance', value: 'Finance'},
    {label: 'Equity Capital Markets', value: 'Equity Capital Markets'},
    {label: 'Life Science & Healt Care', value: 'Life Science & Healt Care'},
    {label: 'Project', value: 'Project'},
  ]);
  const [itemsTown, setItemsTown] = useState([
    {label: 'New Delhi', value: 'New Delhi'},
    {label: 'Roma', value: 'Roma'},
    {label: 'London', value: 'London'},
    {label: 'Derby', value: 'Derby'},
  ]);
  const [itemsIndustry, setItemsIndustry] = useState([
    {label: 'TMT', value: 'TMT'},
    {label: 'Aviation & Transportation', value: 'Aviation & Transportation'},
    {label: 'Finance', value: 'Finance'},
    {label: 'Manufacturing', value: 'Manufacturing'},
  ]);
  return (
    <>
      <CustomSafeAreaView backgroundColor={'#000'} barStyle={'light-content'} />

      <View
        style={{
          backgroundColor: Colors.white,
          flex: 1,
          // height: screen_height,
          // width: screen_width,
          zIndex: 0,
        }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{zIndex: 0}}
          // style={{
          //   backgroundColor: Colors.black,
          //   flex: 1,
          //   flexGrow: 1,
          //   // height: screen_height,
          //   // width: screen_width,
          // }}
        >
          <CustomHeader navigation={navigation} {...props}></CustomHeader>
          <Text style={Styles.text_home}>Opportunity</Text>
          <View style={Styles.view_search_member}>
            <Text style={Styles.text_search_member}>Create Opportunity</Text>
            <TextInput
              value={opportunityTitle}
              onChangeText={text => {
                setOpportunityTitle(text);
              }}
              placeholder="Opportunity Title"
              placeholderTextColor={Colors.border_color}
              style={Styles.TextInput_search_member}
            />
            <TextInput
              value={opportunityDesc}
              onChangeText={text => {
                setOpportunityTitle(text);
              }}
              placeholder="Opportunity Desc"
              placeholderTextColor={Colors.border_color}
              style={Styles.TextInput_search_member}
            />
            <TextInput
              value={expirationDate}
              onChangeText={text => {
                setExpirationDate(text);
              }}
              placeholder="Expiration Date"
              placeholderTextColor={Colors.border_color}
              style={Styles.TextInput_search_member}
            />
            <View style={{zIndex: 4, flex: 1}}>
              <DropDownPicker
                open={isOpen == 1}
                value={valueJurisdiction}
                items={itemsJurisdiction}
                setOpen={value => setIsOpen(value ? 1 : 0)}
                setValue={setValueJurisdiction}
                placeholder={'Jurisdiction'}
                placeholderStyle={Styles.placeholderStyle}
                style={Styles.DropDownPicker}
                dropDownContainerStyle={Styles.dropDownContainerStyle}
                textStyle={Styles.textStyle}
                // labelStyle={Styles.labelStyle}
                arrowIconStyle={{tintColor: Colors.border_color}}
              />
              <View style={{zIndex: 3}}>
                <DropDownPicker
                  open={isOpen == 2}
                  value={valueTown}
                  items={itemsTown}
                  setOpen={value => setIsOpen(value ? 2 : 0)}
                  setValue={setValueTown}
                  placeholder={'Town'}
                  placeholderStyle={Styles.placeholderStyle}
                  style={Styles.DropDownPicker}
                  dropDownContainerStyle={Styles.dropDownContainerStyle}
                  textStyle={Styles.textStyle}
                  arrowIconStyle={{tintColor: Colors.border_color}}
                />
                <View style={{zIndex: 2}}>
                  <DropDownPicker
                    open={isOpen == 3}
                    value={valueAreaPractice}
                    items={itemsAreaPractice}
                    setOpen={value => setIsOpen(value ? 3 : 0)}
                    setValue={setValueAreaPractice}
                    placeholder={'Area practice'}
                    placeholderStyle={Styles.placeholderStyle}
                    style={Styles.DropDownPicker}
                    dropDownContainerStyle={Styles.dropDownContainerStyle}
                    textStyle={Styles.textStyle}
                    arrowIconStyle={{tintColor: Colors.border_color}}
                  />
                  <View style={{zIndex: 1}}>
                    <DropDownPicker
                      open={isOpen == 4}
                      value={valueIndustry}
                      items={itemsIndustry}
                      setOpen={value => setIsOpen(value ? 4 : 0)}
                      setValue={setValueIndustry}
                      placeholder={'Industry'}
                      placeholderStyle={Styles.placeholderStyle}
                      style={Styles.DropDownPicker}
                      dropDownContainerStyle={Styles.dropDownContainerStyle}
                      textStyle={Styles.textStyle}
                      arrowIconStyle={{tintColor: Colors.border_color}}
                    />
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => {
                        // navigation.navigate(label);
                      }}
                      style={Styles.view_load_more}>
                      <Text style={Styles.text_load_more}>
                        CREATE OPPORTUNITY
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            {/* </View> */}
          </View>
        </ScrollView>
      </View>
    </>
  );
};
export default CreateOpportunity;