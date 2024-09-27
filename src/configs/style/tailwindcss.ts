import type { OptionsOverrides, TypedFlatConfigItem } from '@/types'
import { pluginTailwindCSS } from '@/plugins'

export async function tailwindcss(
  options: OptionsOverrides = {},
): Promise<TypedFlatConfigItem[]> {
  const {
    overrides = {},
  } = options

  return [
    {
      name: 'xat/tailwindcss/setup',
      plugins: {
        tailwindcss: pluginTailwindCSS,
      },
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
    },
    {
      name: 'xat/tailwindcss/rules',
      rules: {
        'tailwindcss/classnames-order': 'warn',
        'tailwindcss/enforces-negative-arbitrary-values': 'warn',
        'tailwindcss/enforces-shorthand': 'warn',
        'tailwindcss/migration-from-tailwind-2': 'warn',
        'tailwindcss/no-arbitrary-value': 'off',
        'tailwindcss/no-custom-classname': 'warn',
        'tailwindcss/no-contradicting-classname': 'error',
        'tailwindcss/no-unnecessary-arbitrary-value': 'warn',

        ...overrides,
      },
    },
  ]
}
