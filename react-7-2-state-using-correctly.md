## *state* shortcut :

age amra **constructor()** er moddhe *state* k initialize korsi ei vabe:

```js
class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        // code for rendering elements
    }
}
```

ekhane jehetu *props* er kono kaaj nai

so amra chaile **constructor()** na likhe ek line a *state* initialize korte partam

```js
class Clock extends React.Component {

    this.state = {date: new Date()};

    render() {
        // code for rendering elements
    }
}
```

---

## using *state* correctly :

1. Do Not Modify State Directly. 
    - Instead, use *setState()*
    - The only place where you can **assign** *this.state* is the **constructor**.

    ```js
    // Wrong
    this.state.comment = 'Hello';

    // Correct
    this.setState({comment: 'Hello'});
    ```
    ---

2. State Updates May Be Asynchronous :
    - react a onkgula *setState()* call chole ashle, react tokhn *batch update* kore
    - means eki shathe onk gula *state* k update kortese
    - ei khetre emon hote pare j, jokhn state jokhn update korte disi, tokhn update na hoye, asynchronously pore update hocche
    - eta muloto hoy jokhn *setState()* er moddhe **previous state** er value ta lage 


    ```js
    // Wrong
    this.setState({
        counter: this.state.counter + this.props.increment
    });

    // Correct
    this.setState((state, props) => ({
        counter: state.counter + props.increment
    }));
    ```

    a second form of *setState()* that accepts a **function** rather than an **object**. 
    
    That function will receive the **previous state** as the **first argument**, 
    
    and the **props** at the time the update is applied as the **second argument**.

    ---

3. State Updates are Merged :

    When you call setState(), React merges the object you provide into the current state.

    For example, your state may contain several independent variables, like : posts, comments

    ```js
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            comments: []
        };
    }

    
    ```


    ```js
    // consider "response.comments" is an new array of comments
    this.setState({
        comments: response.comments
    });
    ```

    The merging is shallow, 
    
    so `this.setState({comments})` leaves `this.state.posts` intact, 
    
    but completely replaces `this.state.comments`.