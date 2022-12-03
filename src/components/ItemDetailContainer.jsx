import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
    //estado para productos*/
    const [product, setProduct] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const refDoc = doc(db, 'products', idItem);

        getDoc(refDoc).then((item) => {
            const auxItem = {
                ...item.data(),
                id: item.id,
            };
            //iniciando el estado para productos*/
            setProduct(auxItem);
        });
        }, [idItem]);
        return (
            <>
                <ItemDetail product={product}/>
            </>
        );
    }