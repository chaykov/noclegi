import {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';

class App extends Component{
  hotels = [
    {
      id: 1,
      name: 'Pod wakacjami',
      city: 'Warszawa',
      rating: '8.3',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt est aspernatur sit aut nesciunt enim vel veritatis laborum nihil optio culpa hic harum.',
      image: ''
    },
    {
      id: 2,
      name: 'Dworzec Suwalski',
      city: 'Suwałki',
      rating: '7.4',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt est aspernatur sit aut nesciunt enim vel veritatis laborum nihil optio culpa hic harum.',
      image: ''
    },
  ];
  state = {
    hotels: [],
    loading: true,
  };

    searchHandler(term){
      console.log('szukaj z app', term);
      const hotels = [...this.hotels]
        .filter(x => x.name
        .toLowerCase()
        .includes(term.toLowerCase()))
      this.setState({hotels});
    }

    componentDidMount(){
      setTimeout(() => {
        this.setState({hotels: this.hotels, loading: false})
      }, 1000);
    }

  render(){
    console.log('component wyrenderowany')
    return(
        <div className="App">
          <Header onSearch={(term) => this.searchHandler(term)}/>
          <Menu />
          
          {this.state.loading ? (
            <LoadingIcon />
          ) : (
            <Hotels hotels={this.state.hotels} />
          )}
        </div>
    );
  }
}

export default App;
