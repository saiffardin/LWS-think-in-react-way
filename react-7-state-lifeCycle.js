class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}


// function tick() {
ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);
// }

// setInterval(tick, 1000);


// ----------------------------------------------------------------
// jokhn 'state' a kono chng ashe, 
// react tokhn abar 'render' k call kore
// state a kono chng korar jonno amra use kori 'setState' method

this.setState({date: new Date()})



// ----------------------------------------------------------------

// amader ei html ekta ghori show kore, jetai proti second a shomoy chng hocche

// so ei khane amra kokhn amader state k chng korbo?
// uttor holo jokhn 2:45:54 (2 ta 45 min 54 sec) dekhano shesh
// er por por-ii state takey chng kore 2:45:55 korbo
// means prothom baar DOM a ghori ta dekhanor por erpor state chng korte hobe

// 'componenrDidMount()'
// eta class comp er ekta life-cycle method
// it runs after the component has been rendered to the DOM


/** In applications with many components, it’s very important to free up resources taken by the components when they are destroyed. */

// 'componenrWillUnmount()'
// etao class comp er ekta life-cycle method
// DOM jodi route use kore onno jaigai chole jai...
// tokhn DOM a thaka current component gula k unmount kora lage
// unmount na korle oi components gula unnecessarily theke jabe
// 'componenrWillUnmount()' -> unmount howar aag muhurte call hoy


// ----------------------------------------------------------------






