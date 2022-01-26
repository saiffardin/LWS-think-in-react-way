### React Components:
1. Class Component
2. Functional Components

---
### Functional Components:

- ekta *function* ja kina JSX return kore
- besh koakta *react element* mile *component* banai
- era **stateless**, means:
    - functional components er moddhe kono *state* thakle, shei state ta component nije nije change korte pare na
    - state change korar jonno baire thike input (props) asha lagbe

```js
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
```

---
### Class Components:

- *class* hocche ekta **stateful** component

```js
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
```

---
### How we render components:

```js
const element  = <Welcome name="Sara" />;
const location = document.getElementById('root');

ReactDOM.render(element, location);
```