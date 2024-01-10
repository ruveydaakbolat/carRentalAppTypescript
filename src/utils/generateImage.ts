import { colors } from "../constants";
import { CarType } from "../types";

// temel url: https://cdn.imagin.studio/getimage?customer=hrjavascript-mastery

// araba bilgilerine göre url: https://cdn.imagin.studio/getimage?customer=hrjavascript-mastery&make=ford&modelFamily=focus

export const generateImage = (car: CarType, angle?: string): string => {
    const url: URL = new URL('https://cdn.imagin.studio/getimage');

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', car.make);
    url.searchParams.append('modelFamily', car.model.split('/')[0].split(' ')[0]);
    url.searchParams.append('coompType', "fullscreen");

    if (angle) {
        url.searchParams.append('angle', angle);
    }

    // rastgale bir renk seç
    const idx = Math.floor(Math.random() * colors.length);
    url.searchParams.append('paintId', colors[idx]);

    return url.href;
};
