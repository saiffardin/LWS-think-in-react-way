ager xmpl a j button k use korsi, sheta ke ebar amra ekta separate component banabo.

```js
import React, {Component} from 'react';

class Button extends Component {

    constructor(props) {
        super(props);
        const {handleClick} = props;

        this.state = {handleClick};
    }

    render() {
        console.log('Button');
        return (
            <div>
                <button
                    onClick={this.state.handleClick}>
                    Change in bn-BD
                </button> 
            </div>
        );
    }
}

export default Button;
```

---

and our Clock component looks like:-

```js
import React, {Component} from 'react';
import Button from './Button';

class Clock extends Component {

    // state 

    // componentDidMount()  {...}

    // handleClick () {...}


    render() {
        console.log('Clock');
        let time = this.state.date.toLocaleTimeString(this.state.lang);

        return (
            <div>
                <h1>Clock : {time}</h1>
                <Button handleClick={() => this.handleClick('bn-BD')}/>
            </div>
        );
    }
}

export default Clock;
```

amra dekhte pabo j :-
- jotobar *Clock* comp ta render hocche
- totobar-i *Button* comp ta render hocche
- and it totally makes sense, karon *Button* holo *Clock*  er child


---
## Stop unnecessary rendering :


- `shouldComponentUpdate(nextProps, nextState)` :

    - eta class comp er ekta **life-cycle method**
    - eta component **re-render** howar thik aag muhurte call hoy
    - `nextProps` - porer baar render howar time er props
    - `nextState` - porer baar render howar time er state
    - amra *current* props er shathe *next* props compare kore decision nibo j re-render kora lagbe kina
    - othoba *current* <u>state</u> er shathe *next* <u>state</u> compare korte pari

    <br>

    - eta `true` return kole re-render hobe
    - `false` return korle re-render *hobe na*

<br>

### but this won't work, karon each time new **reference** create hocche `Clock` component er moddhe nicher line ta thakar karone

```js
<Button handleClick={() => this.handleClick('bn-BD')}/>
```

### so what we can do is:

- `<Button>` er *handleClick* er moddhe moddhe param pass na kore
- alada **props** hishebe param gula ke pass kora, like dis:

```js
<Button 
    handleClick={this.handleClick}
    lang = {'bn-BD'}
/>
```
---
and *Button* comp er moddhe ei ei changes ana :-

- change in **constructor**
    ```js
    class Button extends Component {

        constructor(props) {
            super(props);
            const {handleClick,lang} = props; // changed

            this.state = {handleClick,lang}; // changed
        }
    }
    ```
    ---

- add a **shouldComponentUpdate()** method
    ```js
    class Button extends Component {

        shouldComponentUpdate(nxtProps) {
            const {handleClick: curr} = this.props;
            const {handleClick: next} = nxtProps;

            if (curr===next) {
                return false;
            }
            else{
                return true;
            }
        }
    }
    ```
    ---

- change in **render()**
    ```js
    
    class Button extends Component {
        render() {
            console.log('Button');

            // change in "onClick"
            return (
                <div>
                    <button
                        onClick={()=>this.state.handleClick(this.state.lang)}>
                        Change in bn-BD
                    </button> 
                </div>
            );
        }
    }
    ```