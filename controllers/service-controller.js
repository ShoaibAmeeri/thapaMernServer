const Service = require("../models/service-model")




const contactForm = async (req, res) => {
    try {
       const response = await Service.find()

       if (!response) {
        res.status(404).json({msg: "no service found"});
        return
       }
       
       return res.status(200).json({message : "got services list" , response})
    } catch (error) {
        res.status(500).json({err : error.message , msg: "message not delivered"})
    }

}

module.exports = contactForm