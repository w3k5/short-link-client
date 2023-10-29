import { useMutation } from '@tanstack/react-query';

import { generateLinkApi } from '../api';
import type { GenerateLintDto } from '../lib';

export const useGenerateLink = () =>
    useMutation(async (generateLinkDto: GenerateLintDto) => {
        const response = await generateLinkApi(generateLinkDto);
        return response.data;
    });
