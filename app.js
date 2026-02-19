import express from "express";

const app= express();
const PORT= 3003;

//Set the view engine
app.set("view engine",'ejs');

app.use(express.static('public'))

app.get('/',(req, res)=>{
    let user={
        name: "Seadrah",
        color: "Yellow",
        food: "Sushi",
        grade:3.6,
        hobbies: ['Yoga', 'Poetry', 'Travel'],
        games: ['Crusader Kings 3', 'Frostpunk', 'Stellaris', "Shadow of the Colossus"]
    }
    res.render("home", { user });
})

app.listen(PORT, ()=>{
    console.log(`Listening on http://localhost:${PORT}`)
})
