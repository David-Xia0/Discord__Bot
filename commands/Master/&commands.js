/*
This class is a default type for all commands that will be implemented
*/


class commands 
{
    constructor(name, catagory, description)
    {
        this.name = name;
        this.catagory = catagory;
        this.description = description; 
    }

    async run()
    {
      console.log("default method called");   
    }
}