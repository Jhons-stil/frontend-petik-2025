// import "./Card.css"
// const Card = ({member, harga}) => {
//     const cardBiru = member === "Gold";
//     return(
//         <div>
//             <table className="Card">
//                 <thead className={`Card-head ${cardBiru ? "Card-head-blue" : ""}`}>
//                     <tr>
//                         <td>{member}</td>
//                     </tr>
//                     <tr>
//                         <td>
//                             <p>Rp {harga} <small>/ Mount</small></p>
//                         </td>
//                     </tr>
//                 </thead>
//                 <tbody className="Card-body">
//                     <tr>
//                         <td>
//                             <ul>
//                                 <li><span>AI advisor for a day</span></li>
//                                 <li><span>2 auto tracking</span></li>
//                                 <li><span>7 Day transaction</span></li>
//                                 <li><span>24/7 Customer</span></li>
//                             </ul>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>
//                             <button className={`btn ${cardBiru ? "btn-biru" : ""}`}>Purches Plan</button>
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     )
// };

// export default Card



// ngoding bareng sama kak sukma
import "./Card.css"
const Card = ({title, price, list1, list2, list3, list4, isPopular = false,}) => {
    return(
        <div className={`card ${isPopular ? "card-popular" : ""}`}>
            <div className={`card-header ${isPopular ? "card-popular" : ""}`}>
                <h3>{title}{" "} <span className={isPopular ? "badge-popular" : ""}>{isPopular ? "Popular" : ""}</span></h3>
                <h1>Rp{price} <small>/Mount</small></h1>
            </div>
            <div className="card-body">
                <ul>
                    <li>{list1}</li>
                    <li>{list2}</li>
                    <li>{list3}</li>
                    <li>{list4}</li>
                </ul>
                <button className={`btn ${isPopular ? "btn-popular" : ""}`}>Purchase Plan</button>
            </div>
        </div>
    )
};

export default Card