import { http } from '@app';
import type { AxiosResponse } from 'axios';

import type { GenerateLintDto, LinkEntity } from '../lib';

export const generateLinkApi = (generateLinkDto: GenerateLintDto): Promise<AxiosResponse<LinkEntity>> => {
    return http.post('/', generateLinkDto);
};
