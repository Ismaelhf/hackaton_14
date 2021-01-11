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

const Tourism = ({data, navigation}) => {
  return (
    <>
      {data.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => navigation.navigate('Tourism', {item: {item}})}>
          <View>
            <Text>{item.title}</Text>
            <Image
              style={styles.ciudad}
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
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
});
export default Tourism;
