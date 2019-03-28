import React from 'react';
import GenreIndexItem from './genre_index_item';



class GenreIndex extends React.Component{
    componentDidMount(){
        this.props.fetchGenres();
    }
    render(){
        const genres = this.props.genres.map(genre => {
            return <GenreIndexItem key={genre.id} genre={genre}/>
        });
        
        return(
            <ul>
                {genres}
            </ul>
        )
    }
}

export default GenreIndex;