import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Section from '../../Components/Section';
import Loader from '../../Components/Loader';

const Container = styled.div`
    padding:0 10px;
`;

const HomePresenter = ({nowPlaying, upcoming, popular, loading, error}) => loading ? (
    <Loader />):
(    <Container>
        {nowPlaying && nowPlaying.length > 0 &&(
            <Section title="현재 상영작">
                {nowPlaying.map(movie => (
                    <span key={movie.id}>{movie.title}</span>
                ))}
            </Section>
        )}
        
        {nowPlaying && upcoming.length > 0 &&(
            <Section title="개봉 예정작">
                {upcoming.map(movie => (
                    <span key={movie.id}>{movie.title}</span>
                ))}
            </Section>
        )}
        
        {nowPlaying && popular.length > 0 &&(
            <Section title="인기 영화">
                {popular.map(movie => (
                    <span key={movie.id}>{movie.title}</span>
                ))}
            </Section>
        )}

    </Container>
)

HomePresenter.propTypes = {
    nowPlaying:PropTypes.array,
    upcoming:PropTypes.array,
    popular:PropTypes.array,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.string
};



export default HomePresenter;