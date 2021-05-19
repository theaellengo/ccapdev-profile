const { Router } = require('express')
const profsModel = require('../models/Prof')

const router = Router()

router.post('/', async (req, res) =>{ // create new Prof
    const newProf = new profsModel(req.body)
    try{
        const test = await profsModel.findOne({idNum: newProf.idNum})
        if(test) return res.status(400).json({message: "ID number already taken!"})

        const profsList = await newProf.save()
        if(!profsList) throw new Error('Error in saving to database')
    
        res.status(200).json(profsList);
    }catch(error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/all', async (req, res) =>{ // get ALL profs
    try{
        const profsList = await profsModel.find()
        
        if(!profsList) throw new Error('No profs')
    
        res.status(200).json(profsList);
    }catch(error) {
        res.status(500).json({ message: error.message })
        
    }
})

router.post('/search', async (req, res) =>{ // get profs given name and/or college
    var options = {
        name: {
            $regex: req.body.searchName,
            $options: 'i'
        },
        college: req.body.searchCollege
    }
    if(req.body.searchCollege == 'all'){
        delete options.college
    }
    try{
        const profsList = await profsModel.find(options)
        console.log(profsList)
        if(!profsList) throw new Error('No profs')
        
        res.status(200).json(profsList);
    }catch(error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
        
    }
})

router.get('/:idNum', async (req, res) =>{ // get 1 prof
    const { idNum } = req.params
    try{
        const prof = await profsModel.findOne({idNum: idNum})
        
        if(!prof) throw new Error('Prof does not exist')
    
        res.status(200).json(prof);
    }catch(error) {
        res.status(500).json({ message: error.message })
        
    }
})

router.put('/:id', async (req, res) =>{ // edit prof
    const { id } = req.params
    try{
        const response = await profsModel.findByIdAndUpdate(id, req.body)
        
        if(!response) throw new Error('Error in updating')
        const updated = { ...response._doc, ...req.body}
        res.status(200).json(updated);
    }catch(error) {
        res.status(500).json({ message: error.message })
        
    }
})

router.delete('/:id', async (req, res) =>{ // delete prof
    const { id } = req.params
    try{
        const response = await profsModel.findByIdAndDelete(id)
        if(!response) throw new Error('Error in deleting')
        res.status(200).json(response);
    }catch(error) {
        res.status(500).json({ message: error.message })
        
    }
})

module.exports = router;
