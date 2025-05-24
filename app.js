       
        const parent2 = React.createElement("div", {id:"paent"} , [

        React.createElement( "div", {id:"child"} , [
            React.createElement("h1", {} , "I am h1 in nested React" )
            ,React.createElement("h2", {} , "I am h2 in nested React" )
        ] ),
         React.createElement( "div", {id:"child"} , [
            React.createElement("h1", {} , "I am h1 in nested React" )
            ,React.createElement("h2", {} , "I am h2 in nested React" )
        ] )
        ]

        );



        console.log();
       
       const heading = React.createElement("h1" , { id:"heading"} , "Hello World from React ");

        console.log( parent);


         const root = ReactDOM.createRoot(document.getElementById("root"));
        
        root.render(parent2);