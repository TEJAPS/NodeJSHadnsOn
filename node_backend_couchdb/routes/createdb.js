exports.create = function(req,res){
    NamedNodeMap.bind.create(req.body.dbname, function(){
        if(err){
            res.send("Error creating the Database");
            return;
        }
        res.send("Database created successfully");
    });
};