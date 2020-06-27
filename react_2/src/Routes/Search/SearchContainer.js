import React from 'react';
import SearchPresenter from './SearchPresenter';
import {moviesApi} from "../../api";

export default class extends React.Component {
    state={
        movieResults:null,
        searchTerm:"",
        loading:false,
        error:null
    };

    handleSubmit = event => {
        event.preventDefault();
        cosnt {searchTerm} = this.state;
        if(searchTerm !== ""){
            this.searchByTerm();
        }
    }

    updateTerm = event =>{
        const{
            target : {value}
        } = event;
        this.setState({
            searchTerm:value
        })
    }

    searchByTerm = async () => {
        const {searchTerm} = this.state;
        this.setState({loading:true});
        try{
            const{
                data:{results:movieResults}
            } = await moviesApi.search(searchTerm);

            this.setState({
                movieResults
            })
        }catch{
            this.setState({"error:데이터를 찾지 못했습니다."})
        }finally{
            this.setState({loading:false});
        }
    }


    render(){
        const{movieResults,searchTerm,loading,error} = this.state;
        return{
            <SearchPresenter movieResults={movieResults},searchTerm={searchTerm},loading={loading},error={error} handleSubmit={this.handleSubmit} updateTerm={useImperativeHandle(
                ref,
                () => {
                    handler
                },
                [input],
            )}/>
        }
    }
}