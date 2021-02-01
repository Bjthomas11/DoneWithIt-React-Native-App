import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppImageInput from '../AppImageInput/AppImageInput';

const AppImageInputList = ({imageURIs = [], onRemoveImage, onAddImage}) => {
return <View style={styles.container}>
    {imageURIs.map((uri) => <View style={styles.image} key={uri}>
    <AppImageInput imageURI={uri}  onChangeImage={() => onRemoveImage(uri)} />
    </View>
    )}
    <AppImageInput onChangeImage={uri => onAddImage(uri)}/>
</View>;
}

const styles = StyleSheet.create({
container: {
    flexDirection: "row"
},
image: {
    marginRight: 10
}
});

export default AppImageInputList;