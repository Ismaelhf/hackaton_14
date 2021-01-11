import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';

const Housing = ({data, navigation}) => {
  return (
    <>
      {data.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => navigation.navigate('Housing', {item: {item}})}>
          <View>
            <Image
              style={styles.mejores}
              source={{
                uri: item.image,
              }}
            />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
});
export default Housing;
