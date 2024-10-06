/* <div id="parent">
    <div id="child">
        <h1>I am in H1 Tag</h1>
        <h2>I am In H2 TAg</h2>
    </div>
     <div id="child2">
        <h1>I am in H1 Tag</h1>
        <h2>I am In H2 TAg</h2>
    </div>
</div> */



// const heading = React.createElement(
//     "h1",
//     {id:"Heading",xyz:"abc"}
//     ,"Hello World");
//             const root = ReactDOM.createRoot(document.getElementById("root"));
//             root.render(heading);


const parent=React.createElement(
    "div",
    {id:"parent"},[
        React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I am in H1 TAg"),
        React.createElement("h2",{},"I am in H2 TAg")
    ]),
    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"I am in H1 TAg"),
    React.createElement("h2",{},"I am in H2 TAg")
    ])
   
]);
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)
