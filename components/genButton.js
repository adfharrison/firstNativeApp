import React from 'react';

import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  Button,
} from 'react-native';
const GenButton = (props) => {
  return (
    <Button
      title={'NEXT CAT!'}
      onPress={() => {
        props.nextPic();
      }}
    ></Button>
  );
};

export default GenButton;
