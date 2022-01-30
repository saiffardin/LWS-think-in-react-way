```js
import React from 'react';

const element = React.createElement('h1', null, 'hello world');

console.log(element);
```
**React.createElement( *p1*, *p2*, *p3* )** eta ekta func ja diye react taar virtual DOM er element gula banai. er moddhe 3 ta param thake:
- p1 - kon type er element 
- p2 - kichu properties (attributes)
- p3 - element er content ki hobe

*react element* holo JS object

dom element is not an object, it's just a *node*

*console.log(element)* korle amra basically ekta object pabo ja dekhte onekta emon:

```js
    element = {
        type: 'h1',
        props: {
            children : 'hello world'
        }
    }
```

---

ekhn amader jodi ei **React.createElement( *p1*, *p2*, *p3* )** diye always likhte hoto, taile bohut pera khawa lagto.

er jonno amra alada ekta syntax use kori, jaar naam **JSX** (JavaScript Xml)

eta dekhte html er moto, kintu html na.

```js
const element = <h1>Hello World</h1>;
```

uporer ta JSX.
amra jokhn eta likhi tokhn **babel** (ekta compiler) eta k *React.createElement()* a convert kore, like this: 

```js
const element = React.createElement('h1', null, 'hello world');
```
---

in my opinion, JSX is like writing HTML code in a JS file.

---

multi-line jsx lekhar jonno pura jsx ke amra bracket () er moddhe niye ashii

```js
const element_1 = (
    <h1 
    className="heading" 
    tabIndex={0}
    >Hello World</h1>
);
```



uporer **element_1** takey amra erokom ekta obj hishebe chinta korte parii

```js
    element_1 = {
        type: 'h1',
        props: {
            className: 'heading',
            tabIndex: 0,
            children : 'hello world'
        }
    }
```

---
now look at this element

```js
const element_2 = (
    <h1 
    className="heading" 
    tabIndex={0}>
        <span className="text">Hello World</span>
        <img src="habijabi" />
    </h1>
);
```

this piece of code converts into:

```js
    element_2 = {
        type: 'h1',
        props: 
        {
            className: 'heading',
            tabIndex: 0,
            children :
            [
                // for span tag
                {
                    type: 'span',
                    props: 
                    {
                        classNam:"text",
                        children : 'hello world'
                    }
                },

                // for img tag
                {
                    type: 'img',
                    props: {
                        src:"habijabi",
                    }
                }
            ]
        }
    }
```

*children* er moddhe jokhn 1+ jinish thake tokhn *children* becomes an ARRAY

---

```js
import React from 'react'
```
eta *react element* banai, kintu eta screen a element *display* korate pare na. 

display koranor jonno ache **ReactDOM**

```js
import ReactDom from 'react-dom';
```

---

```js
ReactDom.render(element, getElementById('root'));
```

eta **root** namok div er moddhe *element* k boshai dibe,

thus amra **element** er jinish takey dekhte parbo.

*React Native* use korle amra tokhn *ReactDom* er poriborte
*ReactNative* kothata use kortam
