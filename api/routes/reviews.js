const { Router } = require('express')
const reviewModel = require('../models/Review')

const router = Router()

router.post('/', async (req,res) => {
    const newReview = new reviewModel(req.body)
    try{
        const reviewList = await newReview.save()
        if(!reviewList) throw new Error('Error in saving to database')
    
        res.status(200).json(reviewList);
    }catch(error) {
        res.status(500).json({ message: error.message })
        
    }
})

router.get('/professor/:profID', async(req,res) => {
    const { profID } = req.params
    try{
        const reviewList = await reviewModel.find({profid: profID})
        if(!reviewList) throw new Error('No reviews')
        res.status(200).json(reviewList);
    }catch(error){
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

router.put('/report', async(req,res)=>{
    var review = req.body
    review.status='reported'
    try{
        const reviewList = await reviewModel.findByIdAndUpdate(review._id,review)
        if(!reviewList) throw new Error('Error with reporting')
        res.status(200).json(reviewList);
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

router.put('/cleanse', async(req,res)=>{
    var review = req.body
    review.status='posted'
    try{
        const reviewList = await reviewModel.findByIdAndUpdate(review._id,review)
        if(!reviewList) throw new Error('Error with reporting')
        res.status(200).json(reviewList);
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get('/reports', async(req ,res) => {
    try{
        const reviewList = await reviewModel.find({status: 'reported'})
        if(!reviewList) throw new Error('No reviews')
        res.status(200).json(reviewList);
    }catch(error){
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

router.delete('/:id', async(req, res) => {
    const { id } = req.params
    try{
        const removed = await reviewModel.findByIdAndDelete(id)
        if(!removed) throw new Error('Error in deleting')
        res.status(200).json(removed);
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

module.exports = router;