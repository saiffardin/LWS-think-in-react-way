# Conditional Rendering, List and Keys 


Keys serve as a hint to React but *they don’t get passed to your components.* 

If you need the same value in your component, pass it explicitly as a prop with a different name:

```js
const content = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title} />
);
```

With the example above, the `Post` component can read `props.id`, but not `props.key`.