const axios = require('axios')

class Controller{

    static getEasy(req,res,next){
        axios({
            method: 'GET',
            url: 'https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple',
      
          })
            .then(result=>{
                res.status(200).json(result.data)
            })

            .catch(err=>{
                next(err)
            })
          
    }

    static getMedium(req,res,next){
        axios({
            method: 'GET',
            url: 'https://opentdb.com/api.php?amount=1&difficulty=medium&type=multiple',
      
          })
            .then(result=>{
                res.status(200).json(result.data)
            })

            .catch(err=>{
                next(err)
            })
          
    }
    static getHard(req,res,next){
        axios({
            method: 'GET',
            url: 'https://opentdb.com/api.php?amount=1&difficulty=hard&type=multiple',
      
          })
            .then(result=>{
                res.status(200).json(result.data)
            })

            .catch(err=>{
                next(err)
            })
          
    }

    static askAudience(req,res,next){

        let array = [0,0,0,0]
        console.log(req.params.rightAnswer)
        let remaining = 80
        if(req.params.rightAnswer == 'A'){
            array[0]+=20
            let firstRandom = Math.random()*remaining/2
            remaining-= firstRandom
            let secondRandom = Math.random()*remaining
            remaining-=secondRandom
            let thirdRandom = Math.random()* remaining
            remaining-=thirdRandom
            array[1]+=firstRandom
            array[2]+=secondRandom
            array[3]+=remaining
            array[0]+=thirdRandom
        }else if(req.params.rightAnswer == 'B'){
            array[1]+=20
            let firstRandom = Math.random()*remaining/2
            remaining-= firstRandom
            let secondRandom = Math.random()*remaining
            remaining-=secondRandom
            let thirdRandom = Math.random()* remaining
            remaining-=thirdRandom
            array[2]+=firstRandom
            array[0]+=secondRandom
            array[3]+=remaining
            array[1]+=thirdRandom
        }else if(req.params.rightAnswer == 'C'){
            array[2]+=20
            let firstRandom = Math.random()*remaining/2
            remaining-= firstRandom
            let secondRandom = Math.random()*remaining
            remaining-=secondRandom
            let thirdRandom = Math.random()* remaining
            remaining-=thirdRandom
            array[1]+=firstRandom
            array[2]+=secondRandom
            array[3]+=remaining
            array[0]+=thirdRandom
        }else if(req.params.rightAnswer == 'D'){
            array[3]+=20
            let firstRandom = Math.random()*remaining/2
            remaining-= firstRandom
            let secondRandom = Math.random()*remaining
            remaining-=secondRandom
            let thirdRandom = Math.random()* remaining
            remaining-=thirdRandom
            array[1]+=firstRandom
            array[2]+=secondRandom
            array[0]+=remaining
            array[3]+=thirdRandom
        }
        console.log(array)
        axios({
            method: 'GET',
            url: `https://image-charts.com/chart?cht=bvg&chs=300x200&chd=t:${array[0]},${array[1]},${array[2]},${array[3]}&chl=A|B|C|D`,
      
          })
            .then(result=>{
                console.log(result)
                res.status(200).json(result.config.url)
            })

            .catch(err=>{
                next(err)
            })
    }
}

module.exports = Controller