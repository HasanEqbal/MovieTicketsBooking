import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { searchMovies } from '../../action';
import MovieThubnails from '../Thumbnail/MovieThubnails'



function Viewall(props) {
    useEffect(() => {
        props.searchMovies('avengers');
    }, []);
    let { action } = props.searchResults;

    return (
        <div>
            <MovieThubnails movieThubnails={action} />
        </div >
    )
}



const mapStateToProps = (state) => ({ searchResults: state.searchResults });


export default connect(mapStateToProps, {searchMovies})(Viewall)

