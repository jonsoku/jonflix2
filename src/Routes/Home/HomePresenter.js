import React, {Fragment} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 0 20px;
`;


const HomePresenter = ({nowPlaying,popular,upcoming,loading,error}) => (
    <Fragment>
        <Helmet>
            <title>Movies | Jonflix</title>
        </Helmet>
        {loading ? (
        <Loader/>
        ) : (
        <Container>

            {upcoming && upcoming.length > 0 && (
                <Section title="Upcoming">{upcoming.map(movie => (
                    <Poster
                        key={movie.id}
                        id={movie.id}
                        imageUrl={movie.poster_path}
                        title={movie.original_title}
                        rating={movie.vote_average}
                        year={movie.release_date.substring(0,4)}
                        isMovie={true}
                    />
                ))}</Section>
            )}
            {nowPlaying && nowPlaying.length > 0 && (
                <Section title="Now playing">{nowPlaying.map(movie => (
                    <Poster
                        key={movie.id}
                        id={movie.id}
                        imageUrl={movie.poster_path}
                        title={movie.original_title}
                        rating={movie.vote_average}
                        year={movie.release_date.substring(0,4)}
                        isMovie={true}
                    />
                ))}</Section>
            )}
            {popular && popular.length > 0 && (
                <Section title="Popular">{popular.map(movie => (
                    <Poster
                        key={movie.id}
                        id={movie.id}
                        imageUrl={movie.poster_path}
                        title={movie.original_title}
                        rating={movie.vote_average}
                        year={movie.release_date.substring(0,4)}
                        isMovie={true}
                    />
                ))}</Section>
            )}
            {error && <Message color="#e74c3c" text={error}/>}
        </Container>
        )}
    </Fragment>
);




HomePresenter.propTypes = {
    nowPlaying:PropTypes.array,
    popular:PropTypes.array,
    upcoming:PropTypes.array,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.string,

}

export default HomePresenter;