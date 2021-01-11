import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const Foods = ({route}) => {
  const item = route.params.item.item;
  // console.warn(item.title);
  return (
    <View style={styles.item}>
      <View>
        <Image
          style={styles.ciudad}
          source={{
            uri: item.image,
          }}
        />
      </View>

      <View style={styles.text}>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.desp}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
  },
  ciudad: {
    width: '100%',
    height: 300,
  },

  text: {
    marginHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  desp: {
    textAlign: 'justify',
  },
});

export default Foods;
