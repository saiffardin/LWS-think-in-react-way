## Basic Class:

*Clock* namok ekta class banalam

er moddhe *print()* namok method ase ja kina ekta JSX return kore.
```js
class Clock {
    print() {
        return (
            <h1>Hello World</h1>;
        );
    }
}
```
---
now let's create an obj of that class.

and try to render it
```js
const ClockComponent = new Clock();

const location = document.getElementById('root');

ReactDOM.render(ClockComponent.print(), location)
```

ekhn last line k jodi evabe likhi tahole kaaj korbe na. 

eta jodio *functional components* er khetre kaaj kore.

kintu class components er khetre kaaj korbe na.

```js
ReactDOM.render(<ClockComponent/>, location)
```

---
class components er khetre etake kaaj korate chaile:
- amader *React.Component* k extend korte hobe.
- ebong **render()** method k *overwrite* korte hobe. onno method diye kaaj korle hobe na.

```js
class Clock extends React.Component {
    render() {
        return (
            <h1>Hello World</h1>;
        );
    }
}
```

```js
const ClockComponent = new Clock();

const location = document.getElementById('root');

ReactDOM.render(<ClockComponent/>, location)
```
---

## Props in a Class:

*ClockComponent* a props er moddhe *locale* pathate gele evabe likhte hobe:

```js
const ClockComponent = new Clock();

const location = document.getElementById('root');

ReactDOM.render(<ClockComponent locale="bn-BD"/>, location)
```

JSX er niyom onujai *locale* ta *props* nakom obj er moddhe thakar kotha.

kintu amader *ClockComponent* class moddhe *props* name kono kichu nai.

tobe *React.Component* class moddhe *props* namok property ache. 

extend korar karone amader *ClockComponent* class er moddheo *props* chole ashbe 

---

## Some Notes:

1. react a jokhn **props** a kono change hoy, react pura jinish takey *re-render* kore.
2. er jonno **props** ke kokhono *render()* method er moddhe thike change korbo na. tahole *infinite loop* a pore jete pari.
3. **props** always baire thike change hobe