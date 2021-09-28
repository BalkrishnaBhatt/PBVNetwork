import React, {useRef} from 'react';
import {TextInput, Text, View} from 'react-native';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';

const CustomTextInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  style = {},
  keyboardType = 'default',
  returnKeyType = 'done',
  onSubmit = () => {},
  errorText = '',
}) => {
  const focus = () => {
    textInputRef.current.focus();
  };
  const textInputRef = useRef(null);
  return (
    <View style={{paddingVertical: 10}}>
      <Text
        style={{
          color: Colors.grey,
          fontSize: 14,
          fontFamily: Fonts.Regular_font,
        }}>
        {label}
      </Text>
      <TextInput
        ref={textInputRef}
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
            fontFamily: Fonts.Regular_font,
            fontSize: 16,
          },
          style,
        ]}
        returnKeyType={returnKeyType}
        onSubmitEditing={() => onSubmit()}
      />
      {errorText == '' ? null : (
        <Text
          style={{
            color: Colors.red,
            fontSize: 14,
            fontFamily: Fonts.Regular_font,
          }}>
          {errorText}
        </Text>
      )}
    </View>
  );
};
export default CustomTextInput;
