```js
import React from 'react';

class Clock extends React.Component {
    render () {
        let time = new Date().toLocaleTimeString(this.props.locale);

        return (
            <h1 className="heading">
                <span className="text">{time}</span>
            </h1>
        )
    }
}

export default Clock;
```

ei *Clock* class ekhn ekta *component*.

etake amader **App.js** a boshai dile browser a clock show korbe.

---

etakei ekhn functional component banabo, ebong in the mean time *state* jinishta bujhbo

- state holo component er nijossho data
- state is "data that changes"
- *props* baire thike ashe, r comp er vitore eta change kora uchit na
- jokhn *state* a kono chng ashe, react tokhn abar *render()* method k call kore

---

## Where *state* comes from?

- *React.Component* class er ekta **property** ase jaar naam *state* (exactly ei naamei likha lagbe)
- amra jokhn ei *state* namer property ke change korbo tokhn component re-render hobe.

---

## *state* property of a class component:

- j kono class er property k *initially set korar jonno* amra oi class er **constructor()** ke use kori
- *child* jodi taar *parent* er constructor k call korte chai tokhn **super()** use kore
- *state* a kono chng korar jonno amra use kori **setState()** method


```js
import React from 'react';

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render () {
        // this.state.date === new Date()
        let time = this.state.date.toLocaleTimeString(this.props.locale);

        return (
            <h1 className="heading">
                <span className="text">{time}</span>
            </h1>
        )
    }
}

export default Clock;
```


upore j ghorita banalam sheta proti second a change hoy na

just ekbar load hoye shomoy ta theme thake

amra ekta running ghori chai, jetai proti second a shomoy chng hocche

so ei khane amra kokhn amader state k chng korbo? uttor hocche 
-  jokhn 2:45:54 (2 ta 45 min 54 sec) dekhano shesh, er por por-ii state takey chng kore 2:45:55 korbo
- means prothom baar DOM a ghori ta dekhanor por porei state chng korte hobe

---

## componentDidMount() :

- eta class comp er ekta **life-cycle method**
- it runs **after** the component has been **rendered** to the DOM
- In applications with many components, it’s very important to *free up resources* taken by the components *when they are destroyed*.

```js
class Clock extends React.Component {

    componentDidMount() {
        setInterval(() => {
            this.setState({date: new Date()});
        }, 1000);
    }

    render () {
        let time = this.state.date.toLocaleTimeString(this.props.locale);
 
        return (
            <h1 className="heading">
                <span className="text">{time}</span>
            </h1>
        )
    }
}
```

### whats happening here ?
- react promothe **render()** k call korbe
- element gula DOM a render howa matroi **componentDidMount()** call hobe
- shekhane 1 sec por *state* ta change hobe 
- *state*  jehetu change hoise, so abar **render()** method ta call hobe
- r evabei amader ghori ta running obosthai cholte thakbe

--- 

## componentWillUnmount() :

- etao class comp er ekta **life-cycle method**
- DOM jodi route use kore onno jaigai chole jai...
- tokhn DOM a thaka current component gula k **unmount** kora lage
- unmount na korle oi components gula unnecessarily theke jabe
- ei method, unmount howar aag muhurte call hoy
