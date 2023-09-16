import GuideShopping from '@/components/pages/guideShopping-page/guideShopping-page';
import { getGuidShopping } from '@/utils/fetches';
import { montserrat } from "../../../fonts";
import React from 'react';


export default async function shopping() {
    const data = await getGuidShopping('city1', 'shopping1');
    return (
        <div className={`${montserrat.variable}`}>
        <GuideShopping />
        </div>
    );
}
