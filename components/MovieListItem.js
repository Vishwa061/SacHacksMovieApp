import React from 'react';
import { ImageBackground, Text, StyleSheet, TouchableOpacity } from 'react-native';
import getNews from '../getNews';

const MovieListItem = ({ movie, setIsMovieSelected, setNews }) => {
    return (
        <TouchableOpacity key={movie.id}
            onPress={() => {
                getNews(movie.id).then(newsData => setNews(newsData.items))
                setIsMovieSelected(true);
            }}>
            <ImageBackground source={{ uri: movie.i.imageUrl }} style={styles.container}>
                <Text
                    style={styles.text}
                >
                    {movie.l}
                </Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        backgroundColor: '#00008B',
        width: "100%",
        minHeight: 200,
        paddingTop: 20
    },
    text: {
        fontSize: 35,
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'black'
    }
});

export default MovieListItem;