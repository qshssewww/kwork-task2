
import React from 'react';
import { montserrat } from "../../fonts";
import { getGuidMain } from '@/utils/fetches';
import GuideCatalog from '@/components/pages/guideCatalog-page/guideCatalog-page';

export default async function guide() {
  const data = await getGuidMain();
  return (
    <div className={`${montserrat.variable}`}>
			<GuideCatalog data={data} />
  	</div>
  );
}
