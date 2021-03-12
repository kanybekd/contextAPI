import {useParams} from "react-router-dom"
import { useGlobalContext } from '../context'
function SingleCocktail(){
    const { cocktails, loading } = useGlobalContext()
    const {id} = useParams()
    const dat = cocktails.filter(i=>i.id===id)
    console.log(dat,"<><>")
    return(
        <div className="single-cocktail">
            <div>
               {/* <img src={dat.image} alt="cocktail"/> */}
               <img className="individ" src={dat[0].image} alt="tail" />
                <p className="descr">Glass:{dat[0].glass}</p>
                <p className="descr">Info:{dat[0].info}</p>
                <p className="descr">Name: {dat[0].name}</p>
            </div>
        </div>
        )
}

export default SingleCocktail;

//  "https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg"
