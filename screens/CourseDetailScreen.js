import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CourseDetailScreen = props => {
    const teacherId = props.navigation.getParam('courseId');
    return (
        <View style={styles.container} >
            <Text>CourseDetailScreen</Text>
            <Text>{teacherId}</Text>
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

export default CourseDetailScreen;