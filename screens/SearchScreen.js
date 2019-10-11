import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchScreen = props => {
    return (
        <View style={styles.container} >
            <Text>
                SearchScreen SearchScreen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SearchScreen;