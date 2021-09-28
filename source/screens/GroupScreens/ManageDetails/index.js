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
  ToastAndroid,
} from 'react-native';
import CustomSafeAreaView from '../../../components/CustomSafeAreaView';
import {CheckedSymbol, EditSymbol, UncheckedSymbol} from '../../../utils/svg';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import {NAVIGATION} from '../../../constant';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Fonts} from '../../../utils/fonts';
import Common_styles from '../../../utils/commonStyle';
import ImagePickerComponent from '../../../components/ImagePickerComponent';
const Tab = createMaterialTopTabNavigator();
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const ManageDetails = ({navigation, route, ...props}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);
  const [groupName, setGroupName] = useState('');
  const [groupDescription, setGroupDescription] = useState('');
  const [notify, setNotify] = useState(false);
  const [groupPhoto, setGroupPhoto] = useState('');
  const [coverPhoto, setCoverPhoto] = useState('');
  const [openPhotoSelector, setOpenPhotoSelector] = useState(false);
  const [openCoverSelector, setOpenCoverSelector] = useState(false);

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
  return (
    <>
      <View style={Styles.View_Main}>
        <View style={Styles.view_field_main}>
          <Text style={Styles.text_field_title}>Group Name (required)</Text>
          <TextInput
            placeholder="Group Name"
            style={Styles.textinput_field}
            value={groupName}
            onChangeText={value => setGroupName(value)}
          />
        </View>
        <View style={[Styles.view_field_main, {borderBottomWidth: 0}]}>
          <Text style={Styles.text_field_title}>
            Group Description (required)
          </Text>
          <TextInput
            placeholder="Group Description"
            style={Styles.textinput_field}
            value={groupDescription}
            onChangeText={value => setGroupDescription(value)}
          />
        </View>
        <View style={Common_styles.Flex_Direction_Row_with_center}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setNotify(!notify)}>
            {notify ? (
              <CheckedSymbol style={Styles.CheckedSymbol} />
            ) : (
              <UncheckedSymbol style={Styles.CheckedSymbol} />
            )}
          </TouchableOpacity>
          <Text style={Styles.text_field_title}>
            Notify group members of these changes via email
          </Text>
        </View>
        <View style={Styles.view_field_main}>
          <Text style={Styles.text_field_title}>
            Upload an image to use as a profile photo for this group. The image
            will be shown on the main group page, and in search results.
          </Text>
          {groupPhoto == '' ? (
            <TouchableOpacity
              style={Styles.view_upload}
              activeOpacity={0.8}
              onPress={() => {
                setOpenPhotoSelector(true);
              }}>
              <Text style={Styles.text_upload_image}>
                {'Upload\nGroup\nPhoto'}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setOpenPhotoSelector(true);
              }}
              style={{alignSelf: 'center'}}>
              <Image
                source={{uri: groupPhoto}}
                resizeMode="cover"
                style={Styles.image_style}
              />
              <EditSymbol style={Styles.EditSymbol} />
            </TouchableOpacity>
          )}
        </View>
        <View style={[Styles.view_field_main, {borderBottomWidth: 0}]}>
          <Text style={Styles.text_field_title}>
            The Cover Image will be used to customize the header of your group.
          </Text>
          {coverPhoto == '' ? (
            <TouchableOpacity
              style={Styles.view_upload}
              activeOpacity={0.8}
              onPress={() => {
                setOpenCoverSelector(true);
              }}>
              <Text style={Styles.text_upload_image}>
                {'Upload\nCover\nPhoto'}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setOpenCoverSelector(true);
              }}
              style={{alignSelf: 'center'}}>
              <Image
                source={{uri: coverPhoto}}
                resizeMode="cover"
                style={Styles.image_style}
              />
              <EditSymbol style={Styles.EditSymbol} />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            // navigation.navigate(label);
            ToastAndroid.show('Changes Saved successfully', ToastAndroid.SHORT);
          }}
          style={Styles.view_save_changes}>
          <Text style={Styles.text_save_changes}>Save Changes</Text>
        </TouchableOpacity>
      </View>
      <ImagePickerComponent
        isVisible={openCoverSelector || openPhotoSelector}
        onClose={() => {
          setOpenCoverSelector(false);
          setOpenPhotoSelector(false);
        }}
        onSelect={image =>
          openPhotoSelector ? setGroupPhoto(image) : setCoverPhoto(image)
        }
      />
    </>
  );
};
export default ManageDetails;
