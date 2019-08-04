import React from 'react';
import { View, Image } from 'react-native' ;
const d = 'http://alphamag.ir/wp-content/uploads/2018/06/good-1.gif';

const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#09111E',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Image source={{ uri: d }} style={{ height: '50%', width: '50%' }} />
    </View>
  );
} ;

export default Loader ;
