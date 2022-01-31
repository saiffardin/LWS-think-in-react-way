# Render Props Pettern

```js
function App() {

    return (
        <div>
            <h1>HOC</h1>
            <ClickComponent></ClickComponent>
            <HoverComponent></HoverComponent>
            <User name={(isLoggedIn) => isLoggedIn ? 'Saif' : 'Guest'} />
        </div>
    );
}
```

```js
import React from 'react';

const User = (props) => {

    const {name} = props;
    return (
        <div>
            <h2>{name(true)}</h2>
        </div>
    );
}

export default User;
```
Notes:
- `User` ki render korbe sheta `User` er vitore decide hocche na
- `User` er *render logic* ta ache `App` component er moddhe

---
### what is *render prop* ?
- eta hocche ekta func 
- eta decide kore comp ki render korbe

---
- amra ekta component banabo
- ei component props hishebe ekta func pabe
- then render er return er moddhe oi function takey call korbe 
- ei component er moddhe jei state r methods **common** shegula thakbe

```js
function App() {

    return (
        <div>
            <h1>render prop</h1>
            <Counter
                render={(count, handleIncrement) => {
                    return (
                        <ClickComponent
                            count={count}
                            handleIncrement={handleIncrement}
                        />
                    )
                }
                }
            />
        </div>
    );
}
```
---
`Counter` comp er moddhe `render` ekta prop hishebe jabe.
ei `render` er moddhe anonymous func pass korbo  
```js
<Counter render = {anonymous}>
```
---
the function is
```js
const anonymous = (count, handleIncrement) => {
                    return (
                        <ClickComponent
                            count={count}
                            handleIncrement={handleIncrement}
                        />
                    )
                }
```