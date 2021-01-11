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

const Foods = ({data, navigation}) => {
  return (
    <>
      {data.map((item) => (
        <View style={styles.listadoItem} key={item.id}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Foods', {item: {item}})}>
            <Image
              style={styles.mejores}
              source={{
                uri: item.image,
              }}
            />
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  listadoItem: {
    flexBasis: '49%',
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
});
export default Foods;
