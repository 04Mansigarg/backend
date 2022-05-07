
const CreateOne = (model) => async (req, res) => {
    try {
        let createdItem = await model.create(req.body)

        res.status(201).json(createdItem)
    }
    catch (e) {
        console.log(e.message)
    }
}

const get = (model) => async (req, res) => {
    try{
        let items = await UserModel.find({})
        res.status(200).json(items);
    }
    catch(e){
        return res.status(500).json({ status: "failed", message: e.message })
    }
}

const getOnlyOne = (model) => async (req, res) => {
    try{
        let item = await model.findById(req.params.id);
        res.status(200).json(item);
    }
    catch(e){
        return res.status(500).json({ status: "failed", message: e.message })
    }
   
};


const updateOne = (model) => async (req, res) => {
   
    try{
        let updatedItem = await model.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedItem); 
    }
    catch(e){
        return res.status(500).json({ status: "failed", message: e.message })
    }
   
}

const deleteOne = (model) => async (req, res) => {
    
    try{
        const deletedItem = await model.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedItem);
    }
    catch(e){
        return res.status(500).json({ status: "failed", message: e.message })
    }
   
}
module.exports = (model) => ({
    createData: CreateOne(model),
    getallData: get(model),
    getOneData: getOnlyOne(model),
    updateData: updateOne(model),
    deleteData: deleteOne(model)
});