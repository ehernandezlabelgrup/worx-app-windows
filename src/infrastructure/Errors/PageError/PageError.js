import React from 'react';
import {Image, View} from 'react-native';
import Button from '../../../components/commons/Button';
import Paragraphs from '../../../components/commons/Paragraphs/Paraghraps';
import {Flex, Margin, Padding} from '../../theme';
import RNRestart from 'react-native-restart'; // Import package from node modules

const PageError = () => {
  return (
    <View style={[Flex.flex1, Flex.itemsCenter, Flex.justifyCenter]}>
      <Image
        source={require('../../../assets/img/emptystates/error.png')}
        style={{width: 80, height: 80}}
      />
      <View style={[Padding.py10]}>
        <Paragraphs>Ups!, parace que ha ocurrido un error</Paragraphs>
        <Button
          uppercase
          title="Reiniciar"
          onPress={() => RNRestart.Restart()}
          rounded
          style={[Margin.my10]}
        />
      </View>
    </View>
  );
};

export default PageError;
