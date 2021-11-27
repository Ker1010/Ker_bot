const url = require('url')
const axios = require('axios')

module.exports = {
            name: 'cat',
            description: "cat",
            execute(message, args){
                axios.get('https://api.thecatapi.com/v1/images/search')
                .then((res) =>{
                message.reply(res.data[0].url)
                })
                .catch((err) => {
                    console.error('ERR:' ,err)
                }
                )
            }
        }