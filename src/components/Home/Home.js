import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../MovieList/MovieList ';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home(){
    const [data, setData] = useState([]);
    const getAllRecipes = async () => {
        // await // here the thing that will happen (fetching from API or getting from database )
        // return await axios.get(`${process.env.REACT_APP_BASE_URL}/recipes`)
        return await axios.get('https://hamzhapp.herokuapp.com/trending')
            .then(result => {
                return result.data;
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(()=>{
        void(async()=>{
          let data = await getAllRecipes();
          setData(data);
        })();   
    },[]);

    return(
        <MovieList data={data} />
    )
}

export default Home; 