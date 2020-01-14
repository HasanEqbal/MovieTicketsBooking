import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { searchMovies } from '../../action';
import MovieThubnails from '../Thumbnail/MovieThubnails'

function SearchPage(props) {
  useEffect(() => {
    /* props.match ? props.searchMovies(props.match.params.id) : props.searchMovies("ruler"); */
    props.searchMovies(props.match.params.id)
  }, []);
  let { action } = props.searchResults;


  return (
    <div>
      <MovieThubnails movieThubnails={action} searchedKey={props.match.params.id} />
    </div >
  )
}

const mapStateToProps = (state) => ({ searchResults: state.searchResults });

export default connect(mapStateToProps, { searchMovies })(SearchPage)