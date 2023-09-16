
import React from 'react';
import { montserrat } from "../../fonts";
import GuideCity from '@/components/pages/guideCity-page/guideCity-page';

export default async function guide() {
  return (
	<div className={`${montserrat.variable}`}>
			<GuideCity  />
  	</div>
  );
}