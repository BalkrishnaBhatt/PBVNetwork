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
  TextInput,
  Text,
  View,
} from 'react-native';
import {Colors} from '../../utils/colors';

const CustomTextInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  style = {},
  keyboardType = 'default',
  onSubmit = () => {},
}) => {
  // const focus = () => {
  //   this.refs.textInputRef.focus();
  // };
  // const textInputRef = useRef(null);
  return (
    <View style={{paddingVertical: 10}}>
      <Text style={{color: Colors.grey}}>{label}</Text>
      <TextInput
        // ref={textInputRef}
        value={value}
        placeholder={placeholder}
        onChangeText={text => {
          onChangeText(text);
        }}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={[
          {
            borderBottomColor: Colors.primary_color,
            borderBottomWidth: 1,
            paddingVertical: 5,
            color: Colors.primary_color,
          },
          style,
        ]}
        onSubmitEditing={() => onSubmit()}
      />
    </View>
  );
};
export default CustomTextInput;
