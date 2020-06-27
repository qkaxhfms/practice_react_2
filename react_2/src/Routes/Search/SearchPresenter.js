import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import Section from '../../Components/Section';

const Container = styled.div`
    padding:0 20px;
`;

const Form = styled.form`
    margin-bottom:50px;
    width:100%;
`;

const Input = styled.input`
    all:unset;
    font-size:28px;
    width:100%;
`;


const SearchPresenter = ({
    movieResults,
    loading,
    searchTerm,
    handleSubmit,
    error,
    updateTerm
}) => (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input value={searchTerm} onChange={updateTerm}/>
        </Form>
        {loading ? (
            <Loader />
        ):(
            <>
                {movieResults && movieResults.length > 0 && (
                    <Section title="영화 검색결과">
                        {movieResults.map(movie => (
                            <span key={movie.id}>{movie.title}</span>
                        ))}
                    </Section>
                )}
            </>
        )}
    </Container>
);

SearchPresenter.propTypes = {
    moiveResults: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    searchTerm: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    updateTerm: PropTypes.func.isRequired
}

export default SearchPresenter;