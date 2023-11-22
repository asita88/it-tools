import { defineTool } from '../tool';

import BracketIcon from '~icons/mdi/code-brackets';

export const tool = defineTool({
  name: 'TOML 转换 JSON',
  path: '/toml-to-json',
  description: '将 TOML 转换为 JSON..',
  keywords: ['toml', 'json', 'convert', 'online', 'transform', 'parser'],
  component: () => import('./toml-to-json.vue'),
  icon: BracketIcon,
  createdAt: new Date('2023-06-23'),
});
