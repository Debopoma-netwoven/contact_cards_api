1. You need to install mongo DB community server in your system
2. In command prompt run:(check the path in c drive if some other version is installed)
	"c:\Program Files\Mongo DB\Server\3.6\bin\mongod.exe"
3.In another command prompt run:(check the path in c drive if some other version is installed)
	"c:\Program Files\Mongo DB\Server\3.6\bin\mongo.exe"
4.In this 2nd command prompt to create DB run:
	use Contacts
5.Next to create collections:
	db.createCollection("ContactList")
6. Install MongoDBUI from:
	https://RoboMongo.org/
7.Open the Robo Mongo UI and create new connection to the mongo DB you just created.
	The address will be:localhost and port:27017 by default
8. You will see once connection is created you can see the collection ContactList you just created.
9. Right click on it to insert records using insert document:
sample:{ _id: 1, name: 'Debopoma Chaudhury', company: 'Netwoven', designation: 'Senior Engineer', age: '32 yrs', location: 'Kolkata', image: '../images/dc.png' }
10.So this record gets added to your collection.
11. Once you have cloned the API and done npm install run: npm run dev to start the node server
The port in this sample is 3000.
12.Once this is up npm start your contact_cards_react after you have cloned it and ran npm intall.
13.The record sample you added above should show.
14.What ever update/delete/add operations you perform here should reflect in your mongodb database contactlist


