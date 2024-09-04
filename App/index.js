// 




import express from "express"; //importing express to use it as a backend framework
import axios from "axios";  //importing axios from npm to use it for api requests
import bodyParser from "body-parser"; //importing the body parser miidlleware



const app = express(); //creating a blueprint from express module ! 
const port = 3000; // defining the local port that we will work on ! 
const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"; //the api that we will get the random coctail from ! 





app.use(express.static("public")); //Using the public folder for the static files.
app.use(bodyParser.urlencoded({ extended: true }));




app.get("/", async (req, res) => {
  res.render("index2.ejs");
});



app.get("/recipe", async (req, res) => {
  

    //passing the data we get from the api to ejs 
    const result = await axios.get(API_URL);
    const data = result.data.drinks[0]; //the data we get from the api is alraedy parsed !
    res.render("index2.ejs",{data:data});



    
});



// listening to the local port and starting the server ! 
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});