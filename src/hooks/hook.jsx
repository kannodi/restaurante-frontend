class OrderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mesa: "", items: [] };
    }
    agregarItem(item) {
        this.setState({ items: [...this.state.items, item] });
    }

    render() {
        return <div>{this.state.mesa}</div>;
    }
}

export default OrderForm;   