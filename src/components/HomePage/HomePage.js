import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { searchMovies } from '../../action';
import HomePageRendered from './HomePageRendered'

function Home(props) {

    useEffect(() => {
        props.searchMovies('avengers');
    }, []);
    let { action } = props.searchResults

    return (
        <React.Fragment>
            <HomePageRendered newMovies={action} />
        </React.Fragment>
    );
}

const mapStateToProps = (state) => ({ searchResults: state.searchResults });

export default connect(mapStateToProps, {searchMovies})(Home);