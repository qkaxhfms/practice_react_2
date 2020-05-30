import React from 'react';
import DetailPresenter from "./DetailPresenter";
import {moviesApi} from '../../api';

export default class extends React.Component{
    constructor(props){
        super(props);
        const{
            loaction:{pathname}
        } = props;
        this.state = {
            result:null,
            error:null,
            loading:true,
            isMovie:pathname.includes("/movie/")
        }
    }

    async componentDidMount(){
        const {
            match:{
                params :{id}
            },
            history:{push}
        } = this.props;
        const {isMovie} = this.state;
        const parsedId = parseInt(id);
        if(isNam(parsedId)){
            return push("/");
        }

        let result = null;

        try{
            if(isMovie){
                ({data:result} = await moviesApi.movieDetail(parseId));
            }else{
                throw new Error("Error");
            }
        }
        catch{
            this.setState({erorr:"nonononono"});
        }
        finally{
            this.setState({loading:false,result});
        }
    }

    render(){
        const {result,error,loading} = this.state;
        return <DetailPresenter result={result} error={error} loading={loading} />
    }
}