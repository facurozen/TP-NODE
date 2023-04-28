import config from './dbconfig.js';
import sql from 'mssql';

class pizzasServices{
    static getById = async (ID) =>{
        let returnEntity = null;
        console.log('Estpy en: PizzaService.GetById(ID)');
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .input("pID", sql.Int, ID)
                                    .query('SELECT * FROM Pizzas WHERE ID = @pID');
            returnEntity = result.recordSets[0][0];
        }
        catch(error){
            console.log(error);
        }
        return returnEntity;
    }
}
export default pizzasServices