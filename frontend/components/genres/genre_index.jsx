import React from 'react';
import GenreIndexItem from './genre_index_item';
import Nav from '../nav/nav_cotainer';



class GenreIndex extends React.Component{
    // componentDidUpdate(prevProps){
    //     if (prevProps.profile.id !== this.props.match.params.profileId){
    //     this.props.fecthProfile(this.props.match.params.profileId);

    //     }
    // }
    componentDidMount(){
        this.props.fetchGenres();
        
        this.props.fecthProfile(this.props.match.params.profileId);
    }
    render(){
        const genres = this.props.genres.map(genre => {
            return <GenreIndexItem profile={this.props.profile}key={genre.id} genre={genre}/>
        });
        
        return(
            <div>
                <Nav profile={this.props.profile}/>
                <ul className="genre-index">
                    {genres}
                </ul>
            </div>
        )
    }
}

export default GenreIndex;