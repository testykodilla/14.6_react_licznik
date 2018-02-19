var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('div', {},
            React.createElement('button', {onClick: this.increment}, 'Plus '),
            React.createElement('button', {onClick: this.decrement}, 'Minus '),
            React.createElement('p', {}, "Stan rzeczy to: " + this.state.counter)

        ))
    },
    getDefaultProps: function() {
        console.log('Ustawiam domyślne propsy');
},
    cgetInitialState: function() {
        console.log('Ustawiam domyślny stan');
    },
    componentWillMount: function() {
        console.log('Przygotowuję komponent do załadowania');
    },
    componentDidMount: function() {
        console.log('Załadowano komponent');
    },
    shouldComponentUpdate: function() {
        console.log('Sprawdzam konieczność aktualizacji komponentu');
        return true;
    },
    componentDidUpdate: function() {
        console.log('Uaktualniono komponent');
    },
    
});


var element = React.createElement(Counter);
var osobnyElement = React.createElement(Counter);
var dwaLiczniki = React.createElement('div', {}, element, osobnyElement);
ReactDOM.render(dwaLiczniki, document.getElementById('app'));