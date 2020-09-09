export default class DataWeather {

    api_key = '569165cf2dc6467ad8380edcdc607966';

    getResource = async(city) =>{
        const respons = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.api_key}`);


        if(!respons){
            throw new Error('Error');
        }
        
        const result =  await respons.json();
        return this.getDetailsInfo(result);
    }


    getDetailsInfo = ({cod,list,city}) =>{

        return {cod,list,city}
    }

}
