import React from 'react';
import GenreIndexItem from './genre_index_item';
import Nav from '../nav/nav_cotainer';



class GenreIndex extends React.Component{
    componentDidMount(){
        this.props.fetchGenres();
    }
    render(){
        const genres = this.props.genres.map(genre => {
            return <GenreIndexItem key={genre.id} genre={genre}/>
        });
        
        return(
            <div>
                <Nav />
                <ul>
                    {genres}
                </ul>
            </div>
        )
    }
}

export default GenreIndex;