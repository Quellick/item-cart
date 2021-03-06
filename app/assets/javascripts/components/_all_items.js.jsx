class AllItems extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    };
  }
  
  componentDidMount() {
        $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
  }

   render() {
     var items= this.state.items.map((item) => {
       return (
         <div key={item.id}>
             <h3>{item.name}</h3>
             <h4>{item.description}</h4>
             <p>{item.price}</p>
         </div>
      )
    });

      return (
        <div>
          {items}
        </div>
      )
    }
};
