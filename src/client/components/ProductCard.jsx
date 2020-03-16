import React from 'react';
import {Card} from "react-bootstrap";

const ProductCard = ({product}) => {
    // console.log(product);

    return (
        <div className="pr-0 col-12 col-md-6 col-lg-4 col-xl-3">
                <Card className="product-card">
                    <Card.Img className="card-image" variant="top"
                              src="https://cdn4.mystore4.no/thumb/401_600/stavangerkaff/72805_Kenya_AA_Mount_Kenya_Selection_LYSBRENT__1kg_1.png"/>
                    <Card.Body>
                        <Card.Subtitle className="vendor mb-2 text-muted">{product.vendor.displayName}</Card.Subtitle>
                        <Card.Title className="product-title">{product.title}</Card.Title>
                        <Card.Text className="short-description">Fantastisk kaffe med smak av himmel og et hint av grønne blader..</Card.Text>
                        <Card.Subtitle className="price">
                         140Kr
                        </Card.Subtitle>
                        

                    </Card.Body>
                </Card>
        </div>

    )
};

export default ProductCard

/*
<div key={product.id} value={product.title}>
<h3>{product.vendor.displayName}</h3>
<h5>{product.title}</h5>
<ul>
<li>
{product.description}
</li>
<li>
{product.flavorProfile}
</li>
</ul>
</div>
*
 */
   /*Pris: product.SKU[0].price
   product.saleText**/
